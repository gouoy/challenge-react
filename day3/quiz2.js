function isPrimeNumber(num){
    // 여기에 코드 작성 
    let count = 0
    for(let i=2; i<num;i++){
        num%i === 0 ? count +=1 : null ; 
    }

    return count === 0 ? true : false ; 
}
 
console.log(isPrimeNumber(1)); // true 
console.log(isPrimeNumber(4)); // false 
console.log(isPrimeNumber(11)); // true 
console.log(isPrimeNumber(12)); // false 
