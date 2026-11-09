/* Ladder Up listings — Will County + SW suburbs pilot.
   Every row was checked against its source page on the date in `checked`.
   null means the source does not publish that value. */
window.LADDER_DATA = {
  updated: "2026-11-06",
  region: "Will County + southwest suburbs",
  /* Public sign-up form (Google Form). Leave "" to use the built-in waitlist. */
  signupForm: "https://docs.google.com/forms/d/e/1FAIpQLSdQe1j7_XIkkeYRCO91B2UxG5dtcokpOR0wqA_sxu9343R5eA/viewform",
  /* Google Form question IDs (entry.<id>) used to send dashboard sign-ups to the form */
  signupFields: { name: 480697194, email: 480831727, zip: 2036656934, stage: 1427098453 },

  /* apply: where a student starts an application (null = no online application right now; see applyNote)
     sponsor (academies): "open" = anyone can enroll, "sponsored" = must be on a fire department */
  programs: [
    { id:"sc-emt", apply:null, applyNote:"Applications for this class are full.", type:"emt", name:"EMT-Basic", provider:"Silver Cross Hospital EMS System", city:"New Lenox", lat:41.524, lng:-87.94,
      cost:2000, costNote:"Includes books and materials", length:"Oct 27, 2026 – May 4, 2027", schedule:"Tue & Thu, 5–9 PM",
      status:"full", statusNote:"Applications are full for this class.", reqs:"Not listed on the class page.",
      contact:"(815) 300-1100", url:"https://www.silvercross.org/silver-cross-ems-system/paramedic-and-emt-class/", checked:"2026-11-06" },
    { id:"sc-pm", apply:null, applyNote:"Applications for the 2027 class are full.", type:"medic", name:"Paramedic", provider:"Silver Cross Hospital EMS System", city:"New Lenox", lat:41.524, lng:-87.94,
      cost:null, costNote:"Tuition not published", length:"Jan 11, 2027 – Nov 10, 2027", schedule:"Mon, Wed, Fri, 9 AM–2 PM",
      status:"full", statusNote:"The 2027 class is full.", reqs:"Listed in the 2027 application packet.",
      contact:"jgray@silvercross.org", url:"https://www.silvercross.org/silver-cross-ems-system/paramedic-and-emt-class/", checked:"2026-11-06" },
    { id:"mv-emt", apply:"https://www.morainevalley.edu/admissions/apply-now/", applyNote:"Apply to Moraine Valley, then register for EMS-101", type:"emt", name:"EMT Certificate (EMS-101)", provider:"Moraine Valley Community College", city:"Palos Hills", lat:41.702, lng:-87.83,
      cost:1680, costOut:3710, costNote:"In-district tuition. All-in estimate up to $2,958 (out-of-district $6,668) with books, uniform, background check, drug test and CPR.",
      length:"One semester, 8 credit hours, 50 clinical hours", schedule:"See the semester course schedule",
      status:"open", statusNote:"Apply to the college, then register for the class.", reqs:"Age 18+, HS diploma, drug screen, background check, immunizations, lift 50 lb",
      contact:null, url:"https://www.morainevalley.edu/program/emergency-medical-technician/", checked:"2026-11-06" },
    { id:"mv-pm", apply:"https://www.morainevalley.edu/admissions/apply-now/", applyNote:"Apply to Moraine Valley, then follow the paramedic admission steps", type:"medic", name:"Paramedic Certificate / EMS A.A.S.", provider:"Moraine Valley Community College", city:"Palos Hills", lat:41.702, lng:-87.83,
      cost:null, costNote:"Charged per credit hour. The paramedic certificate is 40 credit hours.", length:"The A.A.S. takes about two years", schedule:"See catalog",
      status:"open", statusNote:"CAAHEP-accredited paramedic program.", reqs:"EMS-101 (EMT) first",
      contact:null, url:"https://www.morainevalley.edu/program/emergency-medical-services/", checked:"2026-11-06" },
    { id:"psc-emt", apply:"https://www.prairiestate.edu/apply-and-aid/admissions/default.html", applyNote:"Apply to Prairie State, then register for EMS 101.", type:"emt", name:"EMT Certificate (EMS 101)", provider:"Prairie State College", city:"Chicago Heights", lat:41.505, lng:-87.64,
      cost:null, costNote:"7 credit hours at the college's tuition rate", length:"One course, 7 credits", schedule:"See course schedule",
      status:"open", statusNote:"Credit course.", reqs:"Must be 18 or older to take the licensure exam.",
      contact:"(708) 709-2941", url:"https://www.prairiestate.edu/academics/public-service-and-education/emt.html", checked:"2026-11-06" },
    { id:"psc-pm", apply:"https://www.prairiestate.edu/apply-and-aid/admissions/default.html", applyNote:"Apply to Prairie State. The program runs with Region VII hospitals.", type:"medic", name:"Paramedic Certificate", provider:"Prairie State College + Region VII EMS", city:"Chicago Heights", lat:41.505, lng:-87.64,
      cost:5952, costNote:"Published total cost if finished on schedule.", length:"18 months, 31 credits", schedule:"See program page",
      status:"open", statusNote:"Run with Region VII resource hospitals.", reqs:"HS diploma, age 18+",
      contact:"(708) 709-2941", url:"https://www.prairiestate.edu/academics/public-service-and-education/paramedic.html", checked:"2026-11-06" },
    { id:"ssc-emt", apply:null, applyNote:"Apply through South Suburban College admissions, or call (708) 596-2000 ext. 2258.", type:"emt", name:"EMT-Basic Certificate", provider:"South Suburban College", city:"South Holland", lat:41.6, lng:-87.62,
      cost:null, costNote:"Not eligible for financial aid, but grants may be available.", length:"One fast-paced course plus 48 clinical hours", schedule:"Starts in spring, summer or fall",
      status:"open", statusNote:"Credit course.", reqs:"Age 18+, HS diploma, placement into RDG 082 / ENG 098, health insurance, immunizations",
      contact:"(708) 596-2000 ext. 2258", url:"https://www.ssc.edu/academics/programs-of-study/allied-health-careers/emergency-medical-technician/", checked:"2026-11-06" },
    { id:"ssc-pm", apply:null, applyNote:"Admission goes through a sponsoring south Cook County EMS agency. Call (708) 915-6900.", type:"medic", name:"EMS Paramedic A.A.S. / Advanced Certificate", provider:"South Suburban College + Ingalls (Region VII)", city:"South Holland", lat:41.6, lng:-87.62,
      cost:null, costNote:"Tuition not published on program page", length:"See program page", schedule:"See program page",
      status:"open", statusNote:"Admission goes through a sponsoring south Cook County EMS agency.", reqs:"Illinois EMT-B license, age 18+, 6 months' experience preferred",
      contact:"(708) 915-6900", url:"https://www.ssc.edu/academics/programs-of-study/allied-health-careers/emergency-medical-services/", checked:"2026-11-06" },
    { id:"jjc-emt", apply:null, applyNote:"Call JJC EMS at (815) 280-2356.", type:"emt", name:"EMT-Basic (EMS 201 / 209)", provider:"Joliet Junior College", city:"Joliet", lat:41.505, lng:-88.18,
      cost:null, costNote:"Not listed on JJC's EMS page", length:"4.5 months, spring and fall", schedule:"Mon, Wed, Fri: 8:30 AM–noon, 1–4:30 PM or 6–9:30 PM",
      status:"check", statusNote:"JJC's EMS page looks out of date. Confirm current dates and cost.", reqs:"Age 18+, HS diploma/GED, EMS 101 (First Responder), BLS CPR card, placement into English, background check, physical with drug screen",
      contact:"cdeboer@jjc.edu · (815) 280-2356", url:"https://jjc.edu/choose-your-path/health-public-safety-human-services/emergency-medical-services", checked:"2026-11-06" },
    { id:"jjc-pm", apply:null, applyNote:"Applications open each May. Call JJC EMS at (815) 280-2356.", type:"medic", name:"Paramedic (with Morris Hospital)", provider:"Joliet Junior College + Morris Hospital", city:"Joliet", lat:41.505, lng:-88.18,
      cost:null, costNote:"Not listed on JJC's EMS page", length:"About 12 months, starts each August", schedule:"See program page",
      status:"check", statusNote:"Applications open each May. Confirm the 2027 cohort.", reqs:"Illinois EMT-B license",
      contact:"cdeboer@jjc.edu · (815) 280-2356", url:"https://jjc.edu/choose-your-path/health-public-safety-human-services/emergency-medical-services", checked:"2026-11-06" },
    { id:"jjc-fire", apply:null, applyNote:"Call JJC at (815) 280-2356.", type:"academy", sponsor:null, name:"JJC Fire Academy (Basic Operations Firefighter)", provider:"Joliet Junior College", city:"Joliet", lat:41.505, lng:-88.18,
      cost:null, costNote:"Not yet verified. Check with JJC.", length:"Not yet verified", schedule:"Not yet verified",
      status:"check", statusNote:"JJC recently launched this academy. Details not yet verified by Ladder Up.", reqs:"Not yet verified",
      contact:"(815) 280-2356", url:"https://jjc.edu/choose-your-path/health-public-safety-human-services/fire-science/basic-operations-firefighter", checked:"2026-11-06" },
    { id:"rfa-emt", apply:"https://romeoville.org/FormCenter/Fire-Academy-13/Fire-Classes-Online-Registration-Fire-Ac-370", applyNote:"Use the online registration form. Self-pay students register by phone at (815) 372-4042.", type:"emt", name:"EMT-Basic", provider:"Romeoville Fire Academy", city:"Romeoville", lat:41.655, lng:-88.1,
      cost:null, costNote:"Not listed on the registration form. Call the academy.", length:"About 5 months", schedule:"2027 classes: Jan 4–Jun 7 and Jun 14–Nov 17",
      status:"open", statusNote:"Self-pay students register by phone.", reqs:"Not listed. Ask the academy.",
      contact:"(815) 372-4042", url:"https://romeoville.org/562/Fire-Rescue-Courses", checked:"2026-11-06" },
    { id:"rfa-bof", apply:"https://romeoville.org/FormCenter/Fire-Academy-13/Fire-Classes-Online-Registration-Fire-Ac-370", applyNote:"Use the online registration form. Self-pay students register by phone at (815) 372-4042.", type:"academy", sponsor:"open", name:"Basic Operations Firefighter Academy", provider:"Romeoville Fire Academy", city:"Romeoville", lat:41.655, lng:-88.1,
      cost:4200, costNote:"Published course price", length:"Full-time: about 9 weeks. Part-time: about 5 months", schedule:"Full-time: Mon–Fri, 8 AM–5 PM. Part-time: Mon and Thu 6–10 PM plus Sat 8 AM–5 PM (at Tinley Park FD), or Tue and Thu 6–10 PM plus Sat 8 AM–5 PM",
      status:"open", statusNote:"2027 sessions start Jan 4, Jan 23 (part-time), Feb 22, Apr 12, Jul 10 (part-time), Aug 2 and Oct 11.", reqs:"Not listed on the course page. Ask the academy.",
      contact:"(815) 372-4042", url:"https://romeoville.org/697/Basic-Operations-Firefighter-Academy", checked:"2026-11-06" },
    { id:"mv-fire", costEst:true, apply:"https://www.morainevalley.edu/admissions/apply-now/", applyNote:"Apply to Moraine Valley, then turn in the Fire Academy application at office B-150 by noon on Jan 11, 2027.", type:"academy", sponsor:"open", name:"Fire Academy Certificate", provider:"Moraine Valley Community College", city:"Palos Hills", lat:41.702, lng:-87.83,
      cost:3696, costOut:8162, costNote:"Ladder Up estimate: 22 credit hours at $168 each in-district ($371 out-of-district). Books and fees are extra.", length:"10 weeks full-time, then an internship the next semester (16+ hours a week)", schedule:"Mon–Fri, 7:30 AM–4:30 PM. Spring (Feb–May) and fall (Aug–Nov)",
      status:"open", statusNote:"Spring 2027 applications are due by noon on Jan 11, 2027.", reqs:"EMT or Paramedic license (or a passed NREMT), 2.0 GPA, and placement into MTH-095 and COM-101. Paramedics are ranked first, then EMTs; district residents come first in each group.",
      contact:"(708) 974-4300", url:"https://www.morainevalley.edu/program/fire-academy-certifiate/", checked:"2026-11-06" },
    { id:"cod-fire", apply:"https://cod.elluciancrmrecruit.com/Apply/", applyNote:"Apply to College of DuPage for credit classes.", type:"academy", sponsor:"open", name:"Basic Operations Fire Academy", provider:"College of DuPage", city:"Glen Ellyn", lat:41.84, lng:-88.07,
      cost:null, costNote:"Charged per credit hour. Part of the 24-credit Fire Fighter Certificate.", length:"16-week semester, 3 modules", schedule:"Fall and spring semesters",
      status:"open", statusNote:"Open to students who aren't on a fire department.", reqs:"Not listed. See the program page.",
      contact:"baudekb@cod.edu · (630) 942-2107", url:"https://cod.edu/academics/areas/fire/index.html", checked:"2026-11-06" },
    { id:"psc-fire", apply:"https://www.prairiestate.edu/apply-and-aid/admissions/default.html", applyNote:"Show proof of fire department affiliation, then apply to Prairie State.", type:"academy", sponsor:"sponsored", name:"Basic Firefighter Operations Certificate", provider:"Prairie State College", city:"Chicago Heights", lat:41.505, lng:-87.64,
      cost:null, costNote:"10 credit hours at the college's tuition rate", length:"2 courses, 10 credits", schedule:"See program page",
      status:"open", statusNote:"Fire department members only.", reqs:"Current affiliation with a fire department",
      contact:"samccain@prairiestate.edu", url:"https://www.prairiestate.edu/academics/public-service-and-education/basic-firefighter-operations.html", checked:"2026-11-06" },
    { id:"triton-fire", apply:"https://www.triton.edu/apply", applyNote:"Apply to Triton College.", type:"academy", sponsor:"sponsored", name:"Basic Operations Firefighter Certificate", provider:"Triton College", city:"River Grove", lat:41.92, lng:-87.84,
      cost:null, costNote:"14 credit hours at the college's tuition rate", length:"Two semesters (fall + spring), 14 credits", schedule:"See catalog",
      status:"open", statusNote:"State certification requires being on a fire department's roster.", reqs:"Placement testing and a C or better in each FIR course.",
      contact:"williamjustiz@triton.edu", url:"https://triton.smartcatalogiq.com/en/2026-2027/triton-college-catalog/applied-science-programs/fire-science/basic-operations-firefighter-certificate", checked:"2026-11-06" },
    { id:"nipsta-bof", apply:"https://secure.rec1.com/IL/nipsta-il/catalog", applyNote:"Your department registers you.", type:"academy", sponsor:"sponsored", name:"Basic Operations Firefighter Academy (320 Hours)", provider:"NIPSTA", city:"Glenview", lat:42.08, lng:-87.82,
      cost:null, costNote:"Billed to the sponsoring department", length:"9 weeks, 320 hours", schedule:"Mon–Fri, 8 AM–5:30 PM",
      status:"open", statusNote:"2027 sessions: Jan 18–Mar 19 and Apr 5–Jun 4.", reqs:"Must be employed or engaged by a fire department. No independent students.",
      contact:"fireacademy@nipsta.org · (847) 998-8090", url:"https://www.nipsta.org/177/Basic-Firefighter-Academy", checked:"2026-11-06" },
    { id:"harper-bof", apply:"https://www.harpercollege.edu/apply/", applyNote:"Apply to Harper, then meet the academy admission requirements.", type:"academy", sponsor:"open", name:"Basic Operations Firefighter Academy", provider:"Harper College", city:"Palatine", lat:42.08, lng:-88.07,
      cost:null, costNote:"Charged per credit hour (FIS 110, 111, 112 and 132).", length:"9 weeks", schedule:"Limited-enrollment cohorts",
      status:"open", statusNote:"Open to sponsored and pre-employment students.", reqs:"Sponsored students: on a department roster. Others: CPAT card, CPR card and medical clearance.",
      contact:null, url:"https://www.harpercollege.edu/academics/public-service/fire-science/basic-operations-firefighter-certificate.php", checked:"2026-11-06" },
    { id:"ecc-bof", apply:"https://elgin.edu/admissions/apply/", applyNote:"Apply to ECC. Sponsored students also turn in the BOF Sponsorship Form.", type:"academy", sponsor:"open", name:"Basic Operations Firefighter", provider:"Elgin Community College", city:"Burlington", lat:42.05, lng:-88.55,
      cost:null, costNote:"Use ECC's online tuition calculator.", length:"See program page", schedule:"See program page",
      status:"open", statusNote:"Approved by the Office of the State Fire Marshal.", reqs:"Illinois driver's license, background check, drug test, physical, and NFPA-compliant gear and SCBA.",
      contact:"rtwobulls@elgin.edu", url:"https://elgin.edu/areas-of-study/basic-operations-firefighter/", checked:"2026-11-06" },
    { id:"ifsi-bof", apply:"https://www.fsi.illinois.edu/academy/enrollment.cfm", applyNote:"Your department enrolls you (Chief's PIN required).", type:"academy", sponsor:"sponsored", name:"Firefighter Academy (7-Week Residential)", provider:"Illinois Fire Service Institute", city:"Champaign", lat:40.09, lng:-88.24,
      cost:null, costNote:"Tuition covers 13 courses, a helmet, textbooks and certification fees. Ask your department for the cost.", length:"7 weeks", schedule:"Residential academy",
      status:"open", statusNote:"Your Fire Chief must approve enrollment.", reqs:"Department sponsorship and OSFM number",
      contact:null, url:"https://www.fsi.illinois.edu/academy/enrollment.cfm", checked:"2026-11-06" }
  ],

  /* Departments. status: open | rolling | closed | unknown.
     lastTest: most recent full-time entry-level testing round found. nextTest: a date the department announced.
     The page projects the next round two years after lastTest when nothing is announced. */
  /* about: union, timeOff (shift schedule and time off), area, residents (population served), staff; null = not published. sources = pages read. */
  /* runs: stations and total calls (runs) per year from "Chicagoland FD Run Totals" by Tyler Tobolt; null = not reported. */
  runsSource: { name:"Chicagoland FD Run Totals (compiled by Tyler Tobolt)", url:"https://docs.google.com/spreadsheets/d/e/2PACX-1vSAXia7gzf0Lx-i_lCwaV7E0cekB0kMJ6IZWOZwPhRKvDwYBy0iQ9gCwF-eflcDCi2Ge_mqFgjlovDw/pubhtml" },
  departments: [
    { id:"lockport", name:"Lockport Township FPD", city:"Lockport", lat:41.585, lng:-88.11, address:"19623 W. Renwick Rd, Lockport", site:"https://www.lockportfire.org", jobs:null, runs:{stations:6, calls:{"2023":11532, "2024":11450, "2025":11611}}, about:{"union": "IAFF Local 1544", "timeOff": null, "area": "Lockport, Crest Hill, parts of Romeoville and New Lenox, and nearby unincorporated areas.", "residents": "About 85,000 (district job posting, 2025).", "staff": null, "sources": ["https://www.lockportfire.org/iaff-local-1544", "https://www.lockportfire.org/fire-stations", "https://www.lockportfire.org", "https://theblueline.com/findAJob/view/26074"], "checked": "2026-11-09"}, status:"closed", lastTest:{"date": "2023-03-01", "label": "Applications closed Mar 1, and the written exam was Mar 12.", "source": "https://www.lockportfire.org/post/we-re-hiring"}, note:"Not accepting applications right now." },
    { id:"homer", name:"Homer Township FPD", city:"Homer Glen / Lockport", lat:41.605, lng:-87.99, address:"16050 S. Cedar Rd, Lockport", site:"https://www.homerfire.org", jobs:"https://www.publicsafetytesting.com/career-path/positions/firefighter?preselected_position=1305", runs:{stations:3, calls:{"2023":2056, "2024":2123, "2025":null}}, about:{"union": "Homer Township Professional Firefighters Local 4223", "timeOff": "24-hour shifts on three rotations (Gold, Red and Black), each led by a Battalion Chief.", "area": null, "residents": null, "staff": "32 full-time Firefighter/Paramedics, plus a Fire Chief, Deputy Chief and 3 Battalion Chiefs.", "sources": ["https://homerfire.specialdistrict.org/district-overview", "https://homerfire.specialdistrict.org/frequently-asked-questions", "https://homerglenil.org/DocumentCenter/View/2790/2017-Homer-Twnshp-Fire-District-Annual-Report"], "checked": "2026-11-09"}, status:"rolling", lastTest:{"date": "2026-06-26", "label": "Applications closed Jun 26. The hiring list was posted Aug 3.", "source": "https://www.homerfire.org/fire-fighter-eligibility-list"}, note:"The agency pays the test fee through Public Safety Testing." },
    { id:"newlenox", name:"New Lenox FPD", city:"New Lenox", lat:41.51, lng:-87.97, address:null, site:null, jobs:"https://www.publicsafetytesting.com/career-path/positions/firefighter?preselected_position=1345", runs:{stations:4, calls:{"2023":5185, "2024":5611, "2025":6050}}, about:{"union": null, "timeOff": null, "area": "About 36 square miles in and around New Lenox.", "residents": "More than 50,000 (2025).", "staff": "59 on payroll, 56 of them full-time (2018).", "sources": ["https://patch.com/illinois/newlenox/new-lenox-fire-referendum-10-things-know", "https://senatorhastings.com/news/11-latest-news/444-hastings-meets-with-new-lenox-fire-protection-district-on-recruitment-and-emergency-response-needs"], "checked": "2026-11-09"}, status:"open", note:"Testing deadline: Dec 4, 2026." },
    { id:"frankfort", name:"Frankfort FPD", city:"Frankfort", lat:41.497, lng:-87.855, address:"333 W. Nebraska, Frankfort", site:"https://www.frankfortfire.org", jobs:null, runs:{stations:5, calls:{"2023":5587, "2024":5608, "2025":5846}}, about:{"union": "Frankfort Firefighters Local 4338 (2017 source)", "timeOff": null, "area": "About 42 square miles: Frankfort, Frankfort Square, Green Garden and parts of Mokena.", "residents": "About 43,000.", "staff": "70 members.", "sources": ["https://www.frankfortfire.org/new-page-2", "https://fwrnews.com/2026/06/12/this-is-a-community-fire-district-frankfort-fire-opens-its-doors-to-residents/", "https://patch.com/illinois/frankfort/union-asks-frankfort-fire-trustee-resign"], "checked": "2026-11-09"}, status:"closed", lastTest:{"date": "2025-10-03", "label": "Applications closed Oct 3. The hiring list runs through 2027.", "source": "https://www.frankfortfire.org/employment"}, note:"Tests through National Testing Network." },
    { id:"mokena", name:"Mokena FPD", city:"Mokena", lat:41.53, lng:-87.87, address:"19853 S. Wolf Rd, Mokena", site:"https://www.mokenafire.org", jobs:null, runs:{stations:3, calls:{"2023":3042, "2024":3164, "2025":3270}}, about:{"union": null, "timeOff": null, "area": "12.5 square miles: parts of Mokena, Frankfort, Homer Glen and Orland Park.", "residents": "About 20,500.", "staff": "37 members (line and administrative).", "sources": ["https://www.mokenafire.org"], "checked": "2026-11-09"}, status:"closed", lastTest:{"date": "2026-05-29", "label": "Applications closed May 29.", "source": "https://nationaltestingnetwork.com/publicsafetyjobs/fullJobDetails.cfm?agentid=1708&jobid=2&agencyjobid=3384"}, note:"Tests through National Testing Network." },
    { id:"manhattan", name:"Manhattan FPD (Incl. Former Peotone FPD)", city:"Manhattan / Peotone", lat:41.42, lng:-87.99, address:null, site:"https://manhattanfire.org", jobs:"https://manhattanfire.org/employment/", runs:{stations:3, calls:{"2023":2293, "2024":2734, "2025":2733}}, about:{"union": "IAFF Local 4991", "timeOff": "Crews work 12- and 24-hour shifts.", "area": "About 145 square miles: Manhattan, Peotone and Manhattan, Jackson, Peotone, Will, Green Garden and Wilton Townships.", "residents": null, "staff": "28 full-time Firefighter/Paramedics and 25 part-time firefighters.", "sources": ["https://manhattanfire.org/", "https://manhattanfire.org/district-info/", "https://manhattanfire.org/faqs/"], "checked": "2026-11-09"}, status:"closed", lastTest:{"date": "2025-07-15", "label": "Applications closed Jul 15, and the written exam was Aug 6.", "source": "https://manhattanfire.org/news/manhattan-fire-protection-district-accepting-applications/"}, note:"Peotone FPD consolidated into Manhattan FPD after the November 2022 referendum. Also tested in 2023." },
    { id:"plainfield", name:"Plainfield FPD", city:"Plainfield", lat:41.63, lng:-88.2, address:"23748 W. 135th St, Plainfield", site:"https://www.plainfieldfpd.org", jobs:"https://www.plainfieldfpd.org/fire-fighter-paramedic-employment", runs:{stations:4, calls:{"2023":5635, "2024":5680, "2025":6281}}, about:{"union": "Plainfield Firefighters Local 4560", "timeOff": "24 on, 48 off, with 9 Kelly days a year. Vacation starts at 5 days after one year and reaches 15 days at 20 years, plus 96 holiday hours a year and 12 sick hours a month (contract through 2027).", "area": "54 square miles: the Plainfield area and unincorporated parts of Will and Kendall Counties.", "residents": "About 60,000.", "staff": null, "sources": ["https://www.plainfieldfpd.org/fire-fighter-paramedic-employment", "https://www.plainfieldfpd.org/general-faq"], "checked": "2026-11-09"}, status:"closed", lastTest:{"date": "2026-07-31", "label": "The testing deadline was Jul 31. The hiring list was approved Oct 14.", "source": "https://www.plainfieldfpd.org/fire-fighter-paramedic-employment"}, note:"Plans to hire 5 in early 2027. Starting pay is $75,296.79, rising to $109,657.47 by year 7." },
    { id:"bolingbrook", name:"Bolingbrook Fire Department", city:"Bolingbrook", lat:41.7, lng:-88.07, address:null, site:"https://www.bolingbrook.com/fire", jobs:null, runs:{stations:5, calls:{"2023":8826, "2024":9347, "2025":9323}}, about:{"union": null, "timeOff": null, "area": "The Village of Bolingbrook.", "residents": "73,922 in the Village of Bolingbrook (2020 Census).", "staff": "94 full-time sworn personnel (Jan 2025).", "sources": ["https://www.bolingbrook.gov/fire_history", "https://en.wikipedia.org/wiki/Bolingbrook,_Illinois"], "checked": "2026-11-09"}, status:"closed", lastTest:{"date": "2025-08-31", "label": "Applications were open Jul 14 to Aug 31. The hiring list is good for two years.", "source": "https://nationaltestingnetwork.com/publicsafetyjobs/fullJobDetails.cfm?agentid=1635&jobid=2&agencyjobid=3179"}, note:"Tests through National Testing Network." },
    { id:"romeoville", name:"Romeoville Fire Department", city:"Romeoville", lat:41.64, lng:-88.09, address:null, site:null, jobs:"https://www.romeoville.org/135/Employment-Opportunities", runs:{stations:3, calls:{"2023":3903, "2024":4039, "2025":4326}}, about:{"union": null, "timeOff": "A Kelly day every 14th shift, plus comp time. New hires start with 106 hours of vacation a year (up to 336), 132 hours of sick time and up to 48 hours of personal time.", "area": "The Village of Romeoville.", "residents": "39,863 in the Village of Romeoville (2020 Census).", "staff": null, "sources": ["https://www.romeoville.org/1470/Career-Opportunities---Fire-Department", "https://en.wikipedia.org/wiki/Romeoville,_Illinois"], "checked": "2026-11-09"}, status:"closed", lastTest:{"date": "2026-06-15", "label": "Applications closed Jun 15, and the written exam was Jun 18.", "source": "https://www.theblueline.com/findAJob/view/36770"}, note:"Fire department: (815) 886-7227." },
    { id:"lemont", name:"Lemont FPD", city:"Lemont", lat:41.67, lng:-87.99, address:null, site:"https://www.lemontfire.com", jobs:"https://www.lemontfire.com/employment-opportunities/", runs:{stations:4, calls:{"2023":4323, "2024":4324, "2025":4124}}, about:{"union": null, "timeOff": "24-hour shifts on three rotations (Black, Red and Gold).", "area": "26.4 square miles: Lemont, Lemont Township and parts of Darien, Palos Park and Woodridge.", "residents": "About 32,000.", "staff": "54 sworn firefighters and officers, plus 10 civilian staff (2025).", "sources": ["https://www.lemontfire.com/wp-content/uploads/pdf/2025-LFPD-annual-report-FINAL.pdf"], "checked": "2026-11-09"}, status:"closed", lastTest:{"date": "2026-08-28", "label": "Applications closed Aug 28.", "source": "https://www.lemontfire.com/employment-opportunities/"}, note:"No positions open right now." },
    { id:"eastjoliet", name:"East Joliet FPD", city:"Joliet", lat:41.52, lng:-88.05, address:null, site:"https://ejfpd.specialdistrict.org", jobs:"https://www.publicsafetytesting.com/career-path/positions/firefighter?preselected_position=1315", runs:{stations:2, calls:{"2023":2270, "2024":2490, "2025":2484}}, about:{"union": "IAFF Local 3775", "timeOff": null, "area": "Unincorporated Joliet Township around the City of Joliet.", "residents": "About 18,000 (district job posting, 2025).", "staff": "The district's website lists 8 full-time and 17 part-time or paid-on-call members.", "sources": ["https://ejfpd.specialdistrict.org/east-joliet-firefighters-local-3775", "https://ejfpd.specialdistrict.org/full-time-564c71f", "https://ejfpd.specialdistrict.org/part-time-paid-on-call", "https://ejfpd.specialdistrict.org/history", "https://theblueline.com/findAJob/view/30218"], "checked": "2026-11-09"}, status:"rolling", note:"The agency pays the test fee. Eligibility list set every two years." },
    { id:"joliet", name:"Joliet Fire Department", city:"Joliet", lat:41.525, lng:-88.08, address:null, site:"https://fire.joliet.gov/Home", jobs:"https://www.joliet.gov/government/departments/fire-department/about-us/recruitment", runs:{stations:9, calls:{"2023":23082, "2024":23909, "2025":24084}}, about:{"union": "Union department (local number not listed on its website)", "timeOff": "Three rotating 24-hour shifts (A, B and C).", "area": "65 square miles (City of Joliet).", "residents": "150,489 (2023 Census estimate).", "staff": "223 sworn and 4 civilian personnel.", "sources": ["https://fire.joliet.gov/About-Us", "https://fire.joliet.gov/files/sharedassets/fire/v/1/documents/2025-annual-report.pdf"], "checked": "2026-11-09"}, status:"closed", lastTest:null, nextTest:{"date": "2027-09-01", "label": "Fall 2027", "basis": "announced", "source": "https://www.joliet.gov/government/departments/fire-department/about-us/recruitment"}, note:"The current hiring list expires Mar 18, 2028." },
    { id:"orland", name:"Orland FPD", city:"Orland Park", lat:41.61, lng:-87.87, address:"9790 W. 151st St, Orland Park", site:"https://www.orlandfire.org", jobs:"https://www.orlandfire.org/firefighter-testing", runs:{stations:6, calls:{"2023":12739, "2024":12422, "2025":12916}}, about:{"union": "IAFF Local 2754", "timeOff": null, "area": "33 square miles: Orland Park, Orland Hills and unincorporated Orland Township.", "residents": "About 75,000.", "staff": "More than 111 suppression personnel and 50 support staff.", "sources": ["https://www.orlandfire.org/district-unions", "https://www.orlandfire.org/ofpd-history"], "checked": "2026-11-09"}, status:"closed", lastTest:{"date": "2025-10-20", "label": "Applications closed Oct 20.", "source": "https://www.orlandfire.org/firefighter-testing"}, nextTest:{"date": "2028-02-01", "label": "February 2028", "basis": "announced", "source": "https://www.orlandfire.org/firefighter-testing"}, note:"Last posted starting pay: $80,947." },
    { id:"tinley", name:"Tinley Park Fire Department", city:"Tinley Park", lat:41.575, lng:-87.79, address:"17355 S. 68th Ct, Tinley Park", site:"https://www.tinleypark.org/fire", jobs:"https://www.tinleypark.org/government/departments/human_resources/employment_opportunities.php", runs:{stations:4, calls:{"2023":null, "2024":11166, "2025":12610}}, about:{"union": null, "timeOff": null, "area": "The Village of Tinley Park.", "residents": "55,971 in the Village of Tinley Park (2020 Census).", "staff": "More than 125 personnel, with 15 on duty each shift. Ambulance transport is contracted to Kurtz Ambulance Service.", "sources": ["https://www.tinleypark.org/government/departments/fire_department/index.php", "https://en.wikipedia.org/wiki/Tinley_Park,_Illinois"], "checked": "2026-11-09"}, status:"unknown", note:"" },
    { id:"palosheights", name:"Palos Heights FPD", city:"Palos Heights", lat:41.67, lng:-87.8, address:null, site:null, jobs:"https://www.applytoserve.com/Application.aspx?ID=817", runs:{stations:2, calls:{"2023":2488, "2024":2713, "2025":2745}}, about:{"union": null, "timeOff": "7 shift days of paid time off the first year, up to 26 days at full seniority.", "area": "Palos Heights.", "residents": "11,819.", "staff": "21 sworn personnel.", "sources": ["https://www.applytoserve.com/Application.aspx?ID=817"], "checked": "2026-11-09"}, status:"open", note:"Application deadline: Nov 20, 2026, 4 PM." },
    { id:"northpalos", name:"North Palos FPD", city:"Palos Hills", lat:41.7, lng:-87.82, address:null, site:null, jobs:"https://www.publicsafetytesting.com/career-path/positions/firefighter?preselected_position=1285", runs:{stations:3, calls:{"2023":6123, "2024":6636, "2025":6891}}, about:{"union": "IAFF Local 4323", "timeOff": "14 paid days off a year. Each shift staffs 4 members per station plus a Battalion Chief.", "area": "14 square miles: Palos Hills, Worth, and parts of Hickory Hills and Palos Heights.", "residents": "About 30,000.", "staff": "35 full-time staff, including 27 Lieutenants, Engineers and Firefighter/Paramedics.", "sources": ["https://northpalosfpd.org/", "https://www.publicsafetytesting.com/departments/north-palos-FPD/NPFPD-FFPM"], "checked": "2026-11-09"}, status:"rolling", note:"The agency pays the test fee through Public Safety Testing." },
    { id:"manteno", name:"Manteno Community FPD", city:"Manteno", lat:41.25, lng:-87.83, address:null, site:null, jobs:"https://www.applytoserve.com/Application.aspx?ID=826", runs:{stations:2, calls:{"2023":null, "2024":3454, "2025":3452}}, about:{"union": null, "timeOff": null, "area": "The Manteno area.", "residents": "About 12,500 (2015).", "staff": "25 sworn members.", "sources": ["https://www.theblueline.com/findAJob/view/32524", "https://robinkelly.house.gov/media-center/press-releases/federal-grant-boost-manteno-fire-district-staff"], "checked": "2026-11-09"}, status:"open", note:"Open until filled." },
    { id:"troy", name:"Troy FPD", city:"Shorewood", lat:41.52, lng:-88.2, address:null, site:null, jobs:null, runs:{stations:2, calls:{"2023":3554, "2024":3771, "2025":3534}}, about:{"union": null, "timeOff": null, "area": "18 square miles: Shorewood and Troy Township (2022).", "residents": "About 28,000 (2022).", "staff": "36 full-time employees and 20 part-time positions (2022).", "sources": ["https://www.shawlocal.com/the-herald-news/news/2022/06/01/troy-voters-face-4-million-question"], "checked": "2026-11-09"}, status:"closed", lastTest:{"date": "2024-10-09", "label": "Applications closed Oct 9, and the written exam was the week of Nov 4.", "source": "https://theblueline.com/findAJob/view/24754"}, note:"Website not yet verified." },
    { id:"channahon", name:"Channahon FPD", city:"Channahon", lat:41.43, lng:-88.22, address:null, site:null, jobs:null, runs:{stations:2, calls:{"2023":1672, "2024":1971, "2025":1985}}, about:{"union": null, "timeOff": null, "area": null, "residents": "13,383 in the Village of Channahon (2020 Census).", "staff": null, "sources": ["https://en.wikipedia.org/wiki/Channahon,_Illinois"], "checked": "2026-11-09"}, status:"closed", lastTest:{"date": "2025-04-18", "label": "Applications closed Apr 18, and the written exam was May 14.", "source": "https://iosolutions.com/product/channahon-il-firefighter-paramedic-job-application-2/"}, note:"Tests through I/O Solutions." },
    { id:"crete", name:"Crete Township FPD", city:"Crete", lat:41.44, lng:-87.63, address:null, site:"https://cretetwpfire.com", jobs:"https://cretetwpfire.com/careers/", runs:{stations:3, calls:{"2023":1533, "2024":1523, "2025":1715}}, about:{"union": null, "timeOff": null, "area": "30 square miles in northeastern Will County.", "residents": "Just under 10,000.", "staff": "5 full-time contract members, 18 part-time members and 12 paid-on-call members.", "sources": ["https://cretetwpfire.com/", "https://cretetwpfire.com/staff-and-personnel/"], "checked": "2026-11-09"}, status:"closed", lastTest:{"date": "2023-02-22", "label": "Applications closed Feb 22, and the test was Mar 11.", "source": "https://theblueline.com/findAJob/view/17806"}, note:"Application form on its careers page." },
    { id:"monee", name:"Monee FPD", city:"Monee", lat:41.42, lng:-87.74, address:null, site:null, jobs:null, runs:{stations:2, calls:{"2023":2060, "2024":2015, "2025":2069}}, about:{"union": null, "timeOff": "24 hours on, 48 hours off.", "area": "36 square miles.", "residents": "About 8,500.", "staff": "7 personnel on duty each day.", "sources": ["https://southwestregionalpublishing.com/2024/10/16/cool-stuff-at-the-monee-fire-department-open-house/", "https://theblueline.com/findAJob/view/25644"], "checked": "2026-11-09"}, status:"unknown", note:"Website not yet verified." },
    { id:"wilmington", name:"Wilmington FPD", city:"Wilmington", lat:41.31, lng:-88.15, address:null, site:null, jobs:null, runs:{stations:2, calls:{"2023":2066, "2024":2426, "2025":2640}}, about:{"union": null, "timeOff": "12-hour shifts (7 a.m. to 7 p.m. and 7 p.m. to 7 a.m.) with 6 crew members each, backed by paid-on-call members.", "area": "104 square miles: Wilmington and Florence, Wilmington and Wesley Townships.", "residents": "About 15,000.", "staff": null, "sources": ["https://www.wilmingtonfire.org/about-us/", "https://www.wilmingtonfire.org/"], "checked": "2026-11-09"}, status:"closed", lastTest:{"date": "2024-10-23", "label": "Applications closed Oct 23, and the written exam was Oct 25.", "source": "https://theblueline.com/findAJob/view/24752"}, note:"Website not yet verified." }
  ],

  /* Open postings. type: "full" (default) or "part" (part-time / paid-on-call). deadline: ISO date, or null when open until filled.
     needs: certifications required (emt | medic | cpat | ffii), or null when the posting doesn't say. */
  jobs: [
    { id:"j-palosheights", deptId:"palosheights", needs:["ffii","cpat","medic"], needsNote:"Paramedic license needed by date of hire", dept:"Palos Heights FPD", title:"Firefighter/Paramedic", city:"Palos Heights", lat:41.67, lng:-87.8,
      deadline:"2026-11-20", deadlineNote:"Due by 4:00 PM. Written exam Dec 1–3, 2026.", pay:80730, payNote:"$86,112 after year one; about $120,000 by year five.",
      reqs:["Illinois paramedic license by date of hire","Firefighter II or Basic Operations Firefighter","CPAT card issued within 12 months of the deadline","Age 21 by Dec 1, 2026"],
      apply:"https://www.applytoserve.com/Application.aspx?ID=817", source:"https://www.theblueline.com/findAJob/view/39296", sourceName:"The Blue Line", fee:null },
    { id:"j-newlenox", deptId:"newlenox", needs:["ffii","cpat","emt"], needsNote:"EMTs must earn paramedic within 18 months of hire", dept:"New Lenox FPD", title:"Firefighter/Paramedic or EMT", city:"New Lenox", lat:41.51, lng:-87.97,
      deadline:"2026-12-04", deadlineNote:"Testing can be done virtually on several dates.", pay:79488, payNote:"2027 starting salary.",
      reqs:["Firefighter II or Basic Operations Firefighter","Illinois paramedic license, or EMT who earns paramedic within 18 months of hire","CPAT with ladder climb","Generally 21–35 at conditional offer; U.S. citizen and Illinois resident"],
      apply:"https://www.publicsafetytesting.com/career-path/positions/firefighter?preselected_position=1345", source:"https://www.publicsafetytesting.com/departments/New-Lenox-FPD/firefighter-paramedic-emt", sourceName:"Public Safety Testing", fee:null },
    { id:"j-manteno", deptId:"manteno", needs:["medic"], needsNote:null, dept:"Manteno Community FPD", title:"Firefighter/Paramedic", city:"Manteno", lat:41.25, lng:-87.83,
      deadline:null, deadlineNote:"Open until filled.", pay:73777.33, payNote:"Effective Jan 1, 2027.",
      reqs:["Paramedic license at time of application","Under 35 unless previously a full-time Illinois firefighter","$48 non-refundable application processing fee"],
      apply:"https://www.applytoserve.com/Application.aspx?ID=826", source:"https://www.theblueline.com/findAJob/view/40244", sourceName:"The Blue Line", fee:null },
    { id:"j-franklinpark", runs:{stations:2, calls:{"2023":4004, "2024":4563, "2025":4138}}, applyTip:"On National Testing Network, search the job list for Franklin Park Fire Department.", needs:null, needsNote:"Requirements not listed in the posting summary", dept:"Franklin Park Fire Department", title:"Firefighter/Paramedic", city:"Franklin Park", lat:41.93, lng:-87.87,
      deadline:"2026-12-18", deadlineNote:"Due by 5:00 PM.", pay:78200.95, payNote:"Rises to $80,546.98 on May 1, 2027; tops out at $119,014.78.",
      reqs:["National Testing Network FireTEAM exam, PSSA and PHQ"],
      apply:"https://candidates.nationaltestingnetwork.com/#/jobs", source:"https://www.theblueline.com/findAJob/view/40250", sourceName:"The Blue Line", fee:null },
    { id:"j-arlington", runs:{stations:4, calls:{"2023":11311, "2024":11484, "2025":11641}}, needs:null, needsNote:"Requirements on the Public Safety Testing posting", dept:"Arlington Heights Fire Department", title:"Firefighter", city:"Arlington Heights", lat:42.09, lng:-87.98,
      deadline:"2026-11-12", deadlineNote:"Testing deadline.", pay:null, payNote:null,
      reqs:["See posting on Public Safety Testing"],
      apply:"https://www.publicsafetytesting.com/career-path/positions/firefighter?preselected_position=1330", source:"https://www.publicsafetytesting.com/career-path/positions/firefighter", sourceName:"Public Safety Testing", fee:null },
    { id:"j-eastjoliet", deptId:"eastjoliet", needs:null, needsNote:"Requirements on the Public Safety Testing posting", dept:"East Joliet FPD", title:"Firefighter/Paramedic", city:"Joliet", lat:41.52, lng:-88.05,
      deadline:null, deadlineNote:"Ongoing testing. The agency pays the test fee.", pay:null, payNote:null,
      reqs:["See posting on Public Safety Testing"],
      apply:"https://www.publicsafetytesting.com/career-path/positions/firefighter?preselected_position=1315", source:"https://www.publicsafetytesting.com/departments/east-joliet-FPD/firefighter-paramedic-41", sourceName:"Public Safety Testing", fee:0 },
    { id:"j-homer", deptId:"homer", needs:null, needsNote:"Requirements on the Public Safety Testing posting", dept:"Homer Township FPD", title:"Firefighter/Paramedic", city:"Homer Glen / Lockport", lat:41.605, lng:-87.99,
      deadline:null, deadlineNote:"Ongoing testing. The agency pays the test fee.", pay:null, payNote:null,
      reqs:["See posting on Public Safety Testing"],
      apply:"https://www.publicsafetytesting.com/career-path/positions/firefighter?preselected_position=1305", source:"https://www.publicsafetytesting.com/departments/homer-township-FPD/firefighter-paramedic-40", sourceName:"Public Safety Testing", fee:0 },
    { id:"j-northpalos", deptId:"northpalos", needs:null, needsNote:"Requirements on the Public Safety Testing posting", dept:"North Palos FPD", title:"Firefighter/Paramedic", city:"Palos Hills", lat:41.7, lng:-87.82,
      deadline:null, deadlineNote:"Ongoing testing. The agency pays the test fee.", pay:null, payNote:null,
      reqs:["See posting on Public Safety Testing"],
      apply:"https://www.publicsafetytesting.com/career-path/positions/firefighter?preselected_position=1285", source:"https://www.publicsafetytesting.com/career-path/positions/firefighter", sourceName:"Public Safety Testing", fee:0 },
    /* Part-time and paid-on-call (type:"part"). payHr: starting hourly pay. status "check": posting found but not confirmed open. */
    { id:"pt-wilmington", deptId:"wilmington", type:"part", needs:["ffii", "emt"], dept:"Wilmington FPD", title:"Part-Time Firefighter/EMT", city:"Wilmington", lat:41.3087, lng:-88.1468, deadline:null, deadlineNote:"Rolling. The district lists part-time positions as available, with no deadline.", pay:null, payHr:null, payNote:null, reqs:["Illinois Basic Operations Firefighter (or higher)", "Illinois EMT-Basic or Paramedic license", "Age 18 or older", "Valid driver's license", "Part-time positions are for people who live outside the district"], applyTip:"Download the part-time application or pick one up at the station. Questions: (815) 476-6675.", apply:"https://www.wilmingtonfire.org/wp-content/uploads/2026/01/Application-Part-Time-CURRENT-6.26.25.pdf", source:"https://www.wilmingtonfire.org/employment/", sourceName:"Wilmington FPD", fee:null, checked:"2026-11-09" },
    { id:"pt-braidwood", runs:{stations:2, calls:{"2023":1901, "2024":2028, "2025":2240}}, type:"part", status:"check", needs:["ffii", "emt"], dept:"Braidwood FPD", title:"Part-Time or Paid-On-Call Firefighter/EMT", city:"Braidwood", lat:41.2656, lng:-88.214, deadline:null, deadlineNote:"No application window posted. Applications are dropped off at the station during business hours.", pay:null, payHr:null, payNote:null, reqs:["Illinois EMT-B, EMT-I or Paramedic license", "Firefighter II (Basic Operations) or Firefighter III (Advanced Technician)", "Valid Class B non-CDL driver's license", "Age 18 or older", "High school diploma", "Physical agility test"], applyTip:"Call (815) 458-2000 to confirm part-time openings, then drop off the part-time or paid-on-call application at Station 1, 275 W. Main St., Braidwood.", apply:"https://braidwoodfire.org/wp-content/uploads/2018/01/parttimeapp.pdf", source:"https://braidwoodfire.org/employment/", sourceName:"Braidwood FPD", fee:null, checked:"2026-11-09" },
    { id:"pt-manhattan", deptId:"manhattan", type:"part", status:"check", needs:["ffii", "emt"], dept:"Manhattan FPD", title:"Part-Time Firefighter/EMT-B or Firefighter/Paramedic", city:"Manhattan", lat:41.4222, lng:-87.9857, deadline:null, deadlineNote:"Posting dated Nov 1, 2023, with no closing date. Call to confirm it's still open.", pay:null, payHr:19, payNote:"$19.00/hour for Firefighter/EMT-B; $21.00/hour for Firefighter/Paramedic. 24 hours on, 48 off.", reqs:["Firefighter II or Basic Operations Firefighter (OSFM)", "Illinois EMT-B license (paramedic preferred), able to test into the Silver Cross EMS System", "Age 18 or older", "Valid Illinois Class B non-CDL driver's license", "High school diploma or GED"], applyTip:"Apply in person with Deputy Chief David Piper at Station 81, 100 S. Park Rd., Manhattan, Monday–Friday 8:30 AM–4 PM.", apply:"https://manhattanfire.org/wp-content/uploads/2023/11/The-Manhattan-Fire-Protection-District-Fillable-Application1.pdf", source:"https://manhattanfire.org/part-time-employment/part-time-ff-pm-or-ff-emt-b/", sourceName:"Manhattan FPD", fee:null, checked:"2026-11-09" },
    { id:"pt-crete", deptId:"crete", type:"part", status:"check", needs:null, dept:"Crete Township FPD", title:"Paid-On-Call or Part-Time Firefighter/Paramedic", city:"Crete", lat:41.4445, lng:-87.6315, deadline:null, deadlineNote:"The district posts an application, but no current opening or deadline.", pay:null, payHr:null, payNote:null, reqs:["Illinois driver's license with Class B (minimum) endorsement", "Copies of your Illinois firefighter, paramedic and CPR certifications, where applicable"], applyTip:"Call the district to ask whether it's hiring before you apply.", apply:"https://cretetwpfire.com/careers/", source:"https://cretetwpfire.com/careers/", sourceName:"Crete Township FPD", fee:null, checked:"2026-11-09" },
    { id:"pt-montgomery", runs:{stations:2, calls:{"2023":1248, "2024":1200, "2025":1262}}, type:"part", needs:["medic"], needsNote:"Hiring part-time firefighter/paramedics and single-role paramedics", dept:"Montgomery & Countryside FPD", title:"Part-Time Firefighter/Paramedic or Paramedic", city:"Montgomery", lat:41.7276, lng:-88.346, deadline:null, deadlineNote:"Open until filled.", pay:null, payHr:24, payNote:"$24.00/hour; $27.13/hour for weekend 24-hour shifts.", reqs:["Illinois paramedic license", "See the posting flyers for full requirements"], applyTip:"Apply in person at 198 S. Railroad St., Montgomery, or contact Chief Thomas Meyers at Chiefmeyers@montgomeryfire.org or (630) 897-0622.", apply:"https://www.theblueline.com/findAJob/view/39814", source:"https://www.theblueline.com/findAJob/view/39814", sourceName:"The Blue Line", fee:null, checked:"2026-11-09" },
    { id:"pt-bensenville", runs:{stations:2, calls:{"2023":3625, "2024":3666, "2025":3502}}, type:"part", needs:["medic"], dept:"Bensenville FPD", title:"Part-Time Firefighter/Paramedic or Single-Role Paramedic", city:"Bensenville", lat:41.948, lng:-87.9405, deadline:null, deadlineNote:"Open until filled.", pay:null, payHr:25, payNote:"Starting at $25/hour depending on experience. 24-hour or 12-hour shifts.", reqs:["IDPH-licensed paramedic, able to test into the Good Samaritan EMS System", "Age 21 or older", "High school diploma or GED", "Valid Illinois driver's license", "CPAT and ladder climb preferred"], applyTip:"Single-role paramedics who work 30 24-hour shifts can be sponsored to take the state fire academy exams. Part-timers earn preference points when testing for full-time.", apply:"https://form.jotform.com/70606707257155", source:"https://www.theblueline.com/findAJob/view/33298", sourceName:"The Blue Line", fee:null, checked:"2026-11-09" },
    /* Full-time postings that accept EMTs */
    { id:"j-braidwood", runs:{stations:2, calls:{"2023":1901, "2024":2028, "2025":2240}}, type:"full", needs:["emt", "ffii", "cpat"], needsNote:"EMT-B or paramedic accepted", dept:"Braidwood FPD", title:"Firefighter/EMT-B or Paramedic", city:"Braidwood", lat:41.2656, lng:-88.214, deadline:"2026-11-16", deadlineNote:"Applications due in person by 10:00 AM. Written and oral exams Nov 21, 2026. Late submissions are not accepted.", pay:61655, payNote:"$61,655–$70,917 starting; tops out at $79,818.", reqs:["Illinois licensed EMT-B or paramedic", "Basic Operations Firefighter (Firefighter II) at time of hire", "CPAT with ladder climb, valid within one year by date of hire", "At least 19 and under 35 at the written exam (exemptions apply); 21 at hire", "High school diploma or equivalent"], applyTip:"Print the application packet from the candidate letter and return it in person, Monday–Friday 9 AM–4 PM, to Station 1, 275 W. Main St., Braidwood. Phone (815) 458-2000.", apply:"https://braidwoodfire.org/wp-content/uploads/2026/11/BFPD-Board-of-Commissioners-Candidate-Letter-2026-Complete.pdf", source:"https://braidwoodfire.org/", sourceName:"Braidwood FPD", fee:0, checked:"2026-11-09" },
    { id:"j-saukvillage", runs:{stations:1, calls:{"2023":2205, "2024":2385, "2025":2295}}, type:"full", needs:["emt", "ffii", "cpat"], needsNote:"Paramedic preferred", dept:"Sauk Village Fire Department", title:"Firefighter/EMT-Basic or Firefighter/Paramedic", city:"Sauk Village", lat:41.4884, lng:-87.5676, deadline:"2026-12-04", deadlineNote:"Due by 4:00 PM in a sealed envelope to Resource Management Associates, Tinley Park. Mandatory orientation and written exam Dec 12, 2026.", pay:null, payNote:null, reqs:["Illinois-licensed or nationally certified EMT-Basic at time of hire (paramedic preferred)", "Basic Operations Firefighter/Firefighter II at time of hire", "CPAT with ladder climb issued within 6 months at the conditional offer", "Age 21 at hire; under 35 at the exam unless exempt", "High school graduate or equivalent"], apply:"https://www.theblueline.com/findAJob/view/40109", source:"https://www.theblueline.com/findAJob/view/40109", sourceName:"The Blue Line", fee:null, checked:"2026-11-09" }
  ],

  /* Funding. for: emt | medic | fire. needs: college | fafsa | firefighter | workforce | hired */
  funding: [
    { id:"map", name:"Illinois MAP Grant", provider:"Illinois Student Assistance Commission", amount:"Up to $8,400 for 2026–27 (effective max $8,064)", for:["emt","medic"], needs:["college","fafsa"],
      who:"Illinois residents with financial need in a credit program at an Illinois college, such as Moraine Valley, Prairie State or South Suburban.", deadline:"File the FAFSA early. Funding can run out.", url:"https://isac.org/isac-gift-assistance-programs/map/map-formula/2627-map-formula/" },
    { id:"pell", name:"Federal Pell Grant", provider:"U.S. Department of Education", amount:"Varies by need", for:["emt","medic"], needs:["college","fafsa"],
      who:"Students with financial need in an aid-eligible credit program. Some short EMT courses aren't aid-eligible (South Suburban's isn't).", deadline:"File the FAFSA", url:"https://studentaid.gov/understand-aid/types/grants/pell" },
    { id:"wioa", name:"WIOA Training Funds", provider:"Will County Workforce Board / Illinois workNet", amount:"Covers approved training costs", for:["emt","medic","fire"], needs:["workforce"],
      who:"Adults who are unemployed, underemployed or laid off and training in an approved program.", deadline:"Rolling", url:"https://willcountyworkforceboard.com/" },
    { id:"mvf", name:"Moraine Valley Foundation Scholarships", provider:"Moraine Valley Community College", amount:"$250 – $5,000", for:["emt","medic","fire"], needs:["college"],
      who:"Moraine Valley students. Includes a Police/Firefighter Scholarship and health-care scholarships. Requires a 300–500-word essay.", deadline:"2027-01-15", url:"https://www.morainevalley.edu/tuition-and-fees/scholarships/" },
    { id:"naemt", name:"NAEMT Foundation Scholarship", provider:"National Association of EMTs", amount:"Up to $1,000 plus one-year student membership", for:["emt"], needs:[],
      who:"People entering an EMR or EMT course. Not for courses already taken.", deadline:"Mar 1–Apr 30 each year", url:"https://www.naemt.org/about-naemt/naemt-foundation/foundation-scholarships" },
    { id:"ifca", name:"IFCA Foundation Annual Scholarship", provider:"Illinois Fire Chiefs Educational & Research Foundation", amount:"Not published", for:["medic","fire"], needs:["firefighter"],
      who:"Members of the Illinois fire service pursuing college, vocational, fire or EMS training.", deadline:"Jan 1–Mar 15 each year", url:"https://www.illinoisfirechiefs.org/foundation/" },
    { id:"ifsi", name:"IFSI Memorial Scholarships", provider:"Illinois Fire Service Institute", amount:"Six $1,000 grants", for:["fire"], needs:["firefighter"],
      who:"Illinois firefighters pursuing fire service training or education. Awarded through IFCA.", deadline:"Postmarked by Mar 15", url:"https://www.fsi.illinois.edu/content/giving/scholarship.cfm" },
    { id:"hire", name:"Get Hired First, and the Department Pays for Paramedic School", provider:"Fire departments (example: New Lenox FPD)", amount:"Paramedic tuition", for:["medic"], needs:["hired"],
      who:"EMTs hired by departments that let new hires earn the paramedic license after hire. New Lenox allows 18 months.", deadline:"Tied to each department's hiring cycle", url:"https://countryherald.com/illinois/new-lenox/new-lenox-il-fire-district-hiring-firefighters-emts-and-paramedics" },
    { id:"ivg", name:"Illinois Veteran Grant (IVG)", provider:"Illinois Student Assistance Commission", amount:"Covers eligible tuition and mandatory fees", for:["emt","medic","fire"], needs:["veteran","college"],
      who:"Illinois veterans with at least one year of active duty (or qualifying service) and an honorable discharge, at Illinois public community colleges and universities. Ask the college's financial aid office whether your EMT or paramedic course counts.", deadline:"Rolling", url:"https://isac.org/students/during-college/types-of-financial-aid/grants/ivg-program.html" },
    { id:"gibill", name:"Post-9/11 GI Bill (Non-College Degree Programs)", provider:"U.S. Department of Veterans Affairs", amount:"Tuition and a monthly housing allowance, based on your eligibility", for:["emt","medic","fire"], needs:["veteran"],
      who:"Veterans with GI Bill benefits. The VA lists EMT training as a covered program, and it can also pay back licensing and certification test fees.", deadline:"Rolling", url:"https://www.va.gov/education/about-gi-bill-benefits/how-to-use-benefits/non-college-degree-programs/" }
  ],

  /* Continuing education for working firefighters. sessions: [{s: ISO start, e: ISO end (optional), t: label, u: that session's registration link (optional), seats (optional)}].
     IFSI rows (provider "IFSI") are rebuilt each week with tools/ifsi-refresh.js; gk is the "CITY|ZIP" key used to reuse map coordinates. */
  ce: {
 "courses": [
  {
   "id": "rfa-atf",
   "cat": "ff",
   "name": "Advanced Technician Firefighter",
   "cert": "Advanced Technician Firefighter",
   "aka": "ATF advanced firefighter FF II",
   "provider": "Romeoville Fire Academy",
   "location": "Romeoville Fire Academy, Romeoville",
   "lat": 41.655,
   "lng": -88.1,
   "cost": 825,
   "costNote": null,
   "length": null,
   "sessions": [
    {
     "s": "2027-03-15",
     "t": "Mar 15–19, 2027"
    },
    {
     "s": "2027-05-03",
     "t": "May 3–7, 2027"
    },
    {
     "s": "2027-08-23",
     "t": "Aug 23–27, 2027"
    },
    {
     "s": "2027-11-29",
     "t": "Nov 29–Dec 3, 2027"
    }
   ],
   "note": null,
   "register": "https://romeoville.org/FormCenter/Fire-Academy-13/Fire-Classes-Online-Registration-Fire-Ac-370",
   "page": "https://www.romeoville.org/DocumentCenter/View/15985/RFA-2026-Course-Catalog",
   "contact": "(815) 372-4042",
   "checked": "2026-11-07"
  },
  {
   "id": "rfa-engine",
   "cat": "ff",
   "name": "Engine Company Operations",
   "cert": null,
   "aka": "",
   "provider": "Romeoville Fire Academy",
   "location": "Romeoville Fire Academy, Romeoville",
   "lat": 41.655,
   "lng": -88.1,
   "cost": 650,
   "costNote": null,
   "length": null,
   "sessions": [
    {
     "s": "2027-04-05",
     "t": "Apr 5–7, 2027"
    },
    {
     "s": "2027-06-28",
     "t": "Jun 28–30, 2027"
    }
   ],
   "note": null,
   "register": "https://romeoville.org/FormCenter/Fire-Academy-13/Fire-Classes-Online-Registration-Fire-Ac-370",
   "page": "https://www.romeoville.org/DocumentCenter/View/15985/RFA-2026-Course-Catalog",
   "contact": "(815) 372-4042",
   "checked": "2026-11-07"
  },
  {
   "id": "rfa-truck",
   "cat": "ff",
   "name": "Truck Company Operations",
   "cert": null,
   "aka": "ladder aerial",
   "provider": "Romeoville Fire Academy",
   "location": "Romeoville Fire Academy, Romeoville",
   "lat": 41.655,
   "lng": -88.1,
   "cost": 650,
   "costNote": null,
   "length": null,
   "sessions": [
    {
     "s": "2027-10-19",
     "t": "Oct 19–21, 2027"
    }
   ],
   "note": null,
   "register": "https://romeoville.org/FormCenter/Fire-Academy-13/Fire-Classes-Online-Registration-Fire-Ac-370",
   "page": "https://www.romeoville.org/DocumentCenter/View/15985/RFA-2026-Course-Catalog",
   "contact": "(815) 372-4042",
   "checked": "2026-11-07"
  },
  {
   "id": "rfa-scba",
   "cat": "ff",
   "name": "Advanced SCBA",
   "cert": null,
   "aka": "",
   "provider": "Romeoville Fire Academy",
   "location": "Romeoville Fire Academy, Romeoville",
   "lat": 41.655,
   "lng": -88.1,
   "cost": 500,
   "costNote": null,
   "length": null,
   "sessions": [
    {
     "s": "2027-09-20",
     "t": "Sep 20–22, 2027"
    }
   ],
   "note": null,
   "register": "https://romeoville.org/FormCenter/Fire-Academy-13/Fire-Classes-Online-Registration-Fire-Ac-370",
   "page": "https://www.romeoville.org/DocumentCenter/View/15985/RFA-2026-Course-Catalog",
   "contact": "(815) 372-4042",
   "checked": "2026-11-07"
  },
  {
   "id": "rfa-ric",
   "cat": "ff",
   "name": "Rapid Intervention Company Operations",
   "cert": null,
   "aka": "RIT RIC firefighter survival",
   "provider": "Romeoville Fire Academy",
   "location": "Romeoville Fire Academy, Romeoville",
   "lat": 41.655,
   "lng": -88.1,
   "cost": 600,
   "costNote": null,
   "length": null,
   "sessions": [
    {
     "s": "2027-09-13",
     "t": "Sep 13–16, 2027"
    }
   ],
   "note": null,
   "register": "https://romeoville.org/FormCenter/Fire-Academy-13/Fire-Classes-Online-Registration-Fire-Ac-370",
   "page": "https://www.romeoville.org/DocumentCenter/View/15985/RFA-2026-Course-Catalog",
   "contact": "(815) 372-4042",
   "checked": "2026-11-07"
  },
  {
   "id": "rfa-fsvo",
   "cat": "app",
   "name": "Fire Service Vehicle Operator",
   "cert": "Fire Service Vehicle Operator",
   "aka": "FSVO driver",
   "provider": "Romeoville Fire Academy",
   "location": "Romeoville Fire Academy, Romeoville",
   "lat": 41.655,
   "lng": -88.1,
   "cost": 200,
   "costNote": null,
   "length": null,
   "sessions": [
    {
     "s": "2027-02-15",
     "t": "Feb 15, 2027"
    },
    {
     "s": "2027-04-05",
     "t": "Apr 5, 2027"
    },
    {
     "s": "2027-05-24",
     "t": "May 24, 2027"
    },
    {
     "s": "2027-09-13",
     "t": "Sep 13, 2027"
    },
    {
     "s": "2027-11-22",
     "t": "Nov 22, 2027"
    }
   ],
   "note": "Taught during Basic Operations Firefighter academies. Contact the academy for open seats.",
   "register": "https://romeoville.org/FormCenter/Fire-Academy-13/Fire-Classes-Online-Registration-Fire-Ac-370",
   "page": "https://www.romeoville.org/DocumentCenter/View/15985/RFA-2026-Course-Catalog",
   "contact": "(815) 372-4042",
   "checked": "2026-11-07"
  },
  {
   "id": "rfa-fae",
   "cat": "app",
   "name": "Fire Apparatus Engineer",
   "cert": "Fire Apparatus Engineer",
   "aka": "FAE engineer pump operator driver",
   "provider": "Romeoville Fire Academy",
   "location": "WILCO Career Center, Romeoville",
   "lat": 41.64,
   "lng": -88.09,
   "cost": 800,
   "costNote": null,
   "length": null,
   "sessions": [
    {
     "s": "2027-03-29",
     "t": "Mar 29–Apr 2, 2027"
    },
    {
     "s": "2027-06-07",
     "t": "Jun 7–11, 2027"
    },
    {
     "s": "2027-08-02",
     "t": "Aug 2–6, 2027"
    }
   ],
   "note": null,
   "register": "https://romeoville.org/FormCenter/Fire-Academy-13/Fire-Classes-Online-Registration-Fire-Ac-370",
   "page": "https://www.romeoville.org/DocumentCenter/View/15985/RFA-2026-Course-Catalog",
   "contact": "(815) 372-4042",
   "checked": "2026-11-07"
  },
  {
   "id": "nip-fae",
   "cat": "app",
   "name": "Fire Apparatus Engineer (40 Hours)",
   "cert": "Fire Apparatus Engineer",
   "aka": "FAE engineer pump operator driver",
   "provider": "NIPSTA",
   "location": "NIPSTA, Glenview",
   "lat": 42.08,
   "lng": -87.82,
   "cost": null,
   "costNote": "Not listed. Check the registration page.",
   "length": "40 hours",
   "sessions": [
    {
     "s": "2027-03-29",
     "t": "Mar 29–Apr 2, 2027"
    },
    {
     "s": "2027-06-21",
     "t": "Jun 21–25, 2027"
    },
    {
     "s": "2027-09-13",
     "t": "Sep 13–17, 2027"
    },
    {
     "s": "2027-09-27",
     "t": "Sep 27–Oct 1, 2027"
    }
   ],
   "note": null,
   "register": "https://secure.rec1.com/IL/nipsta-il/catalog/index/fd5a6df6d57df6c9d7e8088d03e60411?filter=c2VhcmNoPSZjYXRlZ29yeSU1QjEwMDAyJTVEPTE%3D",
   "page": "https://www.nipsta.org/361/Fire-Apparatus-Engineer-FAE",
   "contact": "(847) 998-8090",
   "checked": "2026-11-07"
  },
  {
   "id": "rfa-rope-ops",
   "cat": "rescue",
   "name": "Rope Operations",
   "cert": "Rope Operations",
   "aka": "rope rescue high angle",
   "provider": "Romeoville Fire Academy",
   "location": "North Aurora FPD, North Aurora",
   "lat": 41.8,
   "lng": -88.33,
   "cost": 1000,
   "costNote": null,
   "length": null,
   "sessions": [
    {
     "s": "2027-04-05",
     "t": "Apr 5–9, 2027"
    },
    {
     "s": "2027-05-03",
     "t": "May 3–7, 2027"
    },
    {
     "s": "2027-08-09",
     "t": "Aug 9–13, 2027"
    },
    {
     "s": "2027-09-13",
     "t": "Sep 13–17, 2027"
    }
   ],
   "note": null,
   "register": "https://romeoville.org/FormCenter/Fire-Academy-13/Fire-Classes-Online-Registration-Fire-Ac-370",
   "page": "https://www.romeoville.org/DocumentCenter/View/15985/RFA-2026-Course-Catalog",
   "contact": "(815) 372-4042",
   "checked": "2026-11-07"
  },
  {
   "id": "rfa-rope-tech",
   "cat": "rescue",
   "name": "Rope Technician",
   "cert": "Rope Technician",
   "aka": "rope rescue high angle",
   "provider": "Romeoville Fire Academy",
   "location": "North Aurora FPD, North Aurora",
   "lat": 41.8,
   "lng": -88.33,
   "cost": 1100,
   "costNote": null,
   "length": null,
   "sessions": [
    {
     "s": "2027-08-23",
     "t": "Aug 23–27, 2027"
    }
   ],
   "note": null,
   "register": "https://romeoville.org/FormCenter/Fire-Academy-13/Fire-Classes-Online-Registration-Fire-Ac-370",
   "page": "https://www.romeoville.org/DocumentCenter/View/15985/RFA-2026-Course-Catalog",
   "contact": "(815) 372-4042",
   "checked": "2026-11-07"
  },
  {
   "id": "rfa-trench-ops",
   "cat": "rescue",
   "name": "Trench Operations",
   "cert": "Trench Operations",
   "aka": "trench rescue",
   "provider": "Romeoville Fire Academy",
   "location": "Troy FPD, Shorewood",
   "lat": 41.52,
   "lng": -88.2,
   "cost": 1200,
   "costNote": null,
   "length": null,
   "sessions": [
    {
     "s": "2027-04-26",
     "t": "Apr 26–29, 2027"
    }
   ],
   "note": null,
   "register": "https://romeoville.org/FormCenter/Fire-Academy-13/Fire-Classes-Online-Registration-Fire-Ac-370",
   "page": "https://www.romeoville.org/DocumentCenter/View/15985/RFA-2026-Course-Catalog",
   "contact": "(815) 372-4042",
   "checked": "2026-11-07"
  },
  {
   "id": "rfa-trench-tech",
   "cat": "rescue",
   "name": "Trench Technician",
   "cert": "Trench Technician",
   "aka": "trench rescue",
   "provider": "Romeoville Fire Academy",
   "location": "Troy FPD, Shorewood",
   "lat": 41.52,
   "lng": -88.2,
   "cost": 1300,
   "costNote": null,
   "length": null,
   "sessions": [
    {
     "s": "2027-10-11",
     "t": "Oct 11–14, 2027"
    }
   ],
   "note": null,
   "register": "https://romeoville.org/FormCenter/Fire-Academy-13/Fire-Classes-Online-Registration-Fire-Ac-370",
   "page": "https://www.romeoville.org/DocumentCenter/View/15985/RFA-2026-Course-Catalog",
   "contact": "(815) 372-4042",
   "checked": "2026-11-07"
  },
  {
   "id": "rfa-cs-ops",
   "cat": "rescue",
   "name": "Confined Space Operations",
   "cert": "Confined Space Operations",
   "aka": "confined space rescue",
   "provider": "Romeoville Fire Academy",
   "location": "North Aurora FPD, North Aurora",
   "lat": 41.8,
   "lng": -88.33,
   "cost": 950,
   "costNote": null,
   "length": null,
   "sessions": [
    {
     "s": "2027-05-17",
     "t": "May 17–21, 2027"
    }
   ],
   "note": null,
   "register": "https://romeoville.org/FormCenter/Fire-Academy-13/Fire-Classes-Online-Registration-Fire-Ac-370",
   "page": "https://www.romeoville.org/DocumentCenter/View/15985/RFA-2026-Course-Catalog",
   "contact": "(815) 372-4042",
   "checked": "2026-11-07"
  },
  {
   "id": "rfa-col-ops",
   "cat": "rescue",
   "name": "Structural Collapse Operations",
   "cert": "Structural Collapse Operations",
   "aka": "collapse",
   "provider": "Romeoville Fire Academy",
   "location": "Romeoville Fire Academy, Romeoville",
   "lat": 41.655,
   "lng": -88.1,
   "cost": 1800,
   "costNote": null,
   "length": null,
   "sessions": [
    {
     "s": "2027-10-18",
     "t": "Oct 18–22, 2027"
    }
   ],
   "note": null,
   "register": "https://romeoville.org/FormCenter/Fire-Academy-13/Fire-Classes-Online-Registration-Fire-Ac-370",
   "page": "https://www.romeoville.org/DocumentCenter/View/15985/RFA-2026-Course-Catalog",
   "contact": "(815) 372-4042",
   "checked": "2026-11-07"
  },
  {
   "id": "rfa-col-tech",
   "cat": "rescue",
   "name": "Structural Collapse Technician",
   "cert": "Structural Collapse Technician",
   "aka": "collapse",
   "provider": "Romeoville Fire Academy",
   "location": "Romeoville Fire Academy, Romeoville",
   "lat": 41.655,
   "lng": -88.1,
   "cost": 2500,
   "costNote": null,
   "length": null,
   "sessions": [
    {
     "s": "2027-11-15",
     "t": "Nov 15–19, 2027"
    }
   ],
   "note": null,
   "register": "https://romeoville.org/FormCenter/Fire-Academy-13/Fire-Classes-Online-Registration-Fire-Ac-370",
   "page": "https://www.romeoville.org/DocumentCenter/View/15985/RFA-2026-Course-Catalog",
   "contact": "(815) 372-4042",
   "checked": "2026-11-07"
  },
  {
   "id": "rfa-cpvr",
   "cat": "rescue",
   "name": "Common Passenger Vehicle Rescue (Formerly VMO)",
   "cert": "Common Passenger Vehicle Rescue",
   "aka": "VMO vehicle machinery operations extrication auto",
   "provider": "Romeoville Fire Academy",
   "location": "Romeoville Fire Academy, Romeoville",
   "lat": 41.655,
   "lng": -88.1,
   "cost": 1100,
   "costNote": null,
   "length": null,
   "sessions": [
    {
     "s": "2027-03-08",
     "t": "Mar 8–12, 2027"
    },
    {
     "s": "2027-04-26",
     "t": "Apr 26–30, 2027"
    },
    {
     "s": "2027-08-09",
     "t": "Aug 9–13, 2027"
    }
   ],
   "note": null,
   "register": "https://romeoville.org/FormCenter/Fire-Academy-13/Fire-Classes-Online-Registration-Fire-Ac-370",
   "page": "https://www.romeoville.org/DocumentCenter/View/15985/RFA-2026-Course-Catalog",
   "contact": "(815) 372-4042",
   "checked": "2026-11-07"
  },
  {
   "id": "rfa-hvr",
   "cat": "rescue",
   "name": "Heavy Vehicle Rescue (Formerly VMT)",
   "cert": "Heavy Vehicle Rescue",
   "aka": "VMT vehicle machinery technician extrication truck bus",
   "provider": "Romeoville Fire Academy",
   "location": "Romeoville Fire Academy, Romeoville",
   "lat": 41.655,
   "lng": -88.1,
   "cost": 1200,
   "costNote": null,
   "length": null,
   "sessions": [
    {
     "s": "2027-06-21",
     "t": "Jun 21–25, 2027"
    },
    {
     "s": "2027-10-11",
     "t": "Oct 11–15, 2027"
    }
   ],
   "note": null,
   "register": "https://romeoville.org/FormCenter/Fire-Academy-13/Fire-Classes-Online-Registration-Fire-Ac-370",
   "page": "https://www.romeoville.org/DocumentCenter/View/15985/RFA-2026-Course-Catalog",
   "contact": "(815) 372-4042",
   "checked": "2026-11-07"
  },
  {
   "id": "rfa-water-ops",
   "cat": "water",
   "name": "Surface Water Operations",
   "cert": "Surface Water Operations",
   "aka": "water ops water rescue",
   "provider": "Romeoville Fire Academy",
   "location": "Romeoville Fire Academy, Romeoville",
   "lat": 41.655,
   "lng": -88.1,
   "cost": 525,
   "costNote": null,
   "length": null,
   "sessions": [
    {
     "s": "2027-03-22",
     "t": "Mar 22–26, 2027"
    },
    {
     "s": "2027-08-16",
     "t": "Aug 16–20, 2027"
    }
   ],
   "note": null,
   "register": "https://romeoville.org/FormCenter/Fire-Academy-13/Fire-Classes-Online-Registration-Fire-Ac-370",
   "page": "https://www.romeoville.org/DocumentCenter/View/15985/RFA-2026-Course-Catalog",
   "contact": "(815) 372-4042",
   "checked": "2026-11-07"
  },
  {
   "id": "rfa-swift",
   "cat": "water",
   "name": "Swift Water Rescue Technician",
   "cert": null,
   "aka": "swiftwater water rescue",
   "provider": "Romeoville Fire Academy",
   "location": "Pontiac Fire Department, Pontiac",
   "lat": 40.88,
   "lng": -88.63,
   "cost": 425,
   "costNote": null,
   "length": null,
   "sessions": [
    {
     "s": "2027-05-24",
     "t": "May 24–26, 2027"
    }
   ],
   "note": null,
   "register": "https://romeoville.org/FormCenter/Fire-Academy-13/Fire-Classes-Online-Registration-Fire-Ac-370",
   "page": "https://www.romeoville.org/DocumentCenter/View/15985/RFA-2026-Course-Catalog",
   "contact": "(815) 372-4042",
   "checked": "2026-11-07"
  },
  {
   "id": "rfa-watercraft",
   "cat": "water",
   "name": "Watercraft Technician",
   "cert": "Watercraft Technician",
   "aka": "boat water rescue",
   "provider": "Romeoville Fire Academy",
   "location": "Romeoville Fire Academy, Romeoville",
   "lat": 41.655,
   "lng": -88.1,
   "cost": 400,
   "costNote": null,
   "length": null,
   "sessions": [
    {
     "s": "2027-06-17",
     "t": "Jun 17–18, 2027"
    },
    {
     "s": "2027-07-17",
     "t": "Jul 17 and 24, 2027 (weekends)"
    },
    {
     "s": "2027-09-09",
     "t": "Sep 9–10, 2027"
    }
   ],
   "note": null,
   "register": "https://romeoville.org/FormCenter/Fire-Academy-13/Fire-Classes-Online-Registration-Fire-Ac-370",
   "page": "https://www.romeoville.org/DocumentCenter/View/15985/RFA-2026-Course-Catalog",
   "contact": "(815) 372-4042",
   "checked": "2026-11-07"
  },
  {
   "id": "rfa-ice",
   "cat": "water",
   "name": "Surface Ice Rescue Technician",
   "cert": null,
   "aka": "ice rescue",
   "provider": "Romeoville Fire Academy",
   "location": "Romeoville Fire Academy, Romeoville",
   "lat": 41.655,
   "lng": -88.1,
   "cost": 300,
   "costNote": null,
   "length": null,
   "sessions": [
    {
     "s": "2027-01-29",
     "t": "Jan 29, 2027"
    },
    {
     "s": "2027-02-06",
     "t": "Feb 6, 2027"
    }
   ],
   "note": null,
   "register": "https://romeoville.org/FormCenter/Fire-Academy-13/Fire-Classes-Online-Registration-Fire-Ac-370",
   "page": "https://www.romeoville.org/DocumentCenter/View/15985/RFA-2026-Course-Catalog",
   "contact": "(815) 372-4042",
   "checked": "2026-11-07"
  },
  {
   "id": "rfa-hm-ops",
   "cat": "hazmat",
   "name": "Hazardous Materials Operations",
   "cert": "Hazardous Materials Operations",
   "aka": "hazmat",
   "provider": "Romeoville Fire Academy",
   "location": "Romeoville Fire Academy, Romeoville",
   "lat": 41.655,
   "lng": -88.1,
   "cost": 700,
   "costNote": null,
   "length": null,
   "sessions": [
    {
     "s": "2027-02-22",
     "t": "Feb 22–26, 2027"
    },
    {
     "s": "2027-04-12",
     "t": "Apr 12–16, 2027"
    },
    {
     "s": "2027-09-20",
     "t": "Sep 20–24, 2027"
    },
    {
     "s": "2027-11-29",
     "t": "Nov 29–Dec 3, 2027"
    }
   ],
   "note": "Taught during Basic Operations Firefighter academies. Contact the academy for open seats.",
   "register": "https://romeoville.org/FormCenter/Fire-Academy-13/Fire-Classes-Online-Registration-Fire-Ac-370",
   "page": "https://www.romeoville.org/DocumentCenter/View/15985/RFA-2026-Course-Catalog",
   "contact": "(815) 372-4042",
   "checked": "2026-11-07"
  },
  {
   "id": "rfa-hm-tech",
   "cat": "hazmat",
   "name": "Hazardous Materials Technician",
   "cert": "Hazardous Materials Technician",
   "aka": "hazmat",
   "provider": "Romeoville Fire Academy",
   "location": "Romeoville Fire Academy, Romeoville",
   "lat": 41.655,
   "lng": -88.1,
   "cost": 1500,
   "costNote": null,
   "length": null,
   "sessions": [
    {
     "s": "2027-10-25",
     "t": "Oct 25–29 and Nov 1–5, 2027 (both weeks required)"
    }
   ],
   "note": null,
   "register": "https://romeoville.org/FormCenter/Fire-Academy-13/Fire-Classes-Online-Registration-Fire-Ac-370",
   "page": "https://www.romeoville.org/DocumentCenter/View/15985/RFA-2026-Course-Catalog",
   "contact": "(815) 372-4042",
   "checked": "2026-11-07"
  },
  {
   "id": "rfa-cfo",
   "cat": "officer",
   "name": "Company Fire Officer",
   "cert": "Company Fire Officer",
   "aka": "lieutenant captain officer CFO",
   "provider": "Romeoville Fire Academy",
   "location": "Troy FPD, Shorewood",
   "lat": 41.52,
   "lng": -88.2,
   "cost": 1325,
   "costNote": "Phases 1 and 2: $1,325. Phase 3 (task book): $525.",
   "length": null,
   "sessions": [
    {
     "s": "2027-01-04",
     "t": "Phase 1: Jan 4–8. Phase 2: Jan 11–15 and Jan 18–22. Phase 3 (task book): Feb 22–26, 2027"
    },
    {
     "s": "2027-08-02",
     "t": "Phase 1: Aug 2–6. Phase 2: Aug 9–13 and Aug 16–20. Phase 3 (task book): Sep 20–24, 2027"
    }
   ],
   "note": "You must pass the OSFM certification exam before starting the task book.",
   "register": "https://romeoville.org/FormCenter/Fire-Academy-13/Fire-Classes-Online-Registration-Fire-Ac-370",
   "page": "https://www.romeoville.org/DocumentCenter/View/15985/RFA-2026-Course-Catalog",
   "contact": "(815) 372-4042",
   "checked": "2026-11-07"
  },
  {
   "id": "rfa-afo",
   "cat": "officer",
   "name": "Advanced Fire Officer",
   "cert": "Advanced Fire Officer",
   "aka": "officer AFO",
   "provider": "Romeoville Fire Academy",
   "location": "Romeoville Fire Academy, Romeoville",
   "lat": 41.655,
   "lng": -88.1,
   "cost": 1325,
   "costNote": "Phases 1 and 2: $1,325. Phase 3 (task book): $525.",
   "length": null,
   "sessions": [
    {
     "s": "2027-11-01",
     "t": "Phase 1: Nov 1–5. Phase 2: Nov 8–12 and Nov 15–19. Phase 3 (task book): Dec 13–17, 2027"
    }
   ],
   "note": "You must pass the OSFM certification exam before starting the task book.",
   "register": "https://romeoville.org/FormCenter/Fire-Academy-13/Fire-Classes-Online-Registration-Fire-Ac-370",
   "page": "https://www.romeoville.org/DocumentCenter/View/15985/RFA-2026-Course-Catalog",
   "contact": "(815) 372-4042",
   "checked": "2026-11-07"
  },
  {
   "id": "rfa-chief",
   "cat": "officer",
   "name": "Chief Fire Officer",
   "cert": "Chief Fire Officer",
   "aka": "chief officer",
   "provider": "Romeoville Fire Academy",
   "location": "Troy FPD, Shorewood",
   "lat": 41.52,
   "lng": -88.2,
   "cost": 4200,
   "costNote": null,
   "length": null,
   "sessions": [
    {
     "s": "2027-01-28",
     "t": "Thursdays, Jan 28–Jul 15, 2027"
    }
   ],
   "note": "Exact in-person dates are given on acceptance.",
   "register": "https://romeoville.org/FormCenter/Fire-Academy-13/Fire-Classes-Online-Registration-Fire-Ac-370",
   "page": "https://www.romeoville.org/DocumentCenter/View/15985/RFA-2026-Course-Catalog",
   "contact": "(815) 372-4042",
   "checked": "2026-11-07"
  },
  {
   "id": "rfa-iso",
   "cat": "officer",
   "name": "Fire Department Incident Safety Officer",
   "cert": "Fire Department Incident Safety Officer",
   "aka": "ISO safety officer",
   "provider": "Romeoville Fire Academy",
   "location": "Romeoville Fire Academy, Romeoville",
   "lat": 41.655,
   "lng": -88.1,
   "cost": 550,
   "costNote": null,
   "length": null,
   "sessions": [
    {
     "s": "2027-02-08",
     "t": "Feb 8–12, 2027"
    },
    {
     "s": "2027-08-16",
     "t": "Aug 16–20, 2027"
    }
   ],
   "note": null,
   "register": "https://romeoville.org/FormCenter/Fire-Academy-13/Fire-Classes-Online-Registration-Fire-Ac-370",
   "page": "https://www.romeoville.org/DocumentCenter/View/15985/RFA-2026-Course-Catalog",
   "contact": "(815) 372-4042",
   "checked": "2026-11-07"
  },
  {
   "id": "rfa-inst1",
   "cat": "officer",
   "name": "Instructor I",
   "cert": "Fire Service Instructor I",
   "aka": "instructor teaching",
   "provider": "Romeoville Fire Academy",
   "location": "Romeoville Fire Academy, Romeoville",
   "lat": 41.655,
   "lng": -88.1,
   "cost": 550,
   "costNote": null,
   "length": null,
   "sessions": [
    {
     "s": "2027-02-15",
     "t": "Feb 15–19, 2027"
    },
    {
     "s": "2027-05-17",
     "t": "May 17–21, 2027"
    },
    {
     "s": "2027-12-06",
     "t": "Dec 6–10, 2027"
    }
   ],
   "note": null,
   "register": "https://romeoville.org/FormCenter/Fire-Academy-13/Fire-Classes-Online-Registration-Fire-Ac-370",
   "page": "https://www.romeoville.org/DocumentCenter/View/15985/RFA-2026-Course-Catalog",
   "contact": "(815) 372-4042",
   "checked": "2026-11-07"
  },
  {
   "id": "rfa-inst2",
   "cat": "officer",
   "name": "Instructor II",
   "cert": "Fire Service Instructor II",
   "aka": "instructor teaching",
   "provider": "Romeoville Fire Academy",
   "location": "Romeoville Fire Academy, Romeoville",
   "lat": 41.655,
   "lng": -88.1,
   "cost": 550,
   "costNote": null,
   "length": null,
   "sessions": [
    {
     "s": "2027-09-27",
     "t": "Sep 27–Oct 1, 2027"
    }
   ],
   "note": null,
   "register": "https://romeoville.org/FormCenter/Fire-Academy-13/Fire-Classes-Online-Registration-Fire-Ac-370",
   "page": "https://www.romeoville.org/DocumentCenter/View/15985/RFA-2026-Course-Catalog",
   "contact": "(815) 372-4042",
   "checked": "2026-11-07"
  },
  {
   "id": "rfa-bootcamp",
   "cat": "officer",
   "name": "Company Officer Boot Camp",
   "cert": null,
   "aka": "officer lieutenant",
   "provider": "Romeoville Fire Academy",
   "location": "Romeoville Fire Academy, Romeoville",
   "lat": 41.655,
   "lng": -88.1,
   "cost": 350,
   "costNote": null,
   "length": null,
   "sessions": [
    {
     "s": "2027-05-24",
     "t": "May 24–25, 2027"
    }
   ],
   "note": null,
   "register": "https://romeoville.org/FormCenter/Fire-Academy-13/Fire-Classes-Online-Registration-Fire-Ac-370",
   "page": "https://www.romeoville.org/DocumentCenter/View/15985/RFA-2026-Course-Catalog",
   "contact": "(815) 372-4042",
   "checked": "2026-11-07"
  },
  {
   "id": "rfa-fcoa",
   "cat": "officer",
   "name": "Fire Company Officer Academy",
   "cert": null,
   "aka": "officer lieutenant",
   "provider": "Romeoville Fire Academy",
   "location": "Romeoville Fire Academy, Romeoville",
   "lat": 41.655,
   "lng": -88.1,
   "cost": 725,
   "costNote": null,
   "length": null,
   "sessions": [
    {
     "s": "2027-06-14",
     "t": "Jun 14–18, 2027"
    },
    {
     "s": "2027-10-04",
     "t": "Oct 4–8, 2027"
    }
   ],
   "note": null,
   "register": "https://romeoville.org/FormCenter/Fire-Academy-13/Fire-Classes-Online-Registration-Fire-Ac-370",
   "page": "https://www.romeoville.org/DocumentCenter/View/15985/RFA-2026-Course-Catalog",
   "contact": "(815) 372-4042",
   "checked": "2026-11-07"
  },
  {
   "id": "rfa-coa",
   "cat": "officer",
   "name": "Command Officer Academy",
   "cert": null,
   "aka": "officer battalion chief command",
   "provider": "Romeoville Fire Academy",
   "location": "Romeoville Fire Academy, Romeoville",
   "lat": 41.655,
   "lng": -88.1,
   "cost": 725,
   "costNote": null,
   "length": null,
   "sessions": [
    {
     "s": "2027-06-14",
     "t": "Jun 14–18, 2027"
    },
    {
     "s": "2027-10-04",
     "t": "Oct 4–8, 2027"
    }
   ],
   "note": null,
   "register": "https://romeoville.org/FormCenter/Fire-Academy-13/Fire-Classes-Online-Registration-Fire-Ac-370",
   "page": "https://www.romeoville.org/DocumentCenter/View/15985/RFA-2026-Course-Catalog",
   "contact": "(815) 372-4042",
   "checked": "2026-11-07"
  },
  {
   "id": "rfa-insp1",
   "cat": "prev",
   "name": "Fire Inspector I (with IFIA)",
   "cert": "Fire Inspector I",
   "aka": "inspector prevention",
   "provider": "Romeoville Fire Academy",
   "location": "Romeoville Fire Academy, Romeoville",
   "lat": 41.655,
   "lng": -88.1,
   "cost": null,
   "costNote": "Contact the Illinois Fire Inspectors Association (IFIA).",
   "length": null,
   "sessions": [
    {
     "s": "2027-01-07",
     "t": "Thursdays, Jan 7–Feb 4, 2027"
    }
   ],
   "note": null,
   "register": "https://romeoville.org/FormCenter/Fire-Academy-13/Fire-Classes-Online-Registration-Fire-Ac-370",
   "page": "https://www.romeoville.org/DocumentCenter/View/15985/RFA-2026-Course-Catalog",
   "contact": "(815) 372-4042",
   "checked": "2026-11-07"
  },
  {
   "id": "rfa-insp2",
   "cat": "prev",
   "name": "Fire Inspector II (with IFIA)",
   "cert": "Fire Inspector II",
   "aka": "inspector prevention",
   "provider": "Romeoville Fire Academy",
   "location": "Romeoville Fire Academy, Romeoville",
   "lat": 41.655,
   "lng": -88.1,
   "cost": null,
   "costNote": "Contact the Illinois Fire Inspectors Association (IFIA).",
   "length": null,
   "sessions": [
    {
     "s": "2027-09-02",
     "t": "Thursdays, Sep 2–30, 2027"
    }
   ],
   "note": null,
   "register": "https://romeoville.org/FormCenter/Fire-Academy-13/Fire-Classes-Online-Registration-Fire-Ac-370",
   "page": "https://www.romeoville.org/DocumentCenter/View/15985/RFA-2026-Course-Catalog",
   "contact": "(815) 372-4042",
   "checked": "2026-11-07"
  },
  {
   "id": "rfa-pfle",
   "cat": "prev",
   "name": "Public Fire and Life Safety Educator (with IFIA)",
   "cert": "Public Fire and Life Safety Educator I",
   "aka": "public education",
   "provider": "Romeoville Fire Academy",
   "location": "Romeoville Fire Academy, Romeoville",
   "lat": 41.655,
   "lng": -88.1,
   "cost": null,
   "costNote": "Contact the Illinois Fire Inspectors Association (IFIA).",
   "length": null,
   "sessions": [
    {
     "s": "2027-07-26",
     "t": "Jul 26–30, 2027"
    }
   ],
   "note": null,
   "register": "https://romeoville.org/FormCenter/Fire-Academy-13/Fire-Classes-Online-Registration-Fire-Ac-370",
   "page": "https://www.romeoville.org/DocumentCenter/View/15985/RFA-2026-Course-Catalog",
   "contact": "(815) 372-4042",
   "checked": "2026-11-07"
  },
  {
   "id": "rfa-inv",
   "cat": "prev",
   "name": "Fire Investigator",
   "cert": "Fire Investigator",
   "aka": "investigation arson cause origin",
   "provider": "Romeoville Fire Academy",
   "location": "Troy FPD, Shorewood",
   "lat": 41.52,
   "lng": -88.2,
   "cost": 1600,
   "costNote": null,
   "length": null,
   "sessions": [
    {
     "s": "2027-09-27",
     "t": "Sep 27–Oct 1, Oct 11–15 and Oct 25–29, 2027 (all three weeks required)"
    }
   ],
   "note": null,
   "register": "https://romeoville.org/FormCenter/Fire-Academy-13/Fire-Classes-Online-Registration-Fire-Ac-370",
   "page": "https://www.romeoville.org/DocumentCenter/View/15985/RFA-2026-Course-Catalog",
   "contact": "(815) 372-4042",
   "checked": "2026-11-07"
  },
  {
   "id": "rfa-uas",
   "cat": "other",
   "name": "Public Safety UAS (Drone)",
   "cert": null,
   "aka": "drone UAS",
   "provider": "Romeoville Fire Academy",
   "location": "Romeoville Fire Academy, Romeoville",
   "lat": 41.655,
   "lng": -88.1,
   "cost": 500,
   "costNote": null,
   "length": null,
   "sessions": [
    {
     "s": "2027-05-17",
     "t": "May 17–21, 2027 (Crete Township FPD)"
    },
    {
     "s": "2027-09-13",
     "t": "Sep 13–17, 2027 (Troy FPD)"
    }
   ],
   "note": null,
   "register": "https://romeoville.org/FormCenter/Fire-Academy-13/Fire-Classes-Online-Registration-Fire-Ac-370",
   "page": "https://www.romeoville.org/DocumentCenter/View/15985/RFA-2026-Course-Catalog",
   "contact": "(815) 372-4042",
   "checked": "2026-11-07"
  },
  {
   "id": "nip-atf",
   "cat": "ff",
   "name": "Advanced Technician Firefighter (40 Hours)",
   "cert": "Advanced Technician Firefighter",
   "aka": "ATF advanced firefighter",
   "provider": "NIPSTA",
   "location": "NIPSTA, Glenview",
   "lat": 42.08,
   "lng": -87.82,
   "cost": null,
   "costNote": "Not listed. Check NIPSTA.",
   "length": "40 hours",
   "sessions": [],
   "note": "NIPSTA hasn't posted 2027 dates on this page yet.",
   "register": "https://secure.rec1.com/IL/nipsta-il/catalog",
   "page": "https://www.nipsta.org/360/Advanced-Technician-Firefighter",
   "contact": "(847) 998-8090",
   "checked": "2026-11-07"
  },
  {
   "id": "nip-vm",
   "cat": "rescue",
   "name": "Vehicle & Machinery: Common Passenger and Heavy Vehicle Rescue",
   "cert": "Common Passenger Vehicle Rescue",
   "aka": "VMO VMT extrication",
   "provider": "NIPSTA",
   "location": "NIPSTA, Glenview",
   "lat": 42.08,
   "lng": -87.82,
   "cost": null,
   "costNote": "Not listed. Check NIPSTA.",
   "length": "40 hours (8 online, 32 in person, Tue–Fri)",
   "sessions": [],
   "note": "NIPSTA hasn't posted 2027 dates on this page yet.",
   "register": "https://secure.rec1.com/IL/nipsta-il/catalog",
   "page": "https://www.nipsta.org/374/Vehicle-Machinery-Programs",
   "contact": "(847) 998-8090",
   "checked": "2026-11-07"
  },
  {
   "id": "nip-cs",
   "cat": "rescue",
   "name": "Confined Space Operations and Technician",
   "cert": "Confined Space Operations",
   "aka": "confined space",
   "provider": "NIPSTA",
   "location": "NIPSTA, Glenview",
   "lat": 42.08,
   "lng": -87.82,
   "cost": null,
   "costNote": "Not listed. Check NIPSTA.",
   "length": null,
   "sessions": [],
   "note": "NIPSTA hasn't posted 2027 dates on this page yet.",
   "register": "https://secure.rec1.com/IL/nipsta-il/catalog",
   "page": "https://www.nipsta.org/371/Confined-Space-Programs",
   "contact": "(847) 998-8090",
   "checked": "2026-11-07"
  },
  {
   "id": "nip-rope",
   "cat": "rescue",
   "name": "Rope Operations and Technician",
   "cert": "Rope Operations",
   "aka": "rope rescue",
   "provider": "NIPSTA",
   "location": "NIPSTA, Glenview",
   "lat": 42.08,
   "lng": -87.82,
   "cost": null,
   "costNote": "Not listed. Check NIPSTA.",
   "length": null,
   "sessions": [],
   "note": "NIPSTA hasn't posted 2027 dates on this page yet.",
   "register": "https://secure.rec1.com/IL/nipsta-il/catalog",
   "page": "https://www.nipsta.org/367/Rope-Rescue-Programs",
   "contact": "(847) 998-8090",
   "checked": "2026-11-07"
  },
  {
   "id": "nip-trench",
   "cat": "rescue",
   "name": "Trench Rescue Operations and Technician",
   "cert": "Trench Operations",
   "aka": "trench rescue",
   "provider": "NIPSTA",
   "location": "NIPSTA, Glenview",
   "lat": 42.08,
   "lng": -87.82,
   "cost": null,
   "costNote": "Not listed. Check NIPSTA.",
   "length": null,
   "sessions": [],
   "note": "NIPSTA hasn't posted 2027 dates on this page yet.",
   "register": "https://secure.rec1.com/IL/nipsta-il/catalog",
   "page": "https://www.nipsta.org/372/Trench-Rescue-Programs",
   "contact": "(847) 998-8090",
   "checked": "2026-11-07"
  },
  {
   "id": "nip-col",
   "cat": "rescue",
   "name": "Structural Collapse Operations and Technician",
   "cert": "Structural Collapse Operations",
   "aka": "collapse",
   "provider": "NIPSTA",
   "location": "NIPSTA, Glenview",
   "lat": 42.08,
   "lng": -87.82,
   "cost": null,
   "costNote": "Not listed. Check NIPSTA.",
   "length": null,
   "sessions": [],
   "note": "NIPSTA hasn't posted 2027 dates on this page yet.",
   "register": "https://secure.rec1.com/IL/nipsta-il/catalog",
   "page": "https://www.nipsta.org/373/Collapse-Rescue-Programs",
   "contact": "(847) 998-8090",
   "checked": "2026-11-07"
  },
  {
   "id": "nip-off",
   "cat": "officer",
   "name": "Fire Officer and Instructor Courses (CFO, AFO, Instructor I and II, ISO)",
   "cert": "Company Fire Officer",
   "aka": "officer instructor ISO lieutenant",
   "provider": "NIPSTA",
   "location": "NIPSTA, Glenview",
   "lat": 42.08,
   "lng": -87.82,
   "cost": null,
   "costNote": "Not listed. Check NIPSTA.",
   "length": null,
   "sessions": [],
   "note": "NIPSTA hasn't posted 2027 dates on this page yet.",
   "register": "https://secure.rec1.com/IL/nipsta-il/catalog",
   "page": "https://www.nipsta.org/394/Fire-Officer-Training",
   "contact": "(847) 998-8090",
   "checked": "2026-11-07"
  },
  {
   "id": "nip-inv",
   "cat": "prev",
   "name": "Fire Investigator",
   "cert": "Fire Investigator",
   "aka": "investigation arson",
   "provider": "NIPSTA",
   "location": "NIPSTA, Glenview",
   "lat": 42.08,
   "lng": -87.82,
   "cost": null,
   "costNote": "Not listed. Check NIPSTA.",
   "length": null,
   "sessions": [],
   "note": "NIPSTA hasn't posted 2027 dates on this page yet.",
   "register": "https://secure.rec1.com/IL/nipsta-il/catalog",
   "page": "https://www.nipsta.org/488/Fire-Investigator",
   "contact": "(847) 998-8090",
   "checked": "2026-11-07"
  },
  {
   "id": "nip-hm",
   "cat": "hazmat",
   "name": "Hazardous Materials Operations and Technician",
   "cert": "Hazardous Materials Operations",
   "aka": "hazmat",
   "provider": "NIPSTA",
   "location": "NIPSTA, Glenview",
   "lat": 42.08,
   "lng": -87.82,
   "cost": null,
   "costNote": "Not listed. Check NIPSTA.",
   "length": null,
   "sessions": [],
   "note": "NIPSTA hasn't posted 2027 dates on this page yet.",
   "register": "https://secure.rec1.com/IL/nipsta-il/catalog",
   "page": "https://www.nipsta.org/338/Hazardous-Materials-Training",
   "contact": "(847) 998-8090",
   "checked": "2026-11-07"
  },
  {
   "id": "ifsi-951-champaign",
   "cat": "officer",
   "name": "Advanced Fire Officer Blended / NFPA 1021 - Fire Officer II",
   "cert": "Advanced Fire Officer",
   "aka": "IFSI officer leadership",
   "provider": "IFSI",
   "location": "IFSI campus, Champaign",
   "address": "11 Gerty Dr., Champaign, IL 61820",
   "gk": "CHAMPAIGN|61820",
   "lat": 40.1165,
   "lng": -88.2431,
   "cost": 1575,
   "costNote": "Illinois rate. Out of state: $2,000.",
   "length": null,
   "sessions": [
    {
     "s": "2027-11-01",
     "e": "2027-12-17",
     "t": "Nov 1–Dec 17, 2027 (4 parts)",
     "u": "https://www.fsi.illinois.edu/content/courses/register/step1.cfm?activity=202800043&session=134788",
     "seats": "30 seats left"
    }
   ],
   "note": "Online registration asks for your Fire Chief's PIN.",
   "register": "https://www.fsi.illinois.edu/content/courses/register/step1.cfm?activity=202700048&session=132772",
   "page": "https://www.fsi.illinois.edu/content/courses/programs/description.cfm?course_id=951",
   "contact": "(217) 333-3800",
   "checked": "2026-11-09"
  },
  {
   "id": "ifsi-923-golconda",
   "cat": "app",
   "name": "Emergency Vehicle Operations",
   "cert": null,
   "aka": "IFSI engineer driver pump",
   "provider": "IFSI",
   "location": "Golconda (hosted by Rural Pope County FPD)",
   "address": "64 Franks Road, Golconda, IL 62938",
   "gk": "GOLCONDA|62938",
   "lat": 37.3673,
   "lng": -88.4864,
   "cost": 0,
   "costNote": "Tuition-free for members of Illinois fire departments (except Chicago FD).",
   "length": null,
   "sessions": [
    {
     "s": "2026-11-09",
     "e": "2026-11-09",
     "t": "Nov 9, 2026, 6 p.m.–10 p.m.",
     "u": "https://www.fsi.illinois.edu/content/courses/register/step1.cfm?activity=202700968&session=134943",
     "seats": "26 seats left"
    }
   ],
   "note": null,
   "register": "https://www.fsi.illinois.edu/content/courses/register/step1.cfm?activity=202700968&session=134943",
   "page": "https://www.fsi.illinois.edu/content/courses/programs/description.cfm?course_id=923",
   "contact": "(618) 949-3789",
   "checked": "2026-11-09"
  },
  {
   "id": "ifsi-1610-champaign",
   "cat": "app",
   "name": "Fire Apparatus Engineer - NFPA 1010 Driver/Operator - Pumper",
   "cert": "Fire Apparatus Engineer",
   "aka": "IFSI engineer driver pump",
   "provider": "IFSI",
   "location": "IFSI campus, Champaign",
   "address": "11 Gerty Dr, Champaign, IL 61820",
   "gk": "CHAMPAIGN|61820",
   "lat": 40.1165,
   "lng": -88.2431,
   "cost": 850,
   "costNote": "Illinois rate. Out of state: $1,200.",
   "length": null,
   "sessions": [
    {
     "s": "2026-11-09",
     "e": "2026-11-13",
     "t": "Nov 9–13, 2026, 8 a.m.–5 p.m. daily",
     "u": "https://www.fsi.illinois.edu/content/courses/register/step1.cfm?activity=202700026&session=132684",
     "seats": "4 seats left"
    },
    {
     "s": "2027-04-12",
     "e": "2027-04-16",
     "t": "Apr 12–16, 2027, 8 a.m.–5 p.m. daily",
     "u": "https://www.fsi.illinois.edu/content/courses/register/step1.cfm?activity=202700811&session=134727",
     "seats": "11 seats left"
    }
   ],
   "note": "Online registration asks for your Fire Chief's PIN.",
   "register": "https://www.fsi.illinois.edu/content/courses/register/step1.cfm?activity=202700026&session=132684",
   "page": "https://www.fsi.illinois.edu/content/courses/programs/description.cfm?course_id=1610",
   "contact": "(217) 333-3800",
   "checked": "2026-11-09"
  },
  {
   "id": "ifsi-1650-newlenox",
   "cat": "officer",
   "name": "Fire Department Incident Safety Officer / NFPA 1550",
   "cert": "Fire Department Incident Safety Officer",
   "aka": "IFSI officer leadership",
   "provider": "IFSI",
   "location": "New Lenox (hosted by New Lenox FPD)",
   "address": "New Lenox FPD, New Lenox, IL 60451",
   "gk": "NEW LENOX|60451",
   "lat": 41.512,
   "lng": -87.9656,
   "cost": 650,
   "costNote": "Illinois rate. Out of state: $850.",
   "length": null,
   "sessions": [
    {
     "s": "2026-11-09",
     "e": "2026-11-13",
     "t": "Nov 9–13, 2026, 8 a.m.–5 p.m. daily",
     "u": "https://www.fsi.illinois.edu/content/courses/register/step1.cfm?activity=202700147&session=133736",
     "seats": "5 seats left"
    }
   ],
   "note": "Online registration asks for your Fire Chief's PIN.",
   "register": "https://www.fsi.illinois.edu/content/courses/register/step1.cfm?activity=202700147&session=133736",
   "page": "https://www.fsi.illinois.edu/content/courses/programs/description.cfm?course_id=1650",
   "contact": "(815) 463-4500",
   "checked": "2026-11-09"
  },
  {
   "id": "ifsi-1423-alton",
   "cat": "prev",
   "name": "First Due for Fire Alarms",
   "cert": null,
   "aka": "IFSI prevention",
   "provider": "IFSI",
   "location": "Alton (hosted by Alton FD)",
   "address": "333 E. 20th St., Alton, IL 62002",
   "gk": "ALTON|62002",
   "lat": 38.8909,
   "lng": -90.1843,
   "cost": 0,
   "costNote": "Tuition-free for members of Illinois fire departments (except Chicago FD).",
   "length": null,
   "sessions": [
    {
     "s": "2026-11-09",
     "e": "2026-11-09",
     "t": "Nov 9, 2026, 9 a.m.–1 p.m.",
     "u": "https://www.fsi.illinois.edu/content/courses/register/step1.cfm?activity=202700884&session=134853",
     "seats": "20 seats left"
    },
    {
     "s": "2026-11-10",
     "e": "2026-11-10",
     "t": "Nov 10, 2026, 9 a.m.–1 p.m.",
     "u": "https://www.fsi.illinois.edu/content/courses/register/step1.cfm?activity=202700885&session=134854",
     "seats": "30 seats left"
    },
    {
     "s": "2026-11-11",
     "e": "2026-11-11",
     "t": "Nov 11, 2026, 9 a.m.–1 p.m.",
     "u": "https://www.fsi.illinois.edu/content/courses/register/step1.cfm?activity=202700886&session=134855",
     "seats": "30 seats left"
    },
    {
     "s": "2026-11-12",
     "e": "2026-11-12",
     "t": "Nov 12, 2026, 9 a.m.–1 p.m.",
     "u": "https://www.fsi.illinois.edu/content/courses/register/step1.cfm?activity=202700887&session=134856",
     "seats": "30 seats left"
    }
   ],
   "note": null,
   "register": "https://www.fsi.illinois.edu/content/courses/register/step1.cfm?activity=202700884&session=134853",
   "page": "https://www.fsi.illinois.edu/content/courses/programs/description.cfm?course_id=1423",
   "contact": "(618) 463-3565",
   "checked": "2026-11-09"
  },
  {
   "id": "ifsi-869-urbana",
   "cat": "officer",
   "name": "Leadership Development and Decision Making Program: Chief Officer Level",
   "cert": null,
   "aka": "IFSI officer leadership",
   "provider": "IFSI",
   "location": "IFSI class in Urbana",
   "address": "ILEAS, Urbana, IL 61802",
   "gk": "URBANA|61802",
   "lat": 40.1117,
   "lng": -88.2073,
   "cost": 0,
   "costNote": "Tuition-free for members of Illinois fire departments (except Chicago FD). Out of state: $2,700.",
   "length": null,
   "sessions": [
    {
     "s": "2026-11-09",
     "e": "2026-11-13",
     "t": "Nov 9–13, 2026, 8 a.m.–5 p.m. daily",
     "u": "https://www.fsi.illinois.edu/content/courses/register/step1.cfm?activity=202700011&session=132568",
     "seats": "4 seats left"
    },
    {
     "s": "2027-05-03",
     "e": "2027-05-07",
     "t": "May 3–7, 2027, 8 a.m.–5 p.m. daily",
     "u": "https://www.fsi.illinois.edu/content/courses/register/step1.cfm?activity=202700798&session=134709",
     "seats": "10 seats left"
    }
   ],
   "note": "Online registration asks for your Fire Chief's PIN.",
   "register": "https://www.fsi.illinois.edu/content/courses/register/step1.cfm?activity=202700011&session=132568",
   "page": "https://www.fsi.illinois.edu/content/courses/programs/description.cfm?course_id=869",
   "contact": "(217) 333-3800",
   "checked": "2026-11-09"
  },
  {
   "id": "ifsi-871-urbana",
   "cat": "officer",
   "name": "Leadership Development and Decision Making Program: Fire Officer Level",
   "cert": null,
   "aka": "IFSI officer leadership",
   "provider": "IFSI",
   "location": "IFSI class in Urbana",
   "address": "ILEAS, Urbana, IL 61802",
   "gk": "URBANA|61802",
   "lat": 40.1117,
   "lng": -88.2073,
   "cost": 0,
   "costNote": "Tuition-free for members of Illinois fire departments (except Chicago FD). Out of state: $2,350.",
   "length": null,
   "sessions": [
    {
     "s": "2026-11-09",
     "e": "2026-11-13",
     "t": "Nov 9–13, 2026, 8 a.m.–5 p.m. daily",
     "u": "https://www.fsi.illinois.edu/content/courses/register/step1.cfm?activity=202700010&session=132567",
     "seats": "Full"
    },
    {
     "s": "2027-05-03",
     "e": "2027-05-07",
     "t": "May 3–7, 2027, 8 a.m.–5 p.m. daily",
     "u": "https://www.fsi.illinois.edu/content/courses/register/step1.cfm?activity=202700797&session=134708",
     "seats": "10 seats left"
    }
   ],
   "note": "Online registration asks for your Fire Chief's PIN.",
   "register": "https://www.fsi.illinois.edu/content/courses/register/step1.cfm?activity=202700010&session=132567",
   "page": "https://www.fsi.illinois.edu/content/courses/programs/description.cfm?course_id=871",
   "contact": "(217) 333-3800",
   "checked": "2026-11-09"
  },
  {
   "id": "ifsi-870-urbana",
   "cat": "officer",
   "name": "Leadership Development and Decision Making Program: Firefighter Level",
   "cert": null,
   "aka": "IFSI officer leadership",
   "provider": "IFSI",
   "location": "IFSI class in Urbana",
   "address": "ILEAS, Urbana, IL 61802",
   "gk": "URBANA|61802",
   "lat": 40.1117,
   "lng": -88.2073,
   "cost": 0,
   "costNote": "Tuition-free for members of Illinois fire departments (except Chicago FD). Out of state: $1,950.",
   "length": null,
   "sessions": [
    {
     "s": "2026-11-09",
     "e": "2026-11-13",
     "t": "Nov 9–13, 2026, 8 a.m.–5 p.m. daily",
     "u": "https://www.fsi.illinois.edu/content/courses/register/step1.cfm?activity=202700009&session=132566",
     "seats": "11 seats left"
    },
    {
     "s": "2027-05-03",
     "e": "2027-05-07",
     "t": "May 3–7, 2027, 8 a.m.–5 p.m. daily",
     "u": "https://www.fsi.illinois.edu/content/courses/register/step1.cfm?activity=202700796&session=134707",
     "seats": "16 seats left"
    }
   ],
   "note": "Online registration asks for your Fire Chief's PIN.",
   "register": "https://www.fsi.illinois.edu/content/courses/register/step1.cfm?activity=202700009&session=132566",
   "page": "https://www.fsi.illinois.edu/content/courses/programs/description.cfm?course_id=870",
   "contact": "(217) 333-3800",
   "checked": "2026-11-09"
  },
  {
   "id": "ifsi-1061-silvis",
   "cat": "other",
   "name": "Resiliency Development for First Responders",
   "cert": null,
   "aka": "IFSI ",
   "provider": "IFSI",
   "location": "Silvis (hosted by Silvis FD)",
   "address": "2010 10th Street, Silvis, IL 61282",
   "gk": "SILVIS|61282",
   "lat": 41.5123,
   "lng": -90.4151,
   "cost": 0,
   "costNote": "Tuition-free for members of Illinois fire departments (except Chicago FD).",
   "length": null,
   "sessions": [
    {
     "s": "2026-11-09",
     "e": "2026-11-09",
     "t": "Nov 9, 2026, 6:30 p.m.–10:30 p.m.",
     "u": "https://www.fsi.illinois.edu/content/courses/register/step1.cfm?activity=202700660&session=134540",
     "seats": "40 seats left"
    }
   ],
   "note": null,
   "register": "https://www.fsi.illinois.edu/content/courses/register/step1.cfm?activity=202700660&session=134540",
   "page": "https://www.fsi.illinois.edu/content/courses/programs/description.cfm?course_id=1061",
   "contact": "(309) 792-9553",
   "checked": "2026-11-09"
  },
  {
   "id": "ifsi-1438-orlandpark",
   "cat": "prev",
   "name": "Youth Firesetting Prevention and Intervention Specialist",
   "cert": "Youth Firesetter Intervention Specialist",
   "aka": "IFSI prevention",
   "provider": "IFSI",
   "location": "Orland Park (hosted by Orland FPD)",
   "address": "10728 W 163rd Pl, Orland Park, IL 60467",
   "gk": "ORLAND PARK|60467",
   "lat": 41.6307,
   "lng": -87.8536,
   "cost": 250,
   "costNote": "Illinois rate. Out of state: $450.",
   "length": null,
   "sessions": [
    {
     "s": "2026-11-09",
     "e": "2026-11-10",
     "t": "Nov 9–10, 2026, 8 a.m.–5 p.m. daily",
     "u": "https://www.fsi.illinois.edu/content/courses/register/step1.cfm?activity=202700055&session=132784",
     "seats": "18 seats left"
    }
   ],
   "note": "Online registration asks for your Fire Chief's PIN.",
   "register": "https://www.fsi.illinois.edu/content/courses/register/step1.cfm?activity=202700055&session=132784",
   "page": "https://www.fsi.illinois.edu/content/courses/programs/description.cfm?course_id=1438",
   "contact": "(708) 349-0074",
   "checked": "2026-11-09"
  },
  {
   "id": "ifsi-176-lincolnwoo",
   "cat": "rescue",
   "name": "Basic Auto Extrication",
   "cert": null,
   "aka": "IFSI technical rescue",
   "provider": "IFSI",
   "location": "Lincolnwood (hosted by Lincolnwood FD)",
   "address": "6900 Lincoln Ave, Lincolnwood, IL 60712",
   "gk": "LINCOLNWOOD|60712",
   "lat": 42.0056,
   "lng": -87.7356,
   "cost": 0,
   "costNote": "Tuition-free for members of Illinois fire departments (except Chicago FD).",
   "length": null,
   "sessions": [
    {
     "s": "2026-11-10",
     "e": "2026-11-10",
     "t": "Nov 10, 2026, 8 a.m.–5 p.m.",
     "u": "https://www.fsi.illinois.edu/content/courses/register/step1.cfm?activity=202700841&session=134792",
     "seats": "6 seats left"
    },
    {
     "s": "2026-11-11",
     "e": "2026-11-11",
     "t": "Nov 11, 2026, 8 a.m.–5 p.m.",
     "u": "https://www.fsi.illinois.edu/content/courses/register/step1.cfm?activity=202700842&session=134793",
     "seats": "7 seats left"
    },
    {
     "s": "2026-11-12",
     "e": "2026-11-12",
     "t": "Nov 12, 2026, 8 a.m.–5 p.m.",
     "u": "https://www.fsi.illinois.edu/content/courses/register/step1.cfm?activity=202700843&session=134794",
     "seats": "9 seats left"
    }
   ],
   "note": null,
   "register": "https://www.fsi.illinois.edu/content/courses/register/step1.cfm?activity=202700841&session=134792",
   "page": "https://www.fsi.illinois.edu/content/courses/programs/description.cfm?course_id=176",
   "contact": "(847) 673-1545",
   "checked": "2026-11-09"
  },
  {
   "id": "ifsi-1427-robbins",
   "cat": "rescue",
   "name": "Elevator Equipment, Function and Rescue Considerations",
   "cert": null,
   "aka": "IFSI technical rescue",
   "provider": "IFSI",
   "location": "Robbins (hosted by Robbins FD)",
   "address": "3327 W. 137th St., Robbins, IL 60472",
   "gk": "ROBBINS|60472",
   "lat": 41.6439,
   "lng": -87.7037,
   "cost": 0,
   "costNote": "Tuition-free for members of Illinois fire departments (except Chicago FD).",
   "length": null,
   "sessions": [
    {
     "s": "2026-11-10",
     "e": "2026-11-10",
     "t": "Nov 10, 2026, 8 a.m.–noon",
     "u": "https://www.fsi.illinois.edu/content/courses/register/step1.cfm?activity=202700367&session=134214",
     "seats": "26 seats left"
    },
    {
     "s": "2026-11-11",
     "e": "2026-11-11",
     "t": "Nov 11, 2026, 8 a.m.–noon",
     "u": "https://www.fsi.illinois.edu/content/courses/register/step1.cfm?activity=202700368&session=134215",
     "seats": "27 seats left"
    },
    {
     "s": "2026-11-12",
     "e": "2026-11-12",
     "t": "Nov 12, 2026, 8 a.m.–noon",
     "u": "https://www.fsi.illinois.edu/content/courses/register/step1.cfm?activity=202700369&session=134216",
     "seats": "29 seats left"
    }
   ],
   "note": "Online registration asks for your Fire Chief's PIN.",
   "register": "https://www.fsi.illinois.edu/content/courses/register/step1.cfm?activity=202700367&session=134214",
   "page": "https://www.fsi.illinois.edu/content/courses/programs/description.cfm?course_id=1427",
   "contact": "(708) 385-8940",
   "checked": "2026-11-09"
  },
  {
   "id": "ifsi-44-mascoutah",
   "cat": "hazmat",
   "name": "Liquefied Petroleum Gas (Propane) Fire Fighting",
   "cert": null,
   "aka": "IFSI hazmat",
   "provider": "IFSI",
   "location": "Mascoutah (hosted by Mascoutah FD/FPD)",
   "address": "224 N Railway St., Mascoutah, IL 62258",
   "gk": "MASCOUTAH|62258",
   "lat": 38.4903,
   "lng": -89.7932,
   "cost": 0,
   "costNote": "Tuition-free for members of Illinois fire departments (except Chicago FD).",
   "length": null,
   "sessions": [
    {
     "s": "2026-11-10",
     "e": "2026-11-10",
     "t": "Nov 10, 2026, 6:30 p.m.–10:30 p.m.",
     "u": "https://www.fsi.illinois.edu/content/courses/register/step1.cfm?activity=202700764&session=134671",
     "seats": "57 seats left"
    }
   ],
   "note": null,
   "register": "https://www.fsi.illinois.edu/content/courses/register/step1.cfm?activity=202700764&session=134671",
   "page": "https://www.fsi.illinois.edu/content/courses/programs/description.cfm?course_id=44",
   "contact": "(618) 566-2103",
   "checked": "2026-11-09"
  },
  {
   "id": "ifsi-566-maywood",
   "cat": "ff",
   "name": "Ventilation",
   "cert": null,
   "aka": "IFSI firefighter",
   "provider": "IFSI",
   "location": "Maywood (hosted by Maywood FD)",
   "address": "700 W St. Charles Rd, Maywood, IL 60153",
   "gk": "MAYWOOD|60153",
   "lat": 41.879,
   "lng": -87.8436,
   "cost": 0,
   "costNote": "Tuition-free for members of Illinois fire departments (except Chicago FD).",
   "length": null,
   "sessions": [
    {
     "s": "2026-11-10",
     "e": "2026-11-10",
     "t": "Nov 10, 2026, 8 a.m.–5 p.m.",
     "u": "https://www.fsi.illinois.edu/content/courses/register/step1.cfm?activity=202700897&session=134869",
     "seats": "25 seats left"
    },
    {
     "s": "2026-11-11",
     "e": "2026-11-11",
     "t": "Nov 11, 2026, 8 a.m.–5 p.m.",
     "u": "https://www.fsi.illinois.edu/content/courses/register/step1.cfm?activity=202700898&session=134870",
     "seats": "24 seats left"
    },
    {
     "s": "2026-11-12",
     "e": "2026-11-12",
     "t": "Nov 12, 2026, 8 a.m.–5 p.m.",
     "u": "https://www.fsi.illinois.edu/content/courses/register/step1.cfm?activity=202700899&session=134871",
     "seats": "25 seats left"
    }
   ],
   "note": null,
   "register": "https://www.fsi.illinois.edu/content/courses/register/step1.cfm?activity=202700897&session=134869",
   "page": "https://www.fsi.illinois.edu/content/courses/programs/description.cfm?course_id=566",
   "contact": "(708) 681-8860",
   "checked": "2026-11-09"
  },
  {
   "id": "ifsi-593-polo",
   "cat": "officer",
   "name": "Basic Tactics and Strategy",
   "cert": null,
   "aka": "IFSI officer leadership",
   "provider": "IFSI",
   "location": "Polo (hosted by Polo FPD)",
   "address": "206 S. Franklin, Polo, IL 61064",
   "gk": "POLO|61064",
   "lat": 41.9861,
   "lng": -89.5793,
   "cost": 0,
   "costNote": "Tuition-free for members of Illinois fire departments (except Chicago FD).",
   "length": null,
   "sessions": [
    {
     "s": "2026-11-11",
     "e": "2026-11-11",
     "t": "Nov 11, 2026, 6 p.m.–10 p.m.",
     "u": "https://www.fsi.illinois.edu/content/courses/register/step1.cfm?activity=202700888&session=134857",
     "seats": "15 seats left"
    }
   ],
   "note": null,
   "register": "https://www.fsi.illinois.edu/content/courses/register/step1.cfm?activity=202700888&session=134857",
   "page": "https://www.fsi.illinois.edu/content/courses/programs/description.cfm?course_id=593",
   "contact": "(815) 946-2153",
   "checked": "2026-11-09"
  },
  {
   "id": "ifsi-159-carrollton",
   "cat": "app",
   "name": "Basic Pumps",
   "cert": null,
   "aka": "IFSI engineer driver pump",
   "provider": "IFSI",
   "location": "Carrollton (hosted by Carrollton FPD)",
   "address": "633 S. Main, Carrollton, IL 62016",
   "gk": "CARROLLTON|62016",
   "lat": 39.3023,
   "lng": -90.4071,
   "cost": 0,
   "costNote": "Tuition-free for members of Illinois fire departments (except Chicago FD).",
   "length": null,
   "sessions": [
    {
     "s": "2026-11-12",
     "e": "2026-11-12",
     "t": "Nov 12, 2026, 6 p.m.–10 p.m.",
     "u": "https://www.fsi.illinois.edu/content/courses/register/step1.cfm?activity=202701011&session=135056",
     "seats": "9 seats left"
    }
   ],
   "note": null,
   "register": "https://www.fsi.illinois.edu/content/courses/register/step1.cfm?activity=202701011&session=135056",
   "page": "https://www.fsi.illinois.edu/content/courses/programs/description.cfm?course_id=159",
   "contact": "(217) 942-3618",
   "checked": "2026-11-09"
  },
  {
   "id": "ifsi-282-elizabeth",
   "cat": "rescue",
   "name": "Agriculture Rescue Techniques",
   "cert": null,
   "aka": "IFSI technical rescue",
   "provider": "IFSI",
   "location": "Elizabeth (hosted by Elizabeth Community FPD)",
   "address": "202 W. Madison St., Elizabeth, IL 61028",
   "gk": "ELIZABETH|61028",
   "lat": 42.3178,
   "lng": -90.2215,
   "cost": 0,
   "costNote": "Tuition-free for members of Illinois fire departments (except Chicago FD).",
   "length": null,
   "sessions": [
    {
     "s": "2026-11-14",
     "e": "2026-11-14",
     "t": "Nov 14, 2026, 8 a.m.–4 p.m.",
     "u": "https://www.fsi.illinois.edu/content/courses/register/step1.cfm?activity=202700570&session=134416",
     "seats": "19 seats left"
    }
   ],
   "note": null,
   "register": "https://www.fsi.illinois.edu/content/courses/register/step1.cfm?activity=202700570&session=134416",
   "page": "https://www.fsi.illinois.edu/content/courses/programs/description.cfm?course_id=282",
   "contact": "(815) 858-3612",
   "checked": "2026-11-09"
  },
  {
   "id": "ifsi-210-tilton",
   "cat": "officer",
   "name": "Basic Company Officer",
   "cert": null,
   "aka": "IFSI officer leadership",
   "provider": "IFSI",
   "location": "Tilton (hosted by Tilton FD)",
   "address": "115 S 5th, Tilton, IL 61833",
   "gk": "TILTON|61833",
   "lat": 40.0953,
   "lng": -87.6475,
   "cost": 0,
   "costNote": "Tuition-free for members of Illinois fire departments (except Chicago FD).",
   "length": null,
   "sessions": [
    {
     "s": "2026-11-14",
     "e": "2026-11-14",
     "t": "Nov 14, 2026, 8 a.m.–5 p.m.",
     "u": "https://www.fsi.illinois.edu/content/courses/register/step1.cfm?activity=202700156&session=133792",
     "seats": "47 seats left"
    }
   ],
   "note": null,
   "register": "https://www.fsi.illinois.edu/content/courses/register/step1.cfm?activity=202700156&session=133792",
   "page": "https://www.fsi.illinois.edu/content/courses/programs/description.cfm?course_id=210",
   "contact": "(217) 477-0800",
   "checked": "2026-11-09"
  },
  {
   "id": "ifsi-481-decatur",
   "cat": "ff",
   "name": "Basic Truck Company Operations",
   "cert": null,
   "aka": "IFSI firefighter",
   "provider": "IFSI",
   "location": "Decatur (hosted by Harristown FPD)",
   "address": "4417 W. Main St., Decatur, IL 62522",
   "gk": "DECATUR|62522",
   "lat": 39.8454,
   "lng": -88.9524,
   "cost": 0,
   "costNote": "Tuition-free for members of Illinois fire departments (except Chicago FD).",
   "length": null,
   "sessions": [
    {
     "s": "2026-11-14",
     "e": "2026-11-14",
     "t": "Nov 14, 2026, 8 a.m.–4 p.m.",
     "u": "https://www.fsi.illinois.edu/content/courses/register/step1.cfm?activity=202700983&session=134964",
     "seats": "1 seat left"
    }
   ],
   "note": null,
   "register": "https://www.fsi.illinois.edu/content/courses/register/step1.cfm?activity=202700983&session=134964",
   "page": "https://www.fsi.illinois.edu/content/courses/programs/description.cfm?course_id=481",
   "contact": "(217) 423-2912",
   "checked": "2026-11-09"
  },
  {
   "id": "ifsi-155-coffeen",
   "cat": "officer",
   "name": "Fireground Management for Small Career and Volunteer Departments",
   "cert": null,
   "aka": "IFSI officer leadership",
   "provider": "IFSI",
   "location": "Coffeen (hosted by Coffeen FPD)",
   "address": "113 W. Main St., Coffeen, IL 62017",
   "gk": "COFFEEN|62017",
   "lat": 39.0892,
   "lng": -89.3906,
   "cost": 0,
   "costNote": "Tuition-free for members of Illinois fire departments (except Chicago FD).",
   "length": null,
   "sessions": [
    {
     "s": "2026-11-14",
     "e": "2026-11-14",
     "t": "Nov 14, 2026, 8 a.m.–5 p.m.",
     "u": "https://www.fsi.illinois.edu/content/courses/register/step1.cfm?activity=202700153&session=133767",
     "seats": "22 seats left"
    }
   ],
   "note": null,
   "register": "https://www.fsi.illinois.edu/content/courses/register/step1.cfm?activity=202700153&session=133767",
   "page": "https://www.fsi.illinois.edu/content/courses/programs/description.cfm?course_id=155",
   "contact": "(217) 534-2410",
   "checked": "2026-11-09"
  },
  {
   "id": "ifsi-3-highland",
   "cat": "officer",
   "name": "Instructor I",
   "cert": "Fire Service Instructor I",
   "aka": "IFSI officer leadership",
   "provider": "IFSI",
   "location": "Highland (hosted by Highland FD)",
   "address": "12990 Troxler Ave, Highland, IL 62249",
   "gk": "HIGHLAND|62249",
   "lat": 38.7396,
   "lng": -89.6715,
   "cost": 0,
   "costNote": "Tuition-free for members of Illinois fire departments (except Chicago FD). Out of state: $800.",
   "length": null,
   "sessions": [
    {
     "s": "2026-11-14",
     "e": "2026-11-22",
     "t": "Nov 14–22, 2026 (2 parts)",
     "u": "https://www.fsi.illinois.edu/content/courses/register/step1.cfm?activity=202700178&session=133841",
     "seats": "11 seats left"
    }
   ],
   "note": "Online registration asks for your Fire Chief's PIN.",
   "register": "https://www.fsi.illinois.edu/content/courses/register/step1.cfm?activity=202700178&session=133841",
   "page": "https://www.fsi.illinois.edu/content/courses/programs/description.cfm?course_id=3",
   "contact": "(618) 654-3827",
   "checked": "2026-11-09"
  },
  {
   "id": "ifsi-723-sullivan",
   "cat": "officer",
   "name": "Leadership, Accountability, Culture & Knowledge (LACK)",
   "cert": null,
   "aka": "IFSI officer leadership",
   "provider": "IFSI",
   "location": "Sullivan (hosted by Sullivan FPD)",
   "address": "115 W Harrison St., Sullivan, IL 61951",
   "gk": "SULLIVAN|61951",
   "lat": 39.5995,
   "lng": -88.6078,
   "cost": 0,
   "costNote": "Tuition-free for members of Illinois fire departments (except Chicago FD).",
   "length": null,
   "sessions": [
    {
     "s": "2026-11-14",
     "e": "2026-11-14",
     "t": "Nov 14, 2026, 8 a.m.–noon",
     "u": "https://www.fsi.illinois.edu/content/courses/register/step1.cfm?activity=202700256&session=134087",
     "seats": "42 seats left"
    }
   ],
   "note": null,
   "register": "https://www.fsi.illinois.edu/content/courses/register/step1.cfm?activity=202700256&session=134087",
   "page": "https://www.fsi.illinois.edu/content/courses/programs/description.cfm?course_id=723",
   "contact": "(217) 728-8714",
   "checked": "2026-11-09"
  },
  {
   "id": "ifsi-691-champaign",
   "cat": "ff",
   "name": "Light and Fight - On Campus",
   "cert": null,
   "aka": "IFSI firefighter",
   "provider": "IFSI",
   "location": "IFSI campus, Champaign",
   "address": "11 Gerty Dr, Champaign, IL 61820",
   "gk": "CHAMPAIGN|61820",
   "lat": 40.1165,
   "lng": -88.2431,
   "cost": 0,
   "costNote": "Tuition-free for members of Illinois fire departments (except Chicago FD). Out of state: $325.",
   "length": null,
   "sessions": [
    {
     "s": "2026-11-14",
     "e": "2026-11-14",
     "t": "Nov 14, 2026, 8 a.m.–5 p.m.",
     "u": "https://www.fsi.illinois.edu/content/courses/register/step1.cfm?activity=202700073&session=132841",
     "seats": "1 seat left"
    },
    {
     "s": "2027-03-13",
     "e": "2027-03-13",
     "t": "Mar 13, 2027, 8 a.m.–5 p.m.",
     "u": "https://www.fsi.illinois.edu/content/courses/register/step1.cfm?activity=202700814&session=134735",
     "seats": "60 seats left"
    },
    {
     "s": "2027-03-27",
     "e": "2027-03-27",
     "t": "Mar 27, 2027, 8 a.m.–5 p.m.",
     "u": "https://www.fsi.illinois.edu/content/courses/register/step1.cfm?activity=202700815&session=134736",
     "seats": "60 seats left"
    },
    {
     "s": "2027-05-08",
     "e": "2027-05-08",
     "t": "May 8, 2027, 8 a.m.–5 p.m.",
     "u": "https://www.fsi.illinois.edu/content/courses/register/step1.cfm?activity=202700816&session=134737",
     "seats": "60 seats left"
    }
   ],
   "note": "Online registration asks for your Fire Chief's PIN.",
   "register": "https://www.fsi.illinois.edu/content/courses/register/step1.cfm?activity=202700073&session=132841",
   "page": "https://www.fsi.illinois.edu/content/courses/programs/description.cfm?course_id=691",
   "contact": "(217) 333-3800",
   "checked": "2026-11-09"
  },
  {
   "id": "ifsi-177-hillsboro",
   "cat": "rescue",
   "name": "Advanced Auto Extrication",
   "cert": null,
   "aka": "IFSI technical rescue",
   "provider": "IFSI",
   "location": "Hillsboro (hosted by Hillsboro Vol. FD)",
   "address": "101 S. Broad St., Hillsboro, IL 62049",
   "gk": "HILLSBORO|62049",
   "lat": 39.161,
   "lng": -89.4934,
   "cost": 0,
   "costNote": "Tuition-free for members of Illinois fire departments (except Chicago FD).",
   "length": null,
   "sessions": [
    {
     "s": "2026-11-16",
     "e": "2026-11-16",
     "t": "Nov 16, 2026, 6:30 p.m.–10 p.m.",
     "u": "https://www.fsi.illinois.edu/content/courses/register/step1.cfm?activity=202700774&session=134681",
     "seats": "30 seats left"
    }
   ],
   "note": null,
   "register": "https://www.fsi.illinois.edu/content/courses/register/step1.cfm?activity=202700774&session=134681",
   "page": "https://www.fsi.illinois.edu/content/courses/programs/description.cfm?course_id=177",
   "contact": "(217) 532-2345",
   "checked": "2026-11-09"
  },
  {
   "id": "ifsi-1610-litchfield",
   "cat": "app",
   "name": "Fire Apparatus Engineer - NFPA 1010 Driver/Operator - Pumper",
   "cert": "Fire Apparatus Engineer",
   "aka": "IFSI engineer driver pump",
   "provider": "IFSI",
   "location": "Litchfield (hosted by Litchfield FD)",
   "address": "201 E. Edwards, Litchfield, IL 62056",
   "gk": "LITCHFIELD|62056",
   "lat": 39.1769,
   "lng": -89.6556,
   "cost": 850,
   "costNote": "Illinois rate. Out of state: $1,200.",
   "length": null,
   "sessions": [
    {
     "s": "2026-11-16",
     "e": "2026-11-20",
     "t": "Nov 16–20, 2026, 8 a.m.–5 p.m. daily",
     "u": "https://www.fsi.illinois.edu/content/courses/register/step1.cfm?activity=202700258&session=134092",
     "seats": "8 seats left"
    }
   ],
   "note": "Online registration asks for your Fire Chief's PIN.",
   "register": "https://www.fsi.illinois.edu/content/courses/register/step1.cfm?activity=202700258&session=134092",
   "page": "https://www.fsi.illinois.edu/content/courses/programs/description.cfm?course_id=1610",
   "contact": "(217) 851-6073",
   "checked": "2026-11-09"
  },
  {
   "id": "ifsi-560-mountcarro",
   "cat": "ff",
   "name": "Fire Behavior and Reading Smoke",
   "cert": null,
   "aka": "IFSI firefighter",
   "provider": "IFSI",
   "location": "Mount Carroll (hosted by Mount Carroll FPD)",
   "address": "318 S. Clay St., Mount Carroll, IL 61053",
   "gk": "MOUNT CARROLL|61053",
   "lat": 42.0949,
   "lng": -89.9777,
   "cost": 0,
   "costNote": "Tuition-free for members of Illinois fire departments (except Chicago FD).",
   "length": null,
   "sessions": [
    {
     "s": "2026-11-16",
     "e": "2026-11-16",
     "t": "Nov 16, 2026, 5:30 p.m.–9:30 p.m.",
     "u": "https://www.fsi.illinois.edu/content/courses/register/step1.cfm?activity=202700710&session=134609",
     "seats": "22 seats left"
    }
   ],
   "note": null,
   "register": "https://www.fsi.illinois.edu/content/courses/register/step1.cfm?activity=202700710&session=134609",
   "page": "https://www.fsi.illinois.edu/content/courses/programs/description.cfm?course_id=560",
   "contact": "(815) 244-4502",
   "checked": "2026-11-09"
  },
  {
   "id": "ifsi-561-eastalton",
   "cat": "ff",
   "name": "Fire Ground Ropes and Knots",
   "cert": null,
   "aka": "IFSI firefighter",
   "provider": "IFSI",
   "location": "East Alton (hosted by Rosewood Heights FPD)",
   "address": "45 E. Airline Dr., East Alton, IL 62024",
   "gk": "EAST ALTON|62024",
   "lat": 38.8803,
   "lng": -90.1112,
   "cost": 0,
   "costNote": "Tuition-free for members of Illinois fire departments (except Chicago FD).",
   "length": null,
   "sessions": [
    {
     "s": "2026-11-16",
     "e": "2026-11-16",
     "t": "Nov 16, 2026, 6 p.m.–10 p.m.",
     "u": "https://www.fsi.illinois.edu/content/courses/register/step1.cfm?activity=202700183&session=133847",
     "seats": "28 seats left"
    }
   ],
   "note": null,
   "register": "https://www.fsi.illinois.edu/content/courses/register/step1.cfm?activity=202700183&session=133847",
   "page": "https://www.fsi.illinois.edu/content/courses/programs/description.cfm?course_id=561",
   "contact": "(618) 259-3311",
   "checked": "2026-11-09"
  },
  {
   "id": "ifsi-149-champaign",
   "cat": "officer",
   "name": "Fireground Command Officer School",
   "cert": null,
   "aka": "IFSI officer leadership",
   "provider": "IFSI",
   "location": "IFSI campus, Champaign",
   "address": "11 Gerty Dr, Champaign, IL 61820",
   "gk": "CHAMPAIGN|61820",
   "lat": 40.1165,
   "lng": -88.2431,
   "cost": 2075,
   "costNote": "Illinois rate. Out of state: $2,275.",
   "length": null,
   "sessions": [
    {
     "s": "2026-11-16",
     "e": "2026-11-20",
     "t": "Nov 16–20, 2026, 8 a.m.–5 p.m. daily",
     "u": "https://www.fsi.illinois.edu/content/courses/register/step1.cfm?activity=202700057&session=132786"
    },
    {
     "s": "2027-05-10",
     "e": "2027-05-14",
     "t": "May 10–14, 2027, 8 a.m.–5 p.m. daily",
     "u": "https://www.fsi.illinois.edu/content/courses/register/step1.cfm?activity=202700829&session=134762"
    }
   ],
   "note": "Online registration asks for your Fire Chief's PIN.",
   "register": "https://www.fsi.illinois.edu/content/courses/register/step1.cfm?activity=202700057&session=132786",
   "page": "https://www.fsi.illinois.edu/content/courses/programs/description.cfm?course_id=149",
   "contact": "(217) 333-3800",
   "checked": "2026-11-09"
  },
  {
   "id": "ifsi-148-champaign",
   "cat": "officer",
   "name": "Fireground Company Officer School",
   "cert": null,
   "aka": "IFSI officer leadership",
   "provider": "IFSI",
   "location": "IFSI campus, Champaign",
   "address": "11 Gerty Dr, Champaign, IL 61820",
   "gk": "CHAMPAIGN|61820",
   "lat": 40.1165,
   "lng": -88.2431,
   "cost": 2475,
   "costNote": "Illinois rate. Out of state: $2,675.",
   "length": null,
   "sessions": [
    {
     "s": "2026-11-16",
     "e": "2026-11-20",
     "t": "Nov 16–20, 2026, 8 a.m.–5 p.m. daily",
     "u": "https://www.fsi.illinois.edu/content/courses/register/step1.cfm?activity=202700058&session=132787",
     "seats": "Full"
    },
    {
     "s": "2027-05-10",
     "e": "2027-05-14",
     "t": "May 10–14, 2027, 8 a.m.–5 p.m. daily",
     "u": "https://www.fsi.illinois.edu/content/courses/register/step1.cfm?activity=202700828&session=134761",
     "seats": "36 seats left"
    }
   ],
   "note": "Online registration asks for your Fire Chief's PIN.",
   "register": "https://www.fsi.illinois.edu/content/courses/register/step1.cfm?activity=202700058&session=132787",
   "page": "https://www.fsi.illinois.edu/content/courses/programs/description.cfm?course_id=148",
   "contact": "(217) 333-3800",
   "checked": "2026-11-09"
  },
  {
   "id": "ifsi-3-joliet",
   "cat": "officer",
   "name": "Instructor I",
   "cert": "Fire Service Instructor I",
   "aka": "IFSI officer leadership",
   "provider": "IFSI",
   "location": "Joliet (hosted by Joliet FD)",
   "address": "101 E Clinton St., Joliet, IL 60432",
   "gk": "JOLIET|60432",
   "lat": 41.5264,
   "lng": -88.084,
   "cost": 0,
   "costNote": "Tuition-free for members of Illinois fire departments (except Chicago FD). Out of state: $800.",
   "length": null,
   "sessions": [
    {
     "s": "2026-11-16",
     "e": "2026-11-20",
     "t": "Nov 16–20, 2026, 8 a.m.–5 p.m. daily",
     "u": "https://www.fsi.illinois.edu/content/courses/register/step1.cfm?activity=202700755&session=134659",
     "seats": "1 seat left"
    }
   ],
   "note": "Online registration asks for your Fire Chief's PIN.",
   "register": "https://www.fsi.illinois.edu/content/courses/register/step1.cfm?activity=202700755&session=134659",
   "page": "https://www.fsi.illinois.edu/content/courses/programs/description.cfm?course_id=3",
   "contact": "(815) 724-3500",
   "checked": "2026-11-09"
  },
  {
   "id": "ifsi-1393-smithton",
   "cat": "ff",
   "name": "Respectful Entry",
   "cert": null,
   "aka": "IFSI firefighter",
   "provider": "IFSI",
   "location": "Smithton (hosted by Smithton Vol. F. Co. Inc.)",
   "address": "711 N. Main St., Smithton, IL 62285",
   "gk": "SMITHTON|62285",
   "lat": 38.4087,
   "lng": -89.9921,
   "cost": 0,
   "costNote": "Tuition-free for members of Illinois fire departments (except Chicago FD).",
   "length": null,
   "sessions": [
    {
     "s": "2026-11-16",
     "e": "2026-11-16",
     "t": "Nov 16, 2026, 6 p.m.–10 p.m.",
     "u": "https://www.fsi.illinois.edu/content/courses/register/step1.cfm?activity=202700773&session=134680",
     "seats": "36 seats left"
    }
   ],
   "note": "Online registration asks for your Fire Chief's PIN.",
   "register": "https://www.fsi.illinois.edu/content/courses/register/step1.cfm?activity=202700773&session=134680",
   "page": "https://www.fsi.illinois.edu/content/courses/programs/description.cfm?course_id=1393",
   "contact": "(618) 234-7373",
   "checked": "2026-11-09"
  },
  {
   "id": "ifsi-1016-champaign",
   "cat": "rescue",
   "name": "Structural Collapse Rescue Awareness and Operations",
   "cert": "Structural Collapse Operations",
   "aka": "IFSI technical rescue",
   "provider": "IFSI",
   "location": "IFSI campus, Champaign",
   "address": "11 Gerty Dr, Champaign, IL 61820",
   "gk": "CHAMPAIGN|61820",
   "lat": 40.1165,
   "lng": -88.2431,
   "cost": 2875,
   "costNote": "Illinois rate. Out of state: $3,275.",
   "length": null,
   "sessions": [
    {
     "s": "2026-11-16",
     "e": "2026-11-20",
     "t": "Nov 16–20, 2026, 8 a.m.–5 p.m. daily",
     "u": "https://www.fsi.illinois.edu/content/courses/register/step1.cfm?activity=202700064&session=132793",
     "seats": "18 seats left"
    },
    {
     "s": "2027-03-15",
     "e": "2027-03-19",
     "t": "Mar 15–19, 2027, 8 a.m.–5 p.m. daily",
     "u": "https://www.fsi.illinois.edu/content/courses/register/step1.cfm?activity=202700823&session=134748",
     "seats": "10 seats left"
    }
   ],
   "note": "Online registration asks for your Fire Chief's PIN.",
   "register": "https://www.fsi.illinois.edu/content/courses/register/step1.cfm?activity=202700064&session=132793",
   "page": "https://www.fsi.illinois.edu/content/courses/programs/description.cfm?course_id=1016",
   "contact": "(217) 333-3800",
   "checked": "2026-11-09"
  },
  {
   "id": "ifsi-566-stickney",
   "cat": "ff",
   "name": "Ventilation",
   "cert": null,
   "aka": "IFSI firefighter",
   "provider": "IFSI",
   "location": "Stickney (hosted by Stickney FD)",
   "address": "6433 43rd St., Stickney, IL 60402",
   "gk": "STICKNEY|60402",
   "lat": 41.8193,
   "lng": -87.7797,
   "cost": 0,
   "costNote": "Tuition-free for members of Illinois fire departments (except Chicago FD).",
   "length": null,
   "sessions": [
    {
     "s": "2026-11-16",
     "e": "2026-11-16",
     "t": "Nov 16, 2026, 8 a.m.–5 p.m.",
     "u": "https://www.fsi.illinois.edu/content/courses/register/step1.cfm?activity=202700900&session=134872",
     "seats": "25 seats left"
    },
    {
     "s": "2026-11-17",
     "e": "2026-11-17",
     "t": "Nov 17, 2026, 8 a.m.–5 p.m.",
     "u": "https://www.fsi.illinois.edu/content/courses/register/step1.cfm?activity=202700901&session=134873",
     "seats": "24 seats left"
    },
    {
     "s": "2026-11-18",
     "e": "2026-11-18",
     "t": "Nov 18, 2026, 8 a.m.–5 p.m.",
     "u": "https://www.fsi.illinois.edu/content/courses/register/step1.cfm?activity=202700902&session=134874",
     "seats": "26 seats left"
    }
   ],
   "note": null,
   "register": "https://www.fsi.illinois.edu/content/courses/register/step1.cfm?activity=202700900&session=134872",
   "page": "https://www.fsi.illinois.edu/content/courses/programs/description.cfm?course_id=566",
   "contact": "(708) 795-6333",
   "checked": "2026-11-09"
  },
  {
   "id": "ifsi-476-waynecity",
   "cat": "ff",
   "name": "Forcible Entry",
   "cert": null,
   "aka": "IFSI firefighter",
   "provider": "IFSI",
   "location": "Wayne City (hosted by Wayne FPD #1)",
   "address": "302 North Main Street, Wayne City, IL 62895",
   "gk": "WAYNE CITY|62895",
   "lat": 38.3453,
   "lng": -88.5878,
   "cost": 0,
   "costNote": "Tuition-free for members of Illinois fire departments (except Chicago FD).",
   "length": null,
   "sessions": [
    {
     "s": "2026-11-17",
     "e": "2026-11-17",
     "t": "Nov 17, 2026, 6 p.m.–10 p.m.",
     "u": "https://www.fsi.illinois.edu/content/courses/register/step1.cfm?activity=202700349&session=134195",
     "seats": "18 seats left"
    }
   ],
   "note": null,
   "register": "https://www.fsi.illinois.edu/content/courses/register/step1.cfm?activity=202700349&session=134195",
   "page": "https://www.fsi.illinois.edu/content/courses/programs/description.cfm?course_id=476",
   "contact": "(618) 895-2134",
   "checked": "2026-11-09"
  },
  {
   "id": "ifsi-560-pontoonbea",
   "cat": "ff",
   "name": "Fire Behavior and Reading Smoke",
   "cert": null,
   "aka": "IFSI firefighter",
   "provider": "IFSI",
   "location": "Pontoon Beach (hosted by Long Lake Vol. FD)",
   "address": "4113 Pontoon Road, Pontoon Beach, IL 62040",
   "gk": "PONTOON BEACH|62040",
   "lat": 38.7317,
   "lng": -90.0804,
   "cost": 0,
   "costNote": "Tuition-free for members of Illinois fire departments (except Chicago FD).",
   "length": null,
   "sessions": [
    {
     "s": "2026-11-18",
     "e": "2026-11-18",
     "t": "Nov 18, 2026, 6 p.m.–10 p.m.",
     "u": "https://www.fsi.illinois.edu/content/courses/register/step1.cfm?activity=202700605&session=134463",
     "seats": "26 seats left"
    }
   ],
   "note": null,
   "register": "https://www.fsi.illinois.edu/content/courses/register/step1.cfm?activity=202700605&session=134463",
   "page": "https://www.fsi.illinois.edu/content/courses/programs/description.cfm?course_id=560",
   "contact": "(618) 830-5285",
   "checked": "2026-11-09"
  },
  {
   "id": "ifsi-1541-pinckneyvi",
   "cat": "app",
   "name": "iPUMPS",
   "cert": null,
   "aka": "IFSI engineer driver pump",
   "provider": "IFSI",
   "location": "Pinckneyville (hosted by Pinckneyville FD)",
   "address": "110 South Walnut Street, Pinckneyville, IL 62274",
   "gk": "PINCKNEYVILLE|62274",
   "lat": 38.0803,
   "lng": -89.382,
   "cost": 0,
   "costNote": "Tuition-free for members of Illinois fire departments (except Chicago FD).",
   "length": null,
   "sessions": [
    {
     "s": "2026-11-18",
     "e": "2026-11-18",
     "t": "Nov 18, 2026, 6 p.m.–10 p.m.",
     "u": "https://www.fsi.illinois.edu/content/courses/register/step1.cfm?activity=202700805&session=134720",
     "seats": "5 seats left"
    }
   ],
   "note": null,
   "register": "https://www.fsi.illinois.edu/content/courses/register/step1.cfm?activity=202700805&session=134720",
   "page": "https://www.fsi.illinois.edu/content/courses/programs/description.cfm?course_id=1541",
   "contact": "(618) 357-2281",
   "checked": "2026-11-09"
  },
  {
   "id": "ifsi-568-elmwood",
   "cat": "ff",
   "name": "Fires on the Farm",
   "cert": null,
   "aka": "IFSI firefighter",
   "provider": "IFSI",
   "location": "Elmwood (hosted by Elmwood FD)",
   "address": "202 N. Magnolia St., Elmwood, IL 61529",
   "gk": "ELMWOOD|61529",
   "lat": 40.7778,
   "lng": -89.9665,
   "cost": 0,
   "costNote": "Tuition-free for members of Illinois fire departments (except Chicago FD).",
   "length": null,
   "sessions": [
    {
     "s": "2026-11-19",
     "e": "2026-11-19",
     "t": "Nov 19, 2026, 6 p.m.–10 p.m.",
     "u": "https://www.fsi.illinois.edu/content/courses/register/step1.cfm?activity=202700286&session=134125"
    }
   ],
   "note": null,
   "register": "https://www.fsi.illinois.edu/content/courses/register/step1.cfm?activity=202700286&session=134125",
   "page": "https://www.fsi.illinois.edu/content/courses/programs/description.cfm?course_id=568",
   "contact": "(309) 742-3811",
   "checked": "2026-11-09"
  },
  {
   "id": "ifsi-235-chandlervi",
   "cat": "ff",
   "name": "Essentials III",
   "cert": null,
   "aka": "IFSI firefighter",
   "provider": "IFSI",
   "location": "Chandlerville (hosted by Chandlerville Vol. FD)",
   "address": "121 N. Main St., Chandlerville, IL 62627",
   "gk": "CHANDLERVILLE|62627",
   "lat": 40.0481,
   "lng": -90.1551,
   "cost": 0,
   "costNote": "Tuition-free for members of Illinois fire departments (except Chicago FD).",
   "length": null,
   "sessions": [
    {
     "s": "2026-11-21",
     "e": "2026-11-22",
     "t": "Nov 21 and Nov 22, 2026",
     "u": "https://www.fsi.illinois.edu/content/courses/register/step1.cfm?activity=202700706&session=134604",
     "seats": "15 seats left"
    }
   ],
   "note": null,
   "register": "https://www.fsi.illinois.edu/content/courses/register/step1.cfm?activity=202700706&session=134604",
   "page": "https://www.fsi.illinois.edu/content/courses/programs/description.cfm?course_id=235",
   "contact": "(217) 491-6346",
   "checked": "2026-11-09"
  },
  {
   "id": "ifsi-560-hebron",
   "cat": "ff",
   "name": "Fire Behavior and Reading Smoke",
   "cert": null,
   "aka": "IFSI firefighter",
   "provider": "IFSI",
   "location": "Hebron (hosted by Hebron-Alden-Greenwood FPD)",
   "address": "12302 Rt 173, Hebron, IL 60034",
   "gk": "HEBRON|60034",
   "lat": 42.4711,
   "lng": -88.4311,
   "cost": 0,
   "costNote": "Tuition-free for members of Illinois fire departments (except Chicago FD).",
   "length": null,
   "sessions": [
    {
     "s": "2026-11-23",
     "e": "2026-11-23",
     "t": "Nov 23, 2026, 6 p.m.–10 p.m.",
     "u": "https://www.fsi.illinois.edu/content/courses/register/step1.cfm?activity=202700575&session=134421",
     "seats": "25 seats left"
    }
   ],
   "note": null,
   "register": "https://www.fsi.illinois.edu/content/courses/register/step1.cfm?activity=202700575&session=134421",
   "page": "https://www.fsi.illinois.edu/content/courses/programs/description.cfm?course_id=560",
   "contact": "(815) 648-2218",
   "checked": "2026-11-09"
  },
  {
   "id": "ifsi-238-champaign",
   "cat": "ff",
   "name": "Truck Company Operations",
   "cert": null,
   "aka": "IFSI firefighter",
   "provider": "IFSI",
   "location": "IFSI campus, Champaign",
   "address": "11 Gerty Dr, Champaign, IL 61820",
   "gk": "CHAMPAIGN|61820",
   "lat": 40.1165,
   "lng": -88.2431,
   "cost": 1100,
   "costNote": "Illinois rate. Out of state: $1,300.",
   "length": null,
   "sessions": [
    {
     "s": "2026-11-23",
     "e": "2026-11-25",
     "t": "Nov 23–25, 2026, 8 a.m.–5 p.m. daily",
     "u": "https://www.fsi.illinois.edu/content/courses/register/step1.cfm?activity=202700059&session=132788",
     "seats": "Full"
    },
    {
     "s": "2027-03-17",
     "e": "2027-03-19",
     "t": "Mar 17–19, 2027, 8 a.m.–5 p.m. daily",
     "u": "https://www.fsi.illinois.edu/content/courses/register/step1.cfm?activity=202700834&session=134772",
     "seats": "27 seats left"
    },
    {
     "s": "2027-09-01",
     "e": "2027-09-03",
     "t": "Sep 1–3, 2027, 8 a.m.–5 p.m. daily",
     "u": "https://www.fsi.illinois.edu/content/courses/register/step1.cfm?activity=202800038&session=134775",
     "seats": "29 seats left"
    }
   ],
   "note": "Online registration asks for your Fire Chief's PIN.",
   "register": "https://www.fsi.illinois.edu/content/courses/register/step1.cfm?activity=202700059&session=132788",
   "page": "https://www.fsi.illinois.edu/content/courses/programs/description.cfm?course_id=238",
   "contact": "(217) 333-3800",
   "checked": "2026-11-09"
  },
  {
   "id": "ifsi-571-staunton",
   "cat": "ff",
   "name": "Vehicle Fire Fighting",
   "cert": null,
   "aka": "IFSI firefighter",
   "provider": "IFSI",
   "location": "Staunton (hosted by Staunton FPD)",
   "address": "215 S. Wood St., Staunton, IL 62088",
   "gk": "STAUNTON|62088",
   "lat": 39.0122,
   "lng": -89.7885,
   "cost": 0,
   "costNote": "Tuition-free for members of Illinois fire departments (except Chicago FD).",
   "length": null,
   "sessions": [
    {
     "s": "2026-11-23",
     "e": "2026-11-23",
     "t": "Nov 23, 2026, 6:30 p.m.–10 p.m.",
     "u": "https://www.fsi.illinois.edu/content/courses/register/step1.cfm?activity=202700190&session=133861",
     "seats": "29 seats left"
    }
   ],
   "note": null,
   "register": "https://www.fsi.illinois.edu/content/courses/register/step1.cfm?activity=202700190&session=133861",
   "page": "https://www.fsi.illinois.edu/content/courses/programs/description.cfm?course_id=571",
   "contact": "(618) 780-4491",
   "checked": "2026-11-09"
  },
  {
   "id": "ifsi-566-trenton",
   "cat": "ff",
   "name": "Ventilation",
   "cert": null,
   "aka": "IFSI firefighter",
   "provider": "IFSI",
   "location": "Trenton (hosted by Sugar Creek Twp. FD)",
   "address": "1001 W. Broadway, Trenton, IL 62293",
   "gk": "TRENTON|62293",
   "lat": 38.6051,
   "lng": -89.6818,
   "cost": 0,
   "costNote": "Tuition-free for members of Illinois fire departments (except Chicago FD).",
   "length": null,
   "sessions": [
    {
     "s": "2026-11-24",
     "e": "2026-11-24",
     "t": "Nov 24, 2026, 6 p.m.–10 p.m.",
     "u": "https://www.fsi.illinois.edu/content/courses/register/step1.cfm?activity=202700265&session=134103",
     "seats": "29 seats left"
    }
   ],
   "note": null,
   "register": "https://www.fsi.illinois.edu/content/courses/register/step1.cfm?activity=202700265&session=134103",
   "page": "https://www.fsi.illinois.edu/content/courses/programs/description.cfm?course_id=566",
   "contact": "(618) 224-9009",
   "checked": "2026-11-09"
  },
  {
   "id": "ifsi-1648-champaign-online",
   "cat": "ff",
   "name": "BOF/NFPA 1010 Firefighter I (Module C)",
   "cert": null,
   "aka": "IFSI firefighter",
   "provider": "IFSI",
   "location": "Online",
   "address": null,
   "gk": null,
   "lat": null,
   "lng": null,
   "cost": 0,
   "costNote": null,
   "length": null,
   "sessions": [
    {
     "s": "2026-11-28",
     "e": "2027-01-01",
     "t": "Nov 28, 2026–Jan 1, 2027",
     "u": "https://www.fsi.illinois.edu/content/courses/register/step1.cfm?activity=202700140&session=133622",
     "seats": "74 seats left"
    }
   ],
   "note": "Online registration asks for your Fire Chief's PIN.",
   "register": "https://www.fsi.illinois.edu/content/courses/register/step1.cfm?activity=202700140&session=133622",
   "page": "https://www.fsi.illinois.edu/content/courses/programs/description.cfm?course_id=1648",
   "contact": "(217) 333-3800",
   "checked": "2026-11-09"
  },
  {
   "id": "ifsi-568-cortland",
   "cat": "ff",
   "name": "Fires on the Farm",
   "cert": null,
   "aka": "IFSI firefighter",
   "provider": "IFSI",
   "location": "Cortland (hosted by Cortland Fire Dept)",
   "address": "30 W. North Ave, Cortland, IL 60112",
   "gk": "CORTLAND|60112",
   "lat": 41.92,
   "lng": -88.6887,
   "cost": 0,
   "costNote": "Tuition-free for members of Illinois fire departments (except Chicago FD).",
   "length": null,
   "sessions": [
    {
     "s": "2026-11-30",
     "e": "2026-11-30",
     "t": "Nov 30, 2026, 6 p.m.–10 p.m.",
     "u": "https://www.fsi.illinois.edu/content/courses/register/step1.cfm?activity=202700889&session=134858",
     "seats": "40 seats left"
    }
   ],
   "note": null,
   "register": "https://www.fsi.illinois.edu/content/courses/register/step1.cfm?activity=202700889&session=134858",
   "page": "https://www.fsi.illinois.edu/content/courses/programs/description.cfm?course_id=568",
   "contact": "(815) 756-2545",
   "checked": "2026-11-09"
  },
  {
   "id": "ifsi-1061-toluca",
   "cat": "other",
   "name": "Resiliency Development for First Responders",
   "cert": null,
   "aka": "IFSI ",
   "provider": "IFSI",
   "location": "Toluca (hosted by Toluca-Rutland FPD)",
   "address": "322 Railroad, Toluca, IL 61369",
   "gk": "TOLUCA|61369",
   "lat": 41.0023,
   "lng": -89.1334,
   "cost": 0,
   "costNote": "Tuition-free for members of Illinois fire departments (except Chicago FD).",
   "length": null,
   "sessions": [
    {
     "s": "2026-12-01",
     "e": "2026-12-01",
     "t": "Dec 1, 2026, 6 p.m.–10 p.m.",
     "u": "https://www.fsi.illinois.edu/content/courses/register/step1.cfm?activity=202700225&session=134037"
    }
   ],
   "note": null,
   "register": "https://www.fsi.illinois.edu/content/courses/register/step1.cfm?activity=202700225&session=134037",
   "page": "https://www.fsi.illinois.edu/content/courses/programs/description.cfm?course_id=1061",
   "contact": "(815) 452-2422",
   "checked": "2026-11-09"
  },
  {
   "id": "ifsi-482-eastdubuqu",
   "cat": "ff",
   "name": "Basic Engine Company Operations",
   "cert": null,
   "aka": "IFSI firefighter",
   "provider": "IFSI",
   "location": "East Dubuque (hosted by East Dubuque FD)",
   "address": "201 Frentress Lake Road, East Dubuque, IL 61025",
   "gk": "EAST DUBUQUE|61025",
   "lat": 42.4922,
   "lng": -90.6429,
   "cost": 0,
   "costNote": "Tuition-free for members of Illinois fire departments (except Chicago FD).",
   "length": null,
   "sessions": [
    {
     "s": "2026-12-05",
     "e": "2026-12-05",
     "t": "Dec 5, 2026, 8 a.m.–4 p.m.",
     "u": "https://www.fsi.illinois.edu/content/courses/register/step1.cfm?activity=202700890&session=134859",
     "seats": "41 seats left"
    }
   ],
   "note": null,
   "register": "https://www.fsi.illinois.edu/content/courses/register/step1.cfm?activity=202700890&session=134859",
   "page": "https://www.fsi.illinois.edu/content/courses/programs/description.cfm?course_id=482",
   "contact": "(815) 747-6619",
   "checked": "2026-11-09"
  },
  {
   "id": "ifsi-1528-galesburg",
   "cat": "app",
   "name": "DRIVE (Driver Training)",
   "cert": null,
   "aka": "IFSI engineer driver pump",
   "provider": "IFSI",
   "location": "Galesburg (hosted by Galesburg FD)",
   "address": "2233 Veteran Drive, Galesburg, IL 61401",
   "gk": "GALESBURG|61401",
   "lat": 40.9476,
   "lng": -90.3712,
   "cost": 0,
   "costNote": "Tuition-free for members of Illinois fire departments (except Chicago FD).",
   "length": null,
   "sessions": [
    {
     "s": "2026-12-07",
     "e": "2026-12-07",
     "t": "Dec 7, 2026, 9 a.m.–1 p.m.",
     "u": "https://www.fsi.illinois.edu/content/courses/register/step1.cfm?activity=202701014&session=135059",
     "seats": "30 seats left"
    },
    {
     "s": "2026-12-08",
     "e": "2026-12-08",
     "t": "Dec 8, 2026, 9 a.m.–1 p.m.",
     "u": "https://www.fsi.illinois.edu/content/courses/register/step1.cfm?activity=202701015&session=135060",
     "seats": "30 seats left"
    },
    {
     "s": "2026-12-09",
     "e": "2026-12-09",
     "t": "Dec 9, 2026, 9 a.m.–1 p.m.",
     "u": "https://www.fsi.illinois.edu/content/courses/register/step1.cfm?activity=202701016&session=135061",
     "seats": "30 seats left"
    },
    {
     "s": "2026-12-10",
     "e": "2026-12-10",
     "t": "Dec 10, 2026, 9 a.m.–1 p.m.",
     "u": "https://www.fsi.illinois.edu/content/courses/register/step1.cfm?activity=202701017&session=135062",
     "seats": "30 seats left"
    },
    {
     "s": "2026-12-11",
     "e": "2026-12-11",
     "t": "Dec 11, 2026, 9 a.m.–1 p.m.",
     "u": "https://www.fsi.illinois.edu/content/courses/register/step1.cfm?activity=202701018&session=135063",
     "seats": "30 seats left"
    }
   ],
   "note": null,
   "register": "https://www.fsi.illinois.edu/content/courses/register/step1.cfm?activity=202701014&session=135059",
   "page": "https://www.fsi.illinois.edu/content/courses/programs/description.cfm?course_id=1528",
   "contact": "(309) 345-3756",
   "checked": "2026-11-09"
  },
  {
   "id": "ifsi-1650-champaign",
   "cat": "officer",
   "name": "Fire Department Incident Safety Officer / NFPA 1550",
   "cert": "Fire Department Incident Safety Officer",
   "aka": "IFSI officer leadership",
   "provider": "IFSI",
   "location": "IFSI campus, Champaign",
   "address": "11 Gerty Dr, Champaign, IL 61820",
   "gk": "CHAMPAIGN|61820",
   "lat": 40.1165,
   "lng": -88.2431,
   "cost": 650,
   "costNote": "Illinois rate. Out of state: $850.",
   "length": null,
   "sessions": [
    {
     "s": "2026-12-07",
     "e": "2026-12-11",
     "t": "Dec 7–11, 2026, 8 a.m.–5 p.m. daily",
     "u": "https://www.fsi.illinois.edu/content/courses/register/step1.cfm?activity=202700063&session=132792",
     "seats": "13 seats left"
    },
    {
     "s": "2027-02-01",
     "e": "2027-02-05",
     "t": "Feb 1–5, 2027, 8 a.m.–5 p.m. daily",
     "u": "https://www.fsi.illinois.edu/content/courses/register/step1.cfm?activity=202700799&session=134713",
     "seats": "30 seats left"
    }
   ],
   "note": "Online registration asks for your Fire Chief's PIN.",
   "register": "https://www.fsi.illinois.edu/content/courses/register/step1.cfm?activity=202700063&session=132792",
   "page": "https://www.fsi.illinois.edu/content/courses/programs/description.cfm?course_id=1650",
   "contact": "(217) 333-3800",
   "checked": "2026-11-09"
  },
  {
   "id": "ifsi-1520-belleville",
   "cat": "prev",
   "name": "Fire Inspector",
   "cert": "Fire Inspector I",
   "aka": "IFSI prevention",
   "provider": "IFSI",
   "location": "Belleville (hosted by Belleville FD)",
   "address": "Engine House #4, Belleville, IL 62221",
   "gk": "BELLEVILLE|62221",
   "lat": 38.5136,
   "lng": -89.9842,
   "cost": 800,
   "costNote": "Illinois rate. Out of state: $950.",
   "length": null,
   "sessions": [
    {
     "s": "2026-12-07",
     "e": "2026-12-11",
     "t": "Dec 7–11, 2026, 8 a.m.–5 p.m. daily",
     "u": "https://www.fsi.illinois.edu/content/courses/register/step1.cfm?activity=202700724&session=134626",
     "seats": "12 seats left"
    }
   ],
   "note": null,
   "register": "https://www.fsi.illinois.edu/content/courses/register/step1.cfm?activity=202700724&session=134626",
   "page": "https://www.fsi.illinois.edu/content/courses/programs/description.cfm?course_id=1520",
   "contact": "(618) 234-2236",
   "checked": "2026-11-09"
  },
  {
   "id": "ifsi-1225-staunton",
   "cat": "app",
   "name": "Mobile Water Supply Operations",
   "cert": null,
   "aka": "IFSI engineer driver pump",
   "provider": "IFSI",
   "location": "Staunton (hosted by Staunton FPD)",
   "address": "215 S. Wood St., Staunton, IL 62088",
   "gk": "STAUNTON|62088",
   "lat": 39.0122,
   "lng": -89.7885,
   "cost": 0,
   "costNote": "Tuition-free for members of Illinois fire departments (except Chicago FD).",
   "length": null,
   "sessions": [
    {
     "s": "2026-12-07",
     "e": "2026-12-07",
     "t": "Dec 7, 2026, 6:30 p.m.–10 p.m.",
     "u": "https://www.fsi.illinois.edu/content/courses/register/step1.cfm?activity=202700191&session=133862",
     "seats": "30 seats left"
    }
   ],
   "note": null,
   "register": "https://www.fsi.illinois.edu/content/courses/register/step1.cfm?activity=202700191&session=133862",
   "page": "https://www.fsi.illinois.edu/content/courses/programs/description.cfm?course_id=1225",
   "contact": "(618) 780-4491",
   "checked": "2026-11-09"
  },
  {
   "id": "ifsi-559-auburn",
   "cat": "ff",
   "name": "Building Construction",
   "cert": null,
   "aka": "IFSI firefighter",
   "provider": "IFSI",
   "location": "Auburn (hosted by Auburn FPD)",
   "address": "117 W. Jackson, Auburn, IL 62615",
   "gk": "AUBURN|62615",
   "lat": 39.5917,
   "lng": -89.7465,
   "cost": 0,
   "costNote": "Tuition-free for members of Illinois fire departments (except Chicago FD).",
   "length": null,
   "sessions": [
    {
     "s": "2026-12-09",
     "e": "2026-12-09",
     "t": "Dec 9, 2026, 6:30 p.m.–10:30 p.m.",
     "u": "https://www.fsi.illinois.edu/content/courses/register/step1.cfm?activity=202700285&session=134124"
    }
   ],
   "note": null,
   "register": "https://www.fsi.illinois.edu/content/courses/register/step1.cfm?activity=202700285&session=134124",
   "page": "https://www.fsi.illinois.edu/content/courses/programs/description.cfm?course_id=559",
   "contact": "(217) 438-3223",
   "checked": "2026-11-09"
  },
  {
   "id": "ifsi-560-norriscity",
   "cat": "ff",
   "name": "Fire Behavior and Reading Smoke",
   "cert": null,
   "aka": "IFSI firefighter",
   "provider": "IFSI",
   "location": "Norris City (hosted by Norris City FPD)",
   "address": "113 South Division Street, Norris City, IL 62869",
   "gk": "NORRIS CITY|62869",
   "lat": 37.9812,
   "lng": -88.3292,
   "cost": 0,
   "costNote": "Tuition-free for members of Illinois fire departments (except Chicago FD).",
   "length": null,
   "sessions": [
    {
     "s": "2026-12-12",
     "e": "2026-12-12",
     "t": "Dec 12, 2026, 8 a.m.–noon",
     "u": "https://www.fsi.illinois.edu/content/courses/register/step1.cfm?activity=202700287&session=134126",
     "seats": "11 seats left"
    }
   ],
   "note": null,
   "register": "https://www.fsi.illinois.edu/content/courses/register/step1.cfm?activity=202700287&session=134126",
   "page": "https://www.fsi.illinois.edu/content/courses/programs/description.cfm?course_id=560",
   "contact": "(618) 378-3927",
   "checked": "2026-11-09"
  },
  {
   "id": "ifsi-22-crevecoeur",
   "cat": "rescue",
   "name": "Grain Bin Rescue Awareness",
   "cert": null,
   "aka": "IFSI technical rescue",
   "provider": "IFSI",
   "location": "Creve Coeur (hosted by Creve Coeur Fire & Rescue)",
   "address": "203 Wagner Dr., Creve Coeur, IL 61610",
   "gk": "CREVE COEUR|61610",
   "lat": 40.6473,
   "lng": -89.5912,
   "cost": 0,
   "costNote": "Tuition-free for members of Illinois fire departments (except Chicago FD).",
   "length": null,
   "sessions": [
    {
     "s": "2026-12-12",
     "e": "2026-12-12",
     "t": "Dec 12, 2026, 8 a.m.–2 p.m.",
     "u": "https://www.fsi.illinois.edu/content/courses/register/step1.cfm?activity=202700972&session=134947"
    }
   ],
   "note": null,
   "register": "https://www.fsi.illinois.edu/content/courses/register/step1.cfm?activity=202700972&session=134947",
   "page": "https://www.fsi.illinois.edu/content/courses/programs/description.cfm?course_id=22",
   "contact": "(309) 694-2521",
   "checked": "2026-11-09"
  },
  {
   "id": "ifsi-1439-rockford",
   "cat": "hazmat",
   "name": "Hazardous Materials Awareness and Operations (470 - Ch 7, 9.2, 9.6)",
   "cert": "Hazardous Materials Operations",
   "aka": "IFSI hazmat",
   "provider": "IFSI",
   "location": "Rockford (hosted by Cherry Valley FPD)",
   "address": "4919 Blackhawk Road, Rockford, IL 61109",
   "gk": "ROCKFORD|61109",
   "lat": 42.2714,
   "lng": -89.094,
   "cost": 0,
   "costNote": "Tuition-free for members of Illinois fire departments (except Chicago FD).",
   "length": null,
   "sessions": [
    {
     "s": "2026-12-12",
     "e": "2026-12-20",
     "t": "Dec 12–20, 2026 (2 parts)",
     "u": "https://www.fsi.illinois.edu/content/courses/register/step1.cfm?activity=202700207&session=133890",
     "seats": "Full"
    }
   ],
   "note": "Online registration asks for your Fire Chief's PIN. Full right now. Call to ask about a waitlist.",
   "register": "https://www.fsi.illinois.edu/content/courses/register/step1.cfm?activity=202700207&session=133890",
   "page": "https://www.fsi.illinois.edu/content/courses/programs/description.cfm?course_id=1439",
   "contact": "(815) 332-5382",
   "checked": "2026-11-09"
  },
  {
   "id": "ifsi-1439-bloomingto",
   "cat": "hazmat",
   "name": "Hazardous Materials Awareness and Operations (470 - Ch 7, 9.2, 9.6)",
   "cert": "Hazardous Materials Operations",
   "aka": "IFSI hazmat",
   "provider": "IFSI",
   "location": "Bloomington (hosted by Bloomington FD)",
   "address": "1911 Hamilton Rd, Bloomington, IL 61704",
   "gk": "BLOOMINGTON|61704",
   "lat": 40.4798,
   "lng": -88.9939,
   "cost": 0,
   "costNote": "Tuition-free for members of Illinois fire departments (except Chicago FD).",
   "length": null,
   "sessions": [
    {
     "s": "2026-12-12",
     "e": "2026-12-20",
     "t": "Dec 12–20, 2026 (2 parts)",
     "u": "https://www.fsi.illinois.edu/content/courses/register/step1.cfm?activity=202700208&session=133892",
     "seats": "Full"
    }
   ],
   "note": "Online registration asks for your Fire Chief's PIN. Full right now. Call to ask about a waitlist.",
   "register": "https://www.fsi.illinois.edu/content/courses/register/step1.cfm?activity=202700208&session=133892",
   "page": "https://www.fsi.illinois.edu/content/courses/programs/description.cfm?course_id=1439",
   "contact": "(309) 434-2500",
   "checked": "2026-11-09"
  },
  {
   "id": "ifsi-1439-swansea",
   "cat": "hazmat",
   "name": "Hazardous Materials Awareness and Operations (470 - Ch 7, 9.2, 9.6)",
   "cert": "Hazardous Materials Operations",
   "aka": "IFSI hazmat",
   "provider": "IFSI",
   "location": "Swansea (hosted by Swansea FD)",
   "address": "144 Huntwood Road, Swansea, IL 62226",
   "gk": "SWANSEA|62226",
   "lat": 38.5339,
   "lng": -89.989,
   "cost": 0,
   "costNote": "Tuition-free for members of Illinois fire departments (except Chicago FD).",
   "length": null,
   "sessions": [
    {
     "s": "2026-12-12",
     "e": "2026-12-20",
     "t": "Dec 12–20, 2026 (2 parts)",
     "u": "https://www.fsi.illinois.edu/content/courses/register/step1.cfm?activity=202700209&session=133894",
     "seats": "Full"
    }
   ],
   "note": "Online registration asks for your Fire Chief's PIN. Full right now. Call to ask about a waitlist.",
   "register": "https://www.fsi.illinois.edu/content/courses/register/step1.cfm?activity=202700209&session=133894",
   "page": "https://www.fsi.illinois.edu/content/courses/programs/description.cfm?course_id=1439",
   "contact": "(618) 234-3291",
   "checked": "2026-11-09"
  },
  {
   "id": "ifsi-3-eureka",
   "cat": "officer",
   "name": "Instructor I",
   "cert": "Fire Service Instructor I",
   "aka": "IFSI officer leadership",
   "provider": "IFSI",
   "location": "Eureka (hosted by Eureka-Goodfield FPD)",
   "address": "211 N Main St., Eureka, IL 61530",
   "gk": "EUREKA|61530",
   "lat": 40.7213,
   "lng": -89.2727,
   "cost": 0,
   "costNote": "Tuition-free for members of Illinois fire departments (except Chicago FD). Out of state: $800.",
   "length": null,
   "sessions": [
    {
     "s": "2026-12-12",
     "e": "2026-12-20",
     "t": "Dec 12–20, 2026 (2 parts)",
     "u": "https://www.fsi.illinois.edu/content/courses/register/step1.cfm?activity=202700880&session=134846",
     "seats": "17 seats left"
    }
   ],
   "note": "Online registration asks for your Fire Chief's PIN.",
   "register": "https://www.fsi.illinois.edu/content/courses/register/step1.cfm?activity=202700880&session=134846",
   "page": "https://www.fsi.illinois.edu/content/courses/programs/description.cfm?course_id=3",
   "contact": "(309) 467-6181",
   "checked": "2026-11-09"
  },
  {
   "id": "ifsi-1061-westunion",
   "cat": "other",
   "name": "Resiliency Development for First Responders",
   "cert": null,
   "aka": "IFSI ",
   "provider": "IFSI",
   "location": "West Union (hosted by West Union FPD)",
   "address": "502 East Union St., West Union, IL 62477",
   "gk": "WEST UNION|62477",
   "lat": 39.2159,
   "lng": -87.6661,
   "cost": 0,
   "costNote": "Tuition-free for members of Illinois fire departments (except Chicago FD).",
   "length": null,
   "sessions": [
    {
     "s": "2026-12-12",
     "e": "2026-12-12",
     "t": "Dec 12, 2026, 8 a.m.–noon",
     "u": "https://www.fsi.illinois.edu/content/courses/register/step1.cfm?activity=202701024&session=135069",
     "seats": "32 seats left"
    }
   ],
   "note": null,
   "register": "https://www.fsi.illinois.edu/content/courses/register/step1.cfm?activity=202701024&session=135069",
   "page": "https://www.fsi.illinois.edu/content/courses/programs/description.cfm?course_id=1061",
   "contact": "(618) 279-3614",
   "checked": "2026-11-09"
  },
  {
   "id": "ifsi-1353-breese",
   "cat": "hazmat",
   "name": "Hazardous Materials Refresher",
   "cert": null,
   "aka": "IFSI hazmat",
   "provider": "IFSI",
   "location": "Breese (hosted by Breese Vol. FPD)",
   "address": "50 N. Mine Street, Breese, IL 62230",
   "gk": "BREESE|62230",
   "lat": 38.6106,
   "lng": -89.5259,
   "cost": 0,
   "costNote": "Tuition-free for members of Illinois fire departments (except Chicago FD).",
   "length": null,
   "sessions": [
    {
     "s": "2026-12-14",
     "e": "2026-12-14",
     "t": "Dec 14, 2026, 6 p.m.–10 p.m.",
     "u": "https://www.fsi.illinois.edu/content/courses/register/step1.cfm?activity=202700732&session=134634",
     "seats": "30 seats left"
    }
   ],
   "note": "Online registration asks for your Fire Chief's PIN.",
   "register": "https://www.fsi.illinois.edu/content/courses/register/step1.cfm?activity=202700732&session=134634",
   "page": "https://www.fsi.illinois.edu/content/courses/programs/description.cfm?course_id=1353",
   "contact": "(618) 526-4721",
   "checked": "2026-11-09"
  },
  {
   "id": "ifsi-723-huntley",
   "cat": "officer",
   "name": "Leadership, Accountability, Culture & Knowledge (LACK)",
   "cert": null,
   "aka": "IFSI officer leadership",
   "provider": "IFSI",
   "location": "Huntley (hosted by Huntley FPD)",
   "address": "11118 Main St., Huntley, IL 60142",
   "gk": "HUNTLEY|60142",
   "lat": 42.1723,
   "lng": -88.4269,
   "cost": 0,
   "costNote": "Tuition-free for members of Illinois fire departments (except Chicago FD).",
   "length": null,
   "sessions": [
    {
     "s": "2026-12-14",
     "e": "2026-12-14",
     "t": "Dec 14, 2026, 8 a.m.–noon",
     "u": "https://www.fsi.illinois.edu/content/courses/register/step1.cfm?activity=202700528&session=134374",
     "seats": "40 seats left"
    },
    {
     "s": "2026-12-15",
     "e": "2026-12-15",
     "t": "Dec 15, 2026, 8 a.m.–noon",
     "u": "https://www.fsi.illinois.edu/content/courses/register/step1.cfm?activity=202700529&session=134375",
     "seats": "39 seats left"
    },
    {
     "s": "2026-12-16",
     "e": "2026-12-16",
     "t": "Dec 16, 2026, 8 a.m.–noon",
     "u": "https://www.fsi.illinois.edu/content/courses/register/step1.cfm?activity=202700530&session=134376",
     "seats": "37 seats left"
    }
   ],
   "note": null,
   "register": "https://www.fsi.illinois.edu/content/courses/register/step1.cfm?activity=202700528&session=134374",
   "page": "https://www.fsi.illinois.edu/content/courses/programs/description.cfm?course_id=723",
   "contact": "(847) 669-5066",
   "checked": "2026-11-09"
  },
  {
   "id": "ifsi-1348-golconda",
   "cat": "ff",
   "name": "Response to Hybrid and Electric Vehicles",
   "cert": null,
   "aka": "IFSI firefighter",
   "provider": "IFSI",
   "location": "Golconda (hosted by Rural Pope County FPD)",
   "address": "64 Franks Road, Golconda, IL 62938",
   "gk": "GOLCONDA|62938",
   "lat": 37.3673,
   "lng": -88.4864,
   "cost": 0,
   "costNote": "Tuition-free for members of Illinois fire departments (except Chicago FD).",
   "length": null,
   "sessions": [
    {
     "s": "2026-12-14",
     "e": "2026-12-14",
     "t": "Dec 14, 2026, 6 p.m.–10 p.m.",
     "u": "https://www.fsi.illinois.edu/content/courses/register/step1.cfm?activity=202700969&session=134944",
     "seats": "35 seats left"
    }
   ],
   "note": null,
   "register": "https://www.fsi.illinois.edu/content/courses/register/step1.cfm?activity=202700969&session=134944",
   "page": "https://www.fsi.illinois.edu/content/courses/programs/description.cfm?course_id=1348",
   "contact": "(618) 949-3789",
   "checked": "2026-11-09"
  },
  {
   "id": "ifsi-789-saintjacob",
   "cat": "hazmat",
   "name": "Flammable Liquids by Rail Awareness",
   "cert": null,
   "aka": "IFSI hazmat",
   "provider": "IFSI",
   "location": "Saint Jacob (hosted by St. Jacob Twp. FPD)",
   "address": "113 E. Second St., Saint Jacob, IL 62281",
   "gk": "SAINT JACOB|62281",
   "lat": 38.7139,
   "lng": -89.7681,
   "cost": 0,
   "costNote": "Tuition-free for members of Illinois fire departments (except Chicago FD).",
   "length": null,
   "sessions": [
    {
     "s": "2026-12-15",
     "e": "2026-12-15",
     "t": "Dec 15, 2026, 6 p.m.–10 p.m.",
     "u": "https://www.fsi.illinois.edu/content/courses/register/step1.cfm?activity=202700151&session=133765",
     "seats": "30 seats left"
    }
   ],
   "note": null,
   "register": "https://www.fsi.illinois.edu/content/courses/register/step1.cfm?activity=202700151&session=133765",
   "page": "https://www.fsi.illinois.edu/content/courses/programs/description.cfm?course_id=789",
   "contact": "(618) 644-4636",
   "checked": "2026-11-09"
  },
  {
   "id": "ifsi-560-greenville",
   "cat": "ff",
   "name": "Fire Behavior and Reading Smoke",
   "cert": null,
   "aka": "IFSI firefighter",
   "provider": "IFSI",
   "location": "Greenville (hosted by Greenville FPD)",
   "address": "1110 E. Harris St., Greenville, IL 62246",
   "gk": "GREENVILLE|62246",
   "lat": 38.8923,
   "lng": -89.4131,
   "cost": 0,
   "costNote": "Tuition-free for members of Illinois fire departments (except Chicago FD).",
   "length": null,
   "sessions": [
    {
     "s": "2026-12-28",
     "e": "2026-12-28",
     "t": "Dec 28, 2026, 7 p.m.–10 p.m.",
     "u": "https://www.fsi.illinois.edu/content/courses/register/step1.cfm?activity=202700904&session=134876",
     "seats": "29 seats left"
    }
   ],
   "note": null,
   "register": "https://www.fsi.illinois.edu/content/courses/register/step1.cfm?activity=202700904&session=134876",
   "page": "https://www.fsi.illinois.edu/content/courses/programs/description.cfm?course_id=560",
   "contact": "(618) 664-4265",
   "checked": "2026-11-09"
  },
  {
   "id": "ifsi-1604-rockford",
   "cat": "ff",
   "name": "Firefighter I / NFPA 1010 - Blended",
   "cert": "Basic Operations Firefighter",
   "aka": "IFSI firefighter",
   "provider": "IFSI",
   "location": "Rockford (hosted by Cherry Valley FPD)",
   "address": "4919 Blackhawk Road, Rockford, IL 61109",
   "gk": "ROCKFORD|61109",
   "lat": 42.2714,
   "lng": -89.094,
   "cost": 0,
   "costNote": null,
   "length": null,
   "sessions": [
    {
     "s": "2027-01-09",
     "e": "2027-05-16",
     "t": "Jan 9–May 16, 2027 (11 parts)",
     "u": "https://www.fsi.illinois.edu/content/courses/register/step1.cfm?activity=202700984&session=134966",
     "seats": "8 seats left"
    }
   ],
   "note": "Online registration asks for your Fire Chief's PIN.",
   "register": "https://www.fsi.illinois.edu/content/courses/register/step1.cfm?activity=202700984&session=134966",
   "page": "https://www.fsi.illinois.edu/content/courses/programs/description.cfm?course_id=1604",
   "contact": "(815) 332-5382",
   "checked": "2026-11-09"
  },
  {
   "id": "ifsi-1604-sherman",
   "cat": "ff",
   "name": "Firefighter I / NFPA 1010 - Blended",
   "cert": "Basic Operations Firefighter",
   "aka": "IFSI firefighter",
   "provider": "IFSI",
   "location": "Sherman (hosted by Sherman FPD)",
   "address": "2215 E Andrew Road, Sherman, IL 62684",
   "gk": "SHERMAN|62684",
   "lat": 39.8937,
   "lng": -89.6048,
   "cost": 0,
   "costNote": null,
   "length": null,
   "sessions": [
    {
     "s": "2027-01-09",
     "e": "2027-05-16",
     "t": "Jan 9–May 16, 2027 (11 parts)",
     "u": "https://www.fsi.illinois.edu/content/courses/register/step1.cfm?activity=202700986&session=134988",
     "seats": "39 seats left"
    }
   ],
   "note": "Online registration asks for your Fire Chief's PIN.",
   "register": "https://www.fsi.illinois.edu/content/courses/register/step1.cfm?activity=202700986&session=134988",
   "page": "https://www.fsi.illinois.edu/content/courses/programs/description.cfm?course_id=1604",
   "contact": "(319) 572-3289",
   "checked": "2026-11-09"
  },
  {
   "id": "ifsi-1604-swansea",
   "cat": "ff",
   "name": "Firefighter I / NFPA 1010 - Blended",
   "cert": "Basic Operations Firefighter",
   "aka": "IFSI firefighter",
   "provider": "IFSI",
   "location": "Swansea (hosted by Swansea FD)",
   "address": "144 Huntwood Road, Swansea, IL 62226",
   "gk": "SWANSEA|62226",
   "lat": 38.5339,
   "lng": -89.989,
   "cost": 0,
   "costNote": null,
   "length": null,
   "sessions": [
    {
     "s": "2027-01-09",
     "e": "2027-05-16",
     "t": "Jan 9–May 16, 2027 (11 parts)",
     "u": "https://www.fsi.illinois.edu/content/courses/register/step1.cfm?activity=202700988&session=135010",
     "seats": "18 seats left"
    }
   ],
   "note": "Online registration asks for your Fire Chief's PIN.",
   "register": "https://www.fsi.illinois.edu/content/courses/register/step1.cfm?activity=202700988&session=135010",
   "page": "https://www.fsi.illinois.edu/content/courses/programs/description.cfm?course_id=1604",
   "contact": "(618) 234-3291",
   "checked": "2026-11-09"
  },
  {
   "id": "ifsi-1415-staunton",
   "cat": "officer",
   "name": "Attributes of Leading",
   "cert": null,
   "aka": "IFSI officer leadership",
   "provider": "IFSI",
   "location": "Staunton (hosted by Staunton FPD)",
   "address": "215 S. Wood St., Staunton, IL 62088",
   "gk": "STAUNTON|62088",
   "lat": 39.0122,
   "lng": -89.7885,
   "cost": 0,
   "costNote": "Tuition-free for members of Illinois fire departments (except Chicago FD).",
   "length": null,
   "sessions": [
    {
     "s": "2027-01-11",
     "e": "2027-01-11",
     "t": "Jan 11, 2027, 6:30 p.m.–10 p.m.",
     "u": "https://www.fsi.illinois.edu/content/courses/register/step1.cfm?activity=202701026&session=135071",
     "seats": "30 seats left"
    }
   ],
   "note": null,
   "register": "https://www.fsi.illinois.edu/content/courses/register/step1.cfm?activity=202701026&session=135071",
   "page": "https://www.fsi.illinois.edu/content/courses/programs/description.cfm?course_id=1415",
   "contact": "(618) 780-4491",
   "checked": "2026-11-09"
  },
  {
   "id": "ifsi-3-westchicag",
   "cat": "officer",
   "name": "Instructor I",
   "cert": "Fire Service Instructor I",
   "aka": "IFSI officer leadership",
   "provider": "IFSI",
   "location": "West Chicago (hosted by West Chicago FPD)",
   "address": "320 Kress Rd., West Chicago, IL 60185",
   "gk": "WEST CHICAGO|60185",
   "lat": 41.8848,
   "lng": -88.204,
   "cost": 600,
   "costNote": "Illinois rate. Out of state: $800.",
   "length": null,
   "sessions": [
    {
     "s": "2027-01-11",
     "e": "2027-01-15",
     "t": "Jan 11–15, 2027, 8 a.m.–5 p.m. daily",
     "u": "https://www.fsi.illinois.edu/content/courses/register/step1.cfm?activity=202700838&session=134781",
     "seats": "25 seats left"
    }
   ],
   "note": "Online registration asks for your Fire Chief's PIN.",
   "register": "https://www.fsi.illinois.edu/content/courses/register/step1.cfm?activity=202700838&session=134781",
   "page": "https://www.fsi.illinois.edu/content/courses/programs/description.cfm?course_id=3",
   "contact": "(630) 231-2123",
   "checked": "2026-11-09"
  },
  {
   "id": "ifsi-1045-golconda",
   "cat": "ff",
   "name": "Firefighting Tools - What You Need To Know",
   "cert": null,
   "aka": "IFSI firefighter",
   "provider": "IFSI",
   "location": "Golconda (hosted by Rural Pope County FPD)",
   "address": "64 Franks Road, Golconda, IL 62938",
   "gk": "GOLCONDA|62938",
   "lat": 37.3673,
   "lng": -88.4864,
   "cost": 0,
   "costNote": "Tuition-free for members of Illinois fire departments (except Chicago FD).",
   "length": null,
   "sessions": [
    {
     "s": "2027-01-18",
     "e": "2027-01-18",
     "t": "Jan 18, 2027, 6 p.m.–10 p.m.",
     "u": "https://www.fsi.illinois.edu/content/courses/register/step1.cfm?activity=202700922&session=134896",
     "seats": "34 seats left"
    }
   ],
   "note": null,
   "register": "https://www.fsi.illinois.edu/content/courses/register/step1.cfm?activity=202700922&session=134896",
   "page": "https://www.fsi.illinois.edu/content/courses/programs/description.cfm?course_id=1045",
   "contact": "(618) 949-3789",
   "checked": "2026-11-09"
  },
  {
   "id": "ifsi-4-westchicag",
   "cat": "officer",
   "name": "Instructor II",
   "cert": "Fire Service Instructor II",
   "aka": "IFSI officer leadership",
   "provider": "IFSI",
   "location": "West Chicago (hosted by West Chicago FPD)",
   "address": "320 Kress Rd., West Chicago, IL 60185",
   "gk": "WEST CHICAGO|60185",
   "lat": 41.8848,
   "lng": -88.204,
   "cost": 600,
   "costNote": "Illinois rate. Out of state: $800.",
   "length": null,
   "sessions": [
    {
     "s": "2027-01-18",
     "e": "2027-01-22",
     "t": "Jan 18–22, 2027, 8 a.m.–5 p.m. daily",
     "u": "https://www.fsi.illinois.edu/content/courses/register/step1.cfm?activity=202700839&session=134782",
     "seats": "29 seats left"
    }
   ],
   "note": "Online registration asks for your Fire Chief's PIN.",
   "register": "https://www.fsi.illinois.edu/content/courses/register/step1.cfm?activity=202700839&session=134782",
   "page": "https://www.fsi.illinois.edu/content/courses/programs/description.cfm?course_id=4",
   "contact": "(630) 231-2123",
   "checked": "2026-11-09"
  },
  {
   "id": "ifsi-326-roodhouse",
   "cat": "ff",
   "name": "Thermal Imaging Camera",
   "cert": null,
   "aka": "IFSI firefighter",
   "provider": "IFSI",
   "location": "Roodhouse (hosted by Roodhouse FPD)",
   "address": "1140 South State St., Roodhouse, IL 62082",
   "gk": "ROODHOUSE|62082",
   "lat": 39.4839,
   "lng": -90.3715,
   "cost": 0,
   "costNote": "Tuition-free for members of Illinois fire departments (except Chicago FD).",
   "length": null,
   "sessions": [
    {
     "s": "2027-01-21",
     "e": "2027-01-21",
     "t": "Jan 21, 2027, 6 p.m.–10 p.m.",
     "u": "https://www.fsi.illinois.edu/content/courses/register/step1.cfm?activity=202701027&session=135072",
     "seats": "30 seats left"
    }
   ],
   "note": null,
   "register": "https://www.fsi.illinois.edu/content/courses/register/step1.cfm?activity=202701027&session=135072",
   "page": "https://www.fsi.illinois.edu/content/courses/programs/description.cfm?course_id=326",
   "contact": "(217) 589-4141",
   "checked": "2026-11-09"
  },
  {
   "id": "ifsi-3-gibsoncity",
   "cat": "officer",
   "name": "Instructor I",
   "cert": "Fire Service Instructor I",
   "aka": "IFSI officer leadership",
   "provider": "IFSI",
   "location": "Gibson City (hosted by Gibson City FPD)",
   "address": "115 S. Lawrence St., Gibson City, IL 60936",
   "gk": "GIBSON CITY|60936",
   "lat": 40.4653,
   "lng": -88.3759,
   "cost": 600,
   "costNote": "Illinois rate. Out of state: $800.",
   "length": null,
   "sessions": [
    {
     "s": "2027-01-23",
     "e": "2027-01-31",
     "t": "Jan 23–31, 2027 (2 parts)",
     "u": "https://www.fsi.illinois.edu/content/courses/register/step1.cfm?activity=202700759&session=134664",
     "seats": "24 seats left"
    }
   ],
   "note": "Online registration asks for your Fire Chief's PIN.",
   "register": "https://www.fsi.illinois.edu/content/courses/register/step1.cfm?activity=202700759&session=134664",
   "page": "https://www.fsi.illinois.edu/content/courses/programs/description.cfm?course_id=3",
   "contact": "(217) 784-5533",
   "checked": "2026-11-09"
  },
  {
   "id": "ifsi-1436-chicagohei",
   "cat": "hazmat",
   "name": "Pipeline Emergencies - First Responder Awareness",
   "cert": null,
   "aka": "IFSI hazmat",
   "provider": "IFSI",
   "location": "Chicago Heights (hosted by Chicago Heights FD)",
   "address": "1600 State Street, Chicago Heights, IL 60411",
   "gk": "CHICAGO HTS|60411",
   "lat": 41.5063,
   "lng": -87.6357,
   "cost": 0,
   "costNote": null,
   "length": null,
   "sessions": [
    {
     "s": "2027-01-26",
     "e": "2027-01-26",
     "t": "Jan 26, 2027, 8 a.m.–noon",
     "u": "https://www.fsi.illinois.edu/content/courses/register/step1.cfm?activity=202701007&session=135052",
     "seats": "25 seats left"
    },
    {
     "s": "2027-01-27",
     "e": "2027-01-27",
     "t": "Jan 27, 2027, 8 a.m.–noon",
     "u": "https://www.fsi.illinois.edu/content/courses/register/step1.cfm?activity=202701008&session=135053",
     "seats": "25 seats left"
    },
    {
     "s": "2027-01-28",
     "e": "2027-01-28",
     "t": "Jan 28, 2027, 8 a.m.–noon",
     "u": "https://www.fsi.illinois.edu/content/courses/register/step1.cfm?activity=202701009&session=135054",
     "seats": "25 seats left"
    }
   ],
   "note": null,
   "register": "https://www.fsi.illinois.edu/content/courses/register/step1.cfm?activity=202701007&session=135052",
   "page": "https://www.fsi.illinois.edu/content/courses/programs/description.cfm?course_id=1436",
   "contact": "(309) 303-4579",
   "checked": "2026-11-09"
  },
  {
   "id": "ifsi-1650-marengo",
   "cat": "officer",
   "name": "Fire Department Incident Safety Officer / NFPA 1550",
   "cert": "Fire Department Incident Safety Officer",
   "aka": "IFSI officer leadership",
   "provider": "IFSI",
   "location": "Marengo (hosted by Marengo FPD)",
   "address": "Marengo FPD, Marengo, IL 60152",
   "gk": "MARENGO|60152",
   "lat": 42.2501,
   "lng": -88.6081,
   "cost": 650,
   "costNote": "Illinois rate. Out of state: $850.",
   "length": null,
   "sessions": [
    {
     "s": "2027-02-01",
     "e": "2027-02-05",
     "t": "Feb 1–5, 2027, 8 a.m.–5 p.m. daily",
     "u": "https://www.fsi.illinois.edu/content/courses/register/step1.cfm?activity=202700717&session=134616",
     "seats": "24 seats left"
    }
   ],
   "note": "Online registration asks for your Fire Chief's PIN.",
   "register": "https://www.fsi.illinois.edu/content/courses/register/step1.cfm?activity=202700717&session=134616",
   "page": "https://www.fsi.illinois.edu/content/courses/programs/description.cfm?course_id=1650",
   "contact": "(815) 568-8912",
   "checked": "2026-11-09"
  },
  {
   "id": "ifsi-5-westchicag",
   "cat": "officer",
   "name": "Instructor III Blended",
   "cert": "Fire Service Instructor III",
   "aka": "IFSI officer leadership",
   "provider": "IFSI",
   "location": "West Chicago (hosted by West Chicago FPD)",
   "address": "320 Kress Rd., West Chicago, IL 60185",
   "gk": "WEST CHICAGO|60185",
   "lat": 41.8848,
   "lng": -88.204,
   "cost": 675,
   "costNote": "Illinois rate. Out of state: $875.",
   "length": null,
   "sessions": [
    {
     "s": "2027-02-01",
     "e": "2027-03-05",
     "t": "Feb 1–Mar 5, 2027 (3 parts)",
     "u": "https://www.fsi.illinois.edu/content/courses/register/step1.cfm?activity=202700840&session=134783",
     "seats": "22 seats left"
    }
   ],
   "note": "Online registration asks for your Fire Chief's PIN.",
   "register": "https://www.fsi.illinois.edu/content/courses/register/step1.cfm?activity=202700840&session=134783",
   "page": "https://www.fsi.illinois.edu/content/courses/programs/description.cfm?course_id=5",
   "contact": "(630) 231-2123",
   "checked": "2026-11-09"
  },
  {
   "id": "ifsi-1171-crystallak",
   "cat": "prev",
   "name": "NFA Plans Review for Fire and Life Safety",
   "cert": null,
   "aka": "IFSI prevention",
   "provider": "IFSI",
   "location": "Crystal Lake (hosted by Crystal Lake FD)",
   "address": "Crystal Lake FD, Crystal Lake, IL 60014",
   "gk": "CRYSTAL LAKE|60014",
   "lat": 42.2411,
   "lng": -88.3162,
   "cost": 0,
   "costNote": null,
   "length": null,
   "sessions": [
    {
     "s": "2027-02-01",
     "e": "2027-02-06",
     "t": "Feb 1–6, 2027, 8 a.m.–5 p.m. daily",
     "u": "https://www.fsi.illinois.edu/content/courses/register/step1.cfm?activity=202700527&session=134373",
     "seats": "Full"
    }
   ],
   "note": "Online registration asks for your Fire Chief's PIN. Full right now. Call to ask about a waitlist.",
   "register": "https://www.fsi.illinois.edu/content/courses/register/step1.cfm?activity=202700527&session=134373",
   "page": "https://www.fsi.illinois.edu/content/courses/programs/description.cfm?course_id=1171",
   "contact": "(815) 356-3643",
   "checked": "2026-11-09"
  },
  {
   "id": "ifsi-1090-addison",
   "cat": "prev",
   "name": "NFA Residential Sprinkler Plan Review",
   "cert": null,
   "aka": "IFSI prevention",
   "provider": "IFSI",
   "location": "Addison (hosted by Addison FPD)",
   "address": "Addison FPD, Addison, IL 60101",
   "gk": "ADDISON|60101",
   "lat": 41.9317,
   "lng": -87.989,
   "cost": 0,
   "costNote": null,
   "length": null,
   "sessions": [
    {
     "s": "2027-02-08",
     "e": "2027-02-09",
     "t": "Feb 8–9, 2027, 8 a.m.–5 p.m. daily",
     "u": "https://www.fsi.illinois.edu/content/courses/register/step1.cfm?activity=202700525&session=134371",
     "seats": "4 seats left"
    }
   ],
   "note": "Online registration asks for your Fire Chief's PIN.",
   "register": "https://www.fsi.illinois.edu/content/courses/register/step1.cfm?activity=202700525&session=134371",
   "page": "https://www.fsi.illinois.edu/content/courses/programs/description.cfm?course_id=1090",
   "contact": "(630) 628-3100",
   "checked": "2026-11-09"
  },
  {
   "id": "ifsi-1438-champaign",
   "cat": "prev",
   "name": "Youth Firesetting Prevention and Intervention Specialist",
   "cert": "Youth Firesetter Intervention Specialist",
   "aka": "IFSI prevention",
   "provider": "IFSI",
   "location": "IFSI campus, Champaign",
   "address": "11 Gerty Dr, Champaign, IL 61820",
   "gk": "CHAMPAIGN|61820",
   "lat": 40.1165,
   "lng": -88.2431,
   "cost": 250,
   "costNote": "Illinois rate. Out of state: $450.",
   "length": null,
   "sessions": [
    {
     "s": "2027-02-18",
     "e": "2027-02-19",
     "t": "Feb 18–19, 2027, 8 a.m.–5 p.m. daily",
     "u": "https://www.fsi.illinois.edu/content/courses/register/step1.cfm?activity=202700845&session=134796",
     "seats": "30 seats left"
    }
   ],
   "note": "Online registration asks for your Fire Chief's PIN.",
   "register": "https://www.fsi.illinois.edu/content/courses/register/step1.cfm?activity=202700845&session=134796",
   "page": "https://www.fsi.illinois.edu/content/courses/programs/description.cfm?course_id=1438",
   "contact": "(217) 333-3800",
   "checked": "2026-11-09"
  },
  {
   "id": "ifsi-917-mountcarme",
   "cat": "rescue",
   "name": "Grain Bin Rescue Operations",
   "cert": null,
   "aka": "IFSI technical rescue",
   "provider": "IFSI",
   "location": "Mount Carmel (hosted by Mount Carmel FD)",
   "address": "830 Walnut St., Mount Carmel, IL 62863",
   "gk": "MOUNT CARMEL|62863",
   "lat": 38.4109,
   "lng": -87.7614,
   "cost": 300,
   "costNote": "Illinois rate. Out of state: $450.",
   "length": null,
   "sessions": [
    {
     "s": "2027-02-19",
     "e": "2027-03-07",
     "t": "Feb 19–Mar 7, 2027 (2 parts)",
     "u": "https://www.fsi.illinois.edu/content/courses/register/step1.cfm?activity=202700762&session=134668",
     "seats": "15 seats left"
    }
   ],
   "note": "Online registration asks for your Fire Chief's PIN.",
   "register": "https://www.fsi.illinois.edu/content/courses/register/step1.cfm?activity=202700762&session=134668",
   "page": "https://www.fsi.illinois.edu/content/courses/programs/description.cfm?course_id=917",
   "contact": "(618) 262-4311",
   "checked": "2026-11-09"
  },
  {
   "id": "ifsi-4-oregon",
   "cat": "officer",
   "name": "Instructor II",
   "cert": "Fire Service Instructor II",
   "aka": "IFSI officer leadership",
   "provider": "IFSI",
   "location": "Oregon (hosted by Oregon FD)",
   "address": "100 W. Washington St., Oregon, IL 61061",
   "gk": "OREGON|61061",
   "lat": 42.0148,
   "lng": -89.3323,
   "cost": 0,
   "costNote": "Tuition-free for members of Illinois fire departments (except Chicago FD). Out of state: $800.",
   "length": null,
   "sessions": [
    {
     "s": "2027-02-20",
     "e": "2027-02-28",
     "t": "Feb 20–28, 2027 (2 parts)",
     "u": "https://www.fsi.illinois.edu/content/courses/register/step1.cfm?activity=202700702&session=134597",
     "seats": "6 seats left"
    }
   ],
   "note": "Online registration asks for your Fire Chief's PIN.",
   "register": "https://www.fsi.illinois.edu/content/courses/register/step1.cfm?activity=202700702&session=134597",
   "page": "https://www.fsi.illinois.edu/content/courses/programs/description.cfm?course_id=4",
   "contact": "(815) 732-7214",
   "checked": "2026-11-09"
  },
  {
   "id": "ifsi-1015-orlandpark",
   "cat": "rescue",
   "name": "Rope Rescue Awareness and Operations",
   "cert": "Rope Operations",
   "aka": "IFSI technical rescue",
   "provider": "IFSI",
   "location": "Orland Park (hosted by Orland FPD)",
   "address": "10728 163rd Pl., Orland Park, IL 60467",
   "gk": "ORLAND PARK|60467",
   "lat": 41.6307,
   "lng": -87.8536,
   "cost": 0,
   "costNote": "Illinois rate. Out of state: $2,350.",
   "length": null,
   "sessions": [
    {
     "s": "2027-02-22",
     "e": "2027-02-26",
     "t": "Feb 22–26, 2027, 8 a.m.–5 p.m. daily",
     "u": "https://www.fsi.illinois.edu/content/courses/register/step1.cfm?activity=202700806&session=134721",
     "seats": "22 seats left"
    }
   ],
   "note": "Online registration asks for your Fire Chief's PIN.",
   "register": "https://www.fsi.illinois.edu/content/courses/register/step1.cfm?activity=202700806&session=134721",
   "page": "https://www.fsi.illinois.edu/content/courses/programs/description.cfm?course_id=1015",
   "contact": "(708) 349-0074",
   "checked": "2026-11-09"
  },
  {
   "id": "ifsi-1436-cicero",
   "cat": "hazmat",
   "name": "Pipeline Emergencies - First Responder Awareness",
   "cert": null,
   "aka": "IFSI hazmat",
   "provider": "IFSI",
   "location": "Cicero (hosted by Cicero FD)",
   "address": "5303 W 25th St., Cicero, IL 60804",
   "gk": "CICERO|60804",
   "lat": 41.8455,
   "lng": -87.754,
   "cost": 0,
   "costNote": null,
   "length": null,
   "sessions": [
    {
     "s": "2027-02-23",
     "e": "2027-02-23",
     "t": "Feb 23, 2027, 8 a.m.–noon",
     "u": "https://www.fsi.illinois.edu/content/courses/register/step1.cfm?activity=202700872&session=134836",
     "seats": "23 seats left"
    },
    {
     "s": "2027-02-24",
     "e": "2027-02-24",
     "t": "Feb 24, 2027, 8 a.m.–noon",
     "u": "https://www.fsi.illinois.edu/content/courses/register/step1.cfm?activity=202700873&session=134837",
     "seats": "24 seats left"
    },
    {
     "s": "2027-02-25",
     "e": "2027-02-25",
     "t": "Feb 25, 2027, 8 a.m.–noon",
     "u": "https://www.fsi.illinois.edu/content/courses/register/step1.cfm?activity=202700874&session=134838",
     "seats": "24 seats left"
    }
   ],
   "note": null,
   "register": "https://www.fsi.illinois.edu/content/courses/register/step1.cfm?activity=202700872&session=134836",
   "page": "https://www.fsi.illinois.edu/content/courses/programs/description.cfm?course_id=1436",
   "contact": "(708) 268-0616",
   "checked": "2026-11-09"
  },
  {
   "id": "ifsi-1607-champaign",
   "cat": "ff",
   "name": "Firefighter II / NFPA 1010 - Advanced Technician Firefighter",
   "cert": "Advanced Technician Firefighter",
   "aka": "IFSI firefighter",
   "provider": "IFSI",
   "location": "IFSI campus, Champaign",
   "address": "11 Gerty Dr, Champaign, IL 61820",
   "gk": "CHAMPAIGN|61820",
   "lat": 40.1165,
   "lng": -88.2431,
   "cost": 1550,
   "costNote": "Illinois rate. Out of state: $1,750.",
   "length": null,
   "sessions": [
    {
     "s": "2027-02-27",
     "e": "2027-03-07",
     "t": "Feb 27–Mar 7, 2027 (2 parts)",
     "u": "https://www.fsi.illinois.edu/content/courses/register/step1.cfm?activity=202700836&session=134777",
     "seats": "29 seats left"
    },
    {
     "s": "2027-04-19",
     "e": "2027-04-23",
     "t": "Apr 19–23, 2027, 8 a.m.–5 p.m. daily",
     "u": "https://www.fsi.illinois.edu/content/courses/register/step1.cfm?activity=202700837&session=134779",
     "seats": "34 seats left"
    },
    {
     "s": "2027-10-11",
     "e": "2027-10-15",
     "t": "Oct 11–15, 2027, 8 a.m.–5 p.m. daily",
     "u": "https://www.fsi.illinois.edu/content/courses/register/step1.cfm?activity=202800040&session=134780",
     "seats": "34 seats left"
    }
   ],
   "note": "Online registration asks for your Fire Chief's PIN.",
   "register": "https://www.fsi.illinois.edu/content/courses/register/step1.cfm?activity=202700836&session=134777",
   "page": "https://www.fsi.illinois.edu/content/courses/programs/description.cfm?course_id=1607",
   "contact": "(217) 333-3800",
   "checked": "2026-11-09"
  },
  {
   "id": "ifsi-1507-champaign",
   "cat": "prev",
   "name": "Fire and Life Safety Educator I",
   "cert": "Public Fire and Life Safety Educator I",
   "aka": "IFSI prevention",
   "provider": "IFSI",
   "location": "IFSI campus, Champaign",
   "address": "11 Gerty Dr, Champaign, IL 61820",
   "gk": "CHAMPAIGN|61820",
   "lat": 40.1165,
   "lng": -88.2431,
   "cost": 750,
   "costNote": "Illinois rate. Out of state: $950.",
   "length": null,
   "sessions": [
    {
     "s": "2027-03-01",
     "e": "2027-03-05",
     "t": "Mar 1–5, 2027, 8 a.m.–5 p.m. daily",
     "u": "https://www.fsi.illinois.edu/content/courses/register/step1.cfm?activity=202700844&session=134795",
     "seats": "30 seats left"
    }
   ],
   "note": "Online registration asks for your Fire Chief's PIN.",
   "register": "https://www.fsi.illinois.edu/content/courses/register/step1.cfm?activity=202700844&session=134795",
   "page": "https://www.fsi.illinois.edu/content/courses/programs/description.cfm?course_id=1507",
   "contact": "(217) 333-3800",
   "checked": "2026-11-09"
  },
  {
   "id": "ifsi-149-plainfield",
   "cat": "officer",
   "name": "Fireground Command Officer School",
   "cert": null,
   "aka": "IFSI officer leadership",
   "provider": "IFSI",
   "location": "Plainfield (hosted by Plainfield FPD)",
   "address": "23748 W 135th Street, Plainfield, IL 60544",
   "gk": "PLAINFIELD|60544",
   "lat": 41.6087,
   "lng": -88.2054,
   "cost": 1975,
   "costNote": "Illinois rate. Out of state: $2,175.",
   "length": null,
   "sessions": [
    {
     "s": "2027-03-01",
     "e": "2027-03-05",
     "t": "Mar 1–5, 2027, 8 a.m.–5 p.m. daily",
     "u": "https://www.fsi.illinois.edu/content/courses/register/step1.cfm?activity=202700827&session=134760"
    },
    {
     "s": "2027-09-13",
     "e": "2027-09-17",
     "t": "Sep 13–17, 2027, 8 a.m.–5 p.m. daily",
     "u": "https://www.fsi.illinois.edu/content/courses/register/step1.cfm?activity=202800033&session=134764"
    }
   ],
   "note": "Online registration asks for your Fire Chief's PIN.",
   "register": "https://www.fsi.illinois.edu/content/courses/register/step1.cfm?activity=202700827&session=134760",
   "page": "https://www.fsi.illinois.edu/content/courses/programs/description.cfm?course_id=149",
   "contact": "(815) 436-5335",
   "checked": "2026-11-09"
  },
  {
   "id": "ifsi-148-plainfield",
   "cat": "officer",
   "name": "Fireground Company Officer School",
   "cert": null,
   "aka": "IFSI officer leadership",
   "provider": "IFSI",
   "location": "Plainfield (hosted by Plainfield FPD)",
   "address": "23748 W 135th Street, Plainfield, IL 60544",
   "gk": "PLAINFIELD|60544",
   "lat": 41.6087,
   "lng": -88.2054,
   "cost": 1975,
   "costNote": "Illinois rate. Out of state: $2,175.",
   "length": null,
   "sessions": [
    {
     "s": "2027-03-01",
     "e": "2027-03-05",
     "t": "Mar 1–5, 2027, 8 a.m.–5 p.m. daily",
     "u": "https://www.fsi.illinois.edu/content/courses/register/step1.cfm?activity=202700826&session=134759",
     "seats": "23 seats left"
    },
    {
     "s": "2027-09-13",
     "e": "2027-09-17",
     "t": "Sep 13–17, 2027, 8 a.m.–5 p.m. daily",
     "u": "https://www.fsi.illinois.edu/content/courses/register/step1.cfm?activity=202800032&session=134763",
     "seats": "23 seats left"
    }
   ],
   "note": "Online registration asks for your Fire Chief's PIN.",
   "register": "https://www.fsi.illinois.edu/content/courses/register/step1.cfm?activity=202700826&session=134759",
   "page": "https://www.fsi.illinois.edu/content/courses/programs/description.cfm?course_id=148",
   "contact": "(815) 436-5335",
   "checked": "2026-11-09"
  },
  {
   "id": "ifsi-1100-champaign",
   "cat": "ff",
   "name": "Firefighter-II Challenge Exam - Skills Assessment",
   "cert": null,
   "aka": "IFSI firefighter",
   "provider": "IFSI",
   "location": "IFSI campus, Champaign",
   "address": "11 Gerty Dr, Champaign, IL 61820",
   "gk": "CHAMPAIGN|61820",
   "lat": 40.1165,
   "lng": -88.2431,
   "cost": 650,
   "costNote": "Illinois rate. Out of state: $750.",
   "length": null,
   "sessions": [
    {
     "s": "2027-03-06",
     "e": "2027-03-07",
     "t": "Mar 6–7, 2027, 7 a.m.–6 p.m. daily",
     "u": "https://www.fsi.illinois.edu/content/courses/register/step1.cfm?activity=202700860&session=134820",
     "seats": "4 seats left"
    },
    {
     "s": "2027-04-22",
     "e": "2027-04-23",
     "t": "Apr 22–23, 2027, 8 a.m.–5 p.m. daily",
     "u": "https://www.fsi.illinois.edu/content/courses/register/step1.cfm?activity=202700861&session=134821",
     "seats": "4 seats left"
    },
    {
     "s": "2027-10-14",
     "e": "2027-10-15",
     "t": "Oct 14–15, 2027, 8 a.m.–5 p.m. daily",
     "u": "https://www.fsi.illinois.edu/content/courses/register/step1.cfm?activity=202800051&session=134822",
     "seats": "4 seats left"
    }
   ],
   "note": "Online registration asks for your Fire Chief's PIN.",
   "register": "https://www.fsi.illinois.edu/content/courses/register/step1.cfm?activity=202700860&session=134820",
   "page": "https://www.fsi.illinois.edu/content/courses/programs/description.cfm?course_id=1100",
   "contact": "(217) 333-3800",
   "checked": "2026-11-09"
  },
  {
   "id": "ifsi-1003-orlandpark",
   "cat": "rescue",
   "name": "Confined Space Rescue Awareness and Operations",
   "cert": "Confined Space Operations",
   "aka": "IFSI technical rescue",
   "provider": "IFSI",
   "location": "Orland Park (hosted by Orland FPD)",
   "address": "10728 163rd Pl., Orland Park, IL 60467",
   "gk": "ORLAND PARK|60467",
   "lat": 41.6307,
   "lng": -87.8536,
   "cost": 0,
   "costNote": "Illinois rate. Out of state: $2,275.",
   "length": null,
   "sessions": [
    {
     "s": "2027-03-08",
     "e": "2027-03-12",
     "t": "Mar 8–12, 2027, 8 a.m.–5 p.m. daily",
     "u": "https://www.fsi.illinois.edu/content/courses/register/step1.cfm?activity=202700808&session=134724",
     "seats": "30 seats left"
    }
   ],
   "note": "Online registration asks for your Fire Chief's PIN.",
   "register": "https://www.fsi.illinois.edu/content/courses/register/step1.cfm?activity=202700808&session=134724",
   "page": "https://www.fsi.illinois.edu/content/courses/programs/description.cfm?course_id=1003",
   "contact": "(708) 349-0074",
   "checked": "2026-11-09"
  },
  {
   "id": "ifsi-570-golconda",
   "cat": "ff",
   "name": "Residential Building Operations",
   "cert": null,
   "aka": "IFSI firefighter",
   "provider": "IFSI",
   "location": "Golconda (hosted by Rural Pope County FPD)",
   "address": "64 Franks Road, Golconda, IL 62938",
   "gk": "GOLCONDA|62938",
   "lat": 37.3673,
   "lng": -88.4864,
   "cost": 0,
   "costNote": "Tuition-free for members of Illinois fire departments (except Chicago FD).",
   "length": null,
   "sessions": [
    {
     "s": "2027-03-08",
     "e": "2027-03-08",
     "t": "Mar 8, 2027, 6 p.m.–10 p.m.",
     "u": "https://www.fsi.illinois.edu/content/courses/register/step1.cfm?activity=202700923&session=134897",
     "seats": "34 seats left"
    }
   ],
   "note": null,
   "register": "https://www.fsi.illinois.edu/content/courses/register/step1.cfm?activity=202700923&session=134897",
   "page": "https://www.fsi.illinois.edu/content/courses/programs/description.cfm?course_id=570",
   "contact": "(618) 949-3789",
   "checked": "2026-11-09"
  },
  {
   "id": "ifsi-41-champaign",
   "cat": "ff",
   "name": "Engine Company Operations",
   "cert": null,
   "aka": "IFSI firefighter",
   "provider": "IFSI",
   "location": "IFSI campus, Champaign",
   "address": "11 Gerty Dr, Champaign, IL 61820",
   "gk": "CHAMPAIGN|61820",
   "lat": 40.1165,
   "lng": -88.2431,
   "cost": 900,
   "costNote": "Illinois rate. Out of state: $1,100.",
   "length": null,
   "sessions": [
    {
     "s": "2027-03-15",
     "e": "2027-03-17",
     "t": "Mar 15–17, 2027, 8 a.m.–5 p.m. daily",
     "u": "https://www.fsi.illinois.edu/content/courses/register/step1.cfm?activity=202700832&session=134770",
     "seats": "30 seats left"
    },
    {
     "s": "2027-08-30",
     "e": "2027-09-01",
     "t": "Aug 30–Sep 1, 2027, 8 a.m.–5 p.m. daily",
     "u": "https://www.fsi.illinois.edu/content/courses/register/step1.cfm?activity=202800037&session=134774",
     "seats": "30 seats left"
    }
   ],
   "note": "Online registration asks for your Fire Chief's PIN.",
   "register": "https://www.fsi.illinois.edu/content/courses/register/step1.cfm?activity=202700832&session=134770",
   "page": "https://www.fsi.illinois.edu/content/courses/programs/description.cfm?course_id=41",
   "contact": "(217) 333-3800",
   "checked": "2026-11-09"
  },
  {
   "id": "ifsi-869-glenview",
   "cat": "officer",
   "name": "Leadership Development and Decision Making Program: Chief Officer Level",
   "cert": null,
   "aka": "IFSI officer leadership",
   "provider": "IFSI",
   "location": "IFSI class in Glenview",
   "address": "NIPSTA, Glenview, IL 60026",
   "gk": "GLENVIEW|60026",
   "lat": 42.0701,
   "lng": -87.8114,
   "cost": 0,
   "costNote": "Tuition-free for members of Illinois fire departments (except Chicago FD). Out of state: $2,700.",
   "length": null,
   "sessions": [
    {
     "s": "2027-03-22",
     "e": "2027-03-26",
     "t": "Mar 22–26, 2027, 8 a.m.–5 p.m. daily",
     "u": "https://www.fsi.illinois.edu/content/courses/register/step1.cfm?activity=202700795&session=134706",
     "seats": "6 seats left"
    }
   ],
   "note": "Online registration asks for your Fire Chief's PIN.",
   "register": "https://www.fsi.illinois.edu/content/courses/register/step1.cfm?activity=202700795&session=134706",
   "page": "https://www.fsi.illinois.edu/content/courses/programs/description.cfm?course_id=869",
   "contact": "(217) 333-3800",
   "checked": "2026-11-09"
  },
  {
   "id": "ifsi-871-glenview",
   "cat": "officer",
   "name": "Leadership Development and Decision Making Program: Fire Officer Level",
   "cert": null,
   "aka": "IFSI officer leadership",
   "provider": "IFSI",
   "location": "IFSI class in Glenview",
   "address": "NIPSTA, Glenview, IL 60026",
   "gk": "GLENVIEW|60026",
   "lat": 42.0701,
   "lng": -87.8114,
   "cost": 0,
   "costNote": "Tuition-free for members of Illinois fire departments (except Chicago FD). Out of state: $2,350.",
   "length": null,
   "sessions": [
    {
     "s": "2027-03-22",
     "e": "2027-03-26",
     "t": "Mar 22–26, 2027, 8 a.m.–5 p.m. daily",
     "u": "https://www.fsi.illinois.edu/content/courses/register/step1.cfm?activity=202700794&session=134705",
     "seats": "Full"
    }
   ],
   "note": "Online registration asks for your Fire Chief's PIN. Full right now. Call to ask about a waitlist.",
   "register": "https://www.fsi.illinois.edu/content/courses/register/step1.cfm?activity=202700794&session=134705",
   "page": "https://www.fsi.illinois.edu/content/courses/programs/description.cfm?course_id=871",
   "contact": "(217) 333-3800",
   "checked": "2026-11-09"
  },
  {
   "id": "ifsi-870-glenview",
   "cat": "officer",
   "name": "Leadership Development and Decision Making Program: Firefighter Level",
   "cert": null,
   "aka": "IFSI officer leadership",
   "provider": "IFSI",
   "location": "IFSI class in Glenview",
   "address": "NIPSTA, Glenview, IL 60026",
   "gk": "GLENVIEW|60026",
   "lat": 42.0701,
   "lng": -87.8114,
   "cost": 0,
   "costNote": "Tuition-free for members of Illinois fire departments (except Chicago FD). Out of state: $1,950.",
   "length": null,
   "sessions": [
    {
     "s": "2027-03-22",
     "e": "2027-03-26",
     "t": "Mar 22–26, 2027, 8 a.m.–5 p.m. daily",
     "u": "https://www.fsi.illinois.edu/content/courses/register/step1.cfm?activity=202700793&session=134704",
     "seats": "Full"
    }
   ],
   "note": "Online registration asks for your Fire Chief's PIN. Full right now. Call to ask about a waitlist.",
   "register": "https://www.fsi.illinois.edu/content/courses/register/step1.cfm?activity=202700793&session=134704",
   "page": "https://www.fsi.illinois.edu/content/courses/programs/description.cfm?course_id=870",
   "contact": "(217) 333-3800",
   "checked": "2026-11-09"
  },
  {
   "id": "ifsi-1015-champaign",
   "cat": "rescue",
   "name": "Rope Rescue Awareness and Operations",
   "cert": "Rope Operations",
   "aka": "IFSI technical rescue",
   "provider": "IFSI",
   "location": "IFSI campus, Champaign",
   "address": "11 Gerty Dr., Champaign, IL 61820",
   "gk": "CHAMPAIGN|61820",
   "lat": 40.1165,
   "lng": -88.2431,
   "cost": 0,
   "costNote": "Tuition-free for members of Illinois fire departments (except Chicago FD). Out of state: $2,350.",
   "length": null,
   "sessions": [
    {
     "s": "2027-03-22",
     "e": "2027-03-26",
     "t": "Mar 22–26, 2027, 8 a.m.–5 p.m. daily",
     "u": "https://www.fsi.illinois.edu/content/courses/register/step1.cfm?activity=202700819&session=134740",
     "seats": "Full"
    }
   ],
   "note": "Online registration asks for your Fire Chief's PIN. Full right now. Call to ask about a waitlist.",
   "register": "https://www.fsi.illinois.edu/content/courses/register/step1.cfm?activity=202700819&session=134740",
   "page": "https://www.fsi.illinois.edu/content/courses/programs/description.cfm?course_id=1015",
   "contact": "(217) 333-3800",
   "checked": "2026-11-09"
  },
  {
   "id": "ifsi-1520-champaign",
   "cat": "prev",
   "name": "Fire Inspector",
   "cert": "Fire Inspector I",
   "aka": "IFSI prevention",
   "provider": "IFSI",
   "location": "IFSI campus, Champaign",
   "address": "11 Gerty Dr, Champaign, IL 61820",
   "gk": "CHAMPAIGN|61820",
   "lat": 40.1165,
   "lng": -88.2431,
   "cost": 800,
   "costNote": "Illinois rate. Out of state: $950.",
   "length": null,
   "sessions": [
    {
     "s": "2027-03-29",
     "e": "2027-04-02",
     "t": "Mar 29–Apr 2, 2027, 8 a.m.–5 p.m. daily",
     "u": "https://www.fsi.illinois.edu/content/courses/register/step1.cfm?activity=202700846&session=134797",
     "seats": "29 seats left"
    }
   ],
   "note": null,
   "register": "https://www.fsi.illinois.edu/content/courses/register/step1.cfm?activity=202700846&session=134797",
   "page": "https://www.fsi.illinois.edu/content/courses/programs/description.cfm?course_id=1520",
   "contact": "(217) 333-3800",
   "checked": "2026-11-09"
  },
  {
   "id": "ifsi-1317-elkgrovevi",
   "cat": "prev",
   "name": "NFA Fire Investigation: First Responders",
   "cert": null,
   "aka": "IFSI prevention",
   "provider": "IFSI",
   "location": "Elk Grove Village (hosted by Elk Grove Village FD)",
   "address": "Elk Grove Fire Department Training Center, Elk Grove Village, IL 60007",
   "gk": "ELK GROVE VILLAGE|60007",
   "lat": 42.0036,
   "lng": -88.0038,
   "cost": 0,
   "costNote": null,
   "length": null,
   "sessions": [
    {
     "s": "2027-04-12",
     "e": "2027-04-13",
     "t": "Apr 12–13, 2027, 8 a.m.–5 p.m. daily",
     "u": "https://www.fsi.illinois.edu/content/courses/register/step1.cfm?activity=202700718&session=134617",
     "seats": "26 seats left"
    }
   ],
   "note": "Online registration asks for your Fire Chief's PIN.",
   "register": "https://www.fsi.illinois.edu/content/courses/register/step1.cfm?activity=202700718&session=134617",
   "page": "https://www.fsi.illinois.edu/content/courses/programs/description.cfm?course_id=1317",
   "contact": "(847) 734-8000",
   "checked": "2026-11-09"
  },
  {
   "id": "ifsi-1533-champaign",
   "cat": "rescue",
   "name": "Common Passenger Vehicle Rescue",
   "cert": "Common Passenger Vehicle Rescue",
   "aka": "IFSI technical rescue",
   "provider": "IFSI",
   "location": "IFSI campus, Champaign",
   "address": "11 Gerty Dr, Champaign, IL 61820",
   "gk": "CHAMPAIGN|61820",
   "lat": 40.1165,
   "lng": -88.2431,
   "cost": 1700,
   "costNote": "Illinois rate. Out of state: $1,900.",
   "length": null,
   "sessions": [
    {
     "s": "2027-04-19",
     "e": "2027-04-23",
     "t": "Apr 19–23, 2027, 8 a.m.–5 p.m. daily",
     "u": "https://www.fsi.illinois.edu/content/courses/register/step1.cfm?activity=202700825&session=134756",
     "seats": "Full"
    }
   ],
   "note": "Online registration asks for your Fire Chief's PIN. Full right now. Call to ask about a waitlist.",
   "register": "https://www.fsi.illinois.edu/content/courses/register/step1.cfm?activity=202700825&session=134756",
   "page": "https://www.fsi.illinois.edu/content/courses/programs/description.cfm?course_id=1533",
   "contact": "(217) 333-3800",
   "checked": "2026-11-09"
  },
  {
   "id": "ifsi-1016-frankfort",
   "cat": "rescue",
   "name": "Structural Collapse Rescue Awareness and Operations",
   "cert": "Structural Collapse Operations",
   "aka": "IFSI technical rescue",
   "provider": "IFSI",
   "location": "Frankfort (hosted by Orland FPD)",
   "address": "24420 S. Lagrange Rd., Frankfort, IL 60423",
   "gk": "FRANKFORT|60423",
   "lat": 41.4979,
   "lng": -87.8496,
   "cost": 0,
   "costNote": "Illinois rate. Out of state: $3,275.",
   "length": null,
   "sessions": [
    {
     "s": "2027-04-19",
     "e": "2027-04-23",
     "t": "Apr 19–23, 2027, 8 a.m.–5 p.m. daily",
     "u": "https://www.fsi.illinois.edu/content/courses/register/step1.cfm?activity=202700810&session=134726",
     "seats": "21 seats left"
    }
   ],
   "note": "Online registration asks for your Fire Chief's PIN.",
   "register": "https://www.fsi.illinois.edu/content/courses/register/step1.cfm?activity=202700810&session=134726",
   "page": "https://www.fsi.illinois.edu/content/courses/programs/description.cfm?course_id=1016",
   "contact": "(708) 349-0074",
   "checked": "2026-11-09"
  },
  {
   "id": "ifsi-692-rockford",
   "cat": "ff",
   "name": "Light and Fight - Off Campus",
   "cert": null,
   "aka": "IFSI firefighter",
   "provider": "IFSI",
   "location": "Rockford (hosted by Cherry Valley FPD)",
   "address": "4919 Blackhawk Rd., Rockford, IL 61109",
   "gk": "ROCKFORD|61109",
   "lat": 42.2714,
   "lng": -89.094,
   "cost": 0,
   "costNote": "Tuition-free for members of Illinois fire departments (except Chicago FD). Out of state: $325.",
   "length": null,
   "sessions": [
    {
     "s": "2027-04-24",
     "e": "2027-04-24",
     "t": "Apr 24, 2027, 8 a.m.–5 p.m.",
     "u": "https://www.fsi.illinois.edu/content/courses/register/step1.cfm?activity=202700908&session=134882",
     "seats": "33 seats left"
    }
   ],
   "note": "Online registration asks for your Fire Chief's PIN.",
   "register": "https://www.fsi.illinois.edu/content/courses/register/step1.cfm?activity=202700908&session=134882",
   "page": "https://www.fsi.illinois.edu/content/courses/programs/description.cfm?course_id=692",
   "contact": "(815) 332-5382",
   "checked": "2026-11-09"
  },
  {
   "id": "ifsi-1003-champaign",
   "cat": "rescue",
   "name": "Confined Space Rescue Awareness and Operations",
   "cert": "Confined Space Operations",
   "aka": "IFSI technical rescue",
   "provider": "IFSI",
   "location": "IFSI campus, Champaign",
   "address": "11 Gerty Dr., Champaign, IL 61820",
   "gk": "CHAMPAIGN|61820",
   "lat": 40.1165,
   "lng": -88.2431,
   "cost": 0,
   "costNote": "Tuition-free for members of Illinois fire departments (except Chicago FD). Out of state: $2,275.",
   "length": null,
   "sessions": [
    {
     "s": "2027-04-26",
     "e": "2027-04-30",
     "t": "Apr 26–30, 2027, 8 a.m.–5 p.m. daily",
     "u": "https://www.fsi.illinois.edu/content/courses/register/step1.cfm?activity=202700820&session=134743",
     "seats": "14 seats left"
    }
   ],
   "note": "Online registration asks for your Fire Chief's PIN.",
   "register": "https://www.fsi.illinois.edu/content/courses/register/step1.cfm?activity=202700820&session=134743",
   "page": "https://www.fsi.illinois.edu/content/courses/programs/description.cfm?course_id=1003",
   "contact": "(217) 333-3800",
   "checked": "2026-11-09"
  },
  {
   "id": "ifsi-133-champaign",
   "cat": "ff",
   "name": "Smoke Divers (Advanced Breathing Apparatus Specialist)",
   "cert": null,
   "aka": "IFSI firefighter",
   "provider": "IFSI",
   "location": "IFSI campus, Champaign",
   "address": "11 Gerty Dr, Champaign, IL 61820",
   "gk": "CHAMPAIGN|61820",
   "lat": 40.1165,
   "lng": -88.2431,
   "cost": 1450,
   "costNote": "Illinois rate. Out of state: $1,650.",
   "length": null,
   "sessions": [
    {
     "s": "2027-04-27",
     "e": "2027-04-29",
     "t": "Apr 27–29, 2027, 8 a.m.–5 p.m. daily",
     "u": "https://www.fsi.illinois.edu/content/courses/register/step1.cfm?activity=202700830&session=134767",
     "seats": "33 seats left"
    },
    {
     "s": "2027-09-08",
     "e": "2027-09-10",
     "t": "Sep 8–10, 2027, 8 a.m.–5 p.m. daily",
     "u": "https://www.fsi.illinois.edu/content/courses/register/step1.cfm?activity=202800036&session=134768",
     "seats": "26 seats left"
    }
   ],
   "note": "Online registration asks for your Fire Chief's PIN.",
   "register": "https://www.fsi.illinois.edu/content/courses/register/step1.cfm?activity=202700830&session=134767",
   "page": "https://www.fsi.illinois.edu/content/courses/programs/description.cfm?course_id=133",
   "contact": "(217) 333-3800",
   "checked": "2026-11-09"
  },
  {
   "id": "ifsi-1673-elkgrovevi",
   "cat": "officer",
   "name": "NFA - Politics and the White Helmet",
   "cert": null,
   "aka": "IFSI officer leadership",
   "provider": "IFSI",
   "location": "Elk Grove Village (hosted by Elk Grove Village FD)",
   "address": "Elk Grove Fire Department Training Center, Elk Grove Village, IL 60007",
   "gk": "ELK GROVE VILLAGE|60007",
   "lat": 42.0036,
   "lng": -88.0038,
   "cost": 0,
   "costNote": null,
   "length": null,
   "sessions": [
    {
     "s": "2027-05-03",
     "e": "2027-05-04",
     "t": "May 3–4, 2027, 8 a.m.–5 p.m. daily",
     "u": "https://www.fsi.illinois.edu/content/courses/register/step1.cfm?activity=202700719&session=134618",
     "seats": "26 seats left"
    }
   ],
   "note": "Online registration asks for your Fire Chief's PIN.",
   "register": "https://www.fsi.illinois.edu/content/courses/register/step1.cfm?activity=202700719&session=134618",
   "page": "https://www.fsi.illinois.edu/content/courses/programs/description.cfm?course_id=1673",
   "contact": "(847) 734-8000",
   "checked": "2026-11-09"
  },
  {
   "id": "ifsi-1660-elgin",
   "cat": "prev",
   "name": "NFA Fire Investigation: Fire as a Weapon",
   "cert": null,
   "aka": "IFSI prevention",
   "provider": "IFSI",
   "location": "Elgin (hosted by Pingree Grove FPD)",
   "address": "Pingree Grove FPD Station 1, Elgin, IL 60124",
   "gk": "ELGIN|60124",
   "lat": 42.0373,
   "lng": -88.2811,
   "cost": 0,
   "costNote": null,
   "length": null,
   "sessions": [
    {
     "s": "2027-05-06",
     "e": "2027-05-07",
     "t": "May 6–7, 2027, 8 a.m.–5 p.m. daily",
     "u": "https://www.fsi.illinois.edu/content/courses/register/step1.cfm?activity=202700526&session=134372",
     "seats": "10 seats left"
    }
   ],
   "note": "Online registration asks for your Fire Chief's PIN.",
   "register": "https://www.fsi.illinois.edu/content/courses/register/step1.cfm?activity=202700526&session=134372",
   "page": "https://www.fsi.illinois.edu/content/courses/programs/description.cfm?course_id=1660",
   "contact": "(847) 741-3151",
   "checked": "2026-11-09"
  },
  {
   "id": "ifsi-1518-orlandpark",
   "cat": "rescue",
   "name": "Rope Rescue Technician (1006 - Ch 5)",
   "cert": "Rope Technician",
   "aka": "IFSI technical rescue",
   "provider": "IFSI",
   "location": "Orland Park (hosted by Orland FPD)",
   "address": "10728 163rd Pl., Orland Park, IL 60467",
   "gk": "ORLAND PARK|60467",
   "lat": 41.6307,
   "lng": -87.8536,
   "cost": 0,
   "costNote": "Illinois rate. Out of state: $3,650.",
   "length": null,
   "sessions": [
    {
     "s": "2027-05-10",
     "e": "2027-05-21",
     "t": "May 10–21, 2027 (2 parts)",
     "u": "https://www.fsi.illinois.edu/content/courses/register/step1.cfm?activity=202700807&session=134722",
     "seats": "33 seats left"
    }
   ],
   "note": "Online registration asks for your Fire Chief's PIN.",
   "register": "https://www.fsi.illinois.edu/content/courses/register/step1.cfm?activity=202700807&session=134722",
   "page": "https://www.fsi.illinois.edu/content/courses/programs/description.cfm?course_id=1518",
   "contact": "(708) 349-0074",
   "checked": "2026-11-09"
  },
  {
   "id": "ifsi-1017-wilmington",
   "cat": "rescue",
   "name": "Trench Rescue Awareness and Operations",
   "cert": "Trench Operations",
   "aka": "IFSI technical rescue",
   "provider": "IFSI",
   "location": "IFSI class in Wilmington",
   "address": "19800 W. Arsenal Rd., Wilmington, IL 60481",
   "gk": "WILMINGTON|60481",
   "lat": 41.3079,
   "lng": -88.1468,
   "cost": 0,
   "costNote": "Tuition-free for members of Illinois fire departments (except Chicago FD). Out of state: $2,000.",
   "length": null,
   "sessions": [
    {
     "s": "2027-05-11",
     "e": "2027-05-14",
     "t": "May 11–14, 2027, 8 a.m.–5 p.m. daily",
     "u": "https://www.fsi.illinois.edu/content/courses/register/step1.cfm?activity=202700821&session=134746",
     "seats": "22 seats left"
    },
    {
     "s": "2027-05-24",
     "e": "2027-05-27",
     "t": "May 24–27, 2027, 8 a.m.–5 p.m. daily",
     "u": "https://www.fsi.illinois.edu/content/courses/register/step1.cfm?activity=202700822&session=134747",
     "seats": "31 seats left"
    }
   ],
   "note": "Online registration asks for your Fire Chief's PIN.",
   "register": "https://www.fsi.illinois.edu/content/courses/register/step1.cfm?activity=202700821&session=134746",
   "page": "https://www.fsi.illinois.edu/content/courses/programs/description.cfm?course_id=1017",
   "contact": "(217) 333-3800",
   "checked": "2026-11-09"
  },
  {
   "id": "ifsi-3-canton",
   "cat": "officer",
   "name": "Instructor I",
   "cert": "Fire Service Instructor I",
   "aka": "IFSI officer leadership",
   "provider": "IFSI",
   "location": "Canton (hosted by Canton FD/City of Canton FD)",
   "address": "101 E. Spruce St., Canton, IL 61520",
   "gk": "CANTON|61520",
   "lat": 40.5581,
   "lng": -90.0351,
   "cost": 0,
   "costNote": "Tuition-free for members of Illinois fire departments (except Chicago FD). Out of state: $800.",
   "length": null,
   "sessions": [
    {
     "s": "2027-05-15",
     "e": "2027-05-23",
     "t": "May 15–23, 2027 (2 parts)",
     "u": "https://www.fsi.illinois.edu/content/courses/register/step1.cfm?activity=202700881&session=134848",
     "seats": "26 seats left"
    }
   ],
   "note": "Online registration asks for your Fire Chief's PIN.",
   "register": "https://www.fsi.illinois.edu/content/courses/register/step1.cfm?activity=202700881&session=134848",
   "page": "https://www.fsi.illinois.edu/content/courses/programs/description.cfm?course_id=3",
   "contact": "(309) 647-0040",
   "checked": "2026-11-09"
  },
  {
   "id": "ifsi-1515-wilmington",
   "cat": "rescue",
   "name": "Trench Rescue Technician (1006 - Ch 12)",
   "cert": "Trench Technician",
   "aka": "IFSI technical rescue",
   "provider": "IFSI",
   "location": "Wilmington (hosted by Orland FPD)",
   "address": "19800 W. Arsenal Rd., Wilmington, IL 60481",
   "gk": "WILMINGTON|60481",
   "lat": 41.3079,
   "lng": -88.1468,
   "cost": 0,
   "costNote": "Illinois rate. Out of state: $2,375.",
   "length": null,
   "sessions": [
    {
     "s": "2027-06-21",
     "e": "2027-06-25",
     "t": "Jun 21–25, 2027, 8 a.m.–5 p.m. daily",
     "u": "https://www.fsi.illinois.edu/content/courses/register/step1.cfm?activity=202700809&session=134725",
     "seats": "23 seats left"
    }
   ],
   "note": "Online registration asks for your Fire Chief's PIN.",
   "register": "https://www.fsi.illinois.edu/content/courses/register/step1.cfm?activity=202700809&session=134725",
   "page": "https://www.fsi.illinois.edu/content/courses/programs/description.cfm?course_id=1515",
   "contact": "(708) 349-0074",
   "checked": "2026-11-09"
  },
  {
   "id": "ifsi-1029-champaign",
   "cat": "prev",
   "name": "Fire Investigator",
   "cert": "Fire Investigator",
   "aka": "IFSI prevention",
   "provider": "IFSI",
   "location": "IFSI campus, Champaign",
   "address": "11 Gerty Dr., Champaign, IL 61820",
   "gk": "CHAMPAIGN|61820",
   "lat": 40.1165,
   "lng": -88.2431,
   "cost": 2500,
   "costNote": "Illinois rate. Out of state: $2,950.",
   "length": null,
   "sessions": [
    {
     "s": "2027-07-19",
     "e": "2027-08-20",
     "t": "Jul 19–Aug 20, 2027 (3 parts)",
     "u": "https://www.fsi.illinois.edu/content/courses/register/step1.cfm?activity=202800044&session=134798",
     "seats": "29 seats left"
    }
   ],
   "note": "Online registration asks for your Fire Chief's PIN.",
   "register": "https://www.fsi.illinois.edu/content/courses/register/step1.cfm?activity=202800044&session=134798",
   "page": "https://www.fsi.illinois.edu/content/courses/programs/description.cfm?course_id=1029",
   "contact": "(217) 333-3800",
   "checked": "2026-11-09"
  },
  {
   "id": "ifsi-1324-orlandpark",
   "cat": "other",
   "name": "Small Unmanned Aircraft System (sUAS) Operations - NFPA 2400",
   "cert": null,
   "aka": "IFSI ",
   "provider": "IFSI",
   "location": "Orland Park (hosted by Orland FPD)",
   "address": "10728 163rd Pl., Orland Park, IL 60467",
   "gk": "ORLAND PARK|60467",
   "lat": 41.6307,
   "lng": -87.8536,
   "cost": 1600,
   "costNote": "Illinois rate. Out of state: $1,975.",
   "length": null,
   "sessions": [
    {
     "s": "2027-08-09",
     "e": "2027-08-13",
     "t": "Aug 9–13, 2027, 8 a.m.–5 p.m. daily",
     "u": "https://www.fsi.illinois.edu/content/courses/register/step1.cfm?activity=202800029&session=134755",
     "seats": "24 seats left"
    }
   ],
   "note": "Online registration asks for your Fire Chief's PIN.",
   "register": "https://www.fsi.illinois.edu/content/courses/register/step1.cfm?activity=202800029&session=134755",
   "page": "https://www.fsi.illinois.edu/content/courses/programs/description.cfm?course_id=1324",
   "contact": "(708) 349-0074",
   "checked": "2026-11-09"
  },
  {
   "id": "ifsi-1610-orlandpark",
   "cat": "app",
   "name": "Fire Apparatus Engineer - NFPA 1010 Driver/Operator - Pumper",
   "cert": "Fire Apparatus Engineer",
   "aka": "IFSI engineer driver pump",
   "provider": "IFSI",
   "location": "Orland Park (hosted by Orland FPD)",
   "address": "10728 163rd Place, Orland Park, IL 60467",
   "gk": "ORLAND PARK|60467",
   "lat": 41.6307,
   "lng": -87.8536,
   "cost": 850,
   "costNote": "Illinois rate. Out of state: $1,200.",
   "length": null,
   "sessions": [
    {
     "s": "2027-08-16",
     "e": "2027-08-20",
     "t": "Aug 16–20, 2027, 8 a.m.–5 p.m. daily",
     "u": "https://www.fsi.illinois.edu/content/courses/register/step1.cfm?activity=202800031&session=134758",
     "seats": "24 seats left"
    }
   ],
   "note": "Online registration asks for your Fire Chief's PIN.",
   "register": "https://www.fsi.illinois.edu/content/courses/register/step1.cfm?activity=202800031&session=134758",
   "page": "https://www.fsi.illinois.edu/content/courses/programs/description.cfm?course_id=1610",
   "contact": "(708) 349-0074",
   "checked": "2026-11-09"
  },
  {
   "id": "ifsi-420-champaign",
   "cat": "rescue",
   "name": "Confined Space Rescue Technician",
   "cert": "Confined Space Technician",
   "aka": "IFSI technical rescue",
   "provider": "IFSI",
   "location": "IFSI campus, Champaign",
   "address": "11 Gerty Dr., Champaign, IL 61820",
   "gk": "CHAMPAIGN|61820",
   "lat": 40.1165,
   "lng": -88.2431,
   "cost": 0,
   "costNote": "Tuition-free for members of Illinois fire departments (except Chicago FD). Out of state: $2,550.",
   "length": null,
   "sessions": [
    {
     "s": "2027-08-30",
     "e": "2027-09-03",
     "t": "Aug 30–Sep 3, 2027, 8 a.m.–5 p.m. daily",
     "u": "https://www.fsi.illinois.edu/content/courses/register/step1.cfm?activity=202800023&session=134744",
     "seats": "22 seats left"
    },
    {
     "s": "2027-10-11",
     "e": "2027-10-15",
     "t": "Oct 11–15, 2027, 8 a.m.–5 p.m. daily",
     "u": "https://www.fsi.illinois.edu/content/courses/register/step1.cfm?activity=202800024&session=134745",
     "seats": "36 seats left"
    }
   ],
   "note": "Online registration asks for your Fire Chief's PIN.",
   "register": "https://www.fsi.illinois.edu/content/courses/register/step1.cfm?activity=202800023&session=134744",
   "page": "https://www.fsi.illinois.edu/content/courses/programs/description.cfm?course_id=420",
   "contact": "(217) 333-3800",
   "checked": "2026-11-09"
  },
  {
   "id": "ifsi-1518-utica",
   "cat": "rescue",
   "name": "Rope Rescue Technician (1006 - Ch 5)",
   "cert": "Rope Technician",
   "aka": "IFSI technical rescue",
   "provider": "IFSI",
   "location": "IFSI class in Utica",
   "address": "2945 North Route 178, Utica, IL 61373",
   "gk": "UTICA|61373",
   "lat": 41.3406,
   "lng": -89.0101,
   "cost": 0,
   "costNote": "Tuition-free for members of Illinois fire departments (except Chicago FD). Out of state: $3,650.",
   "length": null,
   "sessions": [
    {
     "s": "2027-09-13",
     "e": "2027-09-24",
     "t": "Sep 13–24, 2027 (2 parts)",
     "u": "https://www.fsi.illinois.edu/content/courses/register/step1.cfm?activity=202800022&session=134741",
     "seats": "13 seats left"
    }
   ],
   "note": "Online registration asks for your Fire Chief's PIN.",
   "register": "https://www.fsi.illinois.edu/content/courses/register/step1.cfm?activity=202800022&session=134741",
   "page": "https://www.fsi.illinois.edu/content/courses/programs/description.cfm?course_id=1518",
   "contact": "(217) 333-3800",
   "checked": "2026-11-09"
  },
  {
   "id": "ifsi-1029-frankfort",
   "cat": "prev",
   "name": "Fire Investigator",
   "cert": "Fire Investigator",
   "aka": "IFSI prevention",
   "provider": "IFSI",
   "location": "Frankfort (hosted by Frankfort FPD)",
   "address": "24420 S. Lagrange Rd., Frankfort, IL 60423",
   "gk": "FRANKFORT|60423",
   "lat": 41.4979,
   "lng": -87.8496,
   "cost": 2500,
   "costNote": "Illinois rate. Out of state: $2,950.",
   "length": null,
   "sessions": [
    {
     "s": "2027-09-20",
     "e": "2027-10-22",
     "t": "Sep 20–Oct 22, 2027 (3 parts)",
     "u": "https://www.fsi.illinois.edu/content/courses/register/step1.cfm?activity=202800052&session=134823",
     "seats": "29 seats left"
    }
   ],
   "note": "Online registration asks for your Fire Chief's PIN.",
   "register": "https://www.fsi.illinois.edu/content/courses/register/step1.cfm?activity=202800052&session=134823",
   "page": "https://www.fsi.illinois.edu/content/courses/programs/description.cfm?course_id=1029",
   "contact": "(815) 469-1700",
   "checked": "2026-11-09"
  },
  {
   "id": "ifsi-1509-champaign",
   "cat": "hazmat",
   "name": "Hazardous Materials Technician (470 - Ch 11)",
   "cert": "Hazardous Materials Technician",
   "aka": "IFSI hazmat",
   "provider": "IFSI",
   "location": "IFSI campus, Champaign",
   "address": "11 Gerty Dr, Champaign, IL 61820",
   "gk": "CHAMPAIGN|61820",
   "lat": 40.1165,
   "lng": -88.2431,
   "cost": 0,
   "costNote": "Tuition-free for members of Illinois fire departments (except Chicago FD). Out of state: $2,975.",
   "length": null,
   "sessions": [
    {
     "s": "2027-09-20",
     "e": "2027-10-01",
     "t": "Sep 20–Oct 1, 2027 (2 parts)",
     "u": "https://www.fsi.illinois.edu/content/courses/register/step1.cfm?activity=202800028&session=134753",
     "seats": "32 seats left"
    }
   ],
   "note": "Online registration asks for your Fire Chief's PIN.",
   "register": "https://www.fsi.illinois.edu/content/courses/register/step1.cfm?activity=202800028&session=134753",
   "page": "https://www.fsi.illinois.edu/content/courses/programs/description.cfm?course_id=1509",
   "contact": "(217) 333-3800",
   "checked": "2026-11-09"
  },
  {
   "id": "ifsi-1441-champaign",
   "cat": "rescue",
   "name": "Structural Collapse Rescue Technician",
   "cert": "Structural Collapse Technician",
   "aka": "IFSI technical rescue",
   "provider": "IFSI",
   "location": "IFSI campus, Champaign",
   "address": "11 Gerty Dr., Champaign, IL 61820",
   "gk": "CHAMPAIGN|61820",
   "lat": 40.1165,
   "lng": -88.2431,
   "cost": 0,
   "costNote": "Tuition-free for members of Illinois fire departments (except Chicago FD). Out of state: $3,475.",
   "length": null,
   "sessions": [
    {
     "s": "2027-09-27",
     "e": "2027-10-01",
     "t": "Sep 27–Oct 1, 2027, 8 a.m.–5 p.m. daily",
     "u": "https://www.fsi.illinois.edu/content/courses/register/step1.cfm?activity=202800025&session=134749",
     "seats": "27 seats left"
    }
   ],
   "note": "Online registration asks for your Fire Chief's PIN.",
   "register": "https://www.fsi.illinois.edu/content/courses/register/step1.cfm?activity=202800025&session=134749",
   "page": "https://www.fsi.illinois.edu/content/courses/programs/description.cfm?course_id=1441",
   "contact": "(217) 333-3800",
   "checked": "2026-11-09"
  },
  {
   "id": "ifsi-1520-orlandpark",
   "cat": "prev",
   "name": "Fire Inspector",
   "cert": "Fire Inspector I",
   "aka": "IFSI prevention",
   "provider": "IFSI",
   "location": "Orland Park (hosted by Orland FPD)",
   "address": "10728 W. 163rd Place, Orland Park, IL 60467",
   "gk": "ORLAND PARK|60467",
   "lat": 41.6307,
   "lng": -87.8536,
   "cost": 800,
   "costNote": "Illinois rate. Out of state: $950.",
   "length": null,
   "sessions": [
    {
     "s": "2027-10-25",
     "e": "2027-10-29",
     "t": "Oct 25–29, 2027, 8 a.m.–5 p.m. daily",
     "u": "https://www.fsi.illinois.edu/content/courses/register/step1.cfm?activity=202800045&session=134801",
     "seats": "28 seats left"
    }
   ],
   "note": null,
   "register": "https://www.fsi.illinois.edu/content/courses/register/step1.cfm?activity=202800045&session=134801",
   "page": "https://www.fsi.illinois.edu/content/courses/programs/description.cfm?course_id=1520",
   "contact": "(708) 349-0074",
   "checked": "2026-11-09"
  }
 ],
 "categories": {
  "ff": "Firefighter Skills",
  "app": "Driving and Apparatus",
  "rescue": "Technical Rescue",
  "water": "Water and Ice Rescue",
  "hazmat": "Hazardous Materials",
  "officer": "Officer and Instructor",
  "prev": "Prevention and Investigation",
  "other": "Other"
 },
 "dive": "Illinois' Office of the State Fire Marshal doesn't currently offer a dive certification. Fire department dive teams train through public safety diving programs. Ask your department's dive team or your MABAS division for the course they use.",
 "providers": [
  {
   "name": "Romeoville Fire Academy",
   "url": "https://www.romeoville.org/DocumentCenter/View/15985/RFA-2026-Course-Catalog",
   "note": "2027 course catalog (PDF). Register online or by phone at (815) 372-4042."
  },
  {
   "name": "NIPSTA (Glenview)",
   "url": "https://www.nipsta.org/149/Training-Information",
   "note": "Fire, technical rescue, officer and hazmat programs."
  },
  {
   "name": "Orland Fire Protection District Training",
   "url": "https://www.orlandfire.org/fire-service-training-the-remaining-2026-and-2027-course-schedule",
   "note": "Remaining 2026 and 2027 course schedule."
  },
  {
   "name": "Illinois Fire Service Institute (IFSI)",
   "url": "https://www.fsi.illinois.edu/content/courses/schedule/schedule.cfm",
   "note": "Every scheduled IFSI class is listed above and refreshed weekly. Most are tuition-free for Illinois fire department members, and many need your Fire Chief's PIN to register."
  },
  {
   "name": "OSFM Certification List",
   "url": "https://sfm.illinois.gov/about/divisions/personnel-standards/current-list-of-certifications.html",
   "note": "Every current Illinois firefighter certification."
  }
 ]
},

  /* CPAT test sites. The CPAT card and the Illinois ladder climb certificate are separate; most
     departments want a CPAT card from the last 12 months. sessions: upcoming dates (YYYY-MM-DD) with a short label. */
  cpat: {
    note: "Each department sets its own rules. Most want a CPAT card from the last 12 months (some allow two years), and some accept only certain test sites, so check the job posting before you book, especially at a site far away. Illinois departments also require a ladder climb certificate, which is separate from the CPAT card.",
    sites: [
      { id:"cpat-mabas24", name:"MABAS 24 CPAT Center", provider:"MABAS Division 24", city:"Homewood",
        address:"17555 Ashland Ave., Homewood, IL 60430", lat:41.5703, lng:-87.6557,
        cost:null, costNote:"The price is shown when you book through National Testing Network.",
        ladder:"The Illinois ladder climb is offered on site on testing days for $10.",
        schedule:"Book a test date through National Testing Network. You need a free account to see dates and register.",
        sessions:[], register:"https://candidates.nationaltestingnetwork.com/#/cpat-info", url:"http://cpat.mabas24.org/",
        contact:"info@mabas24cpat.org · 708-607-2728", checked:"2026-11-07" },
      { id:"cpat-naperville", name:"Naperville Fire Department CPAT", provider:"Naperville Fire Department", city:"Naperville",
        address:"1200 W. Ogden Ave., Naperville, IL 60563", lat:41.7816, lng:-88.1725,
        cost:165, costNote:"The registration calendar lists $165; the department's CPAT page says $160. The fee covers the orientation, up to two practice tests and the final test. A one-time challenge (test only) costs the same. Non-refundable.",
        ladder:"The state ladder climb is included in the fee.",
        schedule:"Full session: orientation Dec. 4, 2026, practices Jan. 2 and Jan. 15, 2027, final test Jan. 30, 2027. One-time challenges are offered on each of those dates and on Nov. 14, 2026.",
        sessions:[{d:"2026-11-14",t:"One-time challenge"},{d:"2026-12-04",t:"Orientation and one-time challenge"},{d:"2027-01-02",t:"Practice 1 and one-time challenge"},{d:"2027-01-15",t:"Practice 2 and one-time challenge"},{d:"2027-01-30",t:"Final test and one-time challenge"}],
        register:"https://www.trumba.com/calendars/fire-department-cpat", url:"https://www.naperville.il.us/cpat",
        contact:"cpat@naperville.il.us", checked:"2026-11-07" },
      { id:"cpat-nipsta", name:"NIPSTA CPAT", provider:"Northeastern Illinois Public Safety Training Academy", city:"Glenview",
        address:"2300 Patriot Blvd., Glenview, IL 60026", lat:42.0969, lng:-87.8257,
        cost:170, costNote:"$170 per candidate, non-refundable.",
        ladder:"NIPSTA doesn't say whether the ladder climb is included, so ask when you register.",
        schedule:"One test date a month. Orientation and practice begin eight weeks before each test.",
        sessions:[{d:"2026-12-05",t:"Test date"},{d:"2027-01-09",t:"Test date"},{d:"2027-02-06",t:"Test date"},{d:"2027-03-06",t:"Test date"},{d:"2027-04-03",t:"Test date"},{d:"2027-05-01",t:"Test date"},{d:"2027-06-05",t:"Test date"},{d:"2027-07-10",t:"Test date"},{d:"2027-08-07",t:"Test date"},{d:"2027-09-11",t:"Test date"},{d:"2027-10-02",t:"Test date"},{d:"2027-11-06",t:"Test date"},{d:"2027-12-04",t:"Test date"}],
        register:"https://secure.rec1.com/IL/nipsta-il/catalog", url:"https://www.nipsta.org/240/CPAT-Schedule",
        contact:"CanTest@nipsta.org · 847-998-8090", checked:"2026-11-07" },
      { id:"cpat-huntley", name:"Huntley Fire Protection District CPAT", provider:"Huntley Fire Protection District", city:"Huntley",
        address:"Station 1, 11118 Main St., Huntley, IL 60142", lat:42.1684, lng:-88.4179,
        cost:150, costNote:"$150 by check or $155 by credit card. No cash. Payment is due at the first practice and is non-refundable.",
        ladder:"The ladder climb is offered with the test.",
        schedule:"Tests are on the Wednesday and Saturday of the first full week and the third week of each month. Practices are the two Wednesdays before your test, starting at 5 p.m. at Station 1.",
        sessions:[], register:"https://www.signupgenius.com/go/10C0544AAAC2AAAF5C34-59669015-cpat", url:"https://www.huntleyfpd.org/cpat-testing",
        contact:"See the Huntley FPD CPAT page.", checked:"2026-11-07" },
      { id:"cpat-cifca", name:"Central Illinois Fire Chiefs CPAT", provider:"Central Illinois Fire Chiefs Association", city:"Decatur",
        address:"2121 S. Imboden Ct., Decatur, IL 62521", lat:39.8175, lng:-88.9666,
        cost:165, costNote:"$35 registration paid online, plus $130 due at check-in. The CPAT card is valid for two years from its issue date, though hiring departments may set their own rules.",
        ladder:"The required Illinois ladder climb is included.",
        schedule:"Two options: an open test challenge (one official attempt, 8 a.m. start, no practice), or a full session with orientation, station practice and up to three official attempts. Session 1 of 2027 starts with orientation Jan. 5 or Jan. 19 (registration closes Jan. 19), with attempts Feb. 2, Feb. 16 and Mar. 2. Session 2 starts with orientation Mar. 16 or Mar. 30.",
        sessions:[{d:"2026-11-17",t:"Open test challenge"},{d:"2026-12-01",t:"Open test challenge"},{d:"2026-12-15",t:"Open test challenge"},{d:"2027-01-05",t:"Session 1 orientation"},{d:"2027-01-12",t:"Open test challenge"},{d:"2027-01-19",t:"Session 1 orientation"},{d:"2027-01-26",t:"Open test challenge"},{d:"2027-02-09",t:"Open test challenge"},{d:"2027-02-23",t:"Open test challenge"},{d:"2027-03-09",t:"Open test challenge"},{d:"2027-03-16",t:"Session 2 orientation"},{d:"2027-03-23",t:"Open test challenge"},{d:"2027-03-30",t:"Session 2 orientation"},{d:"2027-04-06",t:"Open test challenge"}],
        register:"https://cpat.centralillinoisfirechiefs.com/", url:"https://cpat.centralillinoisfirechiefs.com/candidate-guide",
        contact:"IllinoisCPAT@gmail.com", checked:"2026-11-07" },
      { id:"cpat-maac", name:"MAAC Foundation CPAT", provider:"MAAC Foundation First Responder Training Campus", city:"Valparaiso, Ind.", outOfState:true,
        address:"4203 Montdale Park Dr., Valparaiso, IN 46383", lat:41.4451, lng:-87.0111,
        cost:null, costNote:"The price is shown when you book through National Testing Network.",
        ladder:"An optional 24-foot ladder climb is offered separately. Check that your Illinois department accepts it.",
        schedule:"Test days start with a 9 a.m. orientation, followed by practices and tests at 9:45, 10:30 and 11:15 a.m. Book through National Testing Network and choose the MAAC location to see open dates.",
        sessions:[], register:"https://candidates.nationaltestingnetwork.com/#/cpat-info", url:"https://maacfoundation.org/cpat/",
        contact:"Mike Wirtes, CPAT manager · 219-508-7579", checked:"2026-11-07" }
    ]
  },

  /* Programs for teens under 18: fire department cadets, a junior academy and high school fire science.
     status: "open" when the program's own page or a 2025–2026 source shows it active; "check" when it couldn't be confirmed. */
  youth: {
    note: "Illinois requires you to be 18 to be licensed as an EMT (you can take the exam at 17) and 21 to be hired as a firefighter. Cadet programs are how most teens get started, and some departments help their cadets pay for EMT, paramedic and fire academy later.",
    programs: [
      { id:"y-frankfort", name:"Frankfort Fire Cadets", org:"Frankfort Fire Protection District", type:"cadet", city:"Frankfort",
        address:"333 W. Nebraska St., Frankfort, IL 60423", lat:41.4982, lng:-87.8585, ages:"Ages 15 to 21", minAge:15,
        residency:null, schedule:"Tuesdays, 6–9 p.m. New cadets are usually added once a year, in January.", cost:null,
        earn:"Train with district staff, ride on apparatus, help at public education events and attend training in Champaign. Dedicated cadets may get help earning an EMT license, paramedic license or Basic Firefighter certification.",
        apply:"https://forms.office.com/r/HgScR7mWcC?origin=lprLink", url:"https://www.frankfortfire.org/about-2", contact:"815-469-1700", status:"open", checked:"2026-11-09" },
      { id:"y-minooka", name:"Minooka Fire Cadets", org:"Minooka Fire Protection District", type:"cadet", city:"Minooka",
        address:"Station 1, 7901 E. Minooka Rd., Minooka, IL 60447", lat:41.4543, lng:-88.2822, ages:"Ages 15 up to your 18th birthday", minAge:15,
        residency:"You must live in the Minooka, Channahon or Troy (Shorewood) fire districts and keep at least a C average.", schedule:"Not posted. Ask the district.", cost:null,
        earn:"Training with the district, with a path to becoming a recruit volunteer firefighter.",
        apply:"https://www.minookafire.com/volunteer-firefighter-internship-and-cadets/", url:"https://www.minookafire.com/volunteer-firefighter-internship-and-cadets/", contact:"815-467-5637 · info@minookafire.com", status:"open", checked:"2026-11-09" },
      { id:"y-lockport", name:"Lockport Township Fire Cadets", org:"Lockport Township Fire Protection District", type:"cadet", city:"Lockport",
        address:"19623 W. Renwick Rd., Lockport, IL 60441", lat:41.595, lng:-88.0951, ages:"Ages 16 to 21", minAge:16,
        residency:"You must live in the district, be immediate family of a district employee, or attend Lockport Township High School or Wilco Area Career Center. A 3.0 GPA is required.", schedule:"A four-week Saturday orientation academy, then monthly drills.", cost:null,
        earn:"Ride time with crews and possible district sponsorship for EMT, paramedic and fire academy, based on performance.",
        apply:"https://www.lockportfire.org/post/now-taking-cadet-applications-1", url:"https://www.lockportfire.org/post/now-taking-cadet-applications-1", contact:"815-838-3287", status:"open", checked:"2026-11-09" },
      { id:"y-plainfield", name:"Plainfield Fire Cadets", org:"Plainfield Fire Protection District", type:"cadet", city:"Plainfield",
        address:"23748 W. 135th St., Plainfield, IL 60544", lat:41.638, lng:-88.1974, ages:"Ages 16 to 21", minAge:16,
        residency:"District residents only.", schedule:"At least 12 trainings a year plus monthly ride time.", cost:0,
        earn:"Four days at the Illinois Fire Service Institute's Cadet College, and sponsorship for the Basic Operations Firefighter academy and paramedic school.",
        apply:"https://plainfieldfpd.specialdistrict.org/cadet-program", url:"https://plainfieldfpd.specialdistrict.org/cadet-program", contact:"Brett Krasuski · bkrasuski@plainfieldfpd.com · 815-436-5335", status:"open", checked:"2026-11-09" },
      { id:"y-naperville", name:"Naperville Fire Cadets", org:"Naperville Fire Department", type:"cadet", city:"Naperville",
        address:"Station 4, 1936 Brookdale Rd., Naperville, IL 60563", lat:41.7914, lng:-88.2016, ages:"High school freshman, age 14, up to age 20", minAge:14,
        residency:null, schedule:"Tuesdays, 6–9 p.m. The 2026 application window was April 1 to July 15.", cost:null,
        earn:"Training in hose lines, ladders, ventilation, search and rescue, fire behavior, water supply and EMS.",
        apply:"https://www.naperville.il.us/services/naperville-fire-department/programs-and-services/naperville-fire-cadets/", url:"https://www.naperville.il.us/services/naperville-fire-department/programs-and-services/naperville-fire-cadets/", contact:"FF/PM Chris Garon · garonc@naperville.il.us", status:"open", checked:"2026-11-09" },
      { id:"y-orland-jr", name:"Junior Cadet Fire Academy", org:"Orland Fire Protection District", type:"academy", city:"Orland Park",
        address:"9790 W. 151st St., Orland Park, IL 60462", lat:41.6159, lng:-87.8583, ages:"Ages 13 to 18", minAge:13,
        residency:"District residents get first pick. Non-residents can join for $30 if spots remain.", schedule:"A one-day academy held each June. Registration opens in May.", cost:null,
        earn:"A hands-on day with Orland firefighters. A good first taste before committing to a cadet program.",
        apply:"https://opfpd.specialdistrict.org/junior-cadet-fire-academy", url:"https://opfpd.specialdistrict.org/junior-cadet-fire-academy", contact:"Betsy Dine, program coordinator · 708-349-0074", status:"open", checked:"2026-11-09" },
      { id:"y-orland", name:"Orland Fire Cadets", org:"Orland Fire Protection District", type:"cadet", city:"Orland Park",
        address:"9790 W. 151st St., Orland Park, IL 60462", lat:41.6159, lng:-87.8583, ages:"Ages 16 to 20", minAge:16,
        residency:null, schedule:"Online coursework plus Saturday-morning hands-on training. Applications are accepted year-round.", cost:null,
        earn:"Basic Operations Firefighter training, first aid and CPR, and EMT and paramedic sponsorship.",
        apply:"https://opfpd.specialdistrict.org/cadet-program", url:"https://opfpd.specialdistrict.org/cadet-program", contact:"j.girdick@orlandfire.org", status:"check", checked:"2026-11-09" },
      { id:"y-crete", name:"Crete Fire Cadets and Explorers", org:"Crete Fire Department", type:"cadet", city:"Crete",
        address:"524 W. Exchange St., Crete, IL 60417", lat:41.4442, lng:-87.6328, ages:"Ages 14 to 18", minAge:14,
        residency:null, schedule:"Not posted. Visit the station or call and ask for the recruitment coordinator.", cost:0,
        earn:"A volunteer program, not a paid position.",
        apply:"https://villageofcrete.org/government/departments/fire-department/recruitment-employment/cadet-program/", url:"https://villageofcrete.org/government/departments/fire-department/recruitment-employment/cadet-program/", contact:"708-672-2727", status:"check", checked:"2026-11-09" },
      { id:"y-wilco", name:"Fire Science", org:"Wilco Area Career Center", type:"school", city:"Romeoville",
        address:"500 Wilco Blvd., Romeoville, IL 60446", lat:41.5989, lng:-88.0937, ages:"High school students at Bolingbrook, Lemont, Lockport, Plainfield (Central, East, North and South), Reed-Custer, Romeoville and Wilmington high schools", minAge:14,
        residency:"For students at Wilco's partner high schools. Ask your school counselor.", schedule:"Part of the school day. Dual-credit enrollment goes through Joliet Junior College.", cost:159,
        earn:"7 Joliet Junior College credits (FSCI 120 and EMS 101) and the chance to earn IDPH Emergency Medical Responder, CPR/BLS and FEMA incident command certificates. Cost is a $75 student fee plus $84 JJC tuition.",
        apply:"https://jjc.dualenroll.com", url:"https://wilco.socs.net/vnews/display.v/ART/504f4b313a940", contact:"Mark Oglesby · moglesby@wilcoacc.org · 815-838-6941 ext. 1017", status:"open", checked:"2026-11-09" }
    ]
  },

  /* Approximate ZIP centroids for distance sorting in the pilot area. */
  zips: {
    "60441":[41.59,-88.06,"Lockport"],"60491":[41.6,-87.94,"Homer Glen"],"60451":[41.51,-87.97,"New Lenox"],"60448":[41.53,-87.88,"Mokena"],
    "60423":[41.5,-87.85,"Frankfort"],"60442":[41.42,-87.99,"Manhattan"],"60468":[41.33,-87.79,"Peotone"],"60432":[41.54,-88.06,"Joliet"],
    "60431":[41.51,-88.18,"Joliet"],"60433":[41.5,-88.06,"Joliet"],"60435":[41.55,-88.13,"Joliet"],"60436":[41.49,-88.12,"Joliet"],
    "60403":[41.57,-88.11,"Crest Hill"],"60446":[41.64,-88.09,"Romeoville"],"60440":[41.7,-88.07,"Bolingbrook"],"60490":[41.68,-88.14,"Bolingbrook"],
    "60544":[41.6,-88.2,"Plainfield"],"60585":[41.65,-88.22,"Plainfield"],"60586":[41.57,-88.24,"Plainfield"],"60404":[41.51,-88.22,"Shorewood"],
    "60410":[41.43,-88.21,"Channahon"],"60447":[41.46,-88.28,"Minooka"],"60439":[41.67,-87.98,"Lemont"],"60462":[41.62,-87.85,"Orland Park"],
    "60467":[41.6,-87.89,"Orland Park"],"60477":[41.57,-87.79,"Tinley Park"],"60487":[41.56,-87.83,"Tinley Park"],"60463":[41.66,-87.79,"Palos Heights"],
    "60465":[41.7,-87.83,"Palos Hills"],"60464":[41.66,-87.87,"Palos Park"],"60453":[41.71,-87.75,"Oak Lawn"],"60452":[41.6,-87.75,"Oak Forest"],
    "60449":[41.42,-87.74,"Monee"],"60484":[41.44,-87.7,"University Park"],"60417":[41.44,-87.63,"Crete"],"60411":[41.51,-87.63,"Chicago Heights"],
    "60473":[41.6,-87.61,"South Holland"],"60421":[41.42,-88.1,"Elwood"],"60481":[41.31,-88.15,"Wilmington"],"60408":[41.27,-88.21,"Braidwood"],
    "60950":[41.25,-87.83,"Manteno"],"60540":[41.77,-88.15,"Naperville"],"60564":[41.71,-88.2,"Naperville"],"60480":[41.73,-87.88,"Willow Springs"],
    "60475":[41.47,-87.64,"Steger"],"60401":[41.34,-87.62,"Beecher"],"60443":[41.51,-87.73,"Matteson"],"60466":[41.48,-87.68,"Park Forest"],
    "60430":[41.56,-87.66,"Homewood"],"60601":[41.886,-87.62,"Chicago"]
  }
};
