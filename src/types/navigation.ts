/* ============================================
   Navigation Types — Inspire Excellence
   ============================================ */

export interface NavItem {
  label: string;
  href: string;
  description?: string;
  children?: NavItem[];
  isExternal?: boolean;
}

export interface FooterColumn {
  title: string;
  links: NavItem[];
}

export interface Breadcrumb {
  label: string;
  href: string;
}
