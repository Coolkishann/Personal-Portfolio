import {
  HeroSection,
  FeaturedProjectsSection,
  PlaygroundSection,
  AcademicSection,
  ProcessSection,
  ServicesSection,
  AboutSection,
  ContactSection,
  ProductionSection,
  Footer,
} from "@/components/sections";

export default function Home() {
  return (
    <main className="min-h-screen w-full">
      <HeroSection />
      <AboutSection />
      <FeaturedProjectsSection />
      {/* <PlaygroundSection /> */}
      {/* <AcademicSection /> */}
      <ProcessSection />
      <ServicesSection />
      <ProductionSection />

      <ContactSection />
      <Footer />
    </main>
  );
}
