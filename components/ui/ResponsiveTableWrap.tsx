import type { ReactNode } from "react";

/** Horizontal scroll wrapper for wide tables on mobile - prevents page-level overflow */
export function ResponsiveTableWrap({
  children,
  label = "Swipe horizontally to view full table",
}: {
  children: ReactNode;
  label?: string;
}) {
  return (
    <div className="table-scroll">
      <p className="mb-2 text-xs text-[#2C3A45] sm:sr-only">{label}</p>
      <div className="overflow-x-auto rounded-none border border-[#C5D0D8]">{children}</div>
    </div>
  );
}
