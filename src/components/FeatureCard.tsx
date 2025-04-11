
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  className?: string;
  backgroundImage?: string;
}

const FeatureCard = ({ icon, title, description, className, backgroundImage }: FeatureCardProps) => {
  return (
    <div 
      className={cn(
        "glass-card p-6 hover-card relative overflow-hidden",
        className
      )}
      style={backgroundImage ? {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.2)), url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      } : {}}
    >
      <div className={cn(
        "flex flex-col items-center text-center",
        backgroundImage ? "text-white" : ""
      )}>
        <div className={cn(
          "w-14 h-14 rounded-full flex items-center justify-center mb-4",
          backgroundImage 
            ? "bg-white/20 text-white" 
            : "bg-biyaluxe-lightPurple dark:bg-biyaluxe-darkPurple/50 text-biyaluxe-purple"
        )}>
          {icon}
        </div>
        <h3 className="text-xl font-medium mb-2">{title}</h3>
        <p className={cn(
          "text-sm", 
          backgroundImage ? "text-white/80" : "text-muted-foreground"
        )}>
          {description}
        </p>
      </div>
    </div>
  );
};

export default FeatureCard;
