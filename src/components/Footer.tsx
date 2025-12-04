import { Link } from "react-router-dom";
import { Phone, Mail, Instagram, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border/50 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Logo & Description */}
          <div>
            <span className="font-display text-2xl font-bold text-gradient">
              SHADOW TRADERS
            </span>
            <p className="mt-4 text-muted-foreground font-body">
              Master the art of trading with our comprehensive course covering
              Indian, Forex & Crypto markets.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold text-foreground mb-4">
              Quick Links
            </h4>
            <div className="flex flex-col gap-2">
              <Link
                to="/"
                className="text-muted-foreground hover:text-primary transition-colors font-body"
              >
                Home
              </Link>
              <Link
                to="/syllabus"
                className="text-muted-foreground hover:text-primary transition-colors font-body"
              >
                Course Syllabus
              </Link>
              <Link
                to="/register"
                className="text-muted-foreground hover:text-primary transition-colors font-body"
              >
                Register Now
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg font-semibold text-foreground mb-4">
              Contact Us
            </h4>
            <div className="flex flex-col gap-3">
              <a
                href="tel:+919080901370"
                className="flex items-center gap-2 text-muted-foreground hover:text-secondary transition-colors font-body"
              >
                <Phone size={18} className="text-secondary" />
                +91 90809 01370
              </a>
              <a
                href="mailto:online.shadowtraders@gmail.com"
                className="flex items-center gap-2 text-muted-foreground hover:text-secondary transition-colors font-body"
              >
                <Mail size={18} className="text-secondary" />
                online.shadowtraders@gmail.com
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4 mt-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Twitter size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Youtube size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border/50 mt-8 pt-8 text-center">
          <p className="text-muted-foreground font-body text-sm">
            © 2025 Shadow Traders. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
