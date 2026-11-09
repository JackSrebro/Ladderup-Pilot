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
      status:"open", statusNote:"Your fire chief must approve enrollment.", reqs:"Department sponsorship and OSFM number",
      contact:null, url:"https://www.fsi.illinois.edu/academy/enrollment.cfm", checked:"2026-11-06" }
  ],

  /* Departments. status: open | rolling | closed | unknown.
     lastTest: most recent full-time entry-level testing round found. nextTest: a date the department announced.
     The page projects the next round two years after lastTest when nothing is announced. */
  departments: [
    { id:"lockport", name:"Lockport Township FPD", city:"Lockport", lat:41.585, lng:-88.11, address:"19623 W. Renwick Rd, Lockport", site:"https://www.lockportfire.org", jobs:null, status:"closed", lastTest:{"date": "2023-03-01", "label": "Applications closed Mar 1, and the written exam was Mar 12.", "source": "https://www.lockportfire.org/post/we-re-hiring"}, note:"Not accepting applications right now." },
    { id:"homer", name:"Homer Township FPD", city:"Homer Glen / Lockport", lat:41.605, lng:-87.99, address:"16050 S. Cedar Rd, Lockport", site:"https://www.homerfire.org", jobs:"https://www.publicsafetytesting.com/career-path/positions/firefighter?preselected_position=1305", status:"rolling", lastTest:{"date": "2026-06-26", "label": "Applications closed Jun 26. The hiring list was posted Aug 3.", "source": "https://www.homerfire.org/fire-fighter-eligibility-list"}, note:"The agency pays the test fee through Public Safety Testing." },
    { id:"newlenox", name:"New Lenox FPD", city:"New Lenox", lat:41.51, lng:-87.97, address:null, site:null, jobs:"https://www.publicsafetytesting.com/career-path/positions/firefighter?preselected_position=1345", status:"open", note:"Testing deadline: Dec 4, 2026." },
    { id:"frankfort", name:"Frankfort FPD", city:"Frankfort", lat:41.497, lng:-87.855, address:"333 W. Nebraska, Frankfort", site:"https://www.frankfortfire.org", jobs:null, status:"closed", lastTest:{"date": "2025-10-03", "label": "Applications closed Oct 3. The hiring list runs through 2027.", "source": "https://www.frankfortfire.org/employment"}, note:"Tests through National Testing Network." },
    { id:"mokena", name:"Mokena FPD", city:"Mokena", lat:41.53, lng:-87.87, address:"19853 S. Wolf Rd, Mokena", site:"https://www.mokenafire.org", jobs:null, status:"closed", lastTest:{"date": "2026-05-29", "label": "Applications closed May 29.", "source": "https://nationaltestingnetwork.com/publicsafetyjobs/fullJobDetails.cfm?agentid=1708&jobid=2&agencyjobid=3384"}, note:"Tests through National Testing Network." },
    { id:"manhattan", name:"Manhattan FPD (Incl. Former Peotone FPD)", city:"Manhattan / Peotone", lat:41.42, lng:-87.99, address:null, site:"https://manhattanfire.org", jobs:"https://manhattanfire.org/employment/", status:"closed", lastTest:{"date": "2025-07-15", "label": "Applications closed Jul 15, and the written exam was Aug 6.", "source": "https://manhattanfire.org/news/manhattan-fire-protection-district-accepting-applications/"}, note:"Peotone FPD consolidated into Manhattan FPD after the November 2022 referendum. Also tested in 2023." },
    { id:"plainfield", name:"Plainfield FPD", city:"Plainfield", lat:41.63, lng:-88.2, address:"23748 W. 135th St, Plainfield", site:"https://www.plainfieldfpd.org", jobs:"https://www.plainfieldfpd.org/fire-fighter-paramedic-employment", status:"closed", lastTest:{"date": "2026-07-31", "label": "The testing deadline was Jul 31. The hiring list was approved Oct 14.", "source": "https://www.plainfieldfpd.org/fire-fighter-paramedic-employment"}, note:"Plans to hire 5 in early 2027. Starting pay is $75,296.79, rising to $109,657.47 by year 7." },
    { id:"bolingbrook", name:"Bolingbrook Fire Department", city:"Bolingbrook", lat:41.7, lng:-88.07, address:null, site:"https://www.bolingbrook.com/fire", jobs:null, status:"closed", lastTest:{"date": "2025-08-31", "label": "Applications were open Jul 14 to Aug 31. The hiring list is good for two years.", "source": "https://nationaltestingnetwork.com/publicsafetyjobs/fullJobDetails.cfm?agentid=1635&jobid=2&agencyjobid=3179"}, note:"Tests through National Testing Network." },
    { id:"romeoville", name:"Romeoville Fire Department", city:"Romeoville", lat:41.64, lng:-88.09, address:null, site:null, jobs:"https://www.romeoville.org/135/Employment-Opportunities", status:"closed", lastTest:{"date": "2026-06-15", "label": "Applications closed Jun 15, and the written exam was Jun 18.", "source": "https://www.theblueline.com/findAJob/view/36770"}, note:"Fire department: (815) 886-7227." },
    { id:"lemont", name:"Lemont FPD", city:"Lemont", lat:41.67, lng:-87.99, address:null, site:"https://www.lemontfire.com", jobs:"https://www.lemontfire.com/employment-opportunities/", status:"closed", lastTest:{"date": "2026-08-28", "label": "Applications closed Aug 28.", "source": "https://www.lemontfire.com/employment-opportunities/"}, note:"No positions open right now." },
    { id:"eastjoliet", name:"East Joliet FPD", city:"Joliet", lat:41.52, lng:-88.05, address:null, site:"https://ejfpd.specialdistrict.org", jobs:"https://www.publicsafetytesting.com/career-path/positions/firefighter?preselected_position=1315", status:"rolling", note:"The agency pays the test fee. Eligibility list set every two years." },
    { id:"joliet", name:"Joliet Fire Department", city:"Joliet", lat:41.525, lng:-88.08, address:null, site:"https://fire.joliet.gov/Home", jobs:"https://www.joliet.gov/government/departments/fire-department/about-us/recruitment", status:"closed", lastTest:null, nextTest:{"date": "2027-09-01", "label": "Fall 2027", "basis": "announced", "source": "https://www.joliet.gov/government/departments/fire-department/about-us/recruitment"}, note:"The current hiring list expires Mar 18, 2028." },
    { id:"orland", name:"Orland FPD", city:"Orland Park", lat:41.61, lng:-87.87, address:"9790 W. 151st St, Orland Park", site:"https://www.orlandfire.org", jobs:"https://www.orlandfire.org/firefighter-testing", status:"closed", lastTest:{"date": "2025-10-20", "label": "Applications closed Oct 20.", "source": "https://www.orlandfire.org/firefighter-testing"}, nextTest:{"date": "2028-02-01", "label": "February 2028", "basis": "announced", "source": "https://www.orlandfire.org/firefighter-testing"}, note:"Last posted starting pay: $80,947." },
    { id:"tinley", name:"Tinley Park Fire Department", city:"Tinley Park", lat:41.575, lng:-87.79, address:"17355 S. 68th Ct, Tinley Park", site:"https://www.tinleypark.org/fire", jobs:"https://www.tinleypark.org/government/departments/human_resources/employment_opportunities.php", status:"unknown", note:"" },
    { id:"palosheights", name:"Palos Heights FPD", city:"Palos Heights", lat:41.67, lng:-87.8, address:null, site:null, jobs:"https://www.applytoserve.com/Application.aspx?ID=817", status:"open", note:"Application deadline: Nov 20, 2026, 4 PM." },
    { id:"northpalos", name:"North Palos FPD", city:"Palos Hills", lat:41.7, lng:-87.82, address:null, site:null, jobs:"https://www.publicsafetytesting.com/career-path/positions/firefighter?preselected_position=1285", status:"rolling", note:"The agency pays the test fee through Public Safety Testing." },
    { id:"manteno", name:"Manteno Community FPD", city:"Manteno", lat:41.25, lng:-87.83, address:null, site:null, jobs:"https://www.applytoserve.com/Application.aspx?ID=826", status:"open", note:"Open until filled." },
    { id:"troy", name:"Troy FPD", city:"Shorewood", lat:41.52, lng:-88.2, address:null, site:null, jobs:null, status:"closed", lastTest:{"date": "2024-10-09", "label": "Applications closed Oct 9, and the written exam was the week of Nov 4.", "source": "https://theblueline.com/findAJob/view/24754"}, note:"Website not yet verified." },
    { id:"channahon", name:"Channahon FPD", city:"Channahon", lat:41.43, lng:-88.22, address:null, site:null, jobs:null, status:"closed", lastTest:{"date": "2025-04-18", "label": "Applications closed Apr 18, and the written exam was May 14.", "source": "https://iosolutions.com/product/channahon-il-firefighter-paramedic-job-application-2/"}, note:"Tests through I/O Solutions." },
    { id:"crete", name:"Crete Township FPD", city:"Crete", lat:41.44, lng:-87.63, address:null, site:"https://cretetwpfire.com", jobs:"https://cretetwpfire.com/careers/", status:"closed", lastTest:{"date": "2023-02-22", "label": "Applications closed Feb 22, and the test was Mar 11.", "source": "https://theblueline.com/findAJob/view/17806"}, note:"Application form on its careers page." },
    { id:"monee", name:"Monee FPD", city:"Monee", lat:41.42, lng:-87.74, address:null, site:null, jobs:null, status:"unknown", note:"Website not yet verified." },
    { id:"wilmington", name:"Wilmington FPD", city:"Wilmington", lat:41.31, lng:-88.15, address:null, site:null, jobs:null, status:"closed", lastTest:{"date": "2024-10-23", "label": "Applications closed Oct 23, and the written exam was Oct 25.", "source": "https://theblueline.com/findAJob/view/24752"}, note:"Website not yet verified." }
  ],

  /* Open postings. deadline: ISO date, or null when open until filled.
     needs: certifications required (emt | medic | cpat | ffii), or null when the posting doesn't say. */
  jobs: [
    { id:"j-palosheights", needs:["ffii","cpat","medic"], needsNote:"Paramedic license needed by date of hire", dept:"Palos Heights FPD", title:"Firefighter/Paramedic", city:"Palos Heights", lat:41.67, lng:-87.8,
      deadline:"2026-11-20", deadlineNote:"Due by 4:00 PM. Written exam Dec 1–3, 2026.", pay:80730, payNote:"$86,112 after year one; about $120,000 by year five.",
      reqs:["Illinois paramedic license by date of hire","Firefighter II or Basic Operations Firefighter","CPAT card issued within 12 months of the deadline","Age 21 by Dec 1, 2026"],
      apply:"https://www.applytoserve.com/Application.aspx?ID=817", source:"https://www.theblueline.com/findAJob/view/39296", sourceName:"The Blue Line", fee:null },
    { id:"j-newlenox", needs:["ffii","cpat","emt"], needsNote:"EMTs must earn paramedic within 18 months of hire", dept:"New Lenox FPD", title:"Firefighter/Paramedic or EMT", city:"New Lenox", lat:41.51, lng:-87.97,
      deadline:"2026-12-04", deadlineNote:"Testing can be done virtually on several dates.", pay:79488, payNote:"2027 starting salary.",
      reqs:["Firefighter II or Basic Operations Firefighter","Illinois paramedic license, or EMT who earns paramedic within 18 months of hire","CPAT with ladder climb","Generally 21–35 at conditional offer; U.S. citizen and Illinois resident"],
      apply:"https://www.publicsafetytesting.com/career-path/positions/firefighter?preselected_position=1345", source:"https://www.publicsafetytesting.com/departments/New-Lenox-FPD/firefighter-paramedic-emt", sourceName:"Public Safety Testing", fee:null },
    { id:"j-manteno", needs:["medic"], needsNote:null, dept:"Manteno Community FPD", title:"Firefighter/Paramedic", city:"Manteno", lat:41.25, lng:-87.83,
      deadline:null, deadlineNote:"Open until filled.", pay:73777.33, payNote:"Effective Jan 1, 2027.",
      reqs:["Paramedic license at time of application","Under 35 unless previously a full-time Illinois firefighter","$48 non-refundable application processing fee"],
      apply:"https://www.applytoserve.com/Application.aspx?ID=826", source:"https://www.theblueline.com/findAJob/view/40244", sourceName:"The Blue Line", fee:null },
    { id:"j-franklinpark", applyTip:"On National Testing Network, search the job list for Franklin Park Fire Department.", needs:null, needsNote:"Requirements not listed in the posting summary", dept:"Franklin Park Fire Department", title:"Firefighter/Paramedic", city:"Franklin Park", lat:41.93, lng:-87.87,
      deadline:"2026-12-18", deadlineNote:"Due by 5:00 PM.", pay:78200.95, payNote:"Rises to $80,546.98 on May 1, 2027; tops out at $119,014.78.",
      reqs:["National Testing Network FireTEAM exam, PSSA and PHQ"],
      apply:"https://candidates.nationaltestingnetwork.com/#/jobs", source:"https://www.theblueline.com/findAJob/view/40250", sourceName:"The Blue Line", fee:null },
    { id:"j-arlington", needs:null, needsNote:"Requirements on the Public Safety Testing posting", dept:"Arlington Heights Fire Department", title:"Firefighter", city:"Arlington Heights", lat:42.09, lng:-87.98,
      deadline:"2026-11-12", deadlineNote:"Testing deadline.", pay:null, payNote:null,
      reqs:["See posting on Public Safety Testing"],
      apply:"https://www.publicsafetytesting.com/career-path/positions/firefighter?preselected_position=1330", source:"https://www.publicsafetytesting.com/career-path/positions/firefighter", sourceName:"Public Safety Testing", fee:null },
    { id:"j-eastjoliet", needs:null, needsNote:"Requirements on the Public Safety Testing posting", dept:"East Joliet FPD", title:"Firefighter/Paramedic", city:"Joliet", lat:41.52, lng:-88.05,
      deadline:null, deadlineNote:"Ongoing testing. The agency pays the test fee.", pay:null, payNote:null,
      reqs:["See posting on Public Safety Testing"],
      apply:"https://www.publicsafetytesting.com/career-path/positions/firefighter?preselected_position=1315", source:"https://www.publicsafetytesting.com/departments/east-joliet-FPD/firefighter-paramedic-41", sourceName:"Public Safety Testing", fee:0 },
    { id:"j-homer", needs:null, needsNote:"Requirements on the Public Safety Testing posting", dept:"Homer Township FPD", title:"Firefighter/Paramedic", city:"Homer Glen / Lockport", lat:41.605, lng:-87.99,
      deadline:null, deadlineNote:"Ongoing testing. The agency pays the test fee.", pay:null, payNote:null,
      reqs:["See posting on Public Safety Testing"],
      apply:"https://www.publicsafetytesting.com/career-path/positions/firefighter?preselected_position=1305", source:"https://www.publicsafetytesting.com/departments/homer-township-FPD/firefighter-paramedic-40", sourceName:"Public Safety Testing", fee:0 },
    { id:"j-northpalos", needs:null, needsNote:"Requirements on the Public Safety Testing posting", dept:"North Palos FPD", title:"Firefighter/Paramedic", city:"Palos Hills", lat:41.7, lng:-87.82,
      deadline:null, deadlineNote:"Ongoing testing. The agency pays the test fee.", pay:null, payNote:null,
      reqs:["See posting on Public Safety Testing"],
      apply:"https://www.publicsafetytesting.com/career-path/positions/firefighter?preselected_position=1285", source:"https://www.publicsafetytesting.com/career-path/positions/firefighter", sourceName:"Public Safety Testing", fee:0 }
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

  /* Continuing education for working firefighters (checked 2026-11-07). sessions: [{s: ISO start, t: label}] */
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
   "url": "https://www.fsi.illinois.edu/",
   "note": "Statewide and regional certification courses."
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
