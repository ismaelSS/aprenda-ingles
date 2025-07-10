import { iBaseCardContent } from "@/components/aplication/baseFlipCard";

export function getOrdinalNumberWithText(): iBaseCardContent {
  const ordinalWordsMap: Record<number, string> = {
    1: 'first',
    2: 'second',
    3: 'third',
    4: 'fourth',
    5: 'fifth',
    6: 'sixth',
    7: 'seventh',
    8: 'eighth',
    9: 'ninth',
    10: 'tenth',
    11: 'eleventh',
    12: 'twelfth',
    13: 'thirteenth',
    14: 'fourteenth',
    15: 'fifteenth',
    16: 'sixteenth',
    17: 'seventeenth',
    18: 'eighteenth',
    19: 'nineteenth',
    20: 'twentieth',
    30: 'thirtieth',
    40: 'fortieth',
    50: 'fiftieth',
    60: 'sixtieth',
    70: 'seventieth',
    80: 'eightieth',
    90: 'ninetieth',
    100: 'one hundredth',
  };

  const cardinalTens: string[] = [
    '', '', 'twenty', 'thirty', 'forty', 'fifty',
    'sixty', 'seventy', 'eighty', 'ninety'
  ];

  const specialTens: number[] = [10, 20, 30, 40, 50, 60, 70, 80, 90];

  // 20% de chance de escolher um número especial
  const shouldChooseSpecial: boolean = Math.random() < 0.2;

  const randomNumber: number = shouldChooseSpecial
    ? specialTens[Math.floor(Math.random() * specialTens.length)]
    : Math.floor(Math.random() * 100) + 1;

  function getOrdinalSuffix(num: number): string {
    if (num % 100 >= 11 && num % 100 <= 13) return `${num}th`;
    switch (num % 10) {
      case 1: return `${num}st`;
      case 2: return `${num}nd`;
      case 3: return `${num}rd`;
      default: return `${num}th`;
    }
  }

  function getOrdinalWord(num: number): string {
    if (ordinalWordsMap[num]) {
      return ordinalWordsMap[num];
    }

    const tens = Math.floor(num / 10) * 10;
    const units = num % 10;

    const tensText = cardinalTens[Math.floor(num / 10)];
    const unitOrdinal = ordinalWordsMap[units];

    if (units === 0 && ordinalWordsMap[tens]) {
      return ordinalWordsMap[tens];
    }

    return `${tensText}-${unitOrdinal}`;
  }

  const ordinalSuffix: string = getOrdinalSuffix(randomNumber);
  const ordinalText: string = getOrdinalWord(randomNumber);

  return {
    front: {
      text: ordinalSuffix
    },
    back: {
      title: ordinalSuffix,
      text: ordinalText
    }
  };
}
