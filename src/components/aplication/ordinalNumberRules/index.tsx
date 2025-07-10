'use client'
import { iOrdinalNumbers } from "@/lib/lessonsData/ordinalNumbers";

type OrdinalNumbersRulesProps = {
  ordinalNumbersPart: iOrdinalNumbers[];
  children?: React.ReactNode;
}

export default function OrdinalNumbersRules({ordinalNumbersPart, children}: OrdinalNumbersRulesProps) {
  return(
    <div className="flex flex-col md:flex-row items-start md:items-center md:justify-between w-full gap-2 ">
      <div className="flex flex-col gap-2 min-w-fit text-left">
        {ordinalNumbersPart.map((part, index) => (
          <div key={index} className="flex gap-2 text-xl text-left">
          <span className="font-bold">{part.number}{part.termination}</span>
          <span className="">
            {' - '}
            {part.full}
            {part.grammaticalAdequacy && 
              <span className="text-text-emphasis-2 font-bold">{part.grammaticalAdequacy}</span>
            }
            {part.termination}
          </span>
        </div>
        ))}
      </div>

      <div className="h-full w-full flex">
        {children}
      </div>
    </div>
  )
}