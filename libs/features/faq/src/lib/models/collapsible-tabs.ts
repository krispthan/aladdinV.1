export enum CollapsibleTabs {
  CollapsibleTabOne = 1,
  CollapsibleTabTwo = 2,
  CollapsibleTabThree = 3,
  CollapsibleTabFour = 4,
  CollapsibleTabFive = 5,
  CollapsibleTabSix = 6,
  CollapsibleTabSeven = 7,
  CollapsibleTabEight = 8,
}

export interface IFAQAccordionProps {
  accordion: IAccordionProps[];
}

export interface IAccordionProps {
  title: string;
  content: string;
}

export interface IFAQFormData {
  question: string;
}
