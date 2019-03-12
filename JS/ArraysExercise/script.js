function printReverse (arr) {
    var newArr = [];
    for (var i = 0, j = arr.length - 1; i < arr.length; i++, j--) {      
        newArr[i] = arr[j];
    }   
    return newArr;
}
console.log(printReverse([1,2,3,4,5,6,7,8,9,]));

function isUniform(array) {
    for(var i = 0; i < array.length - 1; i++) {
        if(array[i] !== array[i+1]) {
            return false;
        }
    }
    return true;
}

function sumArray(sumarr) {
    var total = 0;
    sumarr.forEach(function(element){
        total += element;
    });
        return total;

}
