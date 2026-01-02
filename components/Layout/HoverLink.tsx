type HoverLinkProps = {
  href: string;
  text: string;
};

export default function HoverLink({ href, text }: HoverLinkProps) {
  return (
    <a
      href={href}
      className="hover:text-primary transition duration-500"
    >
      {text}
    </a>
  );
}
