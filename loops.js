var arr = [];

function forLoop(arr){
for (let i = 0; i < 25; i++) {
if (i === 1) {
  arr.push("I am 1 strange loop.");
  
}
  else 
  {
    arr.push("I am ${i} strange loops");
  }
}

return arr;
}

var n = 50;

function whileLoop(n){

while (n >= 0){
  console.log(n);
  n--;
  if (n < 1){
    return "done";
  }
}
}

var array = [1,2,3,4,5];
function doWhileLoop(array) {

do{
 array.shift();

} while(array.length > 0 && maybeTrue());

{
return array;
}
}

