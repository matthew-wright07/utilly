import ToolComponet from "@/components/Tools/ToolComponet";
import { tools } from "../../../lib/toolsList";

export async function generateMetadata({ params: paramsPromise }) {
    const params = await paramsPromise;
    const slug = params.slug;
    
    const tool = tools.find(t => t.slug === slug);
    if (!tool) return {};

    return {
        title: `${tool.title} | Utilly`,
        description: tool.description,
    };
}

export default function Tools(){
    return (
        <ToolComponet/>
    )
}