import { useContext } from "react";
import EthContext from "./EthContext";
import { State } from "./state";

const useEth = () => useContext<State>(EthContext);

export default useEth;
