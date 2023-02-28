export interface Pack {
  id: number;
  pack_id: number;
  name: string;
  group_id: number;
  image: string;
  price: {
    jpy: number;
    eth: number;
  };
  amount: number;
  start_datetime: Date;
  end_datetime: Date;
  number_card: number;
  number_pack_bought: number;
  max_can_buy: number;
  description: string;
  status: string;
}
