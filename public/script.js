// Data: top-level categories (cleaned, without the 'łącznie' token)
const topLevel = [
  "Automation & Integration Services",
  "Commercial IT Applications",
  "Common Intranet Applications",
  "Computers, Mobiles, Virtual Desktops, Messaging",
  "Data Management, Analytics",
  "Facility & Food Applications",
  "Financial Applications",
  "Global Identity & Access Management",
  "Help me to find right category",
  "Information Security & Compliance, Risk Management and Exceptions, Certificates",
  "Microsoft 365",
  "Network, Infrastructure & Cloud Operations",
  "Process and Project Tools",
];

// Mapping from top-level index (0-based) to sub-options
const subMap = {
  0: ["Automation", "Integration Services", "Power Platform"],
  1: ["Adobe Services", "Dynamics CRM 365", "ISS Portals", "Sitecore XM Cloud"],
  2: ["MyISS", "MyLearning", "MyVoice", "People@ISS", "Safe@ISS"],
  3: [
    "Azure VDI",
    "Client Management",
    "Enterprise Voice Solutions",
    "Global Endpoint Management",
    "Mobile Management",
    "SMTP Services",
  ],
  4: [
    "Analytics, Data & AI",
    "Finance BI",
    "Insight@ISS",
    "ITAM & Flexera",
    "Sustainability: Carbon Management",
    "Sustainability: Energy Management",
  ],
  5: [
    "Convenie/Wex",
    "FMS BluePrint",
    "Internet of Things (IoT)",
    "OneCost (SIM)",
    "Order@ISS",
    "Pure Space App",
    "Sing In Solution (Pronestor)",
  ],
  6: ["Aico", "Coupa UK&I", "NAV@ISS", "P2P@ISS"],
  7: [
    "GDS - Functional Account and Group Management",
    "IAM - Application Onboarding/Offboarding",
    "IAM - Employee & External Identity Management (User Account Management)",
    "IAM - Privileged Identity Management (Admin Account Management)",
  ],
  8: ["Help me to find right category"],
  9: [
    "Cybersecurity Risk & Compliance",
    "GDS – Access Policies (MFA/CA)",
    "OneTrust",
    "Policy Hub",
    "Public & Private Certificates",
    "Security Operations",
  ],
  10: ["IT Admin Tool", "Microsoft 365"],
  11: [
    "DevSecOps (landing zones, pipelines, K8S)",
    "GDS – Core Services (DNS/DHCP/DC)",
    "GDS – Identity (App & Service Objects)",
    "Global Cloud Operations",
    "Global Firewall & Network Operations",
  ],
  12: [
    "Azure DevOps",
    "Jira4Corp",
    "Jira4Fin",
    "Jira4HR",
    "Jira4IT",
    "JiraDatacenter",
    "Projects@ISS & Time for Teams",
  ],
};

// Third-level generic options (inferred)
const thirdLevelDefault = [
  "Request Info",
  "Report Issue",
  "Request Access",
  "Other",
];

// DOM refs
const btnStep1 = document.getElementById("btn-step1");
const btnStep2 = document.getElementById("btn-step2");
const btnStep3 = document.getElementById("btn-step3");
const btnSend = document.getElementById("btn-send");
const menu1 = document.getElementById("menu-step1");
const menu2 = document.getElementById("menu-step2");
const menu3 = document.getElementById("menu-step3");
const step2 = document.getElementById("step2");
const step3 = document.getElementById("step3");
const step4 = document.getElementById("step4");
const submissionsList = document.getElementById("submissionsList");

let chosen = { step1: null, step2: null, step3: null };

function buildMenu(container, items, onSelect) {
  container.innerHTML = "";
  items.forEach((item) => {
    const b = document.createElement("button");
    b.textContent = item;
    b.addEventListener("click", () => {
      onSelect(item);
      container.classList.remove("open");
    });
    container.appendChild(b);
  });
}

// Populate first menu
buildMenu(menu1, topLevel, (item) => {
  chosen.step1 = item;
  btnStep1.textContent = `Category: ${item}`;

  // Prepare sub-options based on index
  const idx = topLevel.indexOf(item);
  const subs = subMap[idx] || ["Other"];
  buildMenu(menu2, subs, (s) => {
    chosen.step2 = s;
    btnStep2.textContent = `Sub: ${s}`;
    // Show step3
    step3.classList.remove("hidden");

    // Populate step3 based on sub selection (we use generic list but could be specialized)
    buildMenu(menu3, thirdLevelDefault, (t) => {
      chosen.step3 = t;
      btnStep3.textContent = `Detail: ${t}`;
      // Show send
      step4.classList.remove("hidden");
    });
  });

  // Show step2
  step2.classList.remove("hidden");
});

// Toggle menus on button click
btnStep1.addEventListener("click", () => menu1.classList.toggle("open"));
btnStep2.addEventListener("click", () => menu2.classList.toggle("open"));
btnStep3.addEventListener("click", () => menu3.classList.toggle("open"));

// Send selection to server
btnSend.addEventListener("click", async () => {
  if (!chosen.step1) return alert("Please choose a category");
  try {
    const resp = await fetch("/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(chosen),
    });
    const data = await resp.json();
    if (resp.ok) {
      // reset wizard, but keep chosen visible
      alert("Submitted successfully");
      fetchSubmissions();
      // reset UI to start again
      chosen = { step1: null, step2: null, step3: null };
      btnStep1.textContent = "Choose category";
      btnStep2.textContent = "Choose sub-category";
      btnStep3.textContent = "Choose detail";
      step2.classList.add("hidden");
      step3.classList.add("hidden");
      step4.classList.add("hidden");
    } else {
      alert(data.error || "Submission failed");
    }
  } catch (err) {
    console.error(err);
    alert("Could not submit - see console");
  }
});

// Fetch and render submissions
async function fetchSubmissions() {
  try {
    const res = await fetch("/submissions");
    const list = await res.json();
    submissionsList.innerHTML = "";
    list
      .slice()
      .reverse()
      .forEach((s) => {
        const li = document.createElement("li");
        li.innerHTML = `
        <div><strong>${s.step1}${s.step2 ? " › " + s.step2 : ""}${s.step3 ? " › " + s.step3 : ""}</strong></div>
        <div class="small">#${s.id} — ${new Date(s.timestamp).toLocaleString()}</div>
      `;
        submissionsList.appendChild(li);
      });
  } catch (e) {
    console.error(e);
  }
}

// Initial fetch
fetchSubmissions();
