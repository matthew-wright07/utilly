import Wrapper from "../Wrappers/Wrapper";

export default function Hero(){
    return (
        <Wrapper>
            <div className="h-64 relative flex items-center justify-center p-4">
                <video className="w-full h-full absolute top-0 left-0 rounded-lg object-cover" autoPlay muted loop playsInline>
                    <source src="/herobg.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <h1 className="relative z-10 text-background text-center">Your All In One Free Tool Kit</h1>
            </div>
        </Wrapper>
    )
}