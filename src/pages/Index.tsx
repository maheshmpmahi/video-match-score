import Header from "@/components/Header";
import Hero from "@/components/Hero";
import VideoComparison from "@/components/VideoComparison";
import AnalyticsSection from "@/components/AnalyticsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/20">
      <Header />
      <main>
        <Hero />
        <VideoComparison />
        <AnalyticsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
