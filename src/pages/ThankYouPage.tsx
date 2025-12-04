import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle, Phone, ArrowLeft } from "lucide-react";

const ThankYouPage = () => {
  return (
    <main className="pt-20 min-h-screen flex items-center">
      <section className="py-20 w-full relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary blur-[150px]" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-secondary blur-[150px]" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-24 h-24 mx-auto mb-8 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center animate-float">
              <CheckCircle size={48} className="text-foreground" />
            </div>

            <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">
              <span className="text-gradient">THANK YOU!</span>
            </h1>

            <p className="text-xl text-foreground mb-4 font-body">
              Your registration has been received successfully.
            </p>

            <div className="glass-card rounded-2xl p-8 mb-8 text-left">
              <h2 className="font-display text-xl font-semibold text-primary mb-4 text-center">
                Registration Details
              </h2>

              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-border/30">
                  <span className="text-muted-foreground font-body">
                    Course
                  </span>
                  <span className="text-foreground font-semibold">
                    Shadow Traders - Trading Mastery
                  </span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-border/30">
                  <span className="text-muted-foreground font-body">
                    Duration
                  </span>
                  <span className="text-foreground font-semibold">
                    2 Months
                  </span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-border/30">
                  <span className="text-muted-foreground font-body">Price</span>
                  <span className="text-primary font-display font-bold text-xl">
                    ₹15,000
                  </span>
                </div>
              </div>

              <div className="mt-6 p-4 rounded-lg bg-secondary/10 border border-secondary/20">
                <p className="text-center text-foreground font-body">
                  We will verify your application and contact you within{" "}
                  <span className="text-secondary font-semibold">
                    24 hours
                  </span>{" "}
                  to start your trading journey.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/">
                <Button variant="outline" size="lg">
                  <ArrowLeft size={18} />
                  Back to Home
                </Button>
              </Link>
              <a href="tel:+919080901370">
                <Button variant="secondary" size="lg">
                  <Phone size={18} />
                  +91 90809 01370
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ThankYouPage;
