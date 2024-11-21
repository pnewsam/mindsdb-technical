import { cva } from "class-variance-authority";
import { cn } from "../utils/cn";

const badgeVariants = cva("rounded px-[8px] py-[4px] text-xs font-medium", {
  variants: {
    variant: {
      system: "bg-gray-400/10 text-gray-600",
      model: "bg-purple-400/10 text-purple-600",
      view: "bg-green-400/10 text-green-600",
      agent: "bg-orange-400/10 text-orange-600",
      lightwood: "bg-blue-400/10 text-blue-600",
      project: "bg-blue-400/10 text-blue-600",
    },
  },
  defaultVariants: {
    variant: "system",
  },
});

export default function Badge({
  children,
  variant,
}: {
  variant: string;
  children: React.ReactNode;
}) {
  return (
    <span
      className={cn(
        badgeVariants({
          variant: variant as
            | "system"
            | "model"
            | "view"
            | "agent"
            | null
            | undefined,
        }),
      )}
    >
      {children}
    </span>
  );
}
