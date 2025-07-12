'use client'

import WordsTrainingCardGame from "@/components/games/wordsTrainingCardGame";
import { Card } from "@/components/ui/card";

export default function WordsTraining() {
  return(
    <section className="flex justify-center items-center flex-col flex-1 bg-foreground p-4 overflow-hidden">
      <Card className="flex-1 md:max-w-96 p-4">
        <WordsTrainingCardGame />
      </Card>
    </section>
  )
}