import {
  ShieldCheck,
  FlaskConical,
  Microscope,
  GraduationCap,
  Briefcase,
  Mail,
  Trophy,
  Leaf,
  Heart,
  Search,
  Users,
  TrendingUp,
  ClipboardCheck,
  FileText,
  Target,
  BookOpen,
  Lightbulb,
  Sparkles,
  CheckCircle,
  Globe,
  Linkedin,
  Github,
  Phone,
  MapPin,
  Clock,
  type LucideIcon,
} from 'lucide-react';

export const siteConfig = {
  name: 'Smit Vekariya',
  fullName: 'Smit Vekariya',
  title: 'Pharmaceutical Quality Assurance Officer',
  role: 'Pharmaceutical Quality Assurance Officer',
  description:
    'B.Pharm graduate specializing in Quality Assurance with hands-on training in GMP, GLP, SOP documentation, CAPA, UV Spectroscopy, and method validation.',
  url: 'https://pharma-qa-portfolio.vercel.app',
  email: 'smitvekariya@example.com',
  phone: '+91 98765 43210',
  ogImage: '/og-image.png',
  headline: 'Ensuring Quality, Compliance & Patient Safety',
};

export const navItems = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/skills', label: 'Skills' },
  { href: '/experience', label: 'Experience' },
  { href: '/education', label: 'Education' },
  { href: '/certificates', label: 'Certificates' },
  { href: '/projects', label: 'Projects' },
  { href: '/blog', label: 'Blog' },
  { href: '/resume', label: 'Resume' },
  { href: '/contact', label: 'Contact' },
];

export const socialLinks = [
  { name: 'Email', href: 'mailto:smitvekariya@example.com', icon: Mail },
  { name: 'Phone', href: 'tel:+919876543210', icon: Phone },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/smitvekariya', icon: Linkedin },
  { name: 'GitHub', href: 'https://github.com/smit11111', icon: Github },
];

export const heroObjective =
  'Detail-oriented B.Pharm graduate with specialized training in Quality Assurance, seeking to contribute to pharmaceutical manufacturing by ensuring GMP compliance, robust SOP documentation, and continuous process improvement.';

export const professionalSummary =
  'Pharmaceutical Quality Assurance professional with a Bachelor of Pharmacy degree and hands-on industrial training. Skilled in GMP/GLP compliance, SOP development, CAPA investigations, UV Spectroscopy, and analytical method validation. Passionate about ensuring product quality and patient safety through rigorous documentation and process adherence.';

export const careerObjective =
  'To secure a position as a Quality Assurance Officer in a reputed pharmaceutical organization where I can apply my knowledge of GMP, GLP, CAPA, and analytical methods to ensure product quality, regulatory compliance, and continuous improvement.';

export const education = {
  degree: 'Bachelor of Pharmacy (B.Pharm)',
  institution: 'Gujarat Technological University',
  cgpa: '7.9',
  duration: '2019 — 2023',
};

export const skillCategories = [
  'Quality Assurance',
  'Analytical Techniques',
  'Documentation',
  'Regulatory',
];

export const skills: { name: string; category: string; icon: LucideIcon; level: number }[] = [
  { name: 'GMP Compliance', category: 'Quality Assurance', icon: ShieldCheck, level: 90 },
  { name: 'GLP Compliance', category: 'Quality Assurance', icon: ClipboardCheck, level: 88 },
  { name: 'SOP Documentation', category: 'Documentation', icon: FileText, level: 92 },
  { name: 'CAPA', category: 'Quality Assurance', icon: CheckCircle, level: 85 },
  { name: 'UV Spectroscopy', category: 'Analytical Techniques', icon: Microscope, level: 82 },
  { name: 'Method Validation', category: 'Analytical Techniques', icon: FlaskConical, level: 80 },
  { name: 'HPLC', category: 'Analytical Techniques', icon: FlaskConical, level: 78 },
  { name: 'Dissolution Testing', category: 'Analytical Techniques', icon: Microscope, level: 75 },
  { name: 'Stability Studies', category: 'Quality Assurance', icon: TrendingUp, level: 77 },
  { name: 'Regulatory Compliance', category: 'Regulatory', icon: ShieldCheck, level: 83 },
  { name: 'Audit Preparation', category: 'Regulatory', icon: ClipboardCheck, level: 80 },
  { name: 'Batch Record Review', category: 'Documentation', icon: FileText, level: 86 },
  { name: 'Risk Assessment', category: 'Quality Assurance', icon: Target, level: 79 },
  { name: 'Change Control', category: 'Documentation', icon: FileText, level: 81 },
  { name: 'ICH Guidelines', category: 'Regulatory', icon: BookOpen, level: 76 },
  { name: 'Data Integrity', category: 'Documentation', icon: ShieldCheck, level: 84 },
];

export const experiences: {
  id: string;
  icon: LucideIcon;
  date: string;
  title: string;
  organization: string;
  description: string;
  type: string;
}[] = [
  {
    id: '1',
    icon: Briefcase,
    date: '2023 — 2024',
    title: 'QA Trainee',
    organization: 'Pharmaceutical Manufacturing Facility',
    description:
      'Completed industrial training in the Quality Assurance department. Gained hands-on experience in GMP compliance, SOP review, batch record documentation, and CAPA investigations. Assisted in internal audits and stability studies.',
    type: 'Training',
  },
  {
    id: '2',
    icon: FlaskConical,
    date: '2022 — 2023',
    title: 'Research Project — Method Validation',
    organization: 'Gujarat Technological University',
    description:
      'Final year research project focused on UV Spectroscopy-based analytical method validation as per ICH Q2(R1) guidelines. Performed accuracy, precision, linearity, and robustness studies.',
    type: 'Research',
  },
  {
    id: '3',
    icon: Microscope,
    date: '2022',
    title: 'Industrial Visit — Quality Control Lab',
    organization: 'Leading Pharmaceutical Plant',
    description:
      'Observed QC laboratory operations including HPLC analysis, dissolution testing, and environmental monitoring. Learned about data integrity practices and ALCOA+ principles.',
    type: 'Visit',
  },
];

export const certificates: {
  id: string;
  icon: LucideIcon;
  title: string;
  issuer: string;
  description: string;
  date: string;
  image: string;
}[] = [
  {
    id: '1',
    icon: Trophy,
    title: 'GMP Compliance Certification',
    issuer: 'Pharmaceutical Training Institute',
    description: 'Comprehensive training on Good Manufacturing Practice (GMP) principles, documentation, and regulatory requirements.',
    date: '2024',
    image: '/certificates/gmp-compliance.png',
  },
  {
    id: '2',
    icon: FlaskConical,
    title: 'UV Spectroscopy Method Validation',
    issuer: 'Gujarat Technological University',
    description: 'Certification for completing analytical method validation project as per ICH Q2(R1) guidelines.',
    date: '2023',
    image: '/certificates/uv-spectroscopy.png',
  },
  {
    id: '3',
    icon: ClipboardCheck,
    title: 'SOP Documentation Workshop',
    issuer: 'Industrial Training Program',
    description: 'Workshop on standard operating procedure writing, review, and compliance documentation.',
    date: '2023',
    image: '/certificates/sop-workshop.png',
  },
  {
    id: '4',
    icon: ShieldCheck,
    title: 'CAPA & Risk Assessment',
    issuer: 'Quality Assurance Training',
    description: 'Training on Corrective and Preventive Actions (CAPA), root cause analysis, and quality risk management.',
    date: '2023',
    image: '/certificates/capa-risk.png',
  },
];

export const whyHireMe: { title: string; icon: LucideIcon; description: string }[] = [
  {
    title: 'GMP & GLP Expertise',
    icon: ShieldCheck,
    description: 'Strong foundation in Good Manufacturing and Laboratory Practices with hands-on industrial training experience.',
  },
  {
    title: 'Analytical Method Validation',
    icon: FlaskConical,
    description: 'Practical experience in UV Spectroscopy method validation following ICH Q2(R1) guidelines.',
  },
  {
    title: 'Documentation Excellence',
    icon: FileText,
    description: 'Proficient in SOP writing, batch record review, and maintaining compliance documentation.',
  },
  {
    title: 'Continuous Learner',
    icon: GraduationCap,
    description: 'Committed to staying current with regulatory updates, ICH guidelines, and industry best practices.',
  },
];

export const strengths: { title: string; icon: LucideIcon; description: string }[] = [
  {
    title: 'Attention to Detail',
    icon: Search,
    description: 'Meticulous in documentation review, data verification, and ensuring compliance with regulatory standards.',
  },
  {
    title: 'Analytical Thinking',
    icon: Microscope,
    description: 'Strong problem-solving skills applied to method development, troubleshooting, and root cause analysis.',
  },
  {
    title: 'Team Collaboration',
    icon: Users,
    description: 'Effective communicator who works well across QA, QC, and production teams to resolve quality issues.',
  },
  {
    title: 'Quality Mindset',
    icon: ShieldCheck,
    description: 'Deep commitment to patient safety and product quality through rigorous adherence to standards.',
  },
];

export const professionalValues: { title: string; icon: LucideIcon; description: string }[] = [
  {
    title: 'Patient Safety First',
    icon: Heart,
    description: 'Every quality decision is driven by the ultimate goal of protecting patient health and safety.',
  },
  {
    title: 'Integrity in Data',
    icon: ShieldCheck,
    description: 'Uphold ALCOA+ principles for data integrity in all documentation and recording practices.',
  },
  {
    title: 'Continuous Improvement',
    icon: TrendingUp,
    description: 'Actively seek opportunities to improve processes, reduce errors, and enhance quality systems.',
  },
  {
    title: 'Compliance Culture',
    icon: ClipboardCheck,
    description: 'Promote a culture of compliance where following SOPs and regulations is the foundation of all work.',
  },
];

export const hobbies: { name: string; icon: LucideIcon }[] = [
  { name: 'Reading Research Papers', icon: BookOpen },
  { name: 'Gardening', icon: Leaf },
  { name: 'Volunteering', icon: Heart },
  { name: 'Learning New Techniques', icon: Sparkles },
];

export const projects: {
  id: string;
  image: string;
  icon: LucideIcon;
  subtitle: string;
  title: string;
  description: string;
  highlights: string[];
  skills: string[];
  technologies: string[];
  outcomes: string[];
  hasLink: boolean;
}[] = [
  {
    id: '1',
    image: '/projects/uv-validation.jpg',
    icon: FlaskConical,
    subtitle: 'Final Year Research Project',
    title: 'UV Spectroscopy Method Validation',
    description:
      'Developed and validated an analytical method for drug quantification using UV-Visible spectrophotometry in accordance with ICH Q2(R1) guidelines.',
    highlights: [
      'Performed linearity, accuracy, precision, and robustness studies',
      'Developed calibration curve with R² > 0.999',
      'Documented full validation report following regulatory standards',
    ],
    skills: ['UV Spectroscopy', 'Method Validation', 'Statistical Analysis'],
    technologies: ['UV-Vis Spectrophotometer', 'Excel', 'Statistical Software'],
    outcomes: [
      'Validated method suitable for routine QC testing',
      'Gained deep understanding of ICH Q2(R1) parameters',
    ],
    hasLink: false,
  },
  {
    id: '2',
    image: '/projects/sop-development.jpg',
    icon: FileText,
    subtitle: 'Industrial Training',
    title: 'SOP Development & Review',
    description:
      'Contributed to the development and review of Standard Operating Procedures for QA processes during industrial training.',
    highlights: [
      'Drafted 5+ SOPs for QC and QA operations',
      'Participated in SOP review and approval cycles',
      'Ensured alignment with GMP and regulatory requirements',
    ],
    skills: ['SOP Writing', 'GMP Compliance', 'Documentation'],
    technologies: ['MS Word', 'Document Management System'],
    outcomes: [
      'Improved documentation consistency',
      'Reduced review cycle time by streamlining templates',
    ],
    hasLink: false,
  },
  {
    id: '3',
    image: '/projects/capa-investigation.jpg',
    icon: ClipboardCheck,
    subtitle: 'Case Study',
    title: 'CAPA Investigation Case Study',
    description:
      'Conducted a detailed case study on Corrective and Preventive Action (CAPA) processes, including root cause analysis using fishbone diagrams and 5-Why methodology.',
    highlights: [
      'Applied root cause analysis tools (Fishbone, 5-Why)',
      'Developed corrective and preventive action plans',
      'Tracked effectiveness of implemented CAPAs',
    ],
    skills: ['CAPA', 'Root Cause Analysis', 'Risk Assessment'],
    technologies: ['Fishbone Diagram', '5-Why Analysis', 'Risk Matrix'],
    outcomes: [
      'Identified systemic root causes for deviation',
      'Proposed preventive measures reducing recurrence risk',
    ],
    hasLink: false,
  },
];

export const blogPosts: {
  id: string;
  category: string;
  date: string;
  readTime: string;
  title: string;
  excerpt: string;
  content: string;
}[] = [
  {
    id: '1',
    category: 'Quality Assurance',
    date: '2024-01-15',
    readTime: '5 min read',
    title: 'Understanding GMP: The Foundation of Pharmaceutical Quality',
    excerpt:
      'Good Manufacturing Practice (GMP) is the cornerstone of pharmaceutical quality assurance. Learn about its key principles and why they matter for patient safety.',
    content:
      'Good Manufacturing Practice (GMP) is a system for ensuring that products are consistently produced and controlled according to quality standards. It is designed to minimize the risks involved in any pharmaceutical production that cannot be eliminated through testing the final product.\n\nThe core principles of GMP cover all aspects of production, from starting materials, premises, and equipment to the training and personal hygiene of staff. Detailed, written procedures are essential for each process that could affect the quality of the finished product.\n\nGMP covers five key components often referred to as the 5 Ps: People, Premises, Processes, Products, and Procedures. Each must meet specific quality standards to ensure the final product is safe, effective, and of consistent quality.\n\nRegulatory bodies such as the FDA, EMA, and WHO enforce GMP compliance through inspections and audits. Non-compliance can result in warning letters, product recalls, or facility shutdowns, making GMP adherence critical for any pharmaceutical manufacturer.',
  },
  {
    id: '2',
    category: 'Analytical Techniques',
    date: '2024-01-10',
    readTime: '7 min read',
    title: 'UV Spectroscopy Method Validation per ICH Q2(R1)',
    excerpt:
      'A practical guide to validating analytical methods using UV-Visible spectrophotometry, following ICH Q2(R1) guidelines for accuracy, precision, and linearity.',
    content:
      'Analytical method validation is the process of demonstrating that an analytical procedure is suitable for its intended purpose. ICH Q2(R1) provides a harmonized guideline on the validation of analytical procedures.\n\nFor UV-Visible spectrophotometry, key validation parameters include specificity, linearity, range, accuracy, precision (repeatability and intermediate precision), detection limit, quantitation limit, and robustness.\n\nLinearity is established by preparing standard solutions at different concentration levels and plotting a calibration curve. The correlation coefficient (R²) should typically be ≥ 0.999 to demonstrate acceptable linearity.\n\nAccuracy is assessed by spike-recovery studies, where a known amount of analyte is added to a sample matrix and the percentage recovery is calculated. Acceptance criteria typically range from 98% to 102%.\n\nPrecision is evaluated through repeatability (intra-day) and intermediate precision (inter-day) studies. The relative standard deviation (RSD) should typically be ≤ 2.0% for precise methods.\n\nRobustness testing involves deliberately varying method parameters such as wavelength, solvent composition, and temperature to assess the method\'s reliability under minor changes.',
  },
  {
    id: '3',
    category: 'Documentation',
    date: '2024-01-05',
    readTime: '4 min read',
    title: 'SOP Writing Best Practices for QA Professionals',
    excerpt:
      'Standard Operating Procedures are the backbone of pharmaceutical quality systems. Here are best practices for writing clear, compliant SOPs.',
    content:
      'Standard Operating Procedures (SOPs) are documented instructions that describe how to perform routine operations consistently. They are a fundamental requirement of GMP and form the backbone of any pharmaceutical quality system.\n\nA well-written SOP should be clear, concise, and unambiguous. It should include a header with the SOP title, number, version, effective date, and approval signatures. The body should contain the purpose, scope, responsibilities, materials, procedure, and references.\n\nKey best practices include using simple, direct language; avoiding jargon; numbering steps sequentially; and including clear acceptance criteria. SOPs should be reviewed periodically and revised when processes change.\n\nVersion control is critical. Each revision should be tracked with a change history, and obsolete versions should be archived but not used. Training records should document that all relevant personnel have been trained on the current version.\n\nCommon pitfalls include overly complex language, missing acceptance criteria, and failure to update SOPs when equipment or processes change. A robust SOP review process involving QA, production, and technical teams helps prevent these issues.',
  },
  {
    id: '4',
    category: 'Quality Assurance',
    date: '2023-12-20',
    readTime: '6 min read',
    title: 'CAPA: From Root Cause to Preventive Action',
    excerpt:
      'Corrective and Preventive Actions (CAPA) are essential for continuous improvement. Learn how to conduct effective CAPA investigations.',
    content:
      'Corrective and Preventive Action (CAPA) is a systematic approach to investigating and resolving quality issues. It involves identifying the root cause of a problem, implementing corrective actions to fix it, and preventive actions to stop it from recurring.\n\nThe CAPA process begins with problem identification, followed by an investigation. Root cause analysis tools such as the 5-Why method, fishbone (Ishikawa) diagrams, and failure mode and effects analysis (FMEA) are commonly used.\n\nCorrective actions address the immediate root cause, while preventive actions extend beyond the specific issue to prevent similar problems across other processes or products. Both should be documented with clear action items, responsible persons, and target dates.\n\nEffectiveness checks are a critical but often overlooked step. After implementing CAPA, the organization should verify that the actions were effective in eliminating the root cause and preventing recurrence. This may involve monitoring data over a defined period.\n\nA well-managed CAPA system drives continuous improvement, reduces recurrence of deviations, and demonstrates to regulators that the organization is committed to quality.',
  },
];
