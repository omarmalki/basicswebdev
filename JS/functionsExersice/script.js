 function isEven(number) {
if(number % 2 === 0){
    console.log("true");
}
else {
    console.log("false");
}
}


function factorial(num) {
    if (num === 0){ 
        return 1; 
    }
  else { 
      return num * factorial( num - 1 ); 
    }
}
function kebabToSnake(str) {
    console.log(str.replace(/-/g, "_"));
}