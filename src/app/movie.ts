export class Movie {
  $key: string;
  title: string = '';
  release: string = '';
  tomato: number;
  rank: number;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
