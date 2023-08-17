export interface Pager<Data> {
  count: number;
  next?: string;
  previous?: string;
  results: Data[]
}