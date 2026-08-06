import Badge from "@/components/ui/Badge";

type Props = {
  tech: string[];
};

export default function TechStack({ tech }: Props) {
  return (
    <div className="flex flex-wrap gap-2 mt-6">
      {tech.map((item) => (
        <Badge
          key={item}
          text={item}
        />
      ))}
    </div>
  );
}