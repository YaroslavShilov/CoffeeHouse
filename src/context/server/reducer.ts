import {
  BestSellersItem,
  CoffeeItemWithDesc,
  GoodsItem,
} from "../../types/types";

export const initialState: InitialStateType = {
  bestsellers: [],
  coffee: [],
  goods: [],
  loading: true,
};

export type InitialStateType = {
  bestsellers: Array<BestSellersItem>;
  coffee: Array<CoffeeItemWithDesc>;
  goods: Array<GoodsItem>;
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

export type ActionTypes = ReturnType<InferValueTypes<typeof actions>>;

export const actions = {
  showLoader: () => ({ type: "SHOW_LOADER" } as const),
  hideLoader: () => ({ type: "HIDE_LOADER" } as const),
  fetchItems: (
    category: string,
    items: Array<CoffeeItemWithDesc> | Array<GoodsItem>
  ) =>
    ({
      type: "FETCH_ITEMS",
      category,
      items,
    } as const),
};
