import BaseCardFlip from "@/components/aplication/baseFlipCard";
import { getRandomNumberAndWords } from "./sortNumber";

export default function NumbersCardGame() {
  return (
    <BaseCardFlip contentFunction={getRandomNumberAndWords}/>
  )
}