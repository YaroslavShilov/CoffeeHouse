import { BestSellers, CoffeeItems, Goods } from "../../types/types";

export const initialState: InitialStateType = {
  bestsellers: [],
  coffee: [],
  goods: [],
  loading: true,
};

export type InitialStateType = {
  bestsellers: BestSellers;
  coffee: Goods;
  goods: CoffeeItems;
  loading: boolean;
};

export const reducer = (
  state: InitialStateType,
  action: ActionTypes
): InitialStateType => {
  switch (action.type) {
    case "SHOW_LOADER":
      return {
        ...state,
        loading: true,
      };

    case "HIDE_LOADER":
      return {
        ...state,
        loading: false,
      };

    case "FETCH_ITEMS":
      return {
        ...state,
        [action.category]: action.items,
      };

    default:
      return state;
  }
};

type InferValueTypes<T> = T extends { [key: string]: infer U } ? U : never;

type ActionTypes = ReturnType<InferValueTypes<typeof actions>>;

export const actions = {
  showLoader: () => ({ type: "SHOW_LOADER" } as const),
  hideLoader: () => ({ type: "HIDE_LOADER" } as const),
  fetchItems: (category: string, items: CoffeeItems | Goods) =>
    ({
      type: "FETCH_ITEMS",
      category,
      items,
    } as const),
};
