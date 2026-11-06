export interface NavItem {
  label: string;
  href: string;
  terminalCode: string;
}

export const navItems: NavItem[] = [
  { label: "About", href: "#about", terminalCode: "//01.00 SEC_ABOUT_INDEX" },
  { label: "Skills", href: "#skills", terminalCode: "//02.00 SEC_STACK_CORE" },
  { label: "Projects", href: "#projects", terminalCode: "//03.00 SEC_PROJECTS_EXEC" },
  { label: "Education", href: "#education", terminalCode: "//04.00 SEC_ACADEMIC_REC" },
  { label: "Journey", href: "#journey", terminalCode: "//05.00 SEC_JOURNEY_LOG" },
  { label: "Contact", href: "#contact", terminalCode: "//06.00 SEC_CONTACT_DISP" },
];

