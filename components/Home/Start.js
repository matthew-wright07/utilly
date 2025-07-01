import Button from "../Items/Button";
import OutlineButton from "../Items/OutlineButton";
import Wrapper from "../Wrappers/Wrapper";

export default function Start(){
    return (
        <Wrapper>
            <div className="flex flex-col items-center justify-center border border-secondary py-8 gap-4 rounded-lg">
                <h2>Lets Get Started</h2>
                <div className="flex gap-2">
                    <OutlineButton text="Explore" href="/about"/>
                    <Button text="Start" href="/tools"/>
                </div>
            </div>
        </Wrapper>
    )
}