// actionTypes
export const SET_ACCOUNT = "address/SET_ACCOUNT";

// actions
export const setAccount = (account) => {
  return {
    type: SET_ACCOUNT,
    account,
  };
};

// reducer
const initialState = { address: "", balance: 0 };

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_ACCOUNT:
      return action.account;
    default:
      return state;
  }
}
