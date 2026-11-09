/* Ladder Up: pull every scheduled IFSI class into the data.js `ce.courses` format.
   Run inside a browser tab that is open on https://www.fsi.illinois.edu/ (same origin, so no CORS issues):
     1. Paste this whole file into the page (it defines window.ifsiRefresh).
     2. await ifsiRefresh(knownGeo)   // knownGeo: {"CITY|ZIP":[lat,lng]} from the current IFSI rows' `gk`, `lat`, `lng`
        It returns {count, missingGeo:[...], courses:[...]} and also stores window.__ifsi = that result.
        Missing locations are geocoded with OpenStreetMap Nominatim (1 request per second). If the call times out,
        wait and read window.__ifsi when window.__ifsiDone is true.
   Source pages: https://www.fsi.illinois.edu/content/courses/schedule/schedule.cfm (calendarData.cfm feed and data.cfm getClass). */
window.ifsiRefresh = async function(knownGeo = {}){
  window.__ifsiDone = false;
  const pad = n => String(n).padStart(2,"0");
  const today = new Date(); const cut = new Date(today); cut.setDate(cut.getDate()-6); const CUTOFF = `${cut.getFullYear()}-${pad(cut.getMonth()+1)}-${pad(cut.getDate())}`; const TODAY = `${today.getFullYear()}-${pad(today.getMonth()+1)}-${pad(today.getDate())}`;
  const D = s => { try { return decodeURIComponent(s || "") } catch(e){ return s || "" } };
  const strip = s => D(s).replace(/<br\s*\/?>/gi," | ").replace(/<[^>]+>/g,"").replace(/\s+/g," ").trim();
  const M = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
  /* 1. Every class id on the calendar, month by month for the next 15 months */
  const ids = new Map();
  for(let i = -1; i < 15; i++){
    const s = new Date(today.getFullYear(), today.getMonth()+i, 1), e = new Date(today.getFullYear(), today.getMonth()+i+1, 1);
    const f = d => `${d.getFullYear()}-${pad(d.getMonth()+1)}-${pad(d.getDate())}`;
    const r = await (await fetch(`/content/courses/schedule/calendarData.cfm?program=*&location=ttt&start=${f(s)}&end=${f(e)}`)).json();
    for(const ev of r) if(ev.id && ev.id != 0) ids.set(String(ev.id), ev.title);
  }
  /* 2. Class details */
  const det = {}; const list = [...ids.keys()]; let k = 0;
  async function worker(){ while(k < list.length){ const id = list[k++];
    try { const r = await fetch("/content/courses/schedule/data.cfm", {method:"POST", headers:{"Content-Type":"application/x-www-form-urlencoded"}, body:"action=getClass&activity_id="+id}); det[id] = JSON.parse(await r.text()) } catch(e){} } }
  await Promise.all([worker(),worker(),worker(),worker()]);
  /* 3. Normalize */
  const iso = (m,d,y) => `20${y.padStart(2,"0")}-${m.padStart(2,"0")}-${d.padStart(2,"0")}`;
  const dt = s => new Date(s+"T12:00:00");
  const tm = t => { const [h,rest] = t.split(":"), mm = rest.slice(0,2), ap = rest.slice(2); if(h==="12" && mm==="00" && ap==="PM") return "noon"; return `${+h}${mm==="00"?"":":"+mm} ${ap==="AM"?"a.m.":"p.m."}` };
  const rng = (a,b) => { const A = dt(a), B = dt(b);
    if(a===b) return `${M[A.getMonth()]} ${A.getDate()}, ${A.getFullYear()}`;
    if(A.getFullYear()===B.getFullYear() && A.getMonth()===B.getMonth()) return `${M[A.getMonth()]} ${A.getDate()}–${B.getDate()}, ${A.getFullYear()}`;
    if(A.getFullYear()===B.getFullYear()) return `${M[A.getMonth()]} ${A.getDate()}–${M[B.getMonth()]} ${B.getDate()}, ${A.getFullYear()}`;
    return `${M[A.getMonth()]} ${A.getDate()}, ${A.getFullYear()}–${M[B.getMonth()]} ${B.getDate()}, ${B.getFullYear()}` };
  const label = seg => {
    const e = seg.map(x=>x.e).sort().pop();
    if(seg.length === 1){ const x = seg[0]; let L = rng(x.s, x.e); const t = `${tm(x.st)}–${tm(x.et)}`;
      if(x.s === x.e) L += ", " + t; else if((dt(x.e)-dt(x.s))/864e5 <= 6) L += `, ${t} daily`; return L }
    if(seg.length <= 4 && seg.every(x => x.s === x.e)){ const p = seg.map(x => `${M[dt(x.s).getMonth()]} ${dt(x.s).getDate()}`);
      return p.slice(0,-1).join(", ") + " and " + p[p.length-1] + ", " + dt(e).getFullYear() }
    return rng(seg[0].s, e) + ` (${seg.length} parts)` };
  const SMALL = new Set(["and","of","for","the","on","to","a","in","by","or"]);
  const UP = {fd:"FD",fpd:"FPD",vol:"Vol.",f:"F.",co:"Co.",inc:"Inc.",mabas:"MABAS",ifsi:"IFSI",ileas:"ILEAS",nfa:"NFA",ems:"EMS",nipsta:"NIPSTA",vfd:"VFD",cfd:"CFD",twp:"Twp.",st:"St."};
  const title = s => s.replace(/%20/g," ").split(/\s+/).filter(Boolean).map((w,i) => w.split("/").map(p => { const l = p.toLowerCase();
      if(UP[l]) return UP[l]; if(/^#?\d/.test(l)) return l; if(i && SMALL.has(l)) return l;
      return p.split("-").map(q => q.charAt(0).toUpperCase() + q.slice(1).toLowerCase()).join("-") }).join("/")).join(" ")
    .replace(/'S\b/g,"'s").replace(/\bHts\b/g,"Heights").replace(/^Mt /,"Mount ");
  const CAT = [["ff",/smoke divers/i],["hazmat",/hazard|pipeline|propane|petroleum|flammable liquid/i],["app",/apparatus|pump|driver|\bdrive\b|emergency vehicle oper|mobile water|hydrant/i],
    ["prev",/inspector|investigat|educator|firesetting|plans review|sprinkler|fire alarm/i],
    ["officer",/officer|instructor|leadership|\black\b|command|tactics|fireground management|attributes of leading|politics|incident safety/i],
    ["rescue",/extrication|vehicle rescue|rope rescue|trench|confined|collapse|elevator|agricultur|grain bin|large animal|responder intervention|\brit\b/i],
    ["water",/water rescue|ice rescue|dive|watercraft/i],
    ["ff",/firefight|ventilation|fire behavior|forcible|ropes and knots|truck|engine|light and fight|building construction|thermal|tools|respectful entry|residential building|vehicle fire|essentials|bof|fires on the farm|challenge exam|hybrid/i]];
  const cat = n => (CAT.find(([,r]) => r.test(n)) || ["other"])[0];
  const CERT = [[/^Fire Apparatus Engineer/,"Fire Apparatus Engineer"],[/Incident Safety Officer/,"Fire Department Incident Safety Officer"],[/^Instructor I$/,"Fire Service Instructor I"],
    [/^Instructor II$/,"Fire Service Instructor II"],[/^Instructor III/,"Fire Service Instructor III"],[/Fire Officer II\b/,"Advanced Fire Officer"],[/Company Fire Officer|Fire Officer I\b/,"Company Fire Officer"],
    [/^Fire Inspector$|^Fire Inspector I\b/,"Fire Inspector I"],[/^Fire Investigator$/,"Fire Investigator"],[/Fire and Life Safety Educator I$/,"Public Fire and Life Safety Educator I"],
    [/^Rope Rescue Awareness and Operations/,"Rope Operations"],[/^Rope Rescue Technician/,"Rope Technician"],[/^Trench Rescue Awareness/,"Trench Operations"],[/^Trench Rescue Technician/,"Trench Technician"],
    [/^Confined Space Rescue Awareness/,"Confined Space Operations"],[/^Confined Space Rescue Technician/,"Confined Space Technician"],[/^Structural Collapse Rescue Awareness/,"Structural Collapse Operations"],
    [/^Structural Collapse Rescue Technician/,"Structural Collapse Technician"],[/^Common Passenger Vehicle Rescue/,"Common Passenger Vehicle Rescue"],[/^Heavy Vehicle Rescue/,"Heavy Vehicle Rescue"],
    [/^Hazardous Materials Awareness and Operations/,"Hazardous Materials Operations"],[/^Hazardous Materials Technician/,"Hazardous Materials Technician"],
    [/Firefighter II \/ NFPA 1010/,"Advanced Technician Firefighter"],[/^Firefighter I \/ NFPA 1010/,"Basic Operations Firefighter"],[/Youth Firesetting/,"Youth Firesetter Intervention Specialist"],
    [/Fire Service Vehicle Operator/,"Fire Service Vehicle Operator"],[/Surface Water/,"Surface Water Operations"]];
  const cert = n => { const c = CERT.find(([r]) => r.test(n)); return c ? c[1] : null };
  const AKA = {app:"engineer driver pump",officer:"officer leadership",rescue:"technical rescue",hazmat:"hazmat",prev:"prevention",ff:"firefighter",water:"water rescue"};
  const groups = new Map();
  for(const id of list){ const r = det[id]; if(!r || r.responseCode != 1) continue;
    const seg = [...strip(r.dateString).matchAll(/(\d{1,2})\/(\d{1,2})\/(\d{2})\s+(\d{1,2}:\d{2}[AP]M)\s*-\s*(\d{1,2})\/(\d{1,2})\/(\d{2})\s+(\d{1,2}:\d{2}[AP]M)/g)]
      .map(m => ({s:iso(m[1],m[2],m[3]), st:m[4], e:iso(m[5],m[6],m[7]), et:m[8]})).sort((a,b) => a.s < b.s ? -1 : 1);
    if(!seg.length) continue; const end = seg.map(x=>x.e).sort().pop(); if(seg[0].s < CUTOFF) continue;   // skip classes that already started
    const name = strip(r.course_name), online = /online/i.test(name);
    const key = [r.course_id, r.host_dept, r.city, online].join("|");
    if(!groups.has(key)) groups.set(key, {r, name, online, ss:[], pin:false});
    const g = groups.get(key);
    const u = r.regAvailable == 1 ? `https://www.fsi.illinois.edu/content/courses/register/step1.cfm?activity=${r.activity_id}&session=${r.session_id}`
      : r.regAvailable == 3 ? `https://www.fsi.illinois.edu/content/courses/register/custom/#!/${r.activity_id}` : null;
    const st = strip(r.students), m = st.match(/^(\d+) seats available/);
    const sess = {s:seg[0].s, e:end, t:label(seg)}; if(u) sess.u = u;
    if(m) sess.seats = m[1] === "0" ? "Full" : `${m[1]} seat${m[1]==="1"?"":"s"} left`;
    g.ss.push(sess); if(r.require_pin_flag == 1) g.pin = true; g.phoneReg = r.regAvailable == 2;
  }
  /* 4. Geocode new locations */
  const geo = {...knownGeo}, missing = [];
  for(const g of groups.values()){ if(g.online) continue; const gk = D(g.r.city) + "|" + g.r.zip5; if(geo[gk] || missing.includes(gk)) continue; missing.push(gk) }
  for(const gk of missing){ const [ci, z] = gk.split("|");
    try { let j = await (await fetch(`https://nominatim.openstreetmap.org/search?format=json&limit=1&countrycodes=us&postalcode=${z}&city=${encodeURIComponent(ci)}&state=Illinois`)).json();
      if(!j.length) j = await (await fetch(`https://nominatim.openstreetmap.org/search?format=json&limit=1&countrycodes=us&postalcode=${z}`)).json();
      if(j.length) geo[gk] = [+(+j[0].lat).toFixed(4), +(+j[0].lon).toFixed(4)] } catch(e){}
    await new Promise(r => setTimeout(r, 1100)) }
  /* 5. Build rows */
  const used = new Set(), courses = [];
  for(const g of groups.values()){ const r = g.r;
    let n = g.name.replace(/\s*ONLINE\b/i,"").replace(" - Module C"," (Module C)").replace(/\s+/g," ").trim(); if(n === "DRIVE") n = "DRIVE (Driver Training)";
    const city = title(D(r.city)), host = /^ILLINOIS FIRE SERVICE INSTITUTE/i.test(r.host_dept) ? "IFSI" : title(strip(r.host_dept));
    const gk = D(r.city) + "|" + r.zip5, ll = g.online ? null : geo[gk];
    const cost = strip(r.theCost), ci = cost.match(/Instate:\s*\$([\d,.]+)/), co = cost.match(/Out-of-State:\s*\$([\d,.]+)/);
    const cin = ci ? +ci[1].replace(/,/g,"") : null, cout = co ? +co[1].replace(/,/g,"") : null, free = /tuition-free/i.test(cost);
    const money = v => "$" + Math.round(v).toLocaleString("en-US");
    const costNote = (free && cin === 0) ? "Tuition-free for members of Illinois fire departments (except Chicago FD)." + (cout ? ` Out of state: ${money(cout)}.` : "")
      : (cout && cout !== cin ? `Illinois rate. Out of state: ${money(cout)}.` : null);
    const ss = g.ss.sort((a,b) => a.s < b.s ? -1 : 1), notes = [];
    if(g.pin) notes.push("Online registration asks for your Fire Chief's PIN.");
    if(ss.every(s => s.seats === "Full")) notes.push("Full right now. Call to ask about a waitlist.");
    if(g.phoneReg) notes.push("Register by phone with the host department.");
    const c = cat(n), base = `ifsi-${r.course_id}-${city.toLowerCase().replace(/[^a-z]/g,"").slice(0,10)}${g.online?"-online":""}`;
    let id = base, i = 2; while(used.has(id)) id = base + (i++); used.add(id);
    courses.push({ id, cat:c, name:n, cert:cert(n), aka:"IFSI " + (AKA[c]||""), provider:"IFSI",
      location: g.online ? "Online" : (host === "IFSI" ? (/champaign/i.test(city) ? "IFSI campus, Champaign" : `IFSI class in ${city}`) : `${city} (hosted by ${host})`),
      address: g.online ? null : `${title(strip(r.addr1))}, ${city}, IL ${r.zip5}`, gk: g.online ? null : gk,
      lat: ll ? ll[0] : null, lng: ll ? ll[1] : null, cost: cin, costNote, length:null, sessions: ss, note: notes.join(" ") || null,
      register: (ss.find(s => s.u) || {}).u || `https://www.fsi.illinois.edu/content/courses/programs/description.cfm?course_id=${r.course_id}`,
      page: `https://www.fsi.illinois.edu/content/courses/programs/description.cfm?course_id=${r.course_id}`,
      contact: r.thePhone || null, checked: TODAY });
  }
  courses.sort((a,b) => a.sessions[0].s < b.sessions[0].s ? -1 : a.sessions[0].s > b.sessions[0].s ? 1 : a.name.localeCompare(b.name));
  window.__ifsi = { count: courses.length, classes: list.length, missingGeo: missing.filter(m => !geo[m]), courses };
  window.__ifsiDone = true;
  return { count: courses.length, classes: list.length, missingGeo: window.__ifsi.missingGeo };
};
