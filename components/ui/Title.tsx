type Props = {
    children: React.ReactNode;
  };
  
  export default function Title({
    children,
  }: Props) {
    return (
      <h2 className="text-5xl font-bold mb-12">
        {children}
      </h2>
    );
  }