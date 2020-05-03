import languages from '../../Localization';
import {store} from "../Store";

export default function Localize(key: string): string {
  // @ts-ignore
  const LKEY = store.getState().global.language;
  if (languages[LKEY.toUpperCase()] && languages[LKEY.toUpperCase()][key]) return languages[LKEY.toUpperCase()][key];
  return languages['EN'][key]
}
