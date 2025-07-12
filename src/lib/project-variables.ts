export const appVariables = {
  appTitle: "Aprenda inglês",
  appDescription: "Aprenda inglês de forma simples e sólida",
}

export type AppSideMenuNavigationItem = {
  name: string;
  href: string;
  isEnable: boolean;
}

export type AppSideMenuNavigationSection = {
  title?: string;
  sections: AppSideMenuNavigationItem[];
}

export const appSideMenuNavigation: Array<AppSideMenuNavigationItem | AppSideMenuNavigationSection> = [

  {
    title: "Inglês Basico (A1)",
    sections: [
      {
        name: "alfabeto",
        href: "/lessons/alphabet",
        isEnable: true,
      },
      {
        name: "números",
        href: "/lessons/numbers",
        isEnable: true,
      },
      {
        name: "números ordinais",
        href: "/lessons/ordinalNumbers",
        isEnable: true,
      },
      {
        name: "praticar palavras",
        href: "/lessons/wordsTraining",
        isEnable: true,
      },
      {
        name: "endereço e telefone",
        href: "/lessons/addressPhone",
        isEnable: false,
      },
    ]
  },
  {
    title: "Gramática",
    sections: [
      {
        name: "verb to be",
        href: "/verb-to-be",
        isEnable: false,
      },
      {
        name: "verb to have",
        href: "/verb-to-have",
        isEnable: false,
      },
      {
        name: "verb to do",
        href: "/verb-to-do",
        isEnable: false,
      },
    ]
  }
]