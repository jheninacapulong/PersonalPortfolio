export const certifications = [
  // Data Analytics / Data Science (17)
  { title: "Introduction to SQL", category: "Data Analytics / Data Science", provider: "DataCamp", tags: ["SQL", "Data Analytics"] },
  { title: "Introduction to R", category: "Data Analytics / Data Science", provider: "DataCamp", tags: ["R", "Data Analytics"] },
  { title: "Introduction to Power BI", category: "Data Analytics / Data Science", provider: "DataCamp", tags: ["Power BI", "Data Analytics"] },
  { title: "Introduction to DAX in Power BI", category: "Data Analytics / Data Science", provider: "DataCamp", tags: ["Power BI", "Data Analytics"] },
  { title: "Introduction to Career Skills in Data Analytics", category: "Data Analytics / Data Science", provider: "DataCamp", tags: ["Data Analytics"] },
  { title: "Learning Data Analytics 1: Foundations", category: "Data Analytics / Data Science", provider: "LinkedIn", tags: ["Data Analytics"] },
  { title: "Learning Data Analytics Part 2: Extending and Applying Core Knowledge", category: "Data Analytics / Data Science", provider: "LinkedIn", tags: ["Data Analytics"] },
  { title: "Data Analytics for Business Professionals", category: "Data Analytics / Data Science", provider: "LinkedIn", tags: ["Data Analytics"] },
  { title: "Data Visualization for Data Analytics and Analytics", category: "Data Analytics / Data Science", provider: "LinkedIn", tags: ["Visualization", "Data Analytics"] },
  { title: "Microsoft Excel to Power BI", category: "Data Analytics / Data Science", provider: "LinkedIn", tags: ["Excel", "Power BI"] },
  { title: "Data Storytelling for Marketers", category: "Data Analytics / Data Science", provider: "LinkedIn", tags: ["Data Analytics", "Marketing"] },
  { title: "Business Analytics Foundations", category: "Data Analytics / Data Science", provider: "LinkedIn", tags: ["Data Analytics"] },
  { title: "Visualizing Advanced Charts and Graphs", category: "Data Analytics / Data Science", provider: "LinkedIn", tags: ["Visualization"] },
  { title: "Career Essentials in Data Analysis by Microsoft and LinkedIn", category: "Data Analytics / Data Science", provider: "LinkedIn", tags: ["Data Analytics", "Data Science"] },
  { title: "Time Series Modeling in Excel, R, and Power BI", category: "Data Analytics / Data Science", provider: "LinkedIn", tags: ["Excel", "Power BI", "R"] },
  { title: "Introduction to Data Science", category: "Data Analytics / Data Science", provider: "DataCamp", tags: ["Data Science"] },
  { title: "Data Analytics Essentials", category: "Data Analytics / Data Science", provider: "Cisco", tags: ["Data Analytics"] },
  // Python (3)
  { title: "Introduction to Python", category: "Python", provider: "DataCamp", tags: ["Python", "Programming"] },
  { title: "Intermediate Python", category: "Python", provider: "DataCamp", tags: ["Python", "Programming"] },
  { title: "Python Essentials 1", category: "Python", provider: "Cisco", tags: ["Python", "Programming"] },
  // Cloud Computing (1)
  { title: "Cloud Computing: Understanding Core Concepts", category: "Cloud Computing", provider: "LinkedIn", tags: ["Cloud Computing"] },
  // Communication (2)
  { title: "English for IT 1", category: "Communication", provider: "Cisco", tags: ["Communication"] },
  { title: "English for IT 2", category: "Communication", provider: "Cisco", tags: ["Communication"] },
  // CompTIA (1)
  { title: "CompTIA IT Fundamentals+ (ITF+) Certification", category: "CompTIA", provider: "CompTIA", tags: ["CompTIA", "IT Fundamentals"] },
  // Cyber Security (1)
  { title: "Cyber Threat Management", category: "Cyber Security", provider: "Cisco", tags: ["Cyber Security"] },
  // Design (3)
  { title: "Planning a Career in User Experience", category: "Design", provider: "LinkedIn", tags: ["Design", "UX"] },
  { title: "UX Design 1: Overview", category: "Design", provider: "LinkedIn", tags: ["Design", "UX"] },
  { title: "Figma for UX Design", category: "Design", provider: "LinkedIn", tags: ["Design", "Figma"] },
  // Marketing (4)
  { title: "SEO", category: "Marketing", provider: "HubSpot", tags: ["Marketing", "SEO"] },
  { title: "Social Media Marketing", category: "Marketing", provider: "HubSpot", tags: ["Marketing", "Social Media"] },
  { title: "SEO II", category: "Marketing", provider: "HubSpot", tags: ["Marketing", "SEO"] },
  { title: "Content Hub Software", category: "Marketing", provider: "HubSpot", tags: ["Marketing", "HubSpot"] },
  // Networks (1)
  { title: "CCNAv7: Introduction to Networks", category: "Networks", provider: "Cisco", tags: ["Cisco", "Networking"] },
  // Programming (1)
  { title: "Introduction to Java", category: "Programming", provider: "LinkedIn", tags: ["Java", "Programming"] },
];

export const experiences = [
  {
    role: "Social Media Manager",
    company: "Reve Esthetiques",
    startDate: "April 2026",
    endDate: "Present",
    duration: "Current",
    type: "Part-time",
    responsibilities: [
      "Managing social media presence and content strategy across multiple platforms",
      "Creating engaging visual content and campaigns aligned with brand identity",
      "Analyzing social media metrics to optimize engagement and audience growth",
    ],
  },
  {
    role: "IT Intern",
    company: "Professional Business Outsourcing Global Limited, Inc.",
    startDate: "November 2025",
    endDate: "March 2026",
    duration: "3 months",
    type: "Full-time",
    responsibilities: [
      "Diagnosed and resolved hardware issues (desktops, laptops, printers) and software problems",
      "Provided direct technical support to users by troubleshooting issues and answering questions",
      "Assisted with network tasks including installing Ethernet cables, configuring switches and routers",
      "Performed routine maintenance such as system updates, virus scans, and disk cleanup",
      "Monitored and maintained records of IT assets, tracking equipment and inventory",
      "Created documentation for IT processes and standard operating procedures",
      "Supported Accounting, HR, and Marketing departments with operational tasks",
    ],
  },
  {
    role: "Social Media Manager",
    company: "Google Developers Student Club - Holy Angel University",
    startDate: "August 2023",
    endDate: "August 2024",
    duration: "12 months",
    type: "Part-time",
    responsibilities: [
      "Led planning, creation, and scheduling of social media content across Facebook and Instagram",
      "Developed engaging captions and promotional materials for events",
      "Collaborated with marketing team on creative campaigns aligned with organizational goals",
      "Evaluated content performance using analytics tools to improve engagement",
      "Researched trends and competitor strategies to enhance content quality",
    ],
  },
  {
    role: "Student Assistant - Museum Tour Guide",
    company: "Center for Kapampangan Studies - Holy Angel University",
    startDate: "December 2022",
    endDate: "December 2023",
    duration: "12 months",
    type: "Part-time",
    responsibilities: [
      "Guided visitors through campus museums, explaining exhibits clearly and engagingly",
      "Created and posted content for the Facebook page to share updates and events",
      "Troubleshot kiosks and digital displays to keep exhibits running smoothly",
      "Managed tour schedules and reservations for organized daily operations",
      "Assisted visitors with questions and provided a positive overall experience",
    ],
  },
];

export const projects = [
  {
    title: "FurBe: A Dog Mood Detector Analysis App",
    description: "AI-powered dog emotion detection mobile application using TensorFlow Lite and Flutter for real-time canine mood analysis.",
    tags: ["Thesis Project", "Flutter", "TensorFlow Lite", "AI/ML"],
    link: "https://jheninacapulong.notion.site/FurBe-A-Dog-Mood-Detector-Analysis-App-for-Android-2a154f3996c180189bc9d07257cabc28",
  },
  {
    title: "Twist & Bloom Platform",
    description: "A creative floral arrangement and e-commerce platform with modern UI design and seamless user experience.",
    tags: ["Web Development", "UI/UX", "E-commerce"],
    link: "https://www.notion.so/jheninacapulong/Twist-Bloom-Platform-2a154f3996c180ec9331c34d54a72087?source=copy_link",
  },
  {
    title: "PCOS Care",
    description: "A women's health tracking application designed to help manage and monitor Polycystic Ovary Syndrome symptoms.",
    tags: ["Health Tech", "Mobile App", "Flutter"],
    link: "https://www.notion.so/jheninacapulong/PCOS-Care-2a454f3996c18031a5a9d2a480f33f94?source=copy_link",
  },
];

export const skills = [
  { name: "Python", level: 85 },
  { name: "Java", level: 70 },
  { name: "SQL", level: 80 },
  { name: "Power BI", level: 75 },
  { name: "Flutter", level: 70 },
  { name: "Figma", level: 75 },
  { name: "TensorFlow", level: 65 },
  { name: "HTML/CSS", level: 85 },
  { name: "Data Analytics", level: 80 },
  { name: "Social Media Management", level: 90 },
  { name: "Network Administration", level: 65 },
  { name: "UX Design", level: 70 },
];