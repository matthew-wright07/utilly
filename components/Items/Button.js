export default function Button({href,text}){
    return (
        <a className="flex justify-center items-center px-4 py-2 bg-primary rounded-lg text-white hover:scale-105 transition duration-500" href={href}>{text}</a>
    )
}