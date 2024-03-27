"use strict";

// 1

let array2 = [14, 150, 'css', null, 'javascript', 25];

let newArray = array2.map(element => {
    if (typeof element === 'number') {
        return element ** 2;
    } else if (typeof element === 'string') {
        return element.toUpperCase();
    } else {
        return element;
    }
});

console.log(newArray);

// 2

let info = 'good day';
let extractedWord = info.slice(5);
console.log(extractedWord); 

// 3

function getStringLength(str) {
    return str.length;
  }
  let lengthOfString = getStringLength("Hello, world!");
  console.log(lengthOfString); 

// 4. 

// Correct answer
const correctAnswer = "თბილისი";
const userAnswer = prompt("საქართველოს დედაქალაქი?").toLowerCase();
if (userAnswer === correctAnswer.toLowerCase()) {
  console.log("სწორია");
} else {
  console.log("არასწორია");
}

// 5.

let fruit = ["apple", "mango", "avocado", "kiwi"];


fruit.splice(-2, 1, "strawberry");

console.log(fruits1); 

// 6.

let array = [5, 25, 89, 120, 36];

array.push("javascript", "python");

array.unshift("html", "css");

console.log("Number of elements in the array:", array.length);

array.shift();
array.pop();

console.log("Modified array:", array);

// 7.

let fruits = ['ფორთოხალი', 'ბანანი', 'კივი'];

console.log('Number of elements in the array:', fruits.length);

fruits.push('ვაშლი', 'ანანასი');

fruits.unshift('საზამთრო');

console.log('Number of elements in the array after additions:', fruits.length);

fruits.splice(2, 0, 'მანგო');

fruits.shift();
fruits.pop();
s
console.log('Number of elements in the array after removals:', fruits.length);

// 8.
let array3 = [1, 2, 3, 4, 5];
array3.splice(3, 0, 'a', 'b', 'c');
console.log(array3);

// 9. 

let array5 = [12, 25, 3, 6, 8, 14, 7, 23];
let newArray1 = array5.map(element => element / 3);
console.log(newArray1);

// 10.

let array7 = [15, 100, 25, 10, 36];

let index = array7.indexOf(10);

if (index !== -1) {
    array7.splice(index, 1);
}

console.log(array7);

// 11.

let array8 = [1, 2, 3, 4, 5];
let modifiedArray = array8.map(item => item === 3 ? 'three' : item);

console.log(modifiedArray);

// 12.

let array1 = ["hello1", 14, 24, "hello2"];
let numbersOnly = array1.filter(item => typeof item === 'number');

console.log(numbersOnly);

// 13

let array4 = [1, 2, 3, 4, 5];
let sum = 0;

array4.forEach(function(number) {
  sum += number;
});

console.log("ჯამი არის:", sum);

// 14.

let languages = ['html', 'css', 'javascript', 'python', 'php'];
let filteredLanguages = languages.filter(language => language.length > 3);
console.log(filteredLanguages);

// 15.

let words = ['Madrid', 'rome', 'Milan', 'berlin'];

let filteredWords = words.filter(word => /m/i.test(word));

console.log(filteredWords);








  

