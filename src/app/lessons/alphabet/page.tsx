import AlphabetCardGame from "@/components/games/alphabetCardGame";
import { Card } from "@/components/ui/card";
import { alphabetPronunciation } from "@/lib/lessonsData/alphabet";
import { appVariables } from "@/lib/project-variables";
import Image from "next/image";

export default function PageAlphabet() {
  return (
    <section className="flex flex-col md:flex-row relative flex-1 bg-foreground p-4 gap-4 overflow-y-scroll md:overflow-hidden">
      <div className="flex-3 flex flex-col gap-4 max-h-full" >
        <Card className="rounded-xs flex flex-1 h-[50vh] max-h-1/2 p-4">
          <iframe  className="w-full h-full" width={400} height={200} src="https://www.youtube.com/embed/qG5zI9KUbl0?si=eWPIs3b5EyLo6TSO" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"  allowFullScreen/>
        </Card>
        

        <div className="flex-1 flex gap-4">
          <Card className="rounded-xs h-full flex flex-2 justify-center items-center p-4 ">
            <AlphabetCardGame />
          </Card>
          <div className="hidden md:flex flex-col justify-center items-center md:flex-1 text-center ">
            <Image
              alt={`logo ${appVariables.appTitle}`} 
              src='/logo-96x96.png' 
              width={96} 
              height={96}
              className="h-14 w-14"
            />
            <p className="text-5xl text-primary font-bold line-clamp-2">{appVariables.appTitle}</p>
          </div>
        </div>
      </div>

      <Card className="flex-1 md:flex-2 flex flex-row flex-wrap items-center justify-start items gap-8 rounded-xs p-4 overflow-y-auto">
          {
            alphabetPronunciation.map((item, index) => (
              <div className="flex flex-col gap-1 flex-1 flex-wrap h-fit" key={index}>
                <span className="font-semibold text-[clamp(0.6rem,2rem,6rem)] 2xl:text-[clamp(0.6rem,4rem,6rem)]">{item.letter}</span>
                <span className="font-light text-[clamp(0.3rem,1rem,3rem)] 2xl:text-[clamp(0.3rem,2rem,6rem)]">{item.pronunciation}</span>
              </div>
            ))
          }
      </Card>
    </section>
  )
}