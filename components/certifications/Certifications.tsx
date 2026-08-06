import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import Title from "@/components/ui/Title";

import CertificationCard from "./CertificationCard";

import { certifications } from "@/data/certifications";

export default function Certifications() {
  return (
    <Section id="certifications">
      <Container>

        <Title>Certifications</Title>

        <div className="grid md:grid-cols-2 gap-8 mt-12">
          {certifications.map((cert) => (
            <CertificationCard
              key={cert.title}
              {...cert}
            />
          ))}
        </div>

      </Container>
    </Section>
  );
}