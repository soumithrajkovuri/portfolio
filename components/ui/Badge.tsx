type Props = {
    text: string;
  };
  
  export default function Badge({
    text,
  }: Props) {
    return (
        <span

        className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-300 transition hover:border-cyan-400 hover:bg-cyan-500/20"
        
        >
        {text}
      </span>
    );
  }