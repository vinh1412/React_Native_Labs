// 27. Create a function that will receive an array of numbers as argument and will return a new array with distinct elements
let arr = [1, 2, 10, 9, 2, 6, 7, 8, 9, 1, 2];
function distinctArray(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        let count = newArr.indexOf(arr[i]);
        if (count === -1) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}
console.log("27. Create a function that will receive an array of numbers as argument and will return a new array with distinct elements");
console.log(distinctArray(arr));
// 28. Calculate the sum of first 100 prime numbers and return them in an array
function isPrime(n) {
    if (n < 2) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}
function sumOfFirst100PrimeNumbers() {
    let sum = 0;
    let count = 0;
    let i = 2;
    let arr = [];
    while (count < 100) {
        if (isPrime(i)) {
            sum += i;
            arr.push(i);
            count++;
        }
        i++;
    }
    return [sum, arr];
}
console.log("28. Calculate the sum of first 100 prime numbers and return them in an array");
console.log(sumOfFirst100PrimeNumbers());
// 29. Print the distance between the first 100 prime numbers
function distanceBetweenFirst100PrimeNumbers() {
    let arr = sumOfFirst100PrimeNumbers()[1];
    let newArr = [];
    for (let i = 0; i < arr.length - 1; i++) {
        newArr.push(arr[i + 1] - arr[i]);
    }
    return newArr;
}
console.log("29. Print the distance between the first 100 prime numbers");
console.log(distanceBetweenFirst100PrimeNumbers());
// 30. Create a function that will add two positive numbers of indefinite size. The numbers
// are received as strings and the result should be also provided as string.
function addTwoPositiveNumbers(str1, str2) {
    let arr1 = str1.split("").reverse();
    let arr2 = str2.split("").reverse();
    let result = [];
    let carry = 0;
    let i = 0;
    while (i < arr1.length || i < arr2.length) {
        let sum = (Number(arr1[i]) || 0) + (Number(arr2[i]) || 0) + carry;
        result.push(sum % 10);
        carry = Math.floor(sum / 10);
        i++;
    }
    if (carry) {
        result.push(carry);
    }
    return result.reverse().join("");
}
console.log("30. Create a function that will add two positive numbers of indefinite size. The numbers are received as strings and the result should be also provided as string.");
console.log(addTwoPositiveNumbers("123456789", "987654321"));
// 31. Create a function that will return the number of words in a text
function numberOfWordsInText(text) {
    let arr = text.split(" ");
    return arr.length;
}
console.log("31. Create a function that will return the number of words in a text");
console.log(numberOfWordsInText("Hello World"));
// 32. Create a function that will capitalize the first letter of each word in a text
function capitalizeFirstLetterOfEachWord(text) {
    let arr = text.split(" ");
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(arr[i].charAt(0).toUpperCase() + arr[i].slice(1));
    }
    return newArr.join(" ");
}
console.log("32. Create a function that will capitalize the first letter of each word in a text");
console.log(capitalizeFirstLetterOfEachWord("hello world"));
// 33. Calculate the sum of numbers received in a comma delimited string
function sumOfNumbersInCommaDelimitedString(str) {
    let arr = str.split(",");
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += Number(arr[i]);
    }
    return sum;
}
console.log("33. Calculate the sum of numbers received in a comma delimited string");
console.log(sumOfNumbersInCommaDelimitedString("1,2,3,4,5"));
// 34. Create a function that returns an array with words inside a text.
function wordsInsideText(text) {
    let arr = text.split(" ");
    return arr;
}
console.log("34. Create a function that returns an array with words inside a text.");
console.log(wordsInsideText("Hello World"));
// 35. Create a function to convert a CSV text to a “bi-dimensional” array
function convertCSVTextToBiDimensionalArray(text) {
    let arr = text.split("\n");
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(arr[i].split(","));
    }
    return newArr;
}
console.log("35. Create a function to convert a CSV text to a “bi-dimensional” array");
console.log(convertCSVTextToBiDimensionalArray("1,2,3\n4,5,6\n7,8,9"));
// 36. Create a function that converts a string to an array of characters
function convertStringToArrayOfCharacters(str) {
    let arr = str.split("");
    return arr;
}
console.log("36. Create a function that converts a string to an array of characters");
console.log(convertStringToArrayOfCharacters("Hello World"));
// 37. Create a function that will convert a string in an array containing the ASCII codes of each character
function convertStringToArrayOfASCII(str) {
    let arr = str.split("");
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(arr[i].charCodeAt(0));
    }
    return newArr;
}
console.log("37. Create a function that will convert a string in an array containing the ASCII codes of each character");
console.log(convertStringToArrayOfASCII("Hello World"));
// 38. Create a function that will convert an array containing ASCII codes in a string
function convertArrayToASCIIString(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(String.fromCharCode(arr[i]));
    }
    return newArr.join("");
}
console.log("38. Create a function that will convert an array containing ASCII codes in a string");
console.log(convertArrayToASCIIString([72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100]));
// 39. Implement the Caesar cypher
function caesarCypher(str, shift) {
    let arr = str.split("");
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        let charCode = arr[i].charCodeAt(0);
        if (charCode >= 65 && charCode <= 90) {
            newArr.push(String.fromCharCode(((charCode - 65 + shift) % 26) + 65));
        } else if (charCode >= 97 && charCode <= 122) {
            newArr.push(String.fromCharCode(((charCode - 97 + shift) % 26) + 97));
        } else {
            newArr.push(arr[i]);
        }
    }
    return newArr.join("");
}
console.log("39. Implement the Caesar cypher");
console.log(caesarCypher("Hello World", 1));
// 40. Implement the bubble sort algorithm for an array of numbers
function bubbleSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}
console.log("40. Implement the bubble sort algorithm for an array of numbers");
console.log(bubbleSort([1, 5, 2, 4, 3]));
// 41. Create a function to calculate the distance between two points defined by their x, y coordinates
function distanceBetweenTwoPoints(x1, y1, x2, y2) {
    return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
}
console.log("41. Create a function to calculate the distance between two points defined by their x, y coordinates");
console.log(distanceBetweenTwoPoints(1, 1, 4, 5));
// 42. Create a function that will return a Boolean value indicating if two circles
// defined by center coordinates and radius are intersecting
function areTwoCirclesIntersecting(x1, y1, r1, x2, y2, r2) {
    return distanceBetweenTwoPoints(x1, y1, x2, y2) <= r1 + r2;
}
console.log("42. Create a function that will return a Boolean value indicating if two circles defined by center coordinates and radius are intersecting");
console.log(areTwoCirclesIntersecting(0, 0, 5, 0, 6, 1));
// 43. Create a function that will receive a bi-dimensional array as argument and a
// number and will extract as a unidimensional array the column specified by the
// number
function extractColumnFromBiDimensionalArray(arr, n) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(arr[i][n]);
    }
    return newArr;
}
console.log("43. Create a function that will receive a bi-dimensional array as argument and a number and will extract as a unidimensional array the column specified by the number");
console.log(extractColumnFromBiDimensionalArray([[1, 2, 3], [4, 5, 6], [7, 8, 9]], 0));
// 44. Create a function that will convert a string containing a binary number into a
// number
function convertBinaryStringToNumber(str) {
    return parseInt(str, 2);
}
console.log("44. Create a function that will convert a string containing a binary number into a number");
console.log(convertBinaryStringToNumber("101"));
// 45. Create a function to calculate the sum of all the numbers in a jagged array
// (contains numbers or other arrays of numbers on an unlimited number of
// levels)
function sumOfAllNumbersInJaggedArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            sum += sumOfAllNumbersInJaggedArray(arr[i]);
        } else {
            sum += arr[i];
        }
    }
    return sum;
}
console.log("45. Create a function to calculate the sum of all the numbers in a jagged array (contains numbers or other arrays of numbers on an unlimited number of levels)");
console.log(sumOfAllNumbersInJaggedArray([1, 2, [3, 4, [5, 6]]]));
// 46. Find the maximum number in a jagged array of numbers or array of numbers
function findMaxNumberInJaggedArray(arr) {
    let max = -Infinity;
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            max = Math.max(max, findMaxNumberInJaggedArray(arr[i]));
        } else {
            max = Math.max(max, arr[i]);
        }
    }
    return max;
}
console.log("46. Find the maximum number in a jagged array of numbers or array of numbers");
console.log(findMaxNumberInJaggedArray([1, 2, [3, 4, [5, 6]]]));
// 47. Deep copy a jagged array with numbers or other arrays in a new array
function deepCopyJaggedArray(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            newArr.push(deepCopyJaggedArray(arr[i]));
        } else {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}
console.log("47. Deep copy a jagged array with numbers or other arrays in a new array");
console.log(deepCopyJaggedArray([1, 2, [3, 4, [5, 6]]]));
// 48. Create a function to return the longest word in a string
function longestWordInString(str) {
    let arr = str.split(" ");
    let longestWord = "";
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > longestWord.length) {
            longestWord = arr[i];
        }
    }
    return longestWord;
}
console.log("48. Create a function to return the longest word in a string");
console.log(longestWordInString("Hello World"));
// 49. Shuffle an array of strings
function shuffleArray(arr) {
    let newArr = [];
    while (arr.length) {
        let randomIndex = Math.floor(Math.random() * arr.length);
        newArr.push(arr[randomIndex]);
        arr.splice(randomIndex, 1);
    }
    return newArr;
}
console.log("49. Shuffle an array of strings");
console.log(shuffleArray(["Hello", "World", "JavaScript"]));
// 50. Create a function that will receive n as argument and return an array of n
// random numbers from 1 to n. The numbers should be unique inside the array.
function randomNumbers(n) {
    let arr = [];
    for (let i = 1; i <= n; i++) {
        arr.push(i);
    }
    let newArr = [];
    while (arr.length) {
        let randomIndex = Math.floor(Math.random() * arr.length);
        newArr.push(arr[randomIndex]);
        arr.splice(randomIndex, 1);
    }
    return newArr;
}
console.log("50. Create a function that will receive n as argument and return an array of n random numbers from 1 to n. The numbers should be unique inside the array.");
console.log(randomNumbers(10));
// 51. Find the frequency of letters inside a string. Return the result as an array of
// arrays. Each subarray has 2 elements: letter and number of occurrences.
function frequencyOfLettersInsideString(str) {
    let arr = str.split("");
    let obj = {};
    for (let i = 0; i < arr.length; i++) {
        if (obj[arr[i]]) {
            obj[arr[i]]++;
        } else {
            obj[arr[i]] = 1;
        }
    }
    let result = [];
    for (let key in obj) {
        result.push([key, obj[key]]);
    }
    return result;
}
console.log("51. Find the frequency of letters inside a string. Return the result as an array of arrays. Each subarray has 2 elements: letter and number of occurrences.");
console.log(frequencyOfLettersInsideString("Hello World"));
// 52. Calculate Fibonacci(500) with high precision (all digits)
function fibonacci(n) {
    let arr = [0, 1];
    for (let i = 2; i <= n; i++) {
        arr.push(arr[i - 1] + arr[i - 2]);
    }
    return arr[n];
}
console.log("52. Calculate Fibonacci(500) with high precision (all digits)");
console.log(fibonacci(500));
// 53. Calculate 70! with high precision (all digits)
function factorial(n) {
    let arr = [1];
    for (let i = 1; i <= n; i++) {
        let carry = 0;
        for (let j = 0; j < arr.length; j++) {
            let product = arr[j] * i + carry;
            arr[j] = product % 10;
            carry = Math.floor(product / 10);
        }
        while (carry) {
            arr.push(carry % 10);
            carry = Math.floor(carry / 10);
        }
    }
    return arr.reverse().join("");
}
console.log("53. Calculate 70! with high precision (all digits)");
console.log(factorial(70));