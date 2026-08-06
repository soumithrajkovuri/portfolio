import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";

import HeroContent from "./HeroContent";
import HeroTerminal from "./HeroTerminal";

export default function Hero() {
  return (
    <Section id="home">
      <Container>

      <div className="grid lg:grid-cols-[1fr_1.2fr] gap-16 items-start">

          <HeroContent />

          <HeroTerminal />

        </div>

      </Container>
    </Section>
  );
}