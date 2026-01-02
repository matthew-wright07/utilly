type ButtonProps = {
  href: string;
  text: string;
};

export default function Button({ href, text }: ButtonProps) {
  return (
    <a
      href={href}
      className="flex justify-center items-center px-4 py-2 bg-primary rounded-lg text-white hover:scale-105 transition duration-500"
    >
      {text}
    </a>
  );
}
