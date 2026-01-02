"use client";

import { useState } from "react";
import type { ChangeEvent } from "react";
import { usePathname } from "next/navigation";

import Wrapper from "../Wrappers/Wrapper";
import { tools } from "../../lib/toolsList";
import ToolGrid from "./ToolGrid";

export default function Tool() {
  const pathname = usePathname();
  const slug = pathname.split("/").pop();

  const tool = tools.find(t => t.slug === slug);

  if (!tool) {
    return (
      <Wrapper>
        <p>Tool not found</p>
      </Wrapper>
    );
  }

  const { title, description, calculate, items } = tool;

  const [value, setValue] = useState("");
  const [result, setResult] = useState("");

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const newValue = event.target.value;
    setValue(newValue);
    setResult(calculate(newValue));
  }

  function handleCalculate() {
    setResult(calculate(value));
  }

  return (
    <>
      <Wrapper>
        <div className="flex flex-col gap-2 text-center">
          <h1>{title}</h1>

          <div className="flex flex-col items-center gap-2 w-full border border-secondary rounded-lg py-16">
            <div className="flex flex-col md:flex-row w-full md:w-1/2 gap-2 text-secondary items-center">
              <div className="flex flex-col gap-2 w-1/2">
                <h2>{items[0]}</h2>
                <input
                  className="rounded-lg border border-secondary p-4 text-center"
                  onChange={handleChange}
                  value={value}
                />
              </div>

              <div className="flex flex-col gap-2 w-1/2">
                <h2>{items[1]}</h2>
                <input
                  readOnly
                  className="rounded-lg border border-secondary p-4 text-center"
                  value={result}
                />
              </div>
            </div>

            <button
              className="w-1/2 bg-primary rounded-lg p-4 text-background hover:cursor-pointer hover:scale-105 transition duration-500"
              onClick={handleCalculate}
            >
              Convert
            </button>
          </div>

          <p>{description}</p>
        </div>
      </Wrapper>

      <ToolGrid />
    </>
  );
}
