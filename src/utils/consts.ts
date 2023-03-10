export interface IOperators {
  type: string;
  id: string;
  value: string;
}

export const operatorsList: Array<IOperators> = [
  {
    type: "operator",
    id: "divide",
    value: "/",
  },
  {
    type: "operator",
    id: "multiply",
    value: "x",
  },
  {
    type: "operator",
    id: "subtract",
    value: "-",
  },
  {
    type: "operator",
    id: "add",
    value: "+",
  },
  {
    type: "operator",
    id: "equals",
    value: "=",
  },
];

export const numberList: Array<IOperators> = [
  {
    type: "num",
    id: "seven",
    value: "7",
  },
  {
    type: "num",
    id: "eight",
    value: "8",
  },
  {
    type: "num",
    id: "nine",
    value: "9",
  },
  {
    type: "num",
    id: "four",
    value: "4",
  },
  {
    type: "num",
    id: "five",
    value: "5",
  },
  {
    type: "num",
    id: "six",
    value: "6",
  },
  {
    type: "num",
    id: "one",
    value: "1",
  },
  {
    type: "num",
    id: "two",
    value: "2",
  },
  {
    type: "num",
    id: "three",
    value: "3",
  },
  {
    type: "num",
    id: "zero",
    value: "0",
  },
  {
    type: "decimal",
    id: "decimal",
    value: ",",
  },
];
