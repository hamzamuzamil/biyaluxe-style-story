
import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const handleWhatsApp = () => {
    window.open("https://wa.me/send?text=Hi! I'm interested in your latest collection.", "_blank");
  };

  return (
    <button
      onClick={handleWhatsApp}
      className="whatsapp-button animate-bounce hover:animate-none"
      aria-label="Contact on WhatsApp"
    >
      <MessageCircle size={24} />
    </button>
  );
};

export default WhatsAppButton;
