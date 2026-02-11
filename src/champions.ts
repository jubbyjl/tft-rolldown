
export type Champion = number

export const getRandomChampion = (): Champion => {
  return Math.floor(Math.random() * 5);
}
