import { createContext, useContext } from "react";
import { InitialStateType } from "./reducer";
import { FetchItemsType } from "./ServerState";

type Context = InitialStateType & { fetchItems: FetchItemsType };

export const ServerContext = createContext<Context | undefined>(undefined);

export const useSeverContext = () => {
	const context = useContext(ServerContext);

	if(context === undefined) {
		throw new Error("context isn't provided")
	}

	return context;
}
