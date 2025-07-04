// Exemplo de função geradora para uso em contentFunction
import { alphabetPronunciation } from "@/lib/lessonsData/alphabet";
import { iBaseCardContent } from "@/components/aplication/baseFlipCard/index";

// Função utilitária para embaralhar
function shuffle<T>(array: T[]): T[] {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// Função que retorna um gerador de cards, um por vez, sem repetir até acabar
export function createAlphabetCardPicker(): iBaseCardContent {
  let pool = shuffle([...alphabetPronunciation]);

  function getNextCard(): iBaseCardContent {
    if (pool.length === 0) {
      pool = shuffle([...alphabetPronunciation]);
    }
    const item = pool.shift()!;
    return {
      front: { text: item.letter },
      back: { title: item.letter, text: item.pronunciation }
    };
  };

  return getNextCard();
  
}