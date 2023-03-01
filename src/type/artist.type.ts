export interface Group {
  bc_token_id: number;
  chain_id: number;
  createdAt: string;
  creator_id: number;
  description: string;
  id: number;
  logo: string;
  main_images: string;
  name: string;
  status: string;
  updatedAt: string;
  url: string;
}

export interface Member {
  id: number;
  name: string;
  url: string;
  profile_image: string;
}

export interface UserGroup {
  GroupUser: Array<{
    status: string;
    role: string;
  }>;
  id: number;
  email: string;
  name: string;
}

export interface ParamsCreateGroup {
  name: string;
  logo: string;
  main_images: Array<string>;
  url: string;
  description: string;
}

export interface ParamsUpdateGroup {
  group_id: number;
  creator_id: number;
  name: string;
  logo: string;
  main_images: Array<string>;
  description: string;
}

export interface ParamsUpdateStatusGroup {
  status: string;
  group_id: number;
}

export interface ParamsCreateMember {
  name: string;
  url: string;
  group_id: number;
  profile_image: Array<string>;
  profile_description: number;
}

export interface ParamsUpdateMember {
  id: number;
  name: string;
  group_id: number;
  profile_image: string;
  profile_description: string;
}

export interface ParamsCreatePack {
  name: string;
  group_id: number;
  image: string;
  description: string;
  price_eth: number;
  price_jpy: number;
  amount: number;
  start_datetime: string;
  end_datetime: string | null;
  number_card: number;
  number_pack_bought: number;
  series_id: Array<number>;
  max_can_buy: number;
}


export interface ParamsUpdatePack {
    pack_id: number;
    group_id: number;
    name: string;
    image: string;
    price_jpy: number;
    price_eth: number;
    amount: number;
    max_can_buy: number;
    start_datetime: string;
    end_datetime: string | null;
    number_card: number;
    number_pack_bought: number;
    series_id: Array<number>;
    description: string;
  }