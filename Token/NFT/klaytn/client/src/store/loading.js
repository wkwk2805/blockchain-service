// actionTypes
export const SHOW = "loading/SHOW";
export const HIDE = "loading/HIDE";

// actions
export const show = () => {
  return {
    type: SHOW,
  };
};

export const hide = () => {
  return {
    type: HIDE,
  };
};

// reducer
const initialState = false;

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SHOW:
      return true;
    case HIDE:
      return false;
    default:
      return false;
  }
}
