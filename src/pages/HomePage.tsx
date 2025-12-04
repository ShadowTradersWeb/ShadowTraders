import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, Zap, Bot, Users, HeartHandshake } from "lucide-react";
import heroImage from "@/assets/hero-trading-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-float">
            <span className="text-gradient">SHADOW TRADERS</span>
          </h1>
          <h2 className="font-display text-xl md:text-2xl lg:text-3xl text-foreground mb-4">
            Indian, Forex & Crypto Trading Course
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 font-body">
            Learn <span className="text-primary font-semibold">Price Action</span> &{" "}
            <span className="text-secondary font-semibold">SMC</span> – Become Pro in{" "}
            <span className="text-primary font-semibold">2 Months</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link to="/register">
              <Button variant="hero" size="xl">
                JOIN NOW @ ₹15,000
              </Button>
            </Link>
            <a href="tel:+919080901370">
              <Button variant="outline" size="xl">
                <Phone size={20} />
                +91 90809 01370
              </Button>
            </a>
          </div>
        </div>
      </div>

      {/* Animated gradient border at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-primary" />
    </section>
  );
};

const PerksSection = () => {
  const perks = [
    {
      icon: Zap,
      title: "10 Entry Models",
      description: "Master professional entry strategies used by top traders",
    },
    {
      icon: Bot,
      title: "AI Trading Bot",
      description: "Access our exclusive AI-powered trading assistant",
    },
    {
      icon: HeartHandshake,
      title: "Lifetime Guidance",
      description: "Get ongoing support even after completing the course",
    },
    {
      icon: Users,
      title: "Free Community",
      description: "Join our exclusive community of successful traders",
    },
  ];

  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-4">
          <span className="text-gradient">EXCLUSIVE PERKS</span>
        </h2>
        <p className="text-muted-foreground text-center mb-12 font-body max-w-2xl mx-auto">
          Get everything you need to become a successful trader
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {perks.map((perk, index) => (
            <div
              key={index}
              className="glass-card rounded-xl p-6 text-center hover:shadow-[0_0_30px_hsl(276_87%_53%/0.3)] transition-all duration-300 group"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center group-hover:scale-110 transition-transform">
                <perk.icon size={28} className="text-foreground" />
              </div>
              <h3 className="font-display text-lg font-semibold text-primary mb-2">
                {perk.title}
              </h3>
              <p className="text-muted-foreground font-body text-sm">
                {perk.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CourseCoverSection = () => {
  const topics = [
    "Price Action Concepts",
    "SMC (Smart Money Concepts)",
    "Indian, Forex & Crypto Trading",
    "Beginner to Pro in 2 Months",
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-4">
          <span className="text-gradient">ONLINE CLASSES COVER</span>
        </h2>
        <p className="text-muted-foreground text-center mb-12 font-body max-w-2xl mx-auto">
          Comprehensive curriculum designed for rapid skill development
        </p>

        <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-4">
          {topics.map((topic, index) => (
            <div
              key={index}
              className="flex items-center gap-4 p-4 rounded-lg border border-border/50 bg-card/50 hover:border-primary/50 transition-colors"
            >
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                <span className="font-display text-primary font-bold">
                  {index + 1}
                </span>
              </div>
              <span className="font-body text-foreground">{topic}</span>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/syllabus">
            <Button variant="secondary" size="lg">
              View Full Syllabus
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

const CTASection = () => {
  return (
    <section className="py-20 bg-card relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/2 left-1/4 w-64 h-64 rounded-full bg-primary blur-[100px]" />
        <div className="absolute top-1/2 right-1/4 w-64 h-64 rounded-full bg-secondary blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Ready to Start Your Trading Journey?
          </h2>
          <p className="text-muted-foreground mb-8 font-body">
            Join thousands of successful traders who have transformed their
            financial future with Shadow Traders.
          </p>
          <Link to="/register">
            <Button variant="cta" size="xl">
              ENROLL NOW @ ₹15,000
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

const HomePage = () => {
  return (
    <main>
      <HeroSection />
      <PerksSection />
      <CourseCoverSection />
      <CTASection />
    </main>
  );
};

export default HomePage;
