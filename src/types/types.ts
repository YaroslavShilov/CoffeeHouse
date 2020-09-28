export type BestSellers = Array<BestSellersItem>;

export type Goods = Array<GoodsItem>;

export type CoffeeItems = Array<CoffeeItem>;

export type CoffeeItem = {
  country: string;
  description: string;
  name: string;
  price: string;
  url: string;
};
export type BestSellersItem = GoodsItem;
export type GoodsItem = {
  name: string;
  price: string;
  url: string;
};
