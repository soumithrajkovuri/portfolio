import Badge from "@/components/ui/Badge";

type Props = {
  items: string[];
};

export default function Responsibilities({
  items,
}: Props) {
  return (
    <div className="flex flex-wrap gap-3 mt-6">
      {items.map((item) => (
        <Badge
          key={item}
          text={item}
        />
      ))}
    </div>
  );
}