import Button from "../Items/Button";
import Wrapper from "../Wrappers/Wrapper";
import OutlineButton from "../Items/OutlineButton";
import HoverLink from "./HoverLink";

export default function Header(){
    return (
        <Wrapper>
            <div className="flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-0">
                <a href="/" className="flex gap-2 items-center">
                    <img src="/logo.svg" className="w-8"/>
                    <h2>Utilly</h2>
                </a>
                <div className="flex gap-4">
                    <HoverLink href="/" text="Home"/>
                    <HoverLink href="/tools" text="Tools"/>
                    <HoverLink href="/about" text="About"/>
                    <HoverLink href="/contact" text="Contact"/>
                </div>
                <div className="flex gap-2">
                    <OutlineButton text="Explore" href="/about"/>
                    <Button text="Start" href="/tools"/>
                </div>
            </div>
        </Wrapper>
    )
}