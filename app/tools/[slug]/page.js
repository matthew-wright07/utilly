"use client"

import Tool from "@/components/Tools/ToolComponet";
import { tools } from "../../../lib/toolsList";
import { usePathname } from 'next/navigation';
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";

export default function Tools({}){
    const pathName = usePathname()
    const slug = pathName.split("/").pop();
    const tool = tools.find(t => t.slug === slug);
    return (
        <Tool title={tool.title} description={tool.description} calculate={tool.calculate} items={tool.items}/>
    )
}