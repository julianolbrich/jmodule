module.exports = function randomnumber() {
  // gibt beim Aufruf 6 unterschiedliche Zufallszahlen in einem Array aus
  console.log(Array.from({length: 6}, () => Math.floor(Math.random() * 6)));
};
