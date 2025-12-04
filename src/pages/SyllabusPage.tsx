import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle, TrendingUp, Brain, LineChart, ArrowLeftRight, Bitcoin } from "lucide-react";

const SyllabusPage = () => {
  const priceActionTopics = [
    "Support & Resistance",
    "Market Structure Breaks",
    "Trend Identification",
    "Candlestick Patterns",
    "Chart Patterns",
  ];

  const smcTopics = [
    "Institutional Trading",
    "Mitigation Blocks",
    "Imbalances / Fair Value Gaps (FVG)",
    "Premium vs Discount Zones",
    "Liquidity Grabs",
    "Order Blocks",
    "Entry Models (All 10 Models)",
  ];

  return (
    <main className="pt-20 min-h-screen">
      {/* Header Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-primary blur-[150px]" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-secondary blur-[150px]" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-gradient">COURSE SYLLABUS</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-body">
              Master both Price Action and Smart Money Concepts to become a
              professional trader in just 2 months.
            </p>
          </div>
        </div>
      </section>

      {/* Syllabus Content */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Price Action Section */}
            <div className="glass-card rounded-2xl p-8 hover:shadow-[0_0_40px_hsl(276_87%_53%/0.2)] transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary/50 flex items-center justify-center">
                  <TrendingUp size={24} className="text-foreground" />
                </div>
                <h2 className="font-display text-2xl font-bold text-primary">
                  PRICE ACTION CONCEPTS
                </h2>
              </div>

              <div className="space-y-4">
                {priceActionTopics.map((topic, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-3 rounded-lg bg-background/50 border border-border/30 hover:border-primary/50 transition-colors"
                  >
                    <CheckCircle
                      size={20}
                      className="text-primary flex-shrink-0"
                    />
                    <span className="font-body text-foreground">{topic}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* SMC Section */}
            <div className="glass-card rounded-2xl p-8 hover:shadow-[0_0_40px_hsl(187_100%_50%/0.2)] transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-secondary to-secondary/50 flex items-center justify-center">
                  <Brain size={24} className="text-secondary-foreground" />
                </div>
                <h2 className="font-display text-2xl font-bold text-secondary">
                  SMC (SMART MONEY CONCEPTS)
                </h2>
              </div>

              <div className="space-y-4">
                {smcTopics.map((topic, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-3 rounded-lg bg-background/50 border border-border/30 hover:border-secondary/50 transition-colors"
                  >
                    <CheckCircle
                      size={20}
                      className="text-secondary flex-shrink-0"
                    />
                    <span className="font-body text-foreground">{topic}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Details */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-3xl font-bold text-center mb-8 text-foreground">
              What You'll Master
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 rounded-xl border border-border/50 bg-card/30">
                <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-primary/20 flex items-center justify-center">
                  <LineChart size={32} className="text-primary" />
                </div>
                <h3 className="font-display text-lg font-semibold text-primary mb-2">
                  Indian Markets
                </h3>
                <p className="text-muted-foreground font-body text-sm">
                  NSE, BSE, Nifty, Bank Nifty trading strategies
                </p>
              </div>

              <div className="text-center p-6 rounded-xl border border-border/50 bg-card/30">
                <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-secondary/20 flex items-center justify-center">
                  <ArrowLeftRight size={32} className="text-secondary" />
                </div>
                <h3 className="font-display text-lg font-semibold text-secondary mb-2">
                  Forex Trading
                </h3>
                <p className="text-muted-foreground font-body text-sm">
                  Major & minor pairs, global market analysis
                </p>
              </div>

              <div className="text-center p-6 rounded-xl border border-border/50 bg-card/30">
                <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-primary/20 flex items-center justify-center">
                  <Bitcoin size={32} className="text-primary" />
                </div>
                <h3 className="font-display text-lg font-semibold text-primary mb-2">
                  Crypto Trading
                </h3>
                <p className="text-muted-foreground font-body text-sm">
                  Bitcoin, Altcoins, DeFi trading techniques
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-card relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/2 left-1/4 w-64 h-64 rounded-full bg-primary blur-[100px]" />
          <div className="absolute top-1/2 right-1/4 w-64 h-64 rounded-full bg-secondary blur-[100px]" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Start Your Trading Journey Today
            </h2>
            <p className="text-muted-foreground mb-8 font-body">
              Course Duration: <span className="text-primary">2 Months</span> |
              Price: <span className="text-secondary">₹15,000</span>
            </p>
            <Link to="/register">
              <Button variant="hero" size="xl">
                ENROLL NOW @ ₹15,000
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default SyllabusPage;
