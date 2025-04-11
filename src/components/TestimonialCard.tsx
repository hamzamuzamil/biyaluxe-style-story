
import { cn } from "@/lib/utils";

interface TestimonialCardProps {
  content: string;
  author: string;
  location: string;
  className?: string;
}

const TestimonialCard = ({ content, author, location, className }: TestimonialCardProps) => {
  return (
    <div className={cn(
      "glass-card p-8 text-center",
      className
    )}>
      <svg
        className="mx-auto mb-4 text-biyaluxe-purple w-10 h-10 opacity-60"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 448 512"
      >
        <path d="M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z" />
      </svg>
      <p className="text-foreground mb-4 italic">{content}</p>
      <div className="mt-6">
        <h4 className="font-medium">{author}</h4>
        <p className="text-sm text-muted-foreground">{location}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
