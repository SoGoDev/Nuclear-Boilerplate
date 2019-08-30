import EN from '../../Localization/EN.json';
import RU from '../../Localization/RU.json';


const languages = {
  EN, RU
};

export default function Localize(key: string, languageKey: string): string {
  if(languages[languageKey] && languages[languageKey][key]) return languages[languageKey][key]
  return languages['EN'][key]
}
