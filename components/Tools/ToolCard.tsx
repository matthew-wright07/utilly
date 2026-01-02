type ToolCardProps = {
  title: string;
  href: string;
};

export default function ToolCard({ title, href }: ToolCardProps) {
  return (
    <a
      href={href}
      className="bg-primary text-white hover:scale-105 transition duration-500 rounded-lg p-4 flex justify-center"
    >
      <h3>{title}</h3>
    </a>
  );
}
