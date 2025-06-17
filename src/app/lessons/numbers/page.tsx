'use client'
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import clsx from "clsx";
import { useState } from "react";

export default function PageNumbers() {
  const [isLeftPanelExpanded, seIsLeftPanelExpanded] = useState(true);
  const [isTopPanelExpanded, setIsTopPanelExpanded] = useState(true);

  const toggleLeftPanel = () => {
    seIsLeftPanelExpanded(!isLeftPanelExpanded);
  };

  const toggleTopPanel = () => {
    setIsTopPanelExpanded(!isTopPanelExpanded);
  }

  const speakk = () => {
    const aa = new SpeechSynthesisUtterance('Hello world');
    const voices = window.speechSynthesis.getVoices();
    console.log([...voices]);
    aa.voice = voices[1];
    
    window.speechSynthesis.speak(aa);
  }


  return (
    <section className="flex flex-1 bg-foreground p-4 gap-4">
      {/* <Card className={clsx('rounded-xs p-4 transition-all duration-500 delay-75 ease-in-out',{'w-1/5': isLeftPanelExpanded === true}, {'w-5': isLeftPanelExpanded === false})} >
        <Button onClick={toggleLeftPanel}>

        </Button>
      </Card> */}
      <Card className={`rounded-xs p-4 transition-all duration-500 delay-75 ease-in-out ${isLeftPanelExpanded === true ? 'w-1/5': 'w-5'}`} >
        
      </Card>

      <div className="flex flex-col gap-4 flex-1">
        <Card className={`flex rounded-xs p-4 transition-all duration-500 delay-75 ease-in-out ${isTopPanelExpanded ? 'h-1/5' : 'h-5'} transition-all duration-500 delay-75 ease-in-out`}>
        </Card>

        <Card className="flex-1 p-4 rounded-xs">
          <Button onClick={toggleLeftPanel}>
            left
          </Button>
          <Button onClick={speakk}>
            Top
          </Button>
        </Card>
      </div>
    </section>
  )
}