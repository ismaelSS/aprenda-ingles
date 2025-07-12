import { iBaseCardContent } from "@/components/aplication/baseFlipCard";
import { bodyParts, WordTraining } from "@/lib/lessonsData/wordTraining";
import { getRandomItem } from "@/utils/sortElementInArray";

export function wordTrainingSort(list: WordTraining[]):iBaseCardContent{
  const data = getRandomItem(list)

  return {
    front:{
      text:data.word
    },
    back:{
      title:data.word,
      text:data.translation,
      secondaryText:data.example,
    }
  }

}