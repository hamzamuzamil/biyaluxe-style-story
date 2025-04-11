
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  className?: string;
}

const FeatureCard = ({ icon, title, description, className }: FeatureCardProps) => {
  return (
    <div className={cn(
      "glass-card p-6 hover-card",
      className
    )}>
      <div className="flex flex-col items-center text-center">
        <div className="w-14 h-14 rounded-full bg-biyaluxe-lightPurple dark:bg-biyaluxe-darkPurple/50 flex items-center justify-center text-biyaluxe-purple mb-4">
          {icon}
        </div>
        <h3 className="text-xl font-medium mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
