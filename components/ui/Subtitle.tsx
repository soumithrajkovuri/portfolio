type Props = {
    children: React.ReactNode;
  };
  
  export default function Subtitle({
    children,
  }: Props) {
    return (
      <p className="text-slate-400 text-lg max-w-3xl">
        {children}
      </p>
    );
  }