type Props = {
    items: string[];
  };
  
  export default function AchievementList({
    items,
  }: Props) {
    return (
      <ul className="space-y-3 mt-6">
        {items.map((item) => (
          <li
            key={item}
            className="flex items-start gap-3"
          >
            <span className="text-green-400 font-bold">
              ✓
            </span>
  
            <span>{item}</span>
          </li>
        ))}
      </ul>
    );
  }