export default function Button({href,text}){
    return (
        <a className="flex justify-center items-center px-4 py-2 border border-secondary rounded-lg text-secondary hover:scale-105 transition duration-500" href={href}>{text}</a>
    )
}