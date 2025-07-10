'use client'

import BaseCardFlip from "@/components/aplication/baseFlipCard";
import { getOrdinalNumberWithText } from "./sortOrdinalNumber";

export default function OrdinalNumbersCardGame() {
  return ( 
    <div className=" flex w-96 h-full">
      <BaseCardFlip contentFunction={getOrdinalNumberWithText} backTextClass="text-2xl"/>
    </div>
  )
}