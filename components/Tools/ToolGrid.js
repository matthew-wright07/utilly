import Wrapper from "../Wrappers/Wrapper";
import {tools} from "../../lib/toolsList";
import ToolCard from "./ToolCard";

export default function ToolGrid(){
    return (
        <Wrapper>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {tools.map(current=>{
                    return <ToolCard title={current.title} href={`/tools/${current.slug}`}/>
                })}
            </div>
        </Wrapper>
    )
}