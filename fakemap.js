var words = ["ground", "control", "to", "major", "tom"];

function map(array, fn){
  var finalProd = [];
  for(var i = 0; i < array.length; i++){
    finalProd.push(fn(array[i]))
  }
  console.log(finalProd)
}


map(words, function(word) {
  return word.length;
}

);
// [6, 7, 2, 5, 3]

map(words, function(word) {
  return word.toUpperCase();
});
// [ "GROUND", "CONTROL", "TO", "MAJOR", "TOM" ]

map(words, function(word) {
  return word.split('').reverse().join('');
});
// [ 'dnuorg', 'lortnoc', 'ot', 'rojam', 'mot' ]
