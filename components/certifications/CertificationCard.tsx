import Card from "@/components/ui/Card";

type Props = {
  title: string;
  issuer: string;
  status: string;
};

export default function CertificationCard({
  title,
  issuer,
  status,
}: Props) {
  return (
    <Card>
      <h3 className="text-xl font-bold">{title}</h3>

      <p className="text-cyan-400 mt-2">{issuer}</p>

      <span className="inline-block mt-6 px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300">
        {status}
      </span>
    </Card>
  );
}