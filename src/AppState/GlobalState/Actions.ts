import {SET_LANGUAGE, SET_THEME} from "./Constants";

export function SetLanguage(language) {
  return {
    type: SET_LANGUAGE,
    language
  }
}

export function setTheme(payload) {
  return {
    type: SET_THEME,
    payload
  }
}
