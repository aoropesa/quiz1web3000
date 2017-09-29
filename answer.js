//challenge 1

Starter Code
function transformFirstAndLast(array) {
  let obj = {};
  if(array.length < 2){
    return obj[array[0] = 0];
  }
  obj[array[0]] = array[array.length-1];
  return obj;
}


// Challenge 2
 function getAllKeys(obj) {
   let array = [];
   for(let i in obj){
     array.push(i);
   }
   return array;
 }


 // Challenge 3
  Starter Code :
  function getElementsGreaterThan10AtProperty(obj, key) {
    var array = [];
    if(!obj[key] && typeof obj[key] != 'array'){
      return [];
    }
    for(let i=0; i<obj[key].length;i++){
      if(obj[key][i] > 10){
        array.push(obj[key][i]);
      }
    }
    return array;
  }



  // Challenge 4
  var count = 0;
  function counter(){
    var value = function(){
      return count++;
    }
    var save = function(){
      var countsave = count++;
      return countsave;
    }
    return value && save;
  }
  var run = counter();
  run();


  // Challenge 5
  'Aurelio De Rosa'
  'John Doe'
 console.log(obj.prop.getFullname()) devuelve como resultado 'Aurelio De Rosa' xq this en este caso
 se refiere al objeto(obj) y obj.prop.getFullname() === 'Aurelio De Rosa' pero en el caso de test() devuelve 'John Doe' xq se refiere a window y
 window.fullname === 'John Doe'.
