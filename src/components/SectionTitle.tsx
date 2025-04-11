
import { cn } from "@/lib/utils";

interface SectionTitleProps {
  subtitle?: string;
  title: string;
  align?: "left" | "center" | "right";
  className?: string;
}

const SectionTitle = ({ subtitle, title, align = "center", className }: SectionTitleProps) => {
  return (
    <div 
      className={cn(
        "mb-12",
        {
          "text-left": align === "left",
          "text-center": align === "center",
          "text-right": align === "right",
        },
        className
      )}
    >
      {subtitle && (
        <h3 className="text-sm md:text-base text-biyaluxe-purple font-medium uppercase tracking-wider mb-2 animate-fade-in">
          {subtitle}
        </h3>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground animate-slide-up">
        {title}
      </h2>
      <div 
        className={cn(
          "h-1 bg-biyaluxe-purple rounded w-16 mt-4",
          {
            "mx-auto": align === "center",
            "ml-auto": align === "right",
          }
        )}
      />
    </div>
  );
};

export default SectionTitle;
