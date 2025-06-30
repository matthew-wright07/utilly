export default function HoverLink({href,text}){
    return (
        <a href={href} className="hover:text-primary transition duration-500">{text}</a>
    )
}