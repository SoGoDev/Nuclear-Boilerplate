import {SET_COLOR_THEME} from './Constants';

const initialState = {
  theme: 'light-theme'
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_COLOR_THEME:
      return {...state, theme: action.payload};
    default: return state
  }
}
