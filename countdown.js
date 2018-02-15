var countdownGenerator = function (x) {
  var countLength = x;

  return function(){
    if(countLength > 0){
      console.log("T-minus " + countLength)
    }
    else if(countLength === 0){
      console.log("Blast Off!")
    }
    else{
      console.log("Rockets already gone, bub!")
    }
    countLength -= 1;
  }

};

var countdown = countdownGenerator(3);
countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!
