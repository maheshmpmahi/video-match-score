import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Play, BarChart3, Target } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="AI-powered video analysis" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/80 to-primary/20"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <div className="mb-8 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
          <Target className="w-4 h-4 text-accent" />
          <span className="text-sm font-medium text-muted-foreground">
            AI-Powered Content Analysis
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent">
          YouTube Content
          <br />
          <span className="text-accent">Accuracy Engine</span>
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
          Go beyond basic recommendations. Our ML engine compares videos on the same topic, 
          analyzes accuracy scores, and recommends the most reliable content.
        </p>

        {/* Search Bar */}
        <div className="mb-12 max-w-2xl mx-auto">
          <div className="relative flex gap-3">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <Input 
                placeholder="Enter a topic to find the most accurate videos..."
                className="pl-12 h-14 text-lg bg-card/50 backdrop-blur-sm border-border/50"
              />
            </div>
            <Button variant="hero" size="lg" className="h-14 px-8">
              <Play className="w-5 h-5 mr-2" />
              Analyze
            </Button>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="p-6 rounded-xl bg-card/30 backdrop-blur-sm border border-border/50 hover:bg-card/50 transition-all">
            <BarChart3 className="w-8 h-8 text-primary mb-4 mx-auto" />
            <h3 className="text-lg font-semibold mb-2">Accuracy Scoring</h3>
            <p className="text-muted-foreground text-sm">
              Advanced ML algorithms analyze content quality and factual accuracy
            </p>
          </div>
          
          <div className="p-6 rounded-xl bg-card/30 backdrop-blur-sm border border-border/50 hover:bg-card/50 transition-all">
            <Target className="w-8 h-8 text-accent mb-4 mx-auto" />
            <h3 className="text-lg font-semibold mb-2">Smart Comparison</h3>
            <p className="text-muted-foreground text-sm">
              Compare multiple videos on the same topic side-by-side
            </p>
          </div>
          
          <div className="p-6 rounded-xl bg-card/30 backdrop-blur-sm border border-border/50 hover:bg-card/50 transition-all">
            <Play className="w-8 h-8 text-info mb-4 mx-auto" />
            <h3 className="text-lg font-semibold mb-2">Best Recommendations</h3>
            <p className="text-muted-foreground text-sm">
              Get the highest-rated video based on accuracy metrics
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;