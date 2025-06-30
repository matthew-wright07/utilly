"use client"

import { useState } from "react";
import Wrapper from "../Wrappers/Wrapper";

export default function Tool({title, description, calculate,items}){
    const [value, setValue] = useState("");
    const [result, setResult] = useState("");

    function handleChange(event){
        const newValue = event.target.value;
        setValue(newValue);
        const output = calculate(newValue)
        setResult(output)
    }

    function handleCalculate(){
        const output = calculate(value)
        setResult(output)
    }

    return (
        <Wrapper>
            <div className="flex flex-col gap-2 text-center">
                <h1>{title}</h1>
                <div className="flex flex-col items-center gap-2 w-full border border-secondary rounded-lg py-16">
                    <div className="flex flex-col md:flex-row w-full md:w-1/2 gap-2 text-secondary items-center">
                        <div className="flex flex-col gap-2 w-1/2">
                            <h2>{items[0]}</h2>
                            <input className="rounded-lg border border-secondary p-4 text-center" onChange={handleChange} value={value}/>
                        </div>
                        <div className="flex flex-col gap-2 w-1/2">
                            <h2>{items[1]}</h2>
                            <input className="rounded-lg border border-secondary p-4 text-center" value={result}/>
                        </div>
                    </div>
                    <button className="w-1/2 bg-primary rounded-lg p-4 text-background hover:cursor-pointer hover:scale-105 transition duration-500" onClick={handleCalculate}>Convert</button> 
                </div>
                <p>{description}</p>
            </div>
        </Wrapper>
    )
}