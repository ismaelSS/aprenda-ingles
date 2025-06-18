'use client'

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { lessonNumberData } from "@/lib/lessonsData/numbers";
import clsx from "clsx";
import { useState } from "react";
import { ArrowBigUpDash, ArrowBigDownDash, ArrowBigLeftDash, ArrowBigRightDash } from 'lucide-react'
import NumbersCardGame from "@/components/games/numbersCardGame";

export default function PageNumbers() {
  const [isLeftPanelExpanded, seIsLeftPanelExpanded] = useState(true);
  const [isTopPanelExpanded, setIsTopPanelExpanded] = useState(true);

  const toggleLeftPanel = () => {
    seIsLeftPanelExpanded(!isLeftPanelExpanded);
  };

  const toggleTopPanel = () => {
    setIsTopPanelExpanded(!isTopPanelExpanded);
  }

  return (
    <section className="flex flex-col md:flex-row relative flex-1 bg-foreground p-4 gap-4 overflow-y-scroll md:overflow-hidden">
      <Card className={clsx('relative rounded-xs p-4 transition-all duration-500 delay-75 ease-in-out max-h-full',{'md:w-1/5': isLeftPanelExpanded === true}, {'md:w-5': isLeftPanelExpanded === false})} >
        <CardHeader className="max-w-80 self-center md:max-w-none flex items-center justify-between font-semibold w-full p-0">
          <span>num</span>
          <span>escrita</span>
          <span>fala</span>
        </CardHeader>
        <CardContent className="max-w-80 self-center md:max-w-none flex flex-col gap-2 w-full p-0 overflow-y-scroll">
          {lessonNumberData.map((item, index) => (
              <div className="flex justify-between items-center text-center" key={index}>
                <span className="text-lg font-semibold">{item.numeric}</span>
                <span className="text-sm  ">{item.write}</span>
                <span className="text-sm">{item.PortuguesePronunciation}</span>
              </div>
          ))}

        </CardContent>
        <button  onClick={toggleLeftPanel} className="hidden md:inline rounded-full size-9 absolute top-1/2 -translate-y-1/2 -right-5 bg-none hover:brightness-150 cursor-pointer">
          {
            isLeftPanelExpanded ? <ArrowBigLeftDash size={18}/> : <ArrowBigRightDash size={18}/>
          }
        </button>
        
        

      </Card>


      <div className="flex flex-col gap-4 flex-1">
        <Card className={`rounded-xs relative p-4 transition-all duration-500 delay-75 ease-in-out ${isTopPanelExpanded ? 'md:h-1/4' : 'md:h-5'}`}>
          <div className={`flex-1 gap-5 flex flex-row flex-wrap overflow-y-scroll `}>

            <div>
              <p>101 - One hundred <span className="text-destructive font-semibold">and</span> one</p>
              <p className="text-xs -mt-1 text-wrap">O uso do <span className="text-destructive">and</span> entre a dezena e unidade é opcional. </p>
            </div>

            <div>
              <p>100,000.00</p> 
              <p className="text-xs -mt-1 text-wrap">Em inglês usa-se vírgula no lugar do ponto.</p>
            </div>


            <div>
              <p>5,005 - five thousand, five</p> 
              <p className="text-xs -mt-1 text-wrap">{'Pode escrever numero por extenso com virgula (opcional)'}</p>
            </div>

            <div>
              <p>thirty<span className="text-destructive font-semibold">-</span>three</p> 
              <p className="text-xs -mt-1 text-wrap">Obrigatório uso de <span className="text-destructive">hífem</span> <br/> entre dezenas e unidade quando houver.</p>
            </div>
                      
          </div>

            <button onClick={toggleTopPanel} className="hidden md:inline rounded-full size-9 absolute -bottom-3 left-1/2  -translate-x-1/2">
              {
                isTopPanelExpanded ? <ArrowBigUpDash size={18}/> : <ArrowBigDownDash size={18}/>
              }
            </button>

        
        </Card>

        <div className="flex-1 flex gap-4 flex-col md:flex-row">
          <Card className="p-4 rounded-xs relative flex justify-center h-[56vw] md:h-full w-full md:w-7/12">

            <iframe allowFullScreen width="560" height="315" className="w-full h-full" src="https://www.youtube.com/embed/hgw85291t78?si=rhuM3ITh35tUQ8fh" title="SEGREDO para Aprender os NÚMEROS em INGLÊS" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share;" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

          </Card>

          <Card className="h-[60vh] md:h-full md:flex-1 p-4 rounded-xs flex justify-center items-center">

            <NumbersCardGame/>

          </Card>
            
        </div>


      </div>
    </section>
  )
}