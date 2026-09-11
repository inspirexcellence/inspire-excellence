import { SVGProps } from "react";
import { cn } from "@/lib/utils";

export type IconName = 
  | "people" | "perspective" | "process" 
  | "leadership-icon" | "organisation-icon" | "people-icon" 
  | "performance-icon" | "relationship-icon" 
  | "arrow-right" | "arrow-up-right" 
  | "play" | "menu" | "close" 
  | "facebook" | "youtube" | "linkedin" | "instagram" | "email" 
  | "phone" | "location" | "clock" 
  | "experience" | "founded" | "organisations" 
  | "leaders" | "strategy" | "culture" | "change" | "quote";

interface IconProps extends SVGProps<SVGSVGElement> {
  name: IconName;
  size?: number;
}

export function Icon({ name, size = 24, className, ...props }: IconProps) {
  const commonProps = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    className: cn("inline-block", className),
    ...props
  };

  switch (name) {
    case "arrow-right":
      return <svg {...commonProps}><path d="M5 12h14M12 5l7 7-7 7"/></svg>;
    case "arrow-up-right":
      return <svg {...commonProps}><path d="M7 17L17 7M7 7h10v10"/></svg>;
    case "menu":
      return <svg {...commonProps}><path d="M3 12h18M3 6h18M3 18h18"/></svg>;
    case "close":
      return <svg {...commonProps}><path d="M18 6L6 18M6 6l12 12"/></svg>;
    case "play":
      return <svg {...commonProps}><polygon points="5 3 19 12 5 21 5 3"/></svg>;
    case "quote":
      return <svg {...commonProps}><path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.036c0 1.027 1 2 4 2zm14 0c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.036c0 1.027 1 2 4 2z"/></svg>;
    case "facebook":
      return <svg {...commonProps}><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>;
    case "youtube":
      return <svg {...commonProps}><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/></svg>;
    case "linkedin":
      return <svg {...commonProps}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>;
    case "instagram":
      return <svg {...commonProps}><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>;
    case "email":
      return <svg {...commonProps}><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>;
    case "phone":
      return <svg {...commonProps}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>;
    case "location":
      return <svg {...commonProps}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>;
    case "clock":
      return <svg {...commonProps}><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>;
    // Placeholders for abstract/complex icons below (simplistic versions)
    case "people":
    case "people-icon":
    case "leaders":
      return <svg {...commonProps}><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>;
    case "perspective":
      return <svg {...commonProps}><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>;
    case "process":
    case "organisation-icon":
    case "organisations":
      return <svg {...commonProps}><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>;
    case "leadership-icon":
      return <svg {...commonProps}><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>;
    case "performance-icon":
      return <svg {...commonProps}><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>;
    case "relationship-icon":
      return <svg {...commonProps}><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>;
    case "experience":
      return <svg {...commonProps}><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>;
    case "founded":
      return <svg {...commonProps}><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" y1="22" x2="4" y2="15"/></svg>;
    case "strategy":
      return <svg {...commonProps}><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>;
    case "culture":
      return <svg {...commonProps}><path d="M12 22c4-4 4-10 4-14 0-2-2-4-4-4s-4 2-4 4c0 4 0 10 4 14z"/><path d="M12 22V8"/></svg>;
    case "change":
      return <svg {...commonProps}><polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/></svg>;
    default:
      return <svg {...commonProps}><circle cx="12" cy="12" r="10"/></svg>;
  }
}
