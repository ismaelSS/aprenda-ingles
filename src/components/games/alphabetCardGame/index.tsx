'use client'

import BaseCardFlip, { iBaseCardContent } from "@/components/aplication/baseFlipCard";
import { useState } from "react";
import { AlphabetLetter, alphabetPronunciation } from "@/lib/lessonsData/alphabet";

export default function AlphabetCardGame() {
  const [remainingLetters, setRemainingLetters] = useState<AlphabetLetter[]>(alphabetPronunciation);
  const [sortedLetters, setSortedLetters] = useState<AlphabetLetter[]>(() => populeSortedNumbers());

  function populeSortedNumbers():AlphabetLetter[] {
    const remainingLettersToAdd:AlphabetLetter[] = [...remainingLetters];
    const sortedLettersToAdd:AlphabetLetter[] = []

    const addLetterToAdd = () => {
      const indexToAdd = Math.floor(Math.random() * remainingLettersToAdd.length)
      sortedLettersToAdd.push(...remainingLettersToAdd.splice(indexToAdd, 1))
    }

    addLetterToAdd()
    addLetterToAdd()
    addLetterToAdd()

    setRemainingLetters(remainingLettersToAdd);

    return sortedLettersToAdd;
  }

  function sortLetters ():void {
    const remainingLettersToAdd:AlphabetLetter[] = [...remainingLetters];
    const sortedLettersToAdd:AlphabetLetter[] = []

    const addLetterToAdd = () => {
      const indexToAdd = Math.floor(Math.random() * remainingLettersToAdd.length)
      sortedLettersToAdd.push(...remainingLettersToAdd.splice(indexToAdd, 1))
    }

    if(remainingLettersToAdd?.length > 3){
      addLetterToAdd()
      addLetterToAdd()
      addLetterToAdd()

      setSortedLetters(sortedLettersToAdd);
      setRemainingLetters(remainingLettersToAdd);
    }else if(remainingLetters?.length > 0){
      setSortedLetters(remainingLettersToAdd);
      setRemainingLetters(alphabetPronunciation)
    }
  }

  function createAlphabetCardPicker():iBaseCardContent {
    sortLetters()
    console.log('sortedLetters', sortedLetters);
    console.log('restLetters', remainingLetters);
    
    const letersToText = sortedLetters?.map(item => item.letter).join('  ');
    const pronunciationToText = sortedLetters?.map(item => item.pronunciation).join(' . ');

    return {
      front: {
        text: letersToText!
      },
      back: {
        title: letersToText!,
        text: pronunciationToText!
      }
    }
  }

  return (
    <BaseCardFlip
      contentFunction={createAlphabetCardPicker}
      footerText="click no card para ver como falar"
      backTextClass="text-3xl text-center tracking-wider"
      frontTextClass="tracking-widest"
    />
  )
}