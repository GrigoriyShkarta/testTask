import { addDays, chooseRandomly, formatDate, range } from '~/utils';

const baseDate = new Date('2022-01-01');

// TODO could we have more strict type here?
const colors = ['red', 'green', 'blue'];
type ColorType = typeof colors[number];

// TODO could we make this range function infer the type, so we don't get any here?
export const items: Item[] = range(40, (index) => ({
  date: formatDate(addDays(baseDate, index)),
  color: chooseRandomly(colors),
}));

export const dataSample = {
  start: '2022-01-01',
  end: '2022-01-03',
  color: 'red',
};

export interface Item {
  date: string;
  color: ColorType;
}

export interface Range {
  start: string;
  end: string;
  color: ColorType;
}


export const colorToClassName: Record<ColorType, string> = {
  red: 'bg-red-300 text-red-900',
  green: 'bg-green-300 text-green-900',
  blue: 'bg-blue-300 text-blue-900',
};

