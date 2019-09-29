function importAll(lang) {
  return lang.keys().reduce((acc, cur) => {
    acc[cur.replace('./', "").replace(".json", "").toUpperCase()] = lang(cur);
    return acc
  }, {})
}

const languages = importAll(require.context('../../Localization/', true, /.json/));

export default function Localize(key: string, languageKey: string): string {
  if (languages[languageKey] && languages[languageKey][key]) return languages[languageKey][key];
  return languages['EN'][key]
}
