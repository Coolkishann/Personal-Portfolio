import {
  HeroSection,
  FeaturedProjectsSection,
  // PlaygroundSection,
  // AcademicSection,
  ProcessSection,
  ServicesSection,
  AboutSection,
  ContactSection,
  ProductionSection,
  Footer,
  AcademicSection,
  PlaygroundSection,
} from "@/components/sections";
import { ProcessSectionnn } from "@/components/sections/ProcessSection";

export default function Home() {
  return (
    <main className="min-h-screen w-full">
      <h1 style={{ color: "white", fontSize: "100px", position: "fixed", top: 0, left: 0, zIndex: 9999 }}>TEST VISIBILITY</h1>
      {/* <HeroSection /> */}
      <ProductionSection />
      <FeaturedProjectsSection />
      <AboutSection />
      <AcademicSection />
      <ServicesSection />
      {/* <PlaygroundSection /> */}
      {/* <ProcessSectionnn /> */}
      <ContactSection />
      <Footer />
    </main>
  );
}
