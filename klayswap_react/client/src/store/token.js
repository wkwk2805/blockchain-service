// actionTypes
export const CHANGE_TOKEN = "token/CHANGE_TOKEN";

// actions
export const changeToken = (klay, eth) => {
  return { type: CHANGE_TOKEN, klay, eth };
};

// reducer
const initialState = { eth: "", klay: "" };

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_TOKEN:
      return {
        ...state,
        eth: action.eth === 0 ? "" : action.eth,
        klay: action.klay === 0 ? "" : action.klay,
      };
    default:
      return state;
  }
}
