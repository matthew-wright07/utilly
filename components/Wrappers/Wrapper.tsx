import type { ReactNode } from "react"

export default function Wrapper({children,} : {children: ReactNode}){
    return (
        <div className="px-8 lg:px-16 py-8">
            {children}
        </div>
    )
}