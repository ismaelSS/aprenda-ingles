'use client';
import { Button } from "@/components/ui/button";
import { bodyParts, bodyParts2, foodsList1, foodsList2, foodsList3, foodsList4, objectsList1, objectsList2, objectsList3, objectsList4, objectsList5, objectsList6, objectsList7, objectsList8, verbsList1, verbsList2, verbsList3, verbsList4, WordTraining } from "@/lib/lessonsData/wordTraining";
import { BicepsFlexed, Drill, Footprints, Croissant } from 'lucide-react';
import { Dispatch, JSX, SetStateAction, useEffect, useState } from "react";

export interface iListsofWords {
  title: string;
  list: WordTraining[];
  count?: number;
  icon: JSX.Element;
}

interface ManageWordListProps {
stateManipulator: Dispatch<SetStateAction<WordTraining[]>>
}

function toRoman(num: number): string {
  const romans: [string, number][] = [
    ["M", 1000], ["CM", 900], ["D", 500], ["CD", 400],
    ["C", 100], ["XC", 90], ["L", 50], ["XL", 40],
    ["X", 10], ["IX", 9], ["V", 5], ["IV", 4], ["I", 1]
  ];
  let result = "";
  for (const [roman, value] of romans) {
    while (num >= value) {
      result += roman;
      num -= value;
    }
  }
  return result;
}

export function ManageWordList({stateManipulator}: ManageWordListProps) {
  const [selectedLists, setSelectedLists] = useState<string[]>(['partes do corpo']);

  useEffect(() => {
    const listsToAdd: WordTraining[] = [];
    selectedLists.forEach((listTitle) => {
      const list = lists.find(item => item.title === listTitle);
      if (list) {
        listsToAdd.push(...list.list);
      }
    });
    stateManipulator(listsToAdd);
    console.log("SlistsToAdd:", listsToAdd);
    
  }, [selectedLists]);

  const lists: iListsofWords[] = [
    {
      title: "partes do corpo",
      list: bodyParts,
      icon: <BicepsFlexed />
    },
    {
      title: "partes do corpo 2",
      list: bodyParts2,
      count: 2,
      icon: <BicepsFlexed />
    },
    {
      title: "verbos",
      list: verbsList1,
      icon: <Footprints />
    },
    {
      title: "verbos 2",
      list: verbsList2,
      count: 2,
      icon: <Footprints />
    },
    {
      title: "verbos 3",
      list: verbsList3,
      count: 3,
      icon: <Footprints />
    },
    {
      title: "verbos 4",
      list: verbsList4,
      count: 4,
      icon: <Footprints />
    },
    {
      title: "objetos",
      list: objectsList1,
      icon: <Drill/>
    },
    {
      title: "objetos 2",
      list: objectsList2,
      icon: <Drill/>,
      count: 2,
    },
    {
      title: "objetos 3",
      list: objectsList3,
      icon: <Drill/>,
      count: 3,
    },
    {
      title: "objetos 4",
      list: objectsList4,
      icon: <Drill/>,
      count: 4,
    },
    {
      title: "objetos 5",
      list: objectsList5,
      icon: <Drill/>,
      count: 5,
    },
    {
      title: "objetos 6",
      list: objectsList6,
      icon: <Drill/>,
      count: 6,
    },
    {
      title: "objetos 7",
      list: objectsList7,
      icon: <Drill/>,
      count: 7,
    },
    {
      title: "objetos 8",
      list: objectsList8,
      icon: <Drill/>,
      count: 8,
    },
    {
      title: "comidas",
      list: foodsList1,
      icon: <Croissant/>,
    },
    {
      title: "comidas 2",
      list: foodsList2,
      icon: <Croissant/>,
      count: 2,
    },
    {
      title: "comidas 3",
      list: foodsList3,
      icon: <Croissant/>,
      count: 3,
    },
    {
      title: "comidas 4",
      list: foodsList4,
      icon: <Croissant/>,
      count: 4,
    },
  ];

  const manipuleSelectedList = (listTitle: string) => {
    if(selectedLists.includes(listTitle)) {
      setSelectedLists(selectedLists.filter(item => item !== listTitle));
    }else {
      setSelectedLists([...selectedLists, listTitle]);
    }
  }

  return (
  <ul className="flex gap-2 flex-wrap">
  {lists.map((list, index) => (
    <li key={index} className="relative group">
      {/* O componente de hover expande por trás do botão */}
      <p
        className={`
          absolute left-1/2 -translate-x-1/2 -top-10
          bg-primary text-white rounded px-3 py-1
          opacity-0 scale-75 pointer-events-none
          group-hover:opacity-100 group-hover:scale-100
          transition-all duration-300 z-10
        `}
        style={{ minWidth: "max-content" }}
      >
        {list.title}
      </p>
      <Button
        className={
          `text-foreground border-2 flex items-center gap-1 relative z-10 
          ${!selectedLists.includes(list.title) ? 'bg-background border-foreground' : ''}`
        }
        onClick={() => manipuleSelectedList(list.title)}
      >
        {list.icon}
        {typeof list.count === "number" && (
          <span className="ml-1 text-xs absolute bottom-0 right-1">{toRoman(list.count)}</span>
        )}
      </Button>
    </li>
  ))}
</ul>
  );
}