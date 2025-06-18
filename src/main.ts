interface GapItem {
  article: string;
  subsection: string;
  requirement: string;
  hasGap: string;
  action: string;
  status: string;
  rationale: string;
  framework: string;
}

const gapData: GapItem[] = [ 
  
  {
      article: "Article 6: Due Diligence",
      subsection: "1(b)",
      requirement: "Have you implemented ICT security measures aligned with industry best practices (e.g. ISO/IEC 27001, NIST, ENISA guidance)",
      hasGap: "No",
      action: "N/A",
      status: "N/A",
      rationale: "The organization has been audited by an external company to ascertain compliance with ISO/IEC 27001",
      framework: "ISO/IEC 27001"
  },
  {
      article: "Article 1: Overall risk profile and complexity",
      subsection: "1",
      requirement: "Do you conduct regular vulnerability assessments and penetration testing?",
      hasGap: "Yes",
      action: "will carry out vulnerability checks and external penetration testing once a year, starting in 2025. Any issues found will be shared within 10 working days and fixed based on agreed timelines",
      status: "In Progress (tracked by internal manager)",
      rationale: "Vulnerability assessments are being conducted on demand more on this below. Penetration testing is performed once a year",
      framework: "ISO/IEC 27001"
  },
  {
      article: "Article 36: ICT Security Testing",
      subsection: "Article 36(3)",
      requirement: "Do you monitor and evaluate the results of security tests conducted on your ICT systems and security measures?",
      hasGap: "No",
      action: "N/A",
      status: "N/A",
      rationale: "Qualys Web Application Scanning (WAS) and Qualys Vulnerability Management, Detection, and Response (VMDR) are regularly run against the relevant environments and applications.",
      framework: "ISO/IEC 27001"
  },
  {
      article: "Article 36: ICT Security Testing",
      subsection: "Article 36(3)",
      requirement: "When vulnerabilities or weaknesses are identified, do you update your security measures without undue delay, especially for critical or important systems?",
      hasGap: "No",
      action: "N/A",
      status: "N/A",
      rationale: "Refinement meetings, sprint review meetings, support meetings, sprint retrospective nd planning meetings are held weekly where necessary to ensure bugs/vulnerabilities identified are discussed and put into Jira swimlane to be addressed as efficiently as possible",
      framework: "ISO/IEC 27001"
  },
  {
      article: "Article 36: ICT Security Testing",
      subsection: "Implied from Article 36(2) & (3)",
      requirement: "Do you use appropriate methods and tools for ICT security testing, such as vulnerability assessments, penetration testing, or threat-led penetration testing (TLPT)?",
      hasGap: "No",
      action: "N/A",
      status: "N/A",
      rationale: "The organization uses Qualys and Microsoft Defender XDR. While the provider does not conduct penetration testing directly, clients regularly perform penetration testing against the software in accordance with their own security policies.",
      framework: "ISO 27001"
  },
  {
      article: "Article 36: ICT Security Testing",
      subsection: "Art. 36",
      requirement: "Are the testing methods aligned with leading industry practices?",
      hasGap: "No",
      action: "N/A",
      status: "N/A",
      rationale: "Qualys VMDR vulnerability tests and WAS scans are all threat led tests because they use CVE signatures. Quality Assurance ensures well orchestrated functionality",
      framework: "ISO/IEC 27001"
  },
  {
      article: "Article 10: Vulnerability and Patch Management",
      subsection: "Art. 10(1)",
      requirement: "Have you developed, documented, and implemented vulnerability management procedures as part of your ICT security policies, procedures, protocols, and tools?",
      hasGap: "Yes",
      action: "Vulnerability scans conducted in Qualys generate reports that are attached to Jira tickets, detailing identified issues. However, this approach is not yet comprehensive.",
      status: "is going through stages of adjusments",
      rationale: "A comprehensive vulnerability dictionary is currently being curated to centralize and enhance our knowledge of identified vulnerabilities and their associated details.",
      framework: "ISO/IEC 27001"
  },
  {
      article: "Article 10: Vulnerability and Patch Management",
      subsection: "Art. 10(2)(b)",
      requirement: "Are vulnerabilities assessed weekly for ICT assets supporting critical or important functions?",
      hasGap: "Yes",
      action: "Vulnerability checked currently are performed on demand and are not automated, this will be altered to run automatic WAS and VMDR scans weekly",
      status: "Tracked by internal member of staff",
      rationale: "A WAS and VMDR scan will be setup to be run against the QA virtual machine weekly to ensure vulnerabilities are revealed",
      framework: "ISO/IEC 27001"
  },
  {
      article: "Article 11: Data and System Security",
      subsection: "Art. 11(2)(b)",
      requirement: "Have you identified a secure configuration baseline for all ICT assets that minimizes exposure to cyber threats?",
      hasGap: "Yes",
      action: "User Acceptance Testing server and production environment all meet the security baseline, however some of that configuration is missing from the quality assurance server where software x is hosted for testing.",
      status: "This gap has been deemed acceptable within the company's defined risk appetite, and no immediate remediation actions will be taken.",
      rationale: "Typical hardening policies or guidelines would be in line with detections we see in VMDR (in Qualys)",
      framework: "ISO/IEC 27005"
  },
  {
      article: "Article 16: ICT Systems Acquisition, Development, and Maintenance",
      subsection: "Article 16(3)",
      requirement: "Does the procedure include performing source code reviews covering both static and dynamic testing?",
      hasGap: "Yes",
      action: "Qualys Web Application Scanning conducts dynamic application security testing on Software X during runtime. Currently, only manual code reviews are performed, indicating an opportunity to enhance the process by incorporating a static code analysis tool like SonarCloud.",
      status: "Is being overseen by a member of staff",
      rationale: "Currently, dynamic security testing is performed on Software X using Qualys Web Application Scanning to identify vulnerabilities during runtime.",
      framework: "DevSecOps, OWASP Software Assurance Maturity Model (SAMM)"
  },
  {
      article: "Article 28: Governance and Organisation",
      subsection: "Art. 28(2)(h) + (2)(e)",
      requirement: "Do your staff: Receive ICT risk training proportionate to their roles? Stay current on cybersecurity, resilience practices, and regulatory expectations?",
      hasGap: "Yes",
      action: "We are using two education tools Microsoft Defender - Attack Simulation Training This is automated and works by rating users risky behavior. Pluralsight - We will start rolling out specific courses for staff based on their role.",
      status: "In Progress (tracked by internal manager)",
      rationale: "An auditable training program ensures staff receive role-based, up-to-date instruction, supporting compliance with cybersecurity and regulatory requirements",
      framework: "ISO/IEC 27001"
  },
  {
      article: "Article 34: ICT Operations Security",
      subsection: "Art. 34(d), (h), (i)",
      requirement: "Are vulnerability scans conducted regularly and updated to address emerging threats?",
      hasGap: "Yes",
      action: "As previously noted, vulnerability scans are currently performed on an ad hoc basis and lack a consistent schedule.",
      status: "The implementation of automatic scanning process is currently being implemented by a member of staff",
      rationale: "Currently, vulnerability scans are conducted on an ad hoc basis without a fixed schedule; establishing a consistent scanning routine will enhance threat detection and improve overall security posture.",
      framework: "ISO/IEC 27001"
  },
  {
      article: "Article 36: ICT Security Testing",
      subsection: "Article 36(3)",
      requirement: "Are the results of your ICT security tests documented and reported to the relevant stakeholders (e.g., management, auditors)?",
      hasGap: "No",
      action: "N/A",
      status: "N/A",
      rationale: "All relevant reports are discussed and stored in Jira for easy retrieval",
      framework: "ISO/IEC 27001"
  },
 {
      article: "Article 36: ICT Security Testing",
      subsection: "Implied from Article 36(3)",
      requirement: "Are all remediation actions tracked and reported on, ensuring closure of vulnerabilities?",
      hasGap: "No",
      action: "N/A",
      status: "N/A",
      rationale: "A detailed workflow is managed and tracked in Jira. Each identified vulnerability undergoes a refinement process before being added to a Jira swimlane, where it awaits assignment. Once addressed, the issue is fixed and tested by the quality assurance team, then merged into the source code. The patch or release is then scheduled according to priority and risk appetite.",
      framework: "ISO/IEC 27001"
  }, {
      article: "Article 36: ICT Security Testing",
      subsection: "Article 36(3)",
      requirement: "Do you update your testing plan based on lessons learned from previous incidents or identified gaps?",
      hasGap: "Yes",
      action: "For other software in the suite, identified vulnerabilities are investigated, addressed, and/or documented and explained. This process is currently not in place for Software X, as changes are still under discussion, but it is expected to be implemented soon.",
      status: "is going through stages of adjustments",
      rationale: "The organization established a structured vulnerability management process for other software in the suite, demonstrating its capability and commitment to security best practices. Although Software X does not yet follow this process, plans are underway to align it with the same standards. This reflects a proactive approach toward closing existing gaps and ensuring consistent security governance across all applications",
      framework: "ISO/IEC 27001"
  }, {
      article: "Article 10: Vulnerability and Patch Management",
      subsection: "Art. 10(2)(a)",
      requirement: "",
      hasGap: "No",
      action: "N/A",
      status: "N/A",
      rationale: "Qualys maintains a continuously updated vulnerability database, which includes: CVE identifiers, Vendor advisories, Exploit information, Severity scores (CVSS), Detection logic and remediation guidance. This knowledge base is curated by Qualys security experts and mapped to trusted sources like NVD, CERT, Bugtraq, and vendor-specific advisories (e.g., Microsoft, Oracle).",
      framework: "ISO/IEC 27001"
  }, {
      article: "Article 10: Vulnerability and Patch Management",
      subsection: "Art. 10(2)(c)(i)-(ii)",
      requirement: "",
      hasGap: "No",
      action: "N/A",
      status: "N/A",
      rationale: "Once identified vulnerabilities are discussed in an internal meeting that is appropriate for the context (product refinement meeting, support meeting), the level of severity of the vulnerability is discussed and remediation plan is put in place",
      framework: "ISO/IEC 27001"
  }, {
      article: "Article 10: Vulnerability and Patch Management",
      subsection: "Art. 10(2)(d)",
      requirement: "Organizations must establish and implement vulnerability management procedures that track the use of third-party libraries—including open-source—and custom or internally developed ICT services supporting critical or important functions.",
      hasGap: "Yes",
      action: "Some vulnerable libraries have been identified and are in the process of being updated. As well as that a new product is being planned to replace software X to include secure infrastructure from the ground up",
      status: "The updates to Software X are being implemented on ongoing basis and the new version is in planning stage.",
      rationale: "Some outdated libraries have been identified and are currently being updated. Software X remains secure and operational; however, a new version is being planned that will further enhance security by incorporating a modern, secure-by-design infrastructure from the ground up.",
      framework: "OWASP SAMM (Software Assurance Maturity Model), ISO/IEC 27001 "
  }, {
      article: "Article 10: Vulnerability and Patch Management",
      subsection: "Art. 10(2)(f)",
      requirement: "Do you prioritize the deployment of patches and mitigation measures based on the criticality and risk profile of identified vulnerabilities?",
      hasGap: "No",
      action: "N/A",
      status: "N/A",
      rationale: "There is a process in place for prioritizing vulnerabilities. This involves creating a ticket and discussing it in an appropriate meeting (might be development refinement meeting, support meeting etc.) , next the ticket is given points based on fibonacci scale and put on the Jira board to be worked on. After the work is complete there is a process in place to create a patch or re-run a scan on qualys to ensure that the vulnerability has been mitigated.",
      framework: "OWASP best practice"
  }, {
      article: "Article 10: Vulnerability and Patch Management",
      subsection: "Art. 10(2)(g)",
      requirement: "Do you monitor and verify the resolution of vulnerabilities, ensuring remediation is completed in a timely and effective manner?",
      hasGap: "No",
      action: "N/A",
      status: "N/A",
      rationale: "Jira tickets are created, refined and worked on as vulnerabilities get discovered. The work goes through swimlanes until it gets tested and patched/released.",
      framework: "ISO/IEC 27001"
  }, {
      article: "Article 10: Vulnerability and Patch Management",
      subsection: "Art. 10(2)(h)",
      requirement: "Do you maintain a record of any detected vulnerabilities affecting ICT systems and monitor their resolution?",
      hasGap: "Yes",
      action: "Currently there is a Wiki to keep a record and document vulnerabilities against other software products within the organization, however not one focusing on Software X",
      status: "A document already exists that tracks vulnerabilities identified through WAS and VMDR scans in Qualys, and it is currently being integrated into the central repository.",
      rationale: "Establishing a focused record for Software X will enhance visibility, ensure comprehensive monitoring, and strengthen the organization's overall vulnerability management and compliance posture.",
      framework: "OWASP Vulnerability Management Practices, ISO/IEC 27001"
  }, {
      article: "Article 10: Vulnerability and Patch Management",
      subsection: "Art. 10(3)",
      requirement: "Have you developed, documented, and implemented patch management procedures as part of your ICT security policies and tools?",
      hasGap: "No",
      action: "N/A",
      status: "N/A",
      rationale: "In the case of Software X, a structured patch management process is in place whereby available upgrades are applied in a timely manner. Defined deadlines for patch implementation are established and rigorously enforced to ensure system integrity and security.",
      framework: "ISO/IEC 27001"
  }, {
      article: "Article 10: Vulnerability and Patch Management",
      subsection: "Art. 10(4)(d)",
      requirement: "Do you set clear deadlines for the installation of software and hardware patches and updates?",
      hasGap: "No",
      action: "N/A",
      status: "N/A",
      rationale: "Project Manager ensures communication with clients in regards to setting and keeping tight patch deadlines ",
      framework: "ISO/IEC 27001"
  }, {
      article: "Article 10: Vulnerability and Patch Management",
      subsection: "Art. 10(4)(d)",
      requirement: "Do you have escalation procedures in case patch deployment deadlines cannot be met?",
      hasGap: "No",
      action: "N/A",
      status: "N/A",
      rationale: "Project Manager will be responsible for communicating any changes in circumstances regarding patching deadlines",
      framework: "ISO/IEC 27001"
  }, {
      article: "Article 11: Data and System Security",
      subsection: "Art. 11(2)(d)",
      requirement: "Are there measures to prevent and mitigate malicious code, including malware and ransomware, from affecting ICT systems?",
      hasGap: "No",
      action: "N/A",
      status: "N/A",
      rationale: "Measures like antivirus software, regular patching, firewalls, secure coding, access controls, and threat detection tools are in place to help prevent and respond to malware and ransomware threats.",
      framework: "ISO/IEC 27001"
  }, {
      article: "Article 12: Logging",
      subsection: "Art. 12(2)(a) and (b)",
      requirement: "Have you identified the events that need to be logged in accordance with their purpose and usage to enable the detection of anomalous activities?",
      hasGap: "No",
      action: "N/A",
      status: "N/A",
      rationale: "Logging is implemented throughout Software X. A LogTraceListener, along with a custom, more targeted Tracer, has been developed to ensure comprehensive logging and effective capture of anomalous activities.",
      framework: "ISO/IEC 27001"
  }, {
      article: "Article 12: Logging",
      subsection: "Art. 12(2)(c)(i)-(v)",
      requirement: "Do your logs include events related to: Logical and physical access control, identity management? Capacity management? Change management? ICT operations, including ICT system activities? Network traffic activities, including ICT network performance?",
      hasGap: "No",
      action: "N/A",
      status: "N/A",
      rationale: "All of these are covered in organisations loging policy",
      framework: "ISO/IEC 27001"
  }, {
      article: "Article 16: ICT Systems Acquisition, Development, and Maintenance",
      subsection: "Article 16(3)(a)",
      requirement: "Does the security testing address vulnerabilities and anomalies in the source code?",
      hasGap: "Yes",
      action: "The organization already runs Qualys scans for Dynamic Application Security Testing (DAST) and then planning to make use of a tool such as SonarCloud to ensure Static Application Security Testing (SAST). Documentation of vulnerabilities is being gathered",
      status: "Is being overseen by a member of staff",
      rationale: "The organization employs Qualys scans for Dynamic Application Security Testing (DAST) to detect vulnerabilities during runtime and plans to implement SonarCloud for Static Application Security Testing (SAST) to analyze source code for security issues. This combined approach ensures comprehensive vulnerability detection throughout the software lifecycle. Additionally, the organization is actively documenting identified vulnerabilities to support tracking, remediation, and continuous improvement, demonstrating a commitment to thorough and effective security testing practices.",
      framework: "OWASP Application Security Verification Standard (ASVS)"
  }, {
      article: "Article 16: ICT Systems Acquisition, Development, and Maintenance",
      subsection: "Article 16(8)",
      requirement: "Does the procedure ensure that proprietary software (and source code from ICT third-party service providers or open-source projects) is analysed and tested prior to deployment in the production environment?",
      hasGap: "Yes",
      action: "N/A",
      status: "Going through planning process and will be tracked in Jira",
      rationale: "Any software from third-party providers and open-source projects undergoes refinement and will be updated to the latest versions. Currently, the NuGet package versions vary in currency - some are up to date, while others require updating - and this status will be tracked in Jira.",
      framework: "ISO/IEC 27001"
  }, {
      article: "Article 17: ICT Change Management",
      subsection: "Art. 17(1)(c)(iv)",
      requirement: "Is there effective quality assurance for each change?",
      hasGap: "No",
      action: "N/A",
      status: "N/A",
      rationale: "Quality Assurance team ensures that extensive testing is done on Software X  when changes are implemented",
      framework: "DevOps"
  }, {
      article: "Article 17: ICT Change Management",
      subsection: "Art. 17(1)(d)(i)-(iii)",
      requirement: "Are change details documented and communicated, including: Purpose and scope? Implementation timeline? Expected outcomes?",
      hasGap: "No",
      action: "N/A",
      status: "N/A",
      rationale: "Besides the requirements being outlined in the acceptance criteria in Jira, also the scope of the ticket is discussed and a timeline is estimated. Releae notes get also updated with the details of changes.",
      framework: "DevOps and Agile frameworks"
  }, {
      article: "Article 17: ICT Change Management",
      subsection: "Art. 17(1) ( e)",
      requirement: "Are fallback procedures identified, including responsibilities for: Aborting unsuccessful changes? Recovering from failed changes?",
      hasGap: "No",
      action: "N/A",
      status: "N/A",
      rationale: "A version control system is in place — a tool that helps developers track and manage changes to files and code over time. It allows multiple people to collaborate on a project by keeping a history of all changes, enabling you to: revert to previous versions if needed, compare changes between versions, work on different branches of the code, merge changes from multiple contributors. It’s especially useful for software development but can be used for any type of file tracking. ",
      framework: "ISO/IEC 27001"
  }, {
      article: "Article 17: ICT Change Management",
      subsection: "Art. 17(1)(f)-(g)",
      requirement: "Are emergency changes documented, re-evaluated, assessed, and approved after implementation, including workarounds and patches?",
      hasGap: "No",
      action: "N/A",
      status: "N/A",
      rationale: "Jira tickets maintain a history of comments, change details, and technical notes for each issue, with additional documentation provided in release notes or the relevant wiki.",
      framework: "ISO/IEC 27001"
  }, {
      article: "Article 19: Human Resources Policy",
      subsection: "Art. 19 (B (ii))",
      requirement: "Are staff aware of the reporting channels available to detect and report anomalous behaviour related to ICT security?",
      hasGap: "No",
      action: "N/A",
      status: "N/A",
      rationale: "A member of the Security and Systems Administration Team actively engages with staff to encourage reporting of any unusual or suspicious activities.",
      framework: "ISO/IEC 27001"
  }, {
      article: "Article 34: ICT Operations Security",
      subsection: "Art. 34 ( e)",
      requirement: "Do you manage risks associated with outdated, unsupported, or legacy ICT assets that may pose security or operational risks?",
      hasGap: "Yes",
      action: "Organization have acquired Xeol software to run scans that help manage risks associated with outdated, unsupported, or legacy ICT assets by identifying known vulnerabilities in software components, highlighting end-of-life (EOL) risks for unmaintained libraries or packages, and providing metadata and version intelligence to assess whether components are up-to-date or need replacement.",
      status: "In discussions about the implementation",
      rationale: "The organization has acquired Xeol software to enhance its risk management of outdated, unsupported, or legacy ICT assets. By running comprehensive scans, Xeol identifies known vulnerabilities in software components, flags end-of-life (EOL) risks for unmaintained libraries or packages, and provides detailed metadata and version intelligence. This enables timely assessment and decision-making to ensure software components are current or replaced, thereby reducing security and operational risks.",
      framework: "ISO/IEC 27001"
  }, {
      article: "Article 34: ICT Operations Security",
      subsection: "Art. 34( e )",
      requirement: "Have you implemented a process to retire or replace outdated ICT assets in a timely manner?",
      hasGap: "No",
      action: "N/A",
      status: "N/A",
      rationale: "Security scans identify vulnerabilities, and when outdated assets are found, they are addressed in meetings to plan updates.",
      framework: "ISO/IEC 27001"
  }, {
      article: "Article 34: ICT Operations Security",
      subsection: "Art. 34(f)",
      requirement: "Do you log events related to: Logical and physical access control? ICT operations (including system and network traffic)? ICT change management processes?",
      hasGap: "No",
      action: "N/A",
      status: "N/A",
      rationale: "Logging config exists for the vm. Software X contains different applications. There is logging that captures logged in users, their actions in the system are logged consistently and appropriatelly as they complete actions for this debug logging is used. Where errors occur these are logged efficiently and with a good level of detail. Note, the system has error logging turned on and debug logging gets enabled if we spot an issue",
      framework: "ISO/IEC 27001"
  }, {
      article: "Article 34: ICT Operations Security",
      subsection: "Art. 34(f)",
      requirement: "Are these logs stored securely and protected from unauthorized access?",
      hasGap: "No",
      action: "N/A",
      status: "N/A",
      rationale: "Logs are stored within a secured shared location that requires authentication to access the server. Additionally, logs are maintained in a secured SQL Server database, ensuring controlled access and protection.",
      framework: "ISO/IEC 27001"
  }, {
      article: "Article 34: ICT Operations Security",
      subsection: "Art. 12 ( 2) (a) ",
      requirement: "Are logs retained for an appropriate period for incident investigation and compliance?",
      hasGap: "No",
      action: "N/A",
      status: "N/A",
      rationale: "Logs are generated with unique identifiers, and the infrastructure is in place to support their retention for an appropriate period to facilitate incident investigation and ensure compliance.",
      framework: "ISO/IEC 27001"
  }, {
      article: "Article 34: ICT Operations Security",
      subsection: "Art. 34(g), (h)",
      requirement: "Are automated alerts configured to detect unusual patterns or potential security threats?",
      hasGap: "No",
      action: "N/A",
      status: "N/A",
      rationale: "Automated alerts are a critical component of a proactive security monitoring strategy. By continuously analyzing system logs and behavior patterns, these alerts enable real-time detection of unusual or suspicious activities that could indicate potential security threats.",
      framework: "ISO/IEC 27001"
  }, {
      article: "Article 34: ICT Operations Security",
      subsection: "Art. 34(i)",
      requirement: "Do you continuously check for publicly known vulnerabilities in software and hardware?",
      hasGap: "No",
      action: "N/A",
      status: "N/A",
      rationale: "Qualys VMDR and WAS continuously monitor and scan software and hardware for publicly known vulnerabilities, enabling timely detection and response to security risks.",
      framework: "ISO/IEC 27001"
  }, {
      article: "Article 34: ICT Operations Security",
      subsection: "Art. 34(f)",
      requirement: "Do you ensure that the level of detail in your event logs is aligned with the purpose and usage of the ICT assets that generate them?",
      hasGap: "No",
      action: "N/A",
      status: "N/A",
      rationale: "Yes, logging is sufficiently detailed throughout the application",
      framework: "ISO/IEC 27001"
  }, {
      article: "Article 34: ICT Operations Security",
      subsection: "Art. 34(f)",
      requirement: "Are logs detailed enough for incident response and forensic analysis but not overly verbose to cause inefficiencies?",
      hasGap: "No",
      action: "N/A",
      status: "N/A",
      rationale: "The application’s logging level is set to Error by default to prevent overly verbose log files. However, for investigation and troubleshooting purposes, debug logging can be enabled, providing detailed insights when needed.",
      framework: "ISO/IEC 27001"
  }, {
      article: "Article 34: ICT Operations Security",
      subsection: "Art. 34",
      requirement: "Have you identified and implemented measures to protect data in the following states: In use, in transit, at rest?",
      hasGap: "Yes",
      action: "Updating the API implementation supports protection of data in transit, but to fully meet the requirement, complementary measures for data in use and at rest should also be in place.",
      status: "Tracked in Jira",
      rationale: "Revising the current API implementation to a Web API with secured endpoints can help protect data in transit by enabling stronger transport security measures like HTTPS/TLS. However, it only partially addresses data protection — to fully cover in use and at rest states, additional controls (like encryption at rest and secure memory handling) are needed. These are being discussed also.",
      framework: "ISO/IEC 27001"
  }, {
      article: "Article 34: ICT Operations Security",
      subsection: "Art. 34(i)",
      requirement: "Have you implemented measures to prevent and detect unauthorized connections to your network?",
      hasGap: "No",
      action: "N/A",
      status: "N/A",
      rationale: "The organization uses IDS and IDP systems - Intrusion detection and prevention.",
      framework: "ISO/IEC 27001"
  }, {
      article: "Article 34: ICT Operations Security",
      subsection: "Art. 34(f), (i)",
      requirement: "Do you secure network traffic between: Internal networks? External connections (e.g., the internet)?",
      hasGap: "No",
      action: "N/A",
      status: "N/A",
      rationale: "The network will be secured by enabling firewalls, enforcing TLS encryption, disabling insecure protocols, and implementing strict access control policies to protect both internal and external communications.",
      framework: "ISO/IEC 27001"
  }, {
      article: "Article 34: ICT Operations Security",
      subsection: "Art. 34 ",
      requirement: "Are encryption and secure communication protocols (e.g., TLS/SSL) used for all sensitive data transfers?",
      hasGap: "No",
      action: "N/A",
      status: "N/A",
      rationale: "Typical hardening policies or guidelines, aligned with VMDR (Qualys) detections and recommended as minimum deployment standards, include: a fully patched OS, enabled firewall, enforced TLS, disabled insecure protocols (e.g., SSL, TLS 1.0), antivirus protection, access control policies, minimal IIS feature installation, proper logging configuration, ongoing server monitoring and ownership, and BitLocker encryption for data at rest. SSL is enabled for data transfers",
      framework: "ISO/IEC 27001"
  }, {
      article: "Article 8: Policies and Procedures for ICT Operations",
      subsection: "2( b) (i)",
      requirement: "Do you have controls for: Backup and restore operations, including clear requirements? Scheduling ICT operations with consideration for system interdependencies? Logging and audit trails (protocols for system log information)? Ensuring audits/tests minimize operational disruption? Separation of production environments from development, testing, and non-production environments (accounts, data, connections)? Conducting development and testing only in isolated environments?",
      hasGap: "No",
      action: "N/A",
      status: "N/A",
      rationale: "Local Physical backups: GhettoVCB - Scripted VMWare, backup jobs. Removable SSD drives Stored onsite in data centre and offsite in third party document repository.Online Backups: Veeam backup for Office365 for User data, Azure backup vaults, General backup. We use third party ESCROW backups for specific customer implementation code fulfilling our contractual obligations. For retention of code and versioning subversion and GIT are used. Implementing these controls minimizes risks of data loss, unauthorized access, and system downtime. It ensures reliable recovery, maintains audit integrity, and protects production systems from unintended impacts caused by testing or development activities, supporting overall operational resilience",
      framework: "ISO/IEC 27001"
  }
];

function getPriority(hasGap: string, status: string): string {
  if (hasGap === "No") return "low";
  if (status?.includes("In Progress")) return "medium";
  if (hasGap === "Yes") return "high";
  return "medium";
}

function getStatusBadge(hasGap: string, status: string): string {
  if (hasGap === "No") return "status-compliant";
  if (status?.includes("In Progress") || status?.includes("tracked")) return "status-progress";
  return "status-gap";
}

function getStatusText(hasGap: string, status: string): string {
  if (hasGap === "No") return "Compliant";
  if (status?.includes("In Progress") || status?.includes("tracked")) return "In Progress";
  return "Gap";
}

function populateMatrix(): void {
  const tbody = document.getElementById('matrixBody') as HTMLTableSectionElement;
  tbody.innerHTML = '';

  gapData.forEach(item => {
    const row = document.createElement('tr');
    const priority = getPriority(item.hasGap, item.status);
    const statusClass = getStatusBadge(item.hasGap, item.status);
    const statusText = getStatusText(item.hasGap, item.status);

    row.innerHTML = `
      <td class="article-cell">${item.article}</td>
      <td>${item.subsection}</td>
      <td class="requirement-cell">${item.requirement}</td>
      <td><span class="status-badge ${statusClass}">${statusText}</span></td>
      <td><span class="priority priority-${priority}">${priority.toUpperCase()}</span></td>
      <td class="action-cell">${item.action}</td>
      <td>${item.status}</td>
      <td><span class="framework-tag">${item.framework}</span></td>
      <td>${item.rationale}</td>
    `;
    tbody.appendChild(row);
  });

  updateStats();
  populateFilters();
}

function updateStats(): void {
  const compliant = gapData.filter(item => item.hasGap === "No").length;
  const gaps = gapData.filter(item => item.hasGap === "Yes").length;
  const progress = gapData.filter(item => item.status?.includes("In Progress") || item.status?.includes("tracked")).length;

  (document.getElementById('compliantCount') as HTMLElement).textContent = compliant.toString();
  (document.getElementById('gapCount') as HTMLElement).textContent = gaps.toString();
  (document.getElementById('progressCount') as HTMLElement).textContent = progress.toString();
  (document.getElementById('totalCount') as HTMLElement).textContent = gapData.length.toString();
}

function populateFilters(): void {
  const articleFilter = document.getElementById('articleFilter') as HTMLSelectElement;
  const frameworkFilter = document.getElementById('frameworkFilter') as HTMLSelectElement;

  const articles = [...new Set(gapData.map(item => item.article))].sort();
  const frameworks = [...new Set(gapData.map(item => item.framework))].sort();

  for (const article of articles) {
    const option = new Option(article, article);
    articleFilter.add(option);
  }

  for (const framework of frameworks) {
    const option = new Option(framework, framework);
    frameworkFilter.add(option);
  }
}

function filterMatrix(): void {
  const articleValue = (document.getElementById('articleFilter') as HTMLSelectElement).value;
  const gapValue = (document.getElementById('gapFilter') as HTMLSelectElement).value;
  const frameworkValue = (document.getElementById('frameworkFilter') as HTMLSelectElement).value;

  const rows = document.querySelectorAll<HTMLTableRowElement>('#matrixBody tr');

  rows.forEach(row => {
    const cells = row.cells;
    const article = cells[0].textContent || '';
    const framework = cells[7].textContent || '';
    const requirement = (cells[2].textContent || '').toLowerCase();

    const matchingItem = gapData.find(item => item.article === article);
    const hasGap = matchingItem?.hasGap || '';

    const matches = (!articleValue || article === articleValue) &&
                    (!gapValue || hasGap === gapValue) &&
                    (!frameworkValue || framework.includes(frameworkValue));

    row.style.display = matches ? '' : 'none';
  });
}

// Event Listeners
document.getElementById('articleFilter')?.addEventListener('change', filterMatrix);
document.getElementById('gapFilter')?.addEventListener('change', filterMatrix);
document.getElementById('frameworkFilter')?.addEventListener('change', filterMatrix);

// Initialize
populateMatrix();
