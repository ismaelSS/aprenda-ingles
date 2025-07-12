'use client'

import React, { useEffect, useState } from 'react'
import './styles.css'

export interface iBaseCardContent {
  front:{
    text: string
  },
  back: {
    title: string
    text:string
    secondaryText?: string
  }
}

export interface iBaseCardFlipProps {
  footerText?: string
  contentFunction: () => iBaseCardContent
  frontTextClass?: string
  footerTextClass?: string
  backTextClass?: string
  backTitleClass?: string
  backSecondaryTextClass?: string
}


export default function BaseCardFlip(
  {
    footerText="click no card para ver como se escreve",
    contentFunction,
    frontTextClass,
    footerTextClass,
    backTextClass,
    backTitleClass,
  backSecondaryTextClass
  }:iBaseCardFlipProps) {
  const [isFlipped, setIsFlipped] = useState(false)
  const [reset, setReset] = useState(false)
  const [cardValues, setCardValues] = useState<iBaseCardContent>()  

  const handleFlip = () => {
    setIsFlipped(!isFlipped)
  }

  useEffect(() => {
    const cardNumber = contentFunction()
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
        <div className={`front square-item cursor-pointer ${isFlipped ? 'flipped' : ''}`}>
          <div className="square-side front rounded-md absolute backface-hidden size-full bg-foreground flex items-center justify-center text-background text-2xl">
            <p className={`text-3xl font-bold ${frontTextClass}`}>{cardValues?.front.text}</p>
            <p className={`text-xs font-light absolute bottom-0.5 w-full text-center ${footerTextClass}`}>{footerText}</p>
          </div>

          <div className="square-side back rounded-md  absolute backface-hidden size-full bg-primary flex w-full items-center justify-between text-center flex-col gap-2 p-3">
            <p className={`text-3xl font-bold ${backTitleClass}`}>{cardValues?.back.title}</p>
            <div className="relative flex flex-col gap-10 w-full overflow-y-auto">
              <p className={backTextClass}>{cardValues?.back.text}</p>
              <p className={backSecondaryTextClass}>{cardValues?.back.secondaryText || ''}</p>
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
