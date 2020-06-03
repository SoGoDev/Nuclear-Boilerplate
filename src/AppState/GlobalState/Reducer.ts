import {SET_LANGUAGE, SET_THEME} from "./Constants";

const initialState = {
  language: window.navigator.language,
  theme: 'light'
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_LANGUAGE: return {...state, language: action.language};
    case SET_THEME: return {...state, theme: action.payload};
    default:
      return state
  }
}
