import {SET_LANGUAGE} from "./Constants";

const initialState = {
  language: window.navigator.language
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_LANGUAGE: return {...state, language: action.language};
    default:
      return state
  }
}
