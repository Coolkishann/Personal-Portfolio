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
      <HeroSection />
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
