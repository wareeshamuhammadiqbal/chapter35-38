alert('Hello world!')

//Question # 01
//Date Function

function date(){
    var today = new Date();
    console.log(today);
}
date();

//Question # 02
// user name funtion


function greet(){
    var username1 = prompt('Enter your first name');
    var username2 = prompt('Enter your last name');
    
    console.log("Hello " + username1 + ' ' + username2);
}
greet();

//Question # 03
// sum of user number by function

function sum(){
    var usernum1 = +prompt('Enter first number');
    var usernum2 = +prompt('Enter second number');

    var result = usernum1 + usernum2;
    console.log(usernum1 + ' + ' + usernum2 + ' = ' + result);
}
sum();

// //Question # 04
// // user calculator

 function calculator(){
        var num1 = +prompt("Enter value 1")
        var operator = prompt("Enter your operator(i.e;+,-,*,/)")
        var num2 = +prompt("Enter value 2")
    
        var result;
        if(operator === "+"){
            result=  num1+num2
        }else if(operator === "-"){
            result=  num1-num2
        }else if(operator === "*"){
            result=  num1*num2
        }else if(operator === "/"){
            if(num2!==0){
                result= num1/num2
            }else{
                result= "Error: Division by zero"
            }
        }else{
            result= "enter a valid operator"
        }
        return num1 + operator + num2 + " = "+ result
    }
    alert(calculator())


//Question # 05
//Square of argument

function square(){
    var squareNum = 5;
    console.log(squareNum*squareNum);
} 
square();

//Question # 06
//Factorial Number function


function factorial(){
    var num = +prompt("Enter a number:");

    if(num<0){
        alert("Error: Factorial is not defined for negative numbers");
    }else{
        var result= 1;
        for(var i = 2; i<=num; i++){
            result*=i 
        }
        alert("The factorial of "+num+ " is "+result);
    }
}
factorial();

//Question # 07
//Counting function

function counting(){
    for(var i = 1; i < 100; i = i+10){
        for(var j = i; j < i + 10; j++){
            document.write(j + ' ');
        }
        document.write('<br>');
    }
}
counting();

//Question # 08
// Hypoteneous Calculator

function calculateHypotenuse(){
    function calculateSquare(x){
      return x*x
    }
    var base = +prompt("Enter the base of a right angle triangle");
    var perpendicular = +prompt("Enter the perpendicular of a right angle triangle");

    var hypoteneuse = Math.sqrt(calculateSquare(base)+calculateSquare(perpendicular));
    alert("The hypotenuse of right angle triangle with base "+base+ " and perpendicular "+perpendicular + " is " + Math.floor(hypoteneuse));
}
// console.log(Math.sqrt(50))
calculateHypotenuse();

//Question # 09
// Area of rectangle

function calculateArea(){
  var width = +prompt('Enter a width of rectangle');
  var height = +prompt('Enter a height of rectangle');

  var totalrectangle = width*height;
  return totalrectangle;
}
alert(calculateArea());

//Question # 10
//palindrome words function


function palindromeWord(){

  var word = prompt('Enter a word i will check the word is a palindrome word or not');
  var splitword = word.split('');
  var reverseword = splitword.reverse();
  var joinword = reverseword.join();
  console.log(word);
  console.log(splitword);
  console.log(reverseword);
  console.log(joinword);

  if(word === joinword){
    alert('your word is a palindrome word');
  }
  else{
    alert('This is not a palindrome word');
  }
}
palindromeWord();

//Question # 11
// Convert first letter to uppercase


function uppercase() {
    var string = prompt('Write a sentence i conver first letter of all alphabate to uppercase');
    var splitString = string.split(' ');console.log(splitString);
  
    for(var i = 0; i < splitString.length; i++){
      var copyfirstletter = splitString.slice([i][0] ,1);
      var uppercase = copyfirstletter.toUpperCase;
      var anotherLetter = splitString.slice([i][1])
      var mix = uppercase + anotherLetter;
      console.log(mix)
    }
  }
  uppercase()

  // Question 12
//longest number

function maximumLength(){

var str = 'Web development course';
var split = str.split(' ');
var length = 5;
for(var i = 0; i < split.length; i++){
    for(var j = 0; j < split[i].length; j++){
       if(length < j){
          alert(split[i]);
          break;
        }
}
}

}
maximumLength();

//Question 13
//Count letters

function countletter(){


}
countletter