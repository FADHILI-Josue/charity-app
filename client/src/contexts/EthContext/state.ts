const actions = {
  init: "INIT",
};

export type State = {
  state:
    | {
        artifact: any;
        web3: any;
        accounts: any;
        networkID: any;
        contract: any;
      }
    | undefined;
};

const initialState = {
  artifact: undefined,
  web3: undefined,
  accounts: undefined,
  networkID: undefined,
  contract: undefined,
};

const reducer = (state: State["state"], action: any) => {
  const { type, data } = action;
  switch (type) {
    case actions.init:
      return { ...state, ...data };
    default:
      throw new Error("Undefined reducer action type");
  }
};

export { actions, initialState, reducer };
