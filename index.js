function randomnumber() {
  // gibt beim Aufruf 6 unterschiedliche Zufallszahlen in einem Array aus
  var arr = [];
  while(arr.length < 6){
      var r = Math.floor(Math.random() * 100) + 1;
      if(arr.indexOf(r) === -1) arr.push(r);
  }
  console.log(arr);
};

// module.exports = randomnumber
exports.jmodule = randomnumber()
