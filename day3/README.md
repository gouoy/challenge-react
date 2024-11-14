## Quiz1. 모든 약수 찾기 (Find divisor numbers)
-----


변수 num의 모든 약수를 다 찾아서 출력하세요. 
print numbers what is a divisor number 
```
let num = 100; 
for(;;){
    // ... 
}
```
[내 풀이](./quiz1.js)

---
## Quiz2. 소수 판별기(에라토스테네스의 체) 
-----

다음 요구사항을 만족하는 isPrimeNumber 함수를 완성하세요 
+ 함수 isPrimeNumber는 한 개의 매개변수 num을 제공받아 소수인지 판별합니다.
+ num이 소수라면 true, 아니면 false 반환  
```
function isPrimeNumber(num){
    // 여기에 코드 작성 
}

console.log(isPrimeNumber(1));
console.log(isPrimeNumber(4));
console.log(isPrimeNumber(11));
console.log(isPrimeNumber(12));

```
[내 풀이](./quiz2.js)


---
## Quiz3. 계산기 만들기 
1. 두 수를 덧셈하는 함수 add, 뺄셈하는 sub 함수 생성
   + 2개의 매개변수 num1, num2 제공 받음 
   + 연산의 결과 반환
2. 다음 조건을 만족하는 함수 calc 구현
   + 3개의 매개변수 num1, num2, callback을 제공 받음
      + num1, num2 : 연산에 활용될 숫자
      + callback : 실제로 연산을 수행할 함수
   + callback 함수로 전달된 연산의 결과값을 콘솔에 출력하시오 
```
function add(num1, num2){}

function subtract(num1, num2){}

function calculate(num1,num2,operation){}

calculate(5, 3, add);
calculate(5, 3, subtract)
```
[내 풀이](./quiz3.js)