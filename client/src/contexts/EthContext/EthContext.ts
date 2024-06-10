import { createContext } from "react";
import { State } from "./state";

const EthContext = createContext<State>({ state: undefined });

export default EthContext;
