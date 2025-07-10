export interface iOrdinalNumbers {
  number: string,
  full: string,
  termination: "st" | "nd" | "rd" | "th"
  grammaticalAdequacy?: string 
}

export const ordinalNumbersFirstPart: iOrdinalNumbers[] = [
  {
    number: "1",
    full: "fir",
    termination: "st",
  },
  {
    number: "2",
    full:"seco",
    termination: "nd",
  },
  {
    number: "3",
    full: "thi",
    termination: "rd",
  },
]

export const ordinalNumbersSecondPart: iOrdinalNumbers[] = [
  {
    number: "4",
    full: "four",
    termination: "th",
  },
]

export const ordinalNumbersThirdPart: iOrdinalNumbers[] = [
  {
    number: "5",
    full: "fi",
    termination: "th",
    grammaticalAdequacy: "f"
  },
]

export const ordinalNumbersFourthPart: iOrdinalNumbers[] = [
  {
    number: "6",
    full: "six",
    termination: "th",
  },
  {
    number: "7",
    full: "seven",
    termination: "th",
  },

]
export const ordinalNumbersFifthPart: iOrdinalNumbers[] = [
    {
    number: "8",
    full: "eigh",
    termination: "th",
  },

]

export const ordinalNumbersSixthPart: iOrdinalNumbers[] = [
  {
    number: "9",
    full: "nin",
    termination: "th",
  },
]

export const ordinalNumbersSeventhPart: iOrdinalNumbers[] = [
  {
    number: "10",
    full: "ten",
    termination: "th",
  },
  {
    number: "11",
    full: "eleven",
    termination: "th",
  },
  
]


export const ordinalNumbersNinthPart: iOrdinalNumbers[] = [
    {
    number: "12",
    full: "twel",
    termination: "th",
    grammaticalAdequacy: "f"
  },
  {
    number: "13",
    full: "thirteen",
    termination: "th",
  },
  {
    number: "19",
    full: "nineteen",
    termination: "th",
  },
]

export const ordinalNumbersTenthPart: iOrdinalNumbers[] = [
  {
    number: "20",
    full: "twent",
    termination: "th",
    grammaticalAdequacy: "ie"
  }
]

export const ordinalNumbersEleventhPart: iOrdinalNumbers[] = [
  {
    number: "21",
    full: "twenty-fir",
    termination: "st",
  },
  {
    number: "32",
    full: "thirty-seco",
    termination: "nd",
  },
  {
    number:"43",
    full: "forty-thi",
    termination: "rd",
  },
  {
    number: "55",
    full: "fifty-fi",
    termination: "th",
    grammaticalAdequacy: "f"
  },
]

export const ordinalNumbersTwelfthPart: iOrdinalNumbers[] = [
  {
    number: "100",
    full: "hundred",
    termination: "th",
  },
  {
    number: "1000",
    full: "thousan",
    termination: "th",
  },
  {
    number:"2001",
    full: "two thousand and fir",
    termination: "st",
  },
  {
    number: "9999",
    full: "nine thousand nine hundred ninety-nine",
    termination: "th",
  }

]
