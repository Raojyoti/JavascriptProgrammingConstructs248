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

//--Selection Practice Problems with if & else  
//1.Write a program that reads 5 Random 3 Digit values and then outputs the minimum and the maximum value
let number1=Math.floor(Math.random() * 900)+100;
console.log("first number: "+number1);
let number2=Math.floor(Math.random() * 900)+100;
console.log("Second number: "+number2);
let number3=Math.floor(Math.random() * 900)+100;
console.log("third number: "+number3);
let number4=Math.floor(Math.random() * 900)+100;
console.log("four number: "+number4);
let number5=Math.floor(Math.random() * 900)+100;
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

//Repetition Practice Problems with while loop
//1.Write a program that takes a command-line argument n and prints a table of the powers of 2 that are less than or equal to 2^n till 256 is reached..
let powervalue=Math.floor(Math.random()*10);
let n=0;
while (n<=powervalue)
   {
    let powerValue=Math.pow(2,n);
    console.log("power of 2^"+ n +" is " +powerValue);
    n++
   } 
console.log("--------------------------------------------");    

//Functions Practice Problems
//1.Help user find degF or degC based on their Conversion Selection. Use Case Statement and ensure that the inputs are within the Freezing Point (  0 °C / 32 °F ) and the Boiling Point of Water ( 100 °C / 212 °F )
   //a. degF = (degC * 9/5) + 32
   //b. degC = (degF – 32) * 5/9

   function findDegF(degC)
   {
      degF = (degC * 9/5) + 32;
      return degF;
   }
   let x1=findDegF(100)
   console.log("Result in degF: " + x1+"F");

   function findDegC(degF)
   {
      degC=(degF - 32) * 5/9;
      return degC;
   }
   let y1=findDegC(212)
   console.log("Result in degF: " + y1+"C"); 
console.log("--------------------------------------------");    

/* Array Practice Problems
1. Write a program in the following steps
a. Generates 10 Random 3 Digit number. 
b. Store this random numbers into a array. 
c. Then find the 2nd largest and the 2nd smallest element without sorting the array */

let values=10;
let arrayNum=new Array();
let second=new Array();
let first=new Array();
//Generates 10 Random 3 Digit number.
for(let i=0; i<values; i++)
{
    arrayNum[i]=Math.floor(Math.random()*900)+100;
}
console.log("Ten three digit random values are:\n-------------------------------------\n" + arrayNum);
//without sort value find second largest 
for (let i = 0; i < arrayNum.length; ++i) 
{
    if (first < arrayNum[i]) 
    {
        second = first;
        first = arrayNum[i];
    } 
    else if (arrayNum[i] > second && arrayNum[i] != first) 
    {
        second = arrayNum[i];
    }
}
if (second == first)
{
   console.log("There is no second largest element\n");
}
else
{
   console.log("\nThe Second largest element in the array is: "+ second);
}
//without sort find second smallest value 
for (let i = 0; i < arrayNum.length; ++i)
 {
    if (first > arrayNum[i])
     {
        second = first;
        first = arrayNum[i];
     } 
    else if (arrayNum[i] < second && arrayNum[i] != first) 
    {
        second = arrayNum[i];
    }
}
if (second == first)
   {
      console.log("There is no second smallest element\n");
   }
else
{
   console.log("The Second largest element in the array is: "+ second);
}
console.log("-------------------------------------------------------");  

