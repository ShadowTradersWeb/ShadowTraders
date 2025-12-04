import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, User } from "lucide-react";

const RegisterPage = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const scriptURL = "https://script.google.com/macros/s/AKfycbzqyyph27ppVbhCT4VfNpZxYSirAPMSPty8rG6_B1k2dKfDS3bshmg5KJXWlkIVXSpL4g/exec"; // << ADD YOUR URL HERE

    try {
      await fetch(scriptURL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      toast({
        title: "Registration Successful!",
        description:
          "Thank you for registering with Shadow Traders. We will contact you shortly.",
      });

      navigate("/thank-you");
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Try again.",
        variant: "destructive",
      });
    }

    setIsSubmitting(false);
  };

  return (
    <main className="pt-20 min-h-screen">
      {/* Header */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-primary blur-[150px]" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-secondary blur-[150px]" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center">
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
              <span className="text-gradient">REGISTER NOW</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto font-body">
              Join Shadow Traders and start your journey to becoming a
              professional trader.
            </p>
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-xl mx-auto">
            <form
              onSubmit={handleSubmit}
              className="glass-card rounded-2xl p-8 border border-primary/20 shadow-[0_0_60px_hsl(276_87%_53%/0.15)]"
            >
              {/* Full Name */}
              <div className="mb-6">
                <Label
                  htmlFor="fullName"
                  className="font-display text-sm text-foreground mb-2 flex items-center gap-2"
                >
                  <User size={16} className="text-primary" />
                  Full Name
                </Label>
                <Input
                  id="fullName"
                  name="fullName"
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={handleInputChange}
                  placeholder="Enter your full name"
                  className="bg-background border-border/50 focus:border-primary text-foreground placeholder:text-muted-foreground"
                />
              </div>

              {/* Email */}
              <div className="mb-6">
                <Label
                  htmlFor="email"
                  className="font-display text-sm text-foreground mb-2 flex items-center gap-2"
                >
                  <Mail size={16} className="text-primary" />
                  Email Address
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="your@email.com"
                  className="bg-background border-border/50 focus:border-primary text-foreground placeholder:text-muted-foreground"
                />
              </div>

              {/* Phone */}
              <div className="mb-8">
                <Label
                  htmlFor="phone"
                  className="font-display text-sm text-foreground mb-2 flex items-center gap-2"
                >
                  <Phone size={16} className="text-primary" />
                  Phone Number
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="+91 XXXXX XXXXX"
                  className="bg-background border-border/50 focus:border-primary text-foreground placeholder:text-muted-foreground"
                />
              </div>

              {/* Course Info */}
              <div className="mb-8 p-4 rounded-lg bg-primary/10 border border-primary/20">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-body text-muted-foreground">
                    Course Duration
                  </span>
                  <span className="font-display font-semibold text-foreground">
                    2 Months
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-body text-muted-foreground">
                    Course Fee
                  </span>
                  <span className="font-display font-bold text-primary text-xl">
                    ₹15,000
                  </span>
                </div>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                variant="hero"
                size="xl"
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "SUBMIT REGISTRATION"}
              </Button>

              {/* Contact Info */}
              <p className="text-center mt-6 text-muted-foreground font-body text-sm">
                Need help? Contact us at{" "}
                <a
                  href="tel:+919080901370"
                  className="text-secondary hover:underline"
                >
                  +91 90809 01370
                </a>
              </p>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};

export default RegisterPage;