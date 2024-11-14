let arr = [0, 1, 2, 3, 4, 5, 6, 7];
let result = splitAndCombine(arr);

function splitAndCombine(arr) {
    const length = arr.length/2 
    const arr1 = arr.slice(0,length); 
    const arr2 = arr.slice(length,); 

    return arr2.concat(arr1); 
  }

  console.log(result)