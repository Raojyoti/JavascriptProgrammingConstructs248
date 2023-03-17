//Sequence Practice Problems
//UC1- Get random Single digit 
let result=Math.floor(Math.random() * 10);
console.log(result);
console.log("--------------------------------------------"); 

//UC2- Use Random to get Dice Number between 1 to 6
let dice=Math.floor(Math.random() * 6)+1;
console.log(dice); 
console.log("--------------------------------------------"); 

//UC3- Add two Random Dice Number and Print the Result
let dice1=Math.floor(Math.random() * 6)+1;
console.log(dice1);
let dice2=Math.floor(Math.random() * 6)+1;
console.log(dice2);
let add=dice1 + dice2;
console.log("Sum of two random dice: " + add); 
console.log("--------------------------------------------"); 

//UC4-– Write a program that reads 5 Random 2 Digit values ,then find their sum and the average
let num1=Math.floor(Math.random() * 90)+10;
let num2=Math.floor(Math.random() * 90)+10;
let num3=Math.floor(Math.random() * 90)+10;
let num4=Math.floor(Math.random() * 90)+10;
let num5=Math.floor(Math.random() * 90)+10;
let sum1=num1 + num2 + num3 + num4 + num5;
console.log("First number value ==> "+num1);
console.log("Second number value ==> "+num2);
console.log("First number value ==> "+num3);
console.log("Second number value ==> "+num4);
console.log("First number value ==> "+num5);
let average=sum1/5;
console.log("Sum : " + sum1); 
console.log("Average: " + average);  
console.log("--------------------------------------------"); 

//UC5- Unit Conversion 
//a. 1ft = 12 in then 42 in = ? ft 
let inches=42;
let ft=inches/12;
console.log("Conversion inches into ft : " + ft); 
//b. Rectangular Plot of 60 feet x 40 feet in meters
let feet1=60; 
let feet2=40;
let meters1=60 /3.281; 
let meters2=40 /3.281;
let product=meters1 * meters2; 
console.log("Conversion feet into meter: " + product); 
//c. Calculate area of 25 such plots in acres
let area=25;
let result1=area / 43560;
console.log("Result : " + result1);
console.log("--------------------------------------------"); 
