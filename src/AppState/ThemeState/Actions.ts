import { SET_COLOR_THEME } from './Constants';

export function setTheme(payload) {
  return {
    type: SET_COLOR_THEME,
    payload
  }
}
