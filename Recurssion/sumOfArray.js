function sum(arr){

    if(arr.length == 0) return 0;
     return arr[0] + sum(arr.slice(1));
}

let arr = [1,2,4,5,6,2];
console.log(sum(arr));