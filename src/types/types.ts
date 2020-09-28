export type CoffeeItem = {
  country: string;
  name: string;
  price: string;
  url: string;
};

export type CoffeeItemWithDesc = CoffeeItem & { description: string };

export type BestSellersItem = GoodsItem;
export type GoodsItem = {
  name: string;
  price: string;
  url: string;
};
