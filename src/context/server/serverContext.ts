import { createContext } from "react";
import { initialState, InitialStateType } from "./reducer";
import { FetchItemsType } from "./ServerState";

type Context = InitialStateType & { fetchItems: FetchItemsType };

export const ServerContext = createContext<Context>({
  ...initialState,
  fetchItems: async (category) => {},
});
