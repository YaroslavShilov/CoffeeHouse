import React, { useCallback, useReducer } from "react";
import { URL } from "../../API/API";
import { initialState, reducer } from "./reducer";
import { actions } from "./reducer";
import { ServerContext } from "./serverContext";

export type Category = "bestsellers" | "coffee" | "goods";
export type FetchItemsType = (category: Category) => Promise<any>;

const ServerState: React.FC<React.ReactNode> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchItems: FetchItemsType = useCallback(async (category) => {
    //check: have you ever have this "category" items?
    if (state[category].length > 1) {
      dispatch(actions.hideLoader());
    } else {
      //if you don't have this "category" items:
      dispatch(actions.showLoader());

      //get this "category" items
      const res = await fetch(`${URL}/${category}.json`);
      const data = await res.json();

      //add this "category" items into state
      dispatch(actions.fetchItems(category, data));

      dispatch(actions.hideLoader());
    }
    // eslint-disable-next-line
  }, []);

  const ServerContextType = {
    ...state,
    fetchItems,
  };

  return (
    <ServerContext.Provider value={ServerContextType}>
      {children}
    </ServerContext.Provider>
  );
};

export default ServerState;
