import OrdinalNumbersRules from "@/components/aplication/ordinalNumberRules";
import OrdinalNumbersCardGame from "@/components/games/ordinalNumbersCardGame";
import { Card } from "@/components/ui/card";
import { ordinalNumbersEleventhPart, ordinalNumbersFifthPart, ordinalNumbersFirstPart, ordinalNumbersFourthPart, ordinalNumbersNinthPart, ordinalNumbersSecondPart, ordinalNumbersSeventhPart, ordinalNumbersSixthPart, ordinalNumbersTenthPart, ordinalNumbersThirdPart, ordinalNumbersTwelfthPart} from "@/lib/lessonsData/ordinalNumbers";

export default function OrdinalNumbers() {
  return(
    <section className="flex flex-col md:flex-row w-full md:flex-1 bg-foreground p-4 gap-4 h-fit md:overflow-hidden overflow-y-scroll">
      <Card className="w-full md:w-fit md:max-w-2/5 h-[40vh] md:h-full flex flex-col gap-3 p-2 overflow-y-auto ">

        <OrdinalNumbersRules ordinalNumbersPart={ordinalNumbersFirstPart}>
          <div className="bg-primary size-full flex flex-col justify-around p-2 rounded-sm  shadow-sm shadow-black  self-end">
            <p className="">
              • First second e third não obedecem a regra do restante dos números ordinais, por isso são escritos de forma diferente.
            </p>
            <p>
              • Seu sufixos são respectivamente <span className="font-semibold">-st</span>, <span className="font-semibold">-nd</span> e <span className="font-semibold">-rd</span>.
            </p>
          </div>
          
        </OrdinalNumbersRules>

        <OrdinalNumbersRules ordinalNumbersPart={ordinalNumbersSecondPart}/>

        <OrdinalNumbersRules ordinalNumbersPart={ordinalNumbersThirdPart}>
          <p className="bg-primary p-2 size-full rounded-sm shadow-sm shadow-black">
            • Se o número termina em <u>ve</u> retire e adicione <u>f</u> <u>th</u>
          </p>
        </OrdinalNumbersRules>

        <OrdinalNumbersRules ordinalNumbersPart={ordinalNumbersFourthPart}/>

        <OrdinalNumbersRules ordinalNumbersPart={ordinalNumbersFifthPart}>
          <p className="bg-primary p-2 size-full rounded-sm shadow-sm shadow-black self-end">
            • Eight já termina em <u>t</u> então é só adicionar o <u>h</u>
          </p>
        </OrdinalNumbersRules>

        <OrdinalNumbersRules ordinalNumbersPart={ordinalNumbersSixthPart}>
          <p className="bg-primary p-2 size-full rounded-sm shadow-sm shadow-black">
            • Se o número termina em <u>e</u> retire e adicione <u>th</u>
          </p>
        </OrdinalNumbersRules>

        <OrdinalNumbersRules ordinalNumbersPart={ordinalNumbersSeventhPart}>
          <p className="bg-primary p-2 size-full rounded-sm shadow-sm shadow-black">
            • Se o número não se encaixa em outra regra, adicione <u>th</u> ao final do número.
          </p>
        </OrdinalNumbersRules>

        <OrdinalNumbersRules ordinalNumbersPart={ordinalNumbersNinthPart}/>

        <OrdinalNumbersRules ordinalNumbersPart={ordinalNumbersTenthPart}>
          <p className="bg-primary p-2 size-full rounded-sm shadow-sm shadow-black">
            • Dezenas a partir do 20 terminam em <u>Y</u> retire e adicione <u>ie</u> <u>th</u>
          </p>
        </OrdinalNumbersRules>

        <OrdinalNumbersRules ordinalNumbersPart={ordinalNumbersEleventhPart}>
          <p className="bg-primary p-2 rounded-sm shadow-sm shadow-black size-full">
            • A forma ordinal é aplicada apenas ao último dígito do número. Ou seja, escreve-se o número por extenso normalmente, e apenas a unidade é transformada em ordinal.
          </p>
        </OrdinalNumbersRules>

        <OrdinalNumbersRules ordinalNumbersPart={ordinalNumbersTwelfthPart}/>
      </Card>

      <div className="md:flex-1 flex flex-col gap-4 bg-none">
        <Card className="flex-1 p-2">
          <iframe
            width="560"
            height="315"
            className="w-full h-[56vw] md:h-full"
            src="https://www.youtube.com/embed/RJ1Xny83Yio?si=00qbFttG3yT-ISfs"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </Card>

        <Card className="md:flex-1 flex items-center h-[30vh]">
          <OrdinalNumbersCardGame />
        </Card>
      </div>
    </section>
  )
}