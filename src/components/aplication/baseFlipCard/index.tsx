'use client'

import React, { useEffect, useState } from 'react'
import './styles.css'
import { getRandomNumberAndWords, iGetRandomNumberAndWords } from '@/components/games/numbersCardGame/sortNumber'

export default function BaseCardFlip() {
  const [isFlipped, setIsFlipped] = useState(false)
  const [reset, setReset] = useState(false)
  const [cardValues, setCardValues] = useState<iGetRandomNumberAndWords>()

  const handleFlip = () => {
    setIsFlipped(!isFlipped)
  }

  useEffect(() => {
    const cardNumber = getRandomNumberAndWords()
    setCardValues(cardNumber)
  }, [reset])

  const resetAll = () => {
    if (isFlipped) {
      setIsFlipped(false)
      setTimeout(() => setReset(!reset), 500)
    } else {
      setReset(!reset)
    }
  }

  return (
    <div className="flex flex-col gap-6 items-center flex-1 w-full ">
      <div
        className="w-full h-4/5 relative "
        onClick={handleFlip}
      >
        <div className={`square-item cursor-pointer ${isFlipped ? 'flipped' : ''}`}>
          <div className="square-side front rounded-md absolute backface-hidden size-full bg-foreground flex items-center justify-center text-background text-2xl">
            <p className="text-3xl font-bold">{cardValues?.number}</p>
            <p className='text-xs font-light absolute bottom-0.5 w-full text-center'>click no card para ver como se escreve</p>
          </div>

          <div className="square-side back rounded-md  absolute backface-hidden size-full bg-primary flex w-full items-center justify-between text-center flex-col gap-2 p-3">
            <p className="text-3xl font-bold">{cardValues?.number}</p>
            <div className="relative flex flex-col gap-10 w-full overflow-y-auto">
              <p className="">{cardValues?.words}</p>
              <p className="">{cardValues?.wordsSpeak}</p>
            </div>
            <div />
          </div>
        </div>
      </div>

      <button
        className="text5 w-full bg-primary rounded-md font-semibold h-16 cursor-pointer relative active:-bottom-0.5 active:-right-0.5 shadow-md shadow-black"
        onClick={resetAll}
      >
        resetar
      </button>
    </div>
  )
}
