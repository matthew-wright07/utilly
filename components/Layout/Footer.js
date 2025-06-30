import Wrapper from "../Wrappers/Wrapper";
import HoverLink from "./HoverLink";

export default function Footer(){
    return (
        <Wrapper>
            <div className="grid grid-cols-4 items-start">
                <div className="flex flex-col gap-2">
                    <a href="/" className="flex gap-2">
                        <img src="/logo.svg" className="w-8"/>
                        <h2>Utilly</h2>
                    </a>
                    <p>Phone: 512-586-4786</p>
                    <p>Email: info@utilly.io</p>
                </div>
                <div className="flex flex-col justify-self-center">
                    <h3>Pages</h3>
                    <HoverLink href="/" text="Home"/>
                    <HoverLink href="/tools" text="Tools"/>
                    <HoverLink href="/about" text="About"/>
                </div>
                <div className="flex flex-col justify-self-center">
                    <h3>Legal</h3>
                    <HoverLink href="/legal" text="Terms Of Service"/>
                    <HoverLink href="/legal" text="Privacy Policy"/>
                    <HoverLink href="/legal" text="Cookie Policy"/>
                    <HoverLink href="/legal" text="Disclaimer Policy"/>
                </div>
                <div className="flex flex-col justify-self-end">
                    <h3>Support</h3>
                    <HoverLink href="/beta" text="Sign Up"/>
                    <HoverLink href="/beta" text="Sign In"/>
                    <HoverLink href="/contact" text="Contact"/>
                </div>
            </div>
        </Wrapper>
    )
}