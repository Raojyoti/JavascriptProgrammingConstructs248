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
let num1=Math.floor(Math.random() * 100);
let num2=Math.floor(Math.random() * 100);
let num3=Math.floor(Math.random() * 100);
let num4=Math.floor(Math.random() * 100);
let num5=Math.floor(Math.random() * 100);
let sum=num1 + num2 + num3 + num4 + num5;
let average=sum/5;
console.log("Sum : " + sum); 
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

//--Selection Practice Problems with if & else  
//1.Write a program that reads 5 Random 3 Digit values and then outputs the minimum and the maximum value
let number1=Math.floor(Math.random() * 1000);
console.log("first number: "+number1);
let number2=Math.floor(Math.random() * 1000);
console.log("Second number: "+number2);
let number3=Math.floor(Math.random() * 1000);
console.log("third number: "+number3);
let number4=Math.floor(Math.random() * 1000);
console.log("four number: "+number4);
let number5=Math.floor(Math.random() * 1000);
console.log("five number: "+number5);

if(number1> number2 && number1>number3 && number1> number4 && number1> number5 )
{
    console.log("Greater number ==> "+number1);
}
else if(number2> number1 && number2> number3 && number2> number4 && number2> number5 )
{
    console.log("Greater number ==> "+number2);
}
else if(number2> number1 && number2> number3 && number2> number4 && number2> number5  )
{
    console.log("Greater number ==> "+number2);
}
else if(number3> number1 && number3> number2 && number3> number4 && number3> number5 )
{
    console.log("Greater number ==> "+number3);
}
else if(number4> number1 && number4> number2 && number4> number3 && number4> number5 )
{
    console.log("Greater number ==> "+number4);
}
else
{
    console.log("Greater number ==> "+number5);
}
console.log("--------------------------------------------"); 

//2.Write a program that takes day and month from the command line and prints true if day of month is between March 20 and June 20, false otherwise.
let month=5;
let date=20;
if(((month <= 6 && date <= 20) && ((month >= 3 && date <= 20) && (date<31))))
{
   console.log("True");
}
else
{
   console.log("False");
} 
console.log("--------------------------------------------"); 