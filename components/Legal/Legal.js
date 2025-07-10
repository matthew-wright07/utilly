import Wrapper from "../Wrappers/Wrapper";

export default function Legal(){
    return (
        <Wrapper>
            <div className="flex flex-col gap-2">
                <h2>Terms Of Service</h2>
                <p>
                Welcome to our website. By accessing or using our services, you agree to comply with and be bound by our Terms Of Service. These terms outline your responsibilities and the rules governing your use of the platform to ensure a safe and respectful environment for all users.
                </p>

                <h2>Privacy Policy</h2>
                <p>
                Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your personal information when you interact with our website and services. We are committed to safeguarding your data and respecting your privacy rights.
                </p>

                <h2>Cookie Policy</h2>
                <p>
                Our website uses cookies to enhance your browsing experience, analyze site traffic, and personalize content. This Cookie Policy details what cookies we use, why we use them, and how you can manage your cookie preferences to maintain control over your data.
                </p>

                <h2>Disclaimer Policy</h2>
                <p>
                The information provided on our website is for general informational purposes only. While we strive for accuracy, we make no warranties or guarantees regarding the completeness or reliability of the content. Users are encouraged to verify any information before relying on it.
                </p>

            </div>
        </Wrapper>
    )
}