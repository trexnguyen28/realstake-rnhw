export interface Continent {
  code: string;
  name: string;
  countries?: Country[];
}

export interface Country {
  code: string;
  name: string;
  emoji: string;
  phone?: string;
  capital: string;
  continent?: Continent;
}
