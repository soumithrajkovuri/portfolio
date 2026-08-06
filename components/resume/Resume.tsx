import Button from "@/components/ui/Button";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";

export default function Resume() {
  return (
    <Section>
      <Container>

        <div className="bg-cyan-600 rounded-3xl p-12 text-center">

          <h2 className="text-4xl font-bold text-white">
            Interested in my work?
          </h2>

          <p className="mt-4 text-white/90">
            Download my latest resume.
          </p>

          <div className="mt-8">
            <Button href="/resume.pdf">
              Download Resume
            </Button>
          </div>

        </div>

      </Container>
    </Section>
  );
}