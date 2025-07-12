'use client'

import BaseCardFlip, { iBaseCardContent } from "@/components/aplication/baseFlipCard";;
import { wordTrainingSort } from "./sortWords";
import { useEffect, useState } from "react";
import { bodyParts, WordTraining } from "@/lib/lessonsData/wordTraining";
import { Button } from "@/components/ui/button";
import { RefreshCw } from 'lucide-react';
import { getRandomItem } from "@/utils/sortElementInArray";
import { ManageWordList } from "./manageWordList";

export default function WordsTrainingCardGame() {
  const [wordInitState, setWordInitiState] = useState<WordTraining[]>(bodyParts)
  const [wordsRemaining, setWordsRemaining] = useState<WordTraining[]>(wordInitState);
  const [sortedWord, setSortedWord] = useState<WordTraining>();
  const [isCircularActivated, setIsCircularActivated] = useState<boolean>(false);


  useEffect(() => {
    setWordsRemaining(wordInitState);
    if(isCircularActivated){
      sortWordNoRepeater()
    }else{
      setSortedWord(getRandomItem(wordsRemaining))
    }
  }, [isCircularActivated, wordInitState]);

  function sortWordNoRepeater ():void {
    const remainingWordToAdd:WordTraining[] = [...wordsRemaining];
    const sortedWordToAdd:WordTraining[] =[]

    const indexToAdd = Math.floor(Math.random() * remainingWordToAdd.length)
    sortedWordToAdd.push(...remainingWordToAdd.splice(indexToAdd, 1))

    setWordsRemaining(remainingWordToAdd);
    setSortedWord(sortedWordToAdd[0]);

    if(remainingWordToAdd.length === 0){
      setWordsRemaining(wordInitState);
    }
  }

  function wordNormalizeSort():iBaseCardContent{
    sortWordNoRepeater();
    return {
      front:{
        text: sortedWord?.word || ''
      },
      back:{
        title: sortedWord?.word || '',
        text: sortedWord?.translation || '',
        secondaryText: sortedWord?.example || ''
      }
    }
  }

  function sortWord():iBaseCardContent {
    return isCircularActivated ? wordNormalizeSort() : wordTrainingSort(wordsRemaining);
  }

  return (
    <div className="flex flex-col gap-2 flex-1">
      <div className="flex gap-2">
        <Button 
          className={`text-foreground border-2 border-primary ${!isCircularActivated && 'bg-background border-foreground'}`}
          onClick={() => setIsCircularActivated(!isCircularActivated)}
        >
          <RefreshCw/>
        </Button>
{/* 
        <Button className="size-10 bg-foreground " onClick={() => console.log(wordsRemaining)}>
          sadcvgbc
        </Button> */}
        <ManageWordList stateManipulator={setWordInitiState}/>
      </div>

      <BaseCardFlip
        contentFunction={sortWord} 
        frontTextClass="text-4xl" 
        backTitleClass="4xl"
        backTextClass="text-2xl" 
        backSecondaryTextClass="text-2xl"
        footerText="click no card para ver o significado."
      />
    </div>
  )
}