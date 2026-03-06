import Header from "@/components/header";
import Hero from "@/components/hero";
import ProofStrip from "@/components/proof-strip";
import VerticalsGrid from "@/components/verticals-grid";
import HowItWorks from "@/components/how-it-works";
import SocialProof from "@/components/social-proof";
import CtaSection from "@/components/cta-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <ProofStrip />
      <VerticalsGrid />
      <HowItWorks />
      <SocialProof />
      <CtaSection />
      <Footer />
    </main>
  );
}
