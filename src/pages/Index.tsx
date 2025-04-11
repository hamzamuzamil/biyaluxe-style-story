import { useState } from "react";
import { 
  Sparkles, 
  ClipboardCheck, 
  Award, 
  Scissors, 
  Shirt, 
  MessageCircle,
  ArrowRight,
  Instagram,
  Facebook,
  Twitter,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import Navbar from "@/components/Navbar";
import ThemeToggle from "@/components/ThemeToggle";
import SectionTitle from "@/components/SectionTitle";
import ProductCard from "@/components/ProductCard";
import FeatureCard from "@/components/FeatureCard";
import TestimonialCard from "@/components/TestimonialCard";
import ScrollReveal from "@/components/ScrollReveal";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const Index = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  
  const testimonials = [
    {
      content: "The quality of Biyaluxe's clothes is exceptional. I've received so many compliments on their designs, and the fabric feels luxurious against my skin.",
      author: "Ayesha Mahmood",
      location: "Karachi"
    },
    {
      content: "Biyaluxe understands the perfect blend of traditional and modern. Their customer service is as impressive as their designs!",
      author: "Fatima Akhtar",
      location: "Lahore"
    },
    {
      content: "I ordered a custom outfit for my engagement and it was everything I dreamed of. The attention to detail is remarkable.",
      author: "Sana Malik",
      location: "Islamabad"
    }
  ];
  
  const products = [
    {
      image: "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&fit=crop&q=80",
      name: "Embroidered Chiffon Dress",
      description: "Handcrafted luxury with intricate embroidery, perfect for special occasions."
    },
    {
      image: "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?auto=format&fit=crop&q=80",
      name: "Formal Silk Collection",
      description: "Premium silk with modern cuts, designed for the confident woman."
    },
    {
      image: "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?auto=format&fit=crop&q=80",
      name: "Casual Cotton Ensemble",
      description: "Breathable cotton with contemporary Pakistani design elements."
    },
    {
      image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&q=80",
      name: "Bridal Couture",
      description: "Exquisite bridal wear that combines tradition with modern luxury."
    },
    {
      image: "https://images.unsplash.com/photo-1613461920867-9ea115fee900?auto=format&fit=crop&q=80",
      name: "Statement Accessories",
      description: "Handmade accessories to complete your perfect look."
    },
    {
      image: "https://images.unsplash.com/photo-1546635834-78554e816d55?auto=format&fit=crop&q=80",
      name: "Luxury Scarves",
      description: "Soft, premium fabric scarves with unique patterns."
    }
  ];
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would submit the form data to your backend
    toast.success("Message sent successfully! We'll get back to you soon.");
  };
  
  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };
  
  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <WhatsAppButton />
      
      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-b from-background to-muted/20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1589156288859-f0cb0d82b065?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-20 dark:opacity-10"></div>
        
        <div className="container mx-auto px-6 pt-20 pb-12 relative z-10">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="w-full lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0">
              <ScrollReveal animation="slide-in-left">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-6">
                  Luxury that speaks your <span className="text-gradient">soul</span>
                </h1>
                <p className="text-lg md:text-xl opacity-80 mb-8 max-w-lg mx-auto lg:mx-0">
                  Discover timeless elegance crafted with passion and precision. Where tradition meets modern luxury.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Button 
                    size="lg" 
                    className="bg-biyaluxe-purple hover:bg-biyaluxe-vividPurple text-white px-8"
                  >
                    Explore Collection
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="border-biyaluxe-purple text-biyaluxe-purple hover:bg-biyaluxe-purple hover:text-white px-8 gap-2"
                    onClick={() => window.open("https://wa.me/send?text=Hi! I'm interested in your latest collection.", "_blank")}
                  >
                    Message on WhatsApp
                    <MessageCircle size={18} />
                  </Button>
                </div>
                <p className="mt-6 text-lg font-urdu">
                  "Apki khoobsurti, apki pehchaan – Biyaluxe ke sath."
                </p>
              </ScrollReveal>
            </div>
            
            <div className="w-full lg:w-1/2">
              <ScrollReveal animation="slide-in-right">
                <div className="relative">
                  <div className="w-full h-[500px] rounded-lg overflow-hidden luxury-shadow">
                    <img 
                      src="https://images.unsplash.com/photo-1619086302271-00a7a7080eb8?auto=format&fit=crop&q=80" 
                      alt="Biyaluxe Fashion" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-6 -right-6 w-40 h-40 rounded-lg overflow-hidden luxury-shadow hidden md:block">
                    <img 
                      src="https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&q=80" 
                      alt="Biyaluxe Detail" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Add a new decorative element on top left */}
                  <div className="absolute -top-6 -left-6 w-32 h-32 rounded-lg overflow-hidden luxury-shadow hidden md:block">
                    <img 
                      src="https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&q=80" 
                      alt="Biyaluxe Fabric" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <section id="about" className="section-padding bg-muted/30 dark:bg-transparent">
        <div className="container mx-auto">
          <ScrollReveal>
            <SectionTitle
              subtitle="Our Story"
              title="The Essence of Biyaluxe"
            />
          </ScrollReveal>
          
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="w-full lg:w-1/2">
              <ScrollReveal animation="slide-in-left">
                <div className="relative">
                  <div className="w-full h-[400px] rounded-lg overflow-hidden luxury-shadow">
                    <img 
                      src="https://images.unsplash.com/photo-1602810318660-d2c46b750be3?auto=format&fit=crop&q=80" 
                      alt="Biyaluxe Founder" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="glass-card p-6 max-w-xs absolute -bottom-10 -right-10 hidden md:block">
                    <p className="font-serif italic text-lg">
                      "Our designs are a tribute to the timeless beauty of our culture."
                    </p>
                    <p className="text-right mt-2 font-medium">- Bakhtawar Khan</p>
                  </div>
                  {/* Add a decorative element to the about section */}
                  <div className="absolute -top-8 -left-8 w-28 h-28 rounded-full overflow-hidden luxury-shadow hidden md:block rotate-6">
                    <img 
                      src="https://images.unsplash.com/photo-1609505848912-b7c3b8b4beda?auto=format&fit=crop&q=80" 
                      alt="Fabric Detail" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Add another decorative element */}
                  <div className="absolute top-1/2 -left-14 w-24 h-24 rounded-lg overflow-hidden luxury-shadow hidden lg:block -rotate-6">
                    <img 
                      src="https://images.unsplash.com/photo-1551232864-3f0890e580d9?auto=format&fit=crop&q=80" 
                      alt="Design Process" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </ScrollReveal>
            </div>
            
            <div className="w-full lg:w-1/2">
              <ScrollReveal animation="slide-in-right" delay={100}>
                <h3 className="text-2xl md:text-3xl font-serif font-semibold mb-6">
                  Founded on Passion & Heritage
                </h3>
                <p className="mb-4 text-muted-foreground">
                  Biyaluxe was born from Bakhtawar Khan's vision to create fashion that empowers confident women through the perfect blend of traditional craftsmanship and contemporary design.
                </p>
                <p className="mb-6 text-muted-foreground">
                  Every piece in our collection tells a story of cultural richness, exceptional quality, and meticulous attention to detail. We take pride in sourcing the finest fabrics and working with skilled artisans who bring our designs to life.
                </p>
                
                {/* Add image gallery to about section */}
                <div className="grid grid-cols-3 gap-3 mb-6">
                  <div className="aspect-square rounded-lg overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1633933358116-a27b902fad35?auto=format&fit=crop&q=80" 
                      alt="Fabric Selection" 
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="aspect-square rounded-lg overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1626397030310-3e097a0122c3?auto=format&fit=crop&q=80" 
                      alt="Design Process" 
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="aspect-square rounded-lg overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1619662936842-a71cc3ef3821?auto=format&fit=crop&q=80" 
                      alt="Fashion Details" 
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-biyaluxe-lightPurple flex items-center justify-center text-biyaluxe-purple">
                      <Sparkles size={20} />
                    </div>
                    <div>
                      <h4 className="font-medium">Exquisite Quality</h4>
                      <p className="text-sm text-muted-foreground">Premium fabrics and meticulous craftsmanship</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-biyaluxe-lightPurple flex items-center justify-center text-biyaluxe-purple">
                      <Award size={20} />
                    </div>
                    <div>
                      <h4 className="font-medium">Cultural Heritage</h4>
                      <p className="text-sm text-muted-foreground">Designs rooted in Pakistani aesthetic traditions</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-biyaluxe-lightPurple flex items-center justify-center text-biyaluxe-purple">
                      <Scissors size={20} />
                    </div>
                    <div>
                      <h4 className="font-medium">Modern Designs</h4>
                      <p className="text-sm text-muted-foreground">Contemporary silhouettes for the confident woman</p>
                    </div>
                  </div>
                </div>
                <Button 
                  className="mt-8 bg-biyaluxe-purple hover:bg-biyaluxe-vividPurple text-white"
                >
                  Discover Our Story
                </Button>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section - Updated with background images */}
      <section id="features" className="section-padding bg-gradient-to-b from-muted/30 to-background dark:from-background dark:to-muted/5">
        <div className="container mx-auto">
          <ScrollReveal>
            <SectionTitle
              subtitle="Why Choose Us"
              title="What Makes Biyaluxe Special"
            />
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ScrollReveal delay={100}>
              <FeatureCard 
                icon={<Shirt size={28} />}
                title="Premium Fabric"
                description="We source only the finest materials to ensure comfort, durability, and luxury in every piece."
                backgroundImage="https://images.unsplash.com/photo-1620799140188-3b2a02fd9a77?auto=format&fit=crop&q=80"
              />
            </ScrollReveal>
            
            <ScrollReveal delay={200}>
              <FeatureCard 
                icon={<Scissors size={28} />}
                title="Timeless Designs"
                description="Our creations blend cultural heritage with contemporary fashion for truly timeless appeal."
                backgroundImage="https://images.unsplash.com/photo-1588099768523-f4e6a5887f24?auto=format&fit=crop&q=80"
              />
            </ScrollReveal>
            
            <ScrollReveal delay={300}>
              <FeatureCard 
                icon={<Award size={28} />}
                title="Trusted Quality"
                description="Join hundreds of satisfied customers who trust Biyaluxe for special occasions and everyday luxury."
              />
            </ScrollReveal>
            
            <ScrollReveal delay={400}>
              <FeatureCard 
                icon={<ClipboardCheck size={28} />}
                title="Custom Orders"
                description="Express your unique style with our bespoke design service, tailored to your preferences."
              />
            </ScrollReveal>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section id="testimonials" className="section-padding bg-muted/10 dark:bg-muted/5">
        <div className="container mx-auto">
          <ScrollReveal>
            <SectionTitle
              subtitle="What People Say"
              title="Customer Stories"
            />
          </ScrollReveal>
          
          <div className="max-w-3xl mx-auto relative">
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-out" 
                style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="min-w-full px-4">
                    <TestimonialCard
                      content={testimonial.content}
                      author={testimonial.author}
                      location={testimonial.location}
                    />
                  </div>
                ))}
              </div>
            </div>
            
            <button 
              onClick={prevTestimonial}
              className="absolute top-1/2 -left-4 -translate-y-1/2 w-10 h-10 rounded-full bg-background dark:bg-muted flex items-center justify-center shadow-md z-10 text-foreground hover:text-biyaluxe-purple transition-colors duration-300"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>
            
            <button 
              onClick={nextTestimonial}
              className="absolute top-1/2 -right-4 -translate-y-1/2 w-10 h-10 rounded-full bg-background dark:bg-muted flex items-center justify-center shadow-md z-10 text-foreground hover:text-biyaluxe-purple transition-colors duration-300"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>
            
            <div className="flex justify-center mt-6 gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                    index === currentTestimonial ? 'bg-biyaluxe-purple' : 'bg-muted-foreground/30'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Instagram Preview */}
      <section id="instagram" className="section-padding">
        <div className="container mx-auto">
          <ScrollReveal>
            <SectionTitle
              subtitle="Get Inspired"
              title="Follow Our Journey"
            />
          </ScrollReveal>
          
          <div className="text-center mb-8">
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Follow us on Instagram @biyaluxe for daily inspiration, behind-the-scenes content, and first looks at our newest pieces.
            </p>
          </div>
          
          <div className="glass-card p-8 text-center">
            <p className="text-xl mb-6">Add embedded Instagram feed or upload curated visuals from @biyaluxe manually.</p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div key={item} className="aspect-square bg-muted rounded-md overflow-hidden">
                  <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                    <Instagram size={24} />
                  </div>
                </div>
              ))}
            </div>
            <Button 
              className="mt-8 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white gap-2"
              onClick={() => window.open("https://www.instagram.com/biyaluxe/", "_blank")}
            >
              <Instagram size={18} />
              Follow @biyaluxe
            </Button>
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section id="contact" className="section-padding bg-muted/30 dark:bg-transparent">
        <div className="container mx-auto">
          <ScrollReveal>
            <SectionTitle
              subtitle="Get In Touch"
              title="We'd Love to Hear From You"
            />
          </ScrollReveal>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <ScrollReveal animation="slide-in-left">
              <div className="glass-card p-8">
                <h3 className="text-2xl font-serif font-semibold mb-6">Send Us a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1">
                      Your Name
                    </label>
                    <Input id="name" placeholder="Enter your name" required />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1">
                      Email Address
                    </label>
                    <Input id="email" type="email" placeholder="Enter your email" required />
                  </div>
                  
                  <div>
                    <label htmlFor="whatsapp" className="block text-sm font-medium mb-1">
                      WhatsApp Number
                    </label>
                    <Input id="whatsapp" placeholder="Enter your WhatsApp number" />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-1">
                      Message
                    </label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell us what you're looking for..." 
                      rows={5}
                      required
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-biyaluxe-purple hover:bg-biyaluxe-vividPurple text-white"
                  >
                    Send Message
                  </Button>
                </form>
              </div>
            </ScrollReveal>
            
            <ScrollReveal animation="slide-in-right">
              <div className="glass-card p-8 h-full flex flex-col">
                <h3 className="text-2xl font-serif font-semibold mb-6">Connect With Us</h3>
                <p className="text-muted-foreground mb-8">
                  Have questions or want to place an order? Reach out to us directly through WhatsApp or social media. We're always here to help you find the perfect piece.
                </p>
                
                <div className="space-y-6 mb-8">
                  <div>
                    <h4 className="font-medium mb-1">Founded By</h4>
                    <p>Bakhtawar Khan</p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-1">Location</h4>
                    <p>Pakistan</p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-1">Follow Us</h4>
                    <div className="flex gap-4 mt-2">
                      <a 
                        href="https://www.instagram.com/biyaluxe/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-biyaluxe-purple/10 dark:bg-biyaluxe-purple/20 flex items-center justify-center text-biyaluxe-purple hover:bg-biyaluxe-purple hover:text-white transition-colors duration-300"
                      >
                        <Instagram size={20} />
                      </a>
                      <a 
                        href="#" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-biyaluxe-purple/10 dark:bg-biyaluxe-purple/20 flex items-center justify-center text-biyaluxe-purple hover:bg-biyaluxe-purple hover:text-white transition-colors duration-300"
                      >
                        <Facebook size={20} />
                      </a>
                      <a 
                        href="#" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-biyaluxe-purple/10 dark:bg-biyaluxe-purple/20 flex items-center justify-center text-biyaluxe-purple hover:bg-biyaluxe-purple hover:text-white transition-colors duration-300"
                      >
                        <Twitter size={20} />
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="mt-auto">
                  <Button 
                    className="w-full bg-green-500 hover:bg-green-600 text-white gap-2"
                    onClick={() => window.open("https://wa.me/send?text=Hi! I'm interested in your latest collection.", "_blank")}
                  >
                    <MessageCircle size={18} />
                    Message on WhatsApp
                  </Button>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-biyaluxe-deepPurple text-white py-12 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-serif font-bold mb-4">Biyaluxe</h3>
              <p className="opacity-70 mb-6">
                Luxury that speaks your soul. Elevating Pakistani fashion with quality craftsmanship and timeless designs.
              </p>
              <p className="font-urdu text-lg mb-4">
                "Khud ko mehsoos kijiyay Biyaluxe ke saath – apka style, apki kahani."
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-medium mb-4">Quick Links</h3>
              <ul className="space-y-2 opacity-70">
                <li>
                  <a href="#home" className="hover:text-biyaluxe-lightPurple transition-colors duration-300">Home</a>
                </li>
                <li>
                  <a href="#about" className="hover:text-biyaluxe-lightPurple transition-colors duration-300">About</a>
                </li>
                <li>
                  <a href="#products" className="hover:text-biyaluxe-lightPurple transition-colors duration-300">Products</a>
                </li>
                <li>
                  <a href="#features" className="hover:text-biyaluxe-lightPurple transition-colors duration-300">Why Us</a>
                </li>
                <li>
                  <a href="#testimonials" className="hover:text-biyaluxe-lightPurple transition-colors duration-300">Testimonials</a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-biyaluxe-lightPurple transition-colors duration-300">Contact</a>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-medium mb-4">Stay Connected</h3>
              <p className="opacity-70 mb-4">
                Follow us on social media for latest updates, behind-the-scenes content, and special offers.
              </p>
              <div className="flex gap-4">
                <a 
                  href="https://www.instagram.com/biyaluxe/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors duration-300"
                >
                  <Instagram size={20} />
                </a>
                <a 
                  href="#" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors duration-300"
                >
                  <Facebook size={20} />
                </a>
                <a 
                  href="#" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors duration-300"
                >
                  <Twitter size={20} />
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/10 mt-12 pt-8 text-center">
            <p className="opacity-60">
              © {new Date().getFullYear()} Biyaluxe. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
