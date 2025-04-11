
import { useState } from "react";
import { cn } from "@/lib/utils";

interface ProductCardProps {
  image: string;
  name: string;
  description: string;
  className?: string;
}

const ProductCard = ({ image, name, description, className }: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  const handleWhatsApp = () => {
    window.open(`https://wa.me/send?text=Hi! I'm interested in your ${name} from Biyaluxe.`, "_blank");
  };

  return (
    <div 
      className={cn(
        "relative overflow-hidden rounded-lg luxury-shadow hover-card group",
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="aspect-[3/4] overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
        <h3 className="text-white text-xl font-medium mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
          {name}
        </h3>
        <p className="text-white/80 text-sm mb-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
          {description}
        </p>
        <button 
          onClick={handleWhatsApp}
          className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-md text-sm font-medium transition-all duration-300 translate-y-4 group-hover:translate-y-0 flex items-center justify-center gap-2"
        >
          Order via WhatsApp
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
