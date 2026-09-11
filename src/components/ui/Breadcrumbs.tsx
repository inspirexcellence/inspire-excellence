import Link from "next/link";
import { Breadcrumb } from "@/types/navigation";
import { cn } from "@/lib/utils";

interface BreadcrumbsProps {
  items: Breadcrumb[];
  className?: string;
}

export function Breadcrumbs({ items, className }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className={cn("flex", className)}>
      <ol className="flex items-center space-x-2 text-sm text-charcoal">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          
          return (
            <li key={item.href} className="flex items-center">
              {isLast ? (
                <span className="text-navy font-medium" aria-current="page">
                  {item.label}
                </span>
              ) : (
                <>
                  <Link 
                    href={item.href}
                    className="hover:text-navy transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                  <span className="mx-2 text-muted-border" aria-hidden="true">
                    /
                  </span>
                </>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
