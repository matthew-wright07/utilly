import Button from "../Items/Button";
import Wrapper from "../Wrappers/Wrapper";
import OutlineButton from "../Items/OutlineButton";
import HoverLink from "./HoverLink";
import Image from "next/image";

export default function Header() {
  return (
    <Wrapper>
      <header className="flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-0">
        <a href="/" className="flex gap-2 items-center">
          <Image
            src="/logo.svg"
            alt="Utilly logo"
            width={500}
            height={500}
            priority
            className="w-8"
          />
          <h2>Utilly</h2>
        </a>

        <div className="flex gap-4">
          <HoverLink href="/" text="Home" />
          <HoverLink href="/tools" text="Tools" />
          <HoverLink href="/about" text="About" />
          <HoverLink href="/contact" text="Contact" />
        </div>

        <div className="flex gap-2">
          <OutlineButton text="Explore" href="/about" />
          <Button text="Start" href="/tools" />
        </div>
      </header>
    </Wrapper>
  );
}
