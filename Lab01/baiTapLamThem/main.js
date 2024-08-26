// 1. Print numbers from 1 to 10 
console.log("1. Print numbers from 1 to 10: ");
for(let i=1; i<=10; i++){
    console.log(i); 
}
// 2. Print the odd numbers less than 100 
console.log("2. Print the odd numbers less than 100: ");
for (let i=0; i<100; i++){
    if(i%2!=0){
        console.log(i); 
    }
} 
console.log("3. Print the multiplication table with 7: ");
for(let i=1; i<=10; i++){
    console.log(`7 x ${i} = ${7*i}`);
}
// 4. Print all the multiplication tables with numbers from 1 to 10 
console.log("4. Print all the multiplication tables with numbers from 1 to 10: ");
for (let i = 1; i <= 10; i++) {
    let row = '';
    for (let j = 1; j <= 10; j++) {
      row += `${i} x ${j} = ${i * j}\t`;
    }
    console.log(row);
  }
// 5. Calculate the sum of numbers from 1 to 10 
console.log("5. Calculate the sum of numbers from 1 to 10: ");
let sum=0;
for(let i=1; i<=10; i++){
    sum+=i;
}
console.log(`\tSum of numbers from 1 to 10: ${sum}`);
// 6. Calculate 10!
console.log("6. Calculate 10!: ");
let factorial=1; 
for(let i=1; i<=10; i++){
    factorial*=i;
}
console.log(`\t10! = ${factorial}`);
// 7. Calculate the sum of even numbers greater than 10 and less than 30 
console.log("7. Calculate the sum of even numbers greater than 10 and less than 30 : ");
let total_even_numbers=0;
for (let i=12; i<30; i++){
    if(i%2==0){
        total_even_numbers+=i;
    }
}
console.log(`\tSum of even numbers greater than 10 and less than 30: ${total_even_numbers}`);
// 8. Create a function that will convert from Celsius to Fahrenheit 
console.log("8. Create a function that will convert from Celsius to Fahrenheit: ");
function convert_C_F(celsius){
    let fahrenheit= (celsius*9/5)+32;
    console.log(`\t${celsius} oC = ${fahrenheit} oF`);
}
convert_C_F(1);
// 9. Create a function that will convert from Fahrenheit to Celsius 
console.log("9. Create a function that will convert from Fahrenheit to Celsius: ");
function convert_F_C(fahrenheit){
    let celsius= Math.round((fahrenheit-32)*5/9);
    console.log(`\t${fahrenheit} oF = ${celsius} oC`);
}
convert_F_C(32);
// 10. Calculate the sum of numbers in an array of numbers 
console.log("10. Calculate the sum of numbers in an array of numbers: ");
let arr1=[4, -4, 5, 7, 9, 10, 8, 2]
let sum_arr=arr1.reduce((sum, current)=> sum+current, 0);
console.log(`\tSum of array: ${sum_arr}`);
// 11. Calculate the average of the numbers in an array of numbers 
console.log("11. Calculate the average of the numbers in an array of numbers: ");
let average_arr=sum_arr/arr1.length
console.log(`\tAverage of array: ${average_arr}`);
// 12. Create a function that receives an array of numbers as argument and returns an array containing only the positive numbers 
console.log("12. Create a function that receives an array of numbers as argument and returns an array containing only the positive numbers: ");
function getPositiveNumbers(numbers){
    return numbers.filter(number=>number>0);
}
let arr2=[-10, 4, 5,-50, 20, -9, 10];
console.log(getPositiveNumbers(arr2));
// 13. Find the maximum number in an array of numbers 
console.log("13. Find the maximum number in an array of numbers: ");
let arr3 = [5, 3, 9, 1, 6];
let maxArr=Math.max(...arr3);
console.log(`Max array: ${maxArr}`);
// 14. Print the first 10 Fibonacci numbers without recursion 
function printFibonacci(n) {
    let a = 0, b = 1;
    let fibonacciNumbers = [];
  
    for (let i = 0; i < n; i++) {
      fibonacciNumbers.push(a);
      let next = a + b;
      a = b;
      b = next;
    }
    console.log(fibonacciNumbers.join());
  }
  console.log("14. Print the first 10 Fibonacci numbers without recursion: ");
printFibonacci(10);
// 15. Create a function that will find the nth Fibonacci number using recursion 
function fibonacci(n) {
    if (n <= 1) {
      return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}
console.log("15. Create a function that will find the nth Fibonacci number using recursion: ");  
let nthFibonacci = fibonacci(10);
console.log(`\t10th Fibonacci number: ${nthFibonacci}`);
// 16. Create a function that will return a Boolean specifying if a number is prime 
console.log("16. Create a function that will return a Boolean specifying if a number is prime: ");
function isPrime(n){
    if(n<2){
        return false;
    }
    for(let i=2; i<=Math.sqrt(n); i++){
        if(n%i==0){
            return false;
        }
    }
    return true;
}
console.log(`\tIs 7 prime number: ${isPrime(7)}`);
// 17. Calculate the sum of digits of a positive integer number 
console.log("17. Calculate the sum of digits of a positive integer number: ");
function sumDigits(n){
    let sum=0;
    while(n>0){
        sum+=n%10;
        n=Math.floor(n/10);
    }
    return sum;
}
console.log(`\tSum of digits of 1234: ${sumDigits(1234)}`);
// 18. Print the first 100 prime numbers 
console.log("18. Print the first 100 prime numbers: ");
let count=0;
let i=2;
while(count<100){
    if(isPrime(i)){
        console.log(i);
        count++;
    }
    i++;
}
// 19. Create a function that will return in an array the first “p” prime numbers greater than “n” 20. Rotate an array to the left 1 position
console.log("19. Create a function that will return in an array the first “p” prime numbers greater than “n”: ");
function getPrimeNumbers(p, n){
    let primeNumbers=[];
    let i=n+1;
    while(primeNumbers.length<p){
        if(isPrime(i)){
            primeNumbers.push(i);
        }
        i++;
    }
    return primeNumbers;
}
console.log(getPrimeNumbers(5, 10));
// 21. Rotate an array to the right 1 position 
console.log("21. Rotate an array to the right 1 position: ");
let arr4=[1, 2, 3, 4, 5]; 
let lastElement=arr4.pop(); // remove last element
arr4.unshift(lastElement); // add last element to the first position
console.log(arr4);
// 22. Reverse an array 
console.log("22. Reverse an array: ");
let arr5=[1, 2, 3, 4, 5];
let reverseArr=arr5.reverse(); // reverse array
console.log(reverseArr);
// 23. Reverse a string 
console.log("23. Reverse a string: ");
let str="Hello World";
let reverseStr=str.split("").reverse().join(""); // 1. split string into array of characters, 2. reverse array, 3. join array into string
console.log(reverseStr);
// 24. Create a function that will merge two arrays and return the result as a new array 
console.log("24. Create a function that will merge two arrays and return the result as a new array: ");
function mergeArrays(arr1, arr2){
    return arr1.concat(arr2);
}
let arr6=[1, 2, 3];
let arr7=[4, 5, 6];
console.log(mergeArrays(arr6, arr7));
// 25. Create a function that will receive two arrays of numbers as arguments and return an array composed of all the numbers that are either in the first array or second array but not in both 
console.log("25. Create a function that will receive two arrays of numbers as arguments and return an array composed of all the numbers that are either in the first array or second array but not in both: ");
function getUniqueNumbers(arr1, arr2){
    let uniqueNumbers=[];
    arr1.forEach(number=>{
        if(!arr2.includes(number)){
            uniqueNumbers.push(number);
        }
    });
    arr2.forEach(number=>{
        if(!arr1.includes(number)){
            uniqueNumbers.push(number);
        }
    });
    return uniqueNumbers;
}
let arr8=[1, 2, 3, 4, 5];
let arr9=[3, 4, 5, 6, 7];
console.log(getUniqueNumbers(arr8, arr9));
// 26. Create a function that will receive two arrays and will return an array with elements that are in the first array but not in the second
console.log("26. Create a function that will receive two arrays and will return an array with elements that are in the first array but not in the second: ");
function getElementsInFirstArray(arr1, arr2){
    return arr1.filter(number=>!arr2.includes(number));
}
console.log(getElementsInFirstArray(arr8, arr9));
