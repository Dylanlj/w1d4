var students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 22 },
  { id: 4, name: "alex",     age: 30 }
];

students.sort(function (objectA, objectB) {
  var toReturn = 0; 
  
  if(objectA['name'] < objectB['name']){
    toReturn = -1
  }
  else if(objectA['name'] > objectB['name']){
    toReturn = 1
  }
  else if(objectA['age'] < objectB['age']){
    toReturn = 1
  }

  return toReturn;
})


console.log(students)