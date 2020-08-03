const languageConfig = require('../../i18n/config.json');

const langsArray = languageConfig.reduce((acc, cur) => {
  acc.push(cur.code);
  return acc;
}, []);

module.exports = {
  langs: langsArray,
  defaultLangKey: languageConfig[0].code,
};
