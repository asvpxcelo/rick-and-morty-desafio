import { Caracter } from "./Caracters"
export interface Results {
  info: {
    count: number,
    pages: number,
    next: string,
    prev: number | undefined
  }
  results: Array<Caracter>
}