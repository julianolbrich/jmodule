module.exports = function jmodule(string) {
  // gibt beim Aufruf 6 unterschiedliche Zufallszahlen in einem Array aus
  Array.from({length: 6}, () => Math.floor(Math.random() * 6));
};
