import { MONTHS } from "./constants";

export function stringifyDates(date: string) {
  const splitted: number[] = date.split("-") as unknown as number[]; // 2021-11-30

  return `${MONTHS[splitted[1] as number - 1]} ${splitted[2]}, ${splitted[0]}`;
}
