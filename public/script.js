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
// Third-level generic options (fallback)
const thirdLevelDefault = [
  "Request Info",
  "Report Issue",
  "Request Access",
  "Other",
];

// Detailed third-level mapping keyed by "topIndex.subIndex" (0-based indices)
// e.g. key "0.0" = top-level 1, sub 1 (1.1 in your numbering)
const thirdMap = {
  // 1. Automation & Integration Services
  "0.0": [
    "Automation - Improvement Request",
    "Automation Support Request",
    "Control Room Access",
    "Generic Request Automation",
    "Manual Bot Run/Stop",
    "New Development",
  ],
  0.1: [
    "Generic Request Integration Services",
    "Minor Integration Update",
    "Monitoring Access Request",
    "New Integration Report",
  ],
  0.2: [
    "Generic Request Power Platform",
    "Non-Standard Connector Request",
    "On-Premises Data Gateway Registration",
    "Power Platform Environment Request - DECOMMISSIONING",
    "Power Platform Environment Request - DEVELOPER",
    "Power Platform Environment Request - SANDBOX & PROD",
    "Premium Capability Request",
    "Solution Ownership Change or Retrieval",
  ],

  // 2. Commercial IT Applications
  "1.0": ["Request Admin for Managing Adobe Licenses"],
  1.1: [
    "Dynamics 365 CRM - Add User Access",
    "Dynamics 365 CRM - General Inquiry",
    "Dynamics 365 CRM - Improvement Request",
    "Dynamics 365 CRM - Modify User Access",
    "Dynamics 365 CRM - Remove User Access",
  ],
  1.2: [
    "ISS Portals - Add User Access",
    "ISS Portals - General Inquiry",
    "ISS Portals - Modify User Access",
    "ISS Portals - Remove User Access",
  ],
  1.3: [
    "Sitecore XM Cloud - Add User Access",
    "Sitecore XM Cloud - General Inquiry",
    "Sitecore XM Cloud - Modify User Access",
    "Sitecore XM Cloud - Website Content Edit Request",
    "Sitecore XM Cloud - Remove User Access",
  ],

  // 3. Common Intranet Applications
  "2.0": [
    "Generic Request MyISS",
    "MyISS - Add access",
    "MyISS - Improvement Request",
    "MyISS - Launchpad Management",
    "MyISS - Modify access",
    "MyISS - Remove access",
    "MyISS - Request for change (integrations)",
  ],
  2.1: [
    "Generic Request MyLearning",
    "MyLearning - Add administrator",
    "MyLearning - Modify administrator",
    "MyLearning - Remove administrator",
    "MyLearning - Report Request",
  ],
  2.2: [
    "Generic Request MyVoice",
    "MyVoice - Add administrator",
    "MyVoice - Improvement Request",
    "MyVoice - Modify administrator",
    "MyVoice - Remove administrator",
  ],
  2.3: [
    "Application Support Request - People@ISS",
    "Generic Request People@ISS",
    "People@ISS - Improvement Request",
  ],
  2.4: ["Safe@ISS Generic inquiry"],

  // 4. Computers, Mobiles, Virtual Desktops, Messaging
  "3.0": [
    "Business specific hostpool - Add new hostpool",
    "Business specific hostpool - Add new application",
    "Business specific hostpool - Change configuration",
    "Business specific hostpool - Update existing application",
    "Developer VDI - Add new VM",
    "Developer VDI - Modify existing VM",
    "Developer VDI - Update team owners",
    "Tiering/Generic Purpose Desktop - Add access",
    "Tiering/Generic Purpose Desktop - Add new application",
    "Tiering/Generic Purpose Desktop - Change configuration",
  ],
  3.1: [
    "AppLocker Exception",
    "Bulk Hash Registration for Autopilot",
    "New Kiosk Profile / Modify Existing Kiosk Profile",
    "Request New Package or Adjustments/Updates to Existing Package",
    "Un-Register Device hash ID for Autopilot",
    "Whitelist Browser Extention",
  ],
  3.2: [
    "Change queue",
    "Create new queue on scratch",
    "Generic Request Enterprise Voice Solutions",
    "Migrate existing queue",
    "Request Poly provisioning",
  ],
  3.3: ["Generic Request Global Endpoint Management"],
  3.4: ["Mobile - App Management", "Mobile - Internal App Management"],
  3.5: ["Generic Request SMTP Services", "Onboard SMTP"],

  // 5. Data Management, Analytics
  "4.0": ["Generic Request Analytics, Data & AI"],
  4.1: [
    "Ask Question for Power BI",
    "Finance BI - Add Access",
    "Finance BI - Remove Access",
    "Generic Request Finance BI",
    "Investigate Slow Report Performance",
    "Report Possible Data Error",
    "Reprocess Data",
    "Update Metadata",
  ],
  4.2: [
    "Enabling External Users on a Site",
    "Generic Request Insight@ISS",
    "Insight - Improvement",
    "Insight - Onboard New Customer",
    "Insight - Standard Report Feedback",
  ],
  4.3: [
    "Flexera - Add access",
    "Flexera - Remove access",
    "Flexera - Request for Report",
    "Generic Request ITAM & Flexera",
  ],
  4.4: [
    "Carbon Management - Add Report",
    "Carbon Management - Add User",
    "Carbon Management - Change Report",
    "Carbon Management - Modify User",
    "Carbon Management - Remove User",
    "Change Customer",
    "Change Interval Data (Meter Data)",
    "Change Location Data",
    "Change Other Account Data (e.g. FTE, Opening Hours)",
    "Change Sustainability Report",
    "Change Sustainability Reporting Accounts",
    "Change Utility Account Data",
    "Data Correction Request",
    "Data Mismatch",
    "Data Missing",
    "Generic Request Sustainability",
    "Local Data Source Change",
    "Local Emission Factors",
  ],
  4.5: [
    "Add Scope",
    "Change Customer",
    "Change Interval Data (Meter Data)",
    "Change Location Data",
    "Change Other Account Data (e.g. FTE, Opening Hours)",
    "Change Sustainability Report",
    "Change Sustainability Reporting Accounts",
    "Change Utility Account Data",
    "Energy Management - Add Report",
    "Energy Management - Add User",
    "Energy Management - Change Report",
    "Energy Management - Modify User",
    "Energy Management - Remove User",
    "Generic Request Sustainability",
    "Update Scope",
  ],

  // 6. Facility & Food Applications
  "5.0": [
    "Configuration for a feature",
    "Generic Request Convenie/WeX",
    "Global Federation Layer",
    "Improvement to existing feature",
    "Integration Request",
    "New feature request",
    "Support for a configuration",
    "Technical Improvement",
    "Training or support materials for a configuration",
    "WeX Portal - Add administrator",
  ],
  5.1: [
    "Data Mass Load Preparations",
    "Data Synchronization",
    "Data Update",
    "Existing Integration Modification",
    "FMS FieldFlex - Query Setup",
    "FMS FieldFlex - Reporting",
    "FMS Tririga - Improvement",
    "FMS Tririga - Onboarding",
    "FMS Tririga - Query Setup",
    "FMS Tririga - Reporting",
    "Generic Request FMS FieldFlex BluePrint",
    "Generic Request FMS Tririga BluePrint",
    "New Integration Setup",
    "Restart of Service",
  ],
  5.2: [
    "Enhancement of existing product",
    "Generic Request Internet of Things (IoT)",
    "Hardware decommission",
    "Hardware request",
    "IoT - Add access",
    "IoT - Remove access",
    "New product development",
    "Rollout of the standard product",
  ],
  5.3: ["OneCost (SIM) Generic inquiry"],
  5.4: [
    "Generic Request Order@ISS",
    "Order@ISS - Feature Request",
    "Order@ISS - New Account Request",
  ],
  5.5: [
    "Generic Request Pure Space App",
    "Pure Space App - Add Access",
    "Pure Space App - Remove Access",
  ],
  5.6: ["Generic Request Sign In Workspace"],

  // 7. Financial Applications
  "6.0": [
    "Aico - Add User",
    "Aico - Remove User",
    "Approval flow change",
    "Basic template change",
    "Dashboard change",
    "Generic Request Aico",
    "Super user mode change",
  ],
  6.1: [
    "Coupa UK&I - Add user",
    "Coupa UK&I - Improvement Request",
    "Coupa UK&I - Modify user",
    "Coupa UK&I - Remove user",
    "Delivery Address",
    "Generic Request Coupa UK&I",
    "Hierarchy Change",
  ],
  6.2: [
    "Application Support Request - NAV@ISS",
    "Country user - Add",
    "Country user - Remove",
    "Country user - Update",
    "Generic Request NAV@ISS",
    "Group user - Add",
    "Group user - Remove",
    "Group user - Update",
    "NAV@ISS - Improvement Request",
  ],
  6.3: [
    "Absence Delegation",
    "Account Groups maintenance",
    "Company structure dimensions",
    "Content enablement",
    "Coupa - Add User",
    "Coupa - Modify User",
    "Coupa - Remove User",
    "Functionality question",
    "Generic Request P2P@ISS",
    "Kofax/Routty - Remove User",
    "Kofax/Routty - Add User",
    "Kofax/Routty - Modify User",
    "P2P@ISS - Improvement Request",
    "P2P@ISS - Reports",
    "Setup Queries",
    "Ship to addresses",
    "Suppliers/SIM data management",
    "Transactions queries",
  ],

  // 8. Global Identity & Access Management
  "7.0": [
    "Device Account (Polycom / Teams Room) - Create / Modify / Remove",
    "Directory Group - Create / Modify / Delete",
    "Functional Mailbox - Create / Modify / Remove",
    "Service Account - Create / Modify / Remove",
  ],
  7.1: [
    "Business Application Offboarding - Customer Identities",
    "Business Application Offboarding - Employee Identities",
    "Business Application Onboarding - Customer Identities",
    "Business Application Onboarding - Employee Identities",
    "Generic Request Customer Identity Services",
  ],
  7.2: [
    "Bulk Identity Changes - Request",
    "Customer Identity - General Inquiry",
    "Employee Identity - General Inquiry",
    "Employee User Account - Disable",
    "Employee User Account - Modify",
    "Employee User Account - Move",
    "External Identity - General Inquiry",
    "External User Account - Create",
    "External User Account - Disable",
    "External User Account - Modify",
    "Identity Access Report - Request",
  ],
  7.3: [
    "Privileged Identity - General Inquiry",
    "T1 Privileged Account - Create",
    "T1 Privileged Account - Modify",
    "T2 Privileged Account - Create",
    "T2 Privileged Account - Modify",
  ],

  // 9. Help me to find right category (empty)
  "8.0": [],

  // 10. Information Security & Compliance...
  "9.0": [
    "Cyber Security Architect Consultation",
    "Document Approval",
    "Information Security Compliance Consultation",
    "Information Security Compliance Exception",
    "ISMS Adoption",
    "Risk Consultation",
    "Support with Customer Assessment",
  ],
  9.1: [
    "Conditional Access Exception - Add / Modify",
    "Conditional Access Exception (Frontline Workforce) - Add / Modify",
    "MFA - Reset / Unblock",
    "MFA Exception - Add",
  ],
  9.2: [
    "Generic Request OneTrust",
    "Modification of existing IT Asset / Supplier",
    "New IT Asset / Supplier creation",
    "OneTrust - Add access",
    "OneTrust - Change Organisation",
    "OneTrust - Change Role",
    "OneTrust - Revoke access",
  ],
  9.3: [
    "Document Approval - Policy Hub",
    "Exception Approval",
    "Generic Request Policy Hub",
    "Policy Hub - Add user",
    "Policy Hub - Modify user",
    "Policy Hub - Remove user",
  ],
  9.4: [
    "Generic Request Public and Private Certificates",
    "Request New Certificate/Key",
  ],
  9.5: ["Generic Request Security Operations", "Security Support Request"],

  // 11. Microsoft 365
  "10.0": ["Generic Request IT Admin Tool"],
  10.1: [
    "Bulk License Changes",
    "Conversion to Shared / User mailbox",
    "Generic Request Collaboration Services",
    "Request access to a mailbox",
    "Request access to personal user data",
  ],

  // 12. Network, Infrastructure & Cloud Operations
  "11.0": [
    "DevSecOps - Onboarding",
    "Landing zones / Subscriptions, pipelines and K8S Request",
  ],
  11.1: [
    "AD One-Way Trust - Configure",
    "DFS Namespace - Create / Modify",
    "DHCP Authorization - Add / Remove",
    "DNS Conditional Forwarder - Create",
    "DNS Delegation - Create / Delete",
    "DNS Delegation - Modify",
    "DNS Record - Create / Delete",
    "DNS Record - Modify",
    "DNS Subdomain - Create / Delete",
    "DNS Subdomain - Modify",
    "DNS Zone - Create / Delete",
    "Domain Controller - Promote / Demote",
    "Global Directory Services - Core Services - General Inquiry",
    "Network Site/Subnet - Add / Modify / Delete",
  ],
  11.2: [
    "gMSA - Create / Delete",
    "Application Registration - Modify",
    "Application Registration - New",
    "Directory Object - Restore",
    "Directory Object (User) - Restore",
    "Global Directory Services - Identity - General Inquiry",
    "OU Group Policy / WMI Filter - Manage",
  ],
  11.3: ["Generic Request Global Cloud Operations"],
  11.4: [
    "Assign a new network",
    "Edit an existing network",
    "Generic Request Network",
    "Release an IP Range",
  ],

  // 13. Process and Project Tools
  "12.0": ["Azure DevOps Generic inquiry"],
  "12.1": [],
  "12.2": [],
  "12.3": [],
  "12.4": [],
  12.5: [
    "Approver setup",
    "Delegate access",
    "Generic Request Projects@ISS & Time for Teams",
    "License Request - Offboarding",
    "License Request - Onboarding",
    "Open Time Registration for existing project",
    "Project Set Up",
    "Reopen period",
    "Report extract",
    "Time for Teams - Add User",
    "Time for Teams - Remove User",
  ],
};

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
  items.forEach((item, i) => {
    const b = document.createElement("button");
    b.textContent = item;
    b.addEventListener("click", () => {
      onSelect(item, i);
      container.classList.remove("open");
    });
    container.appendChild(b);
  });
}

// Populate first menu
buildMenu(menu1, topLevel, (item, topIdx) => {
  chosen.step1 = item;
  btnStep1.textContent = `Category: ${item}`;

  // Prepare sub-options based on index
  const idx = topIdx;
  const subs = subMap[idx] || ["Other"];
  buildMenu(menu2, subs, (s, subIdx) => {
    chosen.step2 = s;
    btnStep2.textContent = `Sub: ${s}`;
    // Show step3
    step3.classList.remove("hidden");

    // Populate step3 based on sub selection using detailed thirdMap when available
    const key = `${idx}.${subIdx}`;
    const thirdOptions =
      thirdMap[key] && thirdMap[key].length ? thirdMap[key] : thirdLevelDefault;
    buildMenu(menu3, thirdOptions, (t) => {
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
