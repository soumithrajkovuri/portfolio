import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function GlassCard({
  children,
}: Props) {
  return (
    <div className="rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 p-8">
      {children}
    </div>
  );
}