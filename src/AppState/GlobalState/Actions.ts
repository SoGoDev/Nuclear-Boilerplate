import {SET_LANGUAGE} from "./Constants";

export function SetLanguage(language) {
  return {
    type: SET_LANGUAGE,
    language
  }
}
