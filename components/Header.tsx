interface HeaderProps {
  title: string;
  subtitle: string;
}

export default function Header({
  title,
  subtitle,
}: HeaderProps) {
  return (
    <div className="mb-8">
      <h1 className="text-4xl font-bold">
        {title}
      </h1>

      <p className="text-zinc-500 mt-2">
        {subtitle}
      </p>
    </div>
  );
}
