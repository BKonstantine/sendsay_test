interface IOperators {
  type: string;
  id: string;
  value: string;
}

interface INumbers {
  type: string;
  value: number;
}

interface IPoint {
  type: string;
  value: string;
}

export const operators: Array<IOperators> = [
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

export const numbers: Array<INumbers> = [
  {
    type: "num",
    value: 7,
  },
  {
    type: "num",
    value: 8,
  },
  {
    type: "num",
    value: 9,
  },
  {
    type: "num",
    value: 4,
  },
  {
    type: "num",
    value: 5,
  },
  {
    type: "num",
    value: 6,
  },
  {
    type: "num",
    value: 1,
  },
  {
    type: "num",
    value: 2,
  },
  {
    type: "num",
    value: 3,
  },
  {
    type: "num",
    value: 0,
  },
];

export const point: Array<IPoint> = [
  {
    type: "decimal",
    value: ",",
  },
];
