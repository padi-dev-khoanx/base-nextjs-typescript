
export interface Scene {
  id: number;
  name: string;
  rarity: string;
  images: Array<string>;
  number_copies: number;
  series: {
    name: string;
    id: number;
  };
  status: string;
}


export interface Series {
  id: number;
  name: string;
  series_id: number;
}

