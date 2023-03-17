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
console.log("--------------------------------------------"); 

//2.Write a program that takes day and month and prints true if day of month is between March 20 and June 20, false otherwise.
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

//3.Write a program that takes a year as input and outputs the Year is a Leap Year or not a Leap Year. A Leap Year checks for 4 Digit Number, Divisible by 4 and not 100 unless divisible by 400.
let year=1987;
if(year % 400 == 0)
{
   console.log(year+" is a Leap year");
}
else if(year % 4 == 0)
{
   console.log(year+" is a Leap year");
}
else if(year % 100 == 0)
{
   console.log(year+" is Not a Leap year");
}
else
{
   console.log(year+" is Not a Leap year");
} 
console.log("--------------------------------------------"); 

//4. Write a program to simulate a coin flip and print out "Heads" or "Tails" accordingly
let head = 0; 
let tail = 0;
let count = 0;
let numflip=5;
while (count < numflip)
{
   let result=Math.floor(Math.random() * 2);
   console.log(result);
   if (result < 1)
   {
       head++;
       console.log("head");
   }
   else
   {
       tail++;
       console.log("tails");
   }
   count++;
}
console.log("Total Number of Heads: " + head);
console.log("Total Number of Tails: " + tail); 
console.log("--------------------------------------------"); 

//Selection Practice Problems with if else if and else
 //1.Read a single digit number and write the number in word 
 let num=Math.floor(Math.random() * 10);
 if(num==0)
 {
    console.log("zero");
 }
 else if(num==1)
 {
    console.log("One");
 }
 else if(num==2)
 {
    console.log("Two");
 }
 else if(num==3)
 {
    console.log("Three");
 }
 else if(num==4)
 {
    console.log("Four");
 }
 else if(num==5)
 {
    console.log("five");
 }
 else if(num==6)
 {
    console.log("six");
 }
 else if(num==7)
 {
    console.log("seven");
 }
 else if(num==8)
 {
    console.log("eight");
 }
 else if(num==9)
 {
    console.log("nine");
 }  
 console.log("--------------------------------------------"); 

 //2.Read a Number and Display the week day (Sunday, Monday,…)
 let dayNumber=Math.floor(Math.random() * 7)+1;

 if(dayNumber==1)
 {
    console.log("Sunday");
 }
 else if(dayNumber==2)
 {
    console.log("Monday");
 }
 else if(dayNumber==3)
 {
    console.log("Tuesday");
 }
 else if(dayNumber==4)
 {
    console.log("Wednesday");
 }
 else if(dayNumber==5)
 {
    console.log("Thrusday");
 }
 else if(dayNumber==6)
 {
    console.log("Friday");
 }
 else if(dayNumber==7)
 {
    console.log("Saturday");
 }
 else
 {
    console.log("Please enter number between 1 to 7 because number of week day are 7");
 } 
 console.log("--------------------------------------------"); 

 //3.Enter 3 Numbers do following arithmetic operation and find the one that is maximum and minimum
 //1. a + b * c        
 let a=10;
 let b=20;
 let c=15;
 let output= a + b * c ;
 console.log("Result1 are : " + output); 

 //2. a % b + c 
 let a1=10;
 let b1=20;
 let c1=15;
 let output1= ((a1 % b1) + c1 );
 console.log("Result2 are : " + output1); 

 //3. c + a / b 
 let a2=10;
 let b2=20;
 let c2=15;
 let output2= (c2 + (a2 / b2));
 console.log("Result3 are : " + output2); 

 //4. a * b + c
 let x=10;
 let y=20;
 let z=15;
 let output3= ((x * y) + z);
 console.log("Result4 are : " + output3); 
 console.log("--------------------------------------------"); 

 //Selection Practice Problems with case statements
//1. Read a single digit number and write the number in word using Case
let number = Math.floor(Math.random()*10);
switch(number)
{
    case 0:
            console.log("Generate random number : "+ number);
            console.log("Word ==> Zero");
            break;
    case 1:
            console.log("Generate random number : "+ number);
            console.log("Word ==> One");
            break;
    case 2:
            console.log("Generate random number : "+ number);
            console.log("Word ==> Two");
            break;
    case 3:
            console.log("Generate random number : "+ number);
            console.log("Word ==> Three");
            break;
    case 4:
            console.log("Generate random number : "+ number);
            console.log("Word ==> Four");
            break;
    case 5:
           console.log("Generate random number : "+ number);
            console.log("Word ==> Five");
            break;
    case 6:
            console.log("Generate random number : "+ number);
            console.log("Word ==> Six");
            break;
    case 7:
            console.log("Generate random number : "+ number);
            console.log("Word ==> Seven");
            break;
    case 8:
            console.log("Generate random number : "+ number);
            console.log("Word ==> Eight");
            break;
    case 9:
            console.log("Generate random number : "+ number);
            console.log("Word ==> Nine");
            break;
} 
console.log("--------------------------------------------"); 

//2. Read a Number and Display the week day (Sunday, Monday,…)

let dayNum = Math.floor(Math.random()*7)+ 1;
switch(dayNum)
{
    case 1:
            console.log("Generate random number : "+ dayNum);
            console.log("Day ==> Sunday");
            break;
    case 2:
            console.log("Generate random number : "+ dayNum);
            console.log("Day ==> Monday");
            break;
    case 3:
            console.log("Generate random number : "+ dayNum);
            console.log("Day ==> Tuesday");
            break;
    case 4:
            console.log("Generate random number : "+ dayNum);
            console.log("Day ==> Wednesday");
            break;
    case 5:
            console.log("Generate random number : "+ dayNum);
            console.log("Day ==> Thrusday");
            break;
    case 6:
           console.log("Generate random number : "+ dayNum);
            console.log("Day ==> Friday");
            break;
    case 7:
            console.log("Generate random number : "+ dayNum);
            console.log("Day ==> Saturday");
            break;
} 
console.log("--------------------------------------------"); 
