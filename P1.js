// let num=4;
// let fact=1;
// for(let i=1; i<=num; i++){
//     fact=fact*i
// }
// console.log(fact)

// import { count } from "console";

//PRINT THE CONSECUTIVE NUMBERS 
// let num = 9975612389;
// let numStr=num.toString().split('')
// console.log(numStr)
// for(let i=0; i<numStr.length; i++){
//     let curr=parseInt(numStr[i])
//     let next=parseInt(numStr[i+1])
//     if(curr+1===next){
//         console.log(`${curr},${next}`);
        
//     }
// }

//WAP TO PRINT UNIQUE DIGITS AND DUPICATE DIGITS
// let num = 9975612389;
// let num1=num.toString().split('')
// console.log(num1)
// let unique=[]

// for(let i=0; i<num1.length; i++){
//     if(num1.indexOf(num1[i])===i){
//         unique.push(parseInt(num1[i]))
//         console.log(typeof parseInt(num1[i]));
        
//     }
// }
// console.log(unique)

// let str="Madam1"
// let str1=str.toLowerCase().split('').reverse().join('')
// console.log(str1)

// let a1= [1,4,3,2,6,8,5,3,4]
// let iA1=a1.map((a)=>{
//   return a2=a+0.1*a

// })
// console.log(iA1)

//SEPARATING CHARACTERS AND NUMBERS FROM THE STRING
// let s = "as412cgjhg185"
// let num=''
// let sum=0;
// for(let i=0; i<s.length; i++){
//     if(s[i]>=0 && s[i]<=9){
//        num+= s[i]
//     }
// }
// console.log(num)
// for(let s1 of num){
//   sum+=parseInt(s1)
// }
// console.log(sum)

//REVERSE YOUR NAME
// let str='PRAVEEN'
// let revStr=""
// for(let i=str.length-1; i>=0; i--){
//   revStr+=str[i]
// }
// console.log(revStr)

//CHECK NUMBER IS PRIME OR NOT
// let num=12;
// let count=0;
// for(let i=0; i<=num; i++){
//   if(num%i==0){
//     count++
//   }
// }
// if(count==2 && num!=1){
//   console.log(`${num} is prime`)
// }
// else{
//   console.log(`${num} is not prime`)
// }

//PRINT 10 FIBONACCI SERIES  //OUTPUT: 0,1,1,2,3,5,8,13,21,34
// let n1=0;
// let n2=1;
// console.log(n1);
// console.log(n2);
// for(let i=0; i<=10; i++){
//   let n3=n1+n2;
//   console.log(n3);
//   n1=n2;
//   n2=n3
  
// }

//SELECT THE EMPLOYEE HAVING SALARY MORE THAN 25000
// let employee = [
//     {name: "Praveen",age: 27,sal: 15000},
//     {name: "Madhukumar",age: 15,sal: 35000},
//     {name: "Narahari",age: 30,sal: 45000}];
// const s=employee.filter((f)=>{
//   if(f.sal>=25000){
//     return f
//   }
// })
// console.log(s)

// //SEPARATE VOWELS AND CONSONANTS FROM THE STRING
// let str="Javascript";
// let str1=str.toLowerCase();
// let vowelSet="aeiouAEIOU";
// let vowel="";
// let cons="";
// for(let i=0; i<str1.length; i++){
//   if(vowelSet.includes(str1[i])){
//     vowel+=str1[i]
//   }
//   else{
//     cons+=str1[i]
//   }
// }
// console.log(vowel);
// console.log(cons)

//LARGEST ELEMENT PRESENT IN AN  ARRAY
// let a=[5,6,7,1,2,10,25,41,100,155]
// //console.log(Math.max(...a))
// let large=a[0]
// for(let i=0; i<a.length; i++){
//   if(a[i]>=large){
//     large=a[i];
//   }
// }
// console.log(large);

//COMBINE TWO ARRAYAS AND REMOVING DUPLICATE ELEMENTS
// const array1 = [1, 2, 3, 4,];
// const array2 = [3, 4, 5, 6];
// const array3=array1.concat(array2)
// console.log(array3)

//FIND SUM OF POSITIVE NUMBER IN THE ARRAY BY USING CHAINING METHODS
// let arr=[10,20,-30,-10,50]
// let sum=0;
// for(let i=0; i<arr.length; i++){
//   if(arr[i]>=0){
//     sum+=arr[i]
//   }
// }
// console.log(sum)

//WAP TO SEPARATE ALPHABETS FROM THE URL
// let str="https:/***/www.programiz.com/javascript/online-compiler/"
// let alpha=""
// for(let i=0; i<str.length; i++){
//   if((str[i]>='a' && str[i]<='z') || (str[i]>='A' && str[i]<='Z')){
//     alpha+=str[i]
//   }
// }
// console.log(alpha)

//FACTORIAL OF A GIVEN NUMBER
// let num=4;
// let fact=1;
// for(let i=1;i<=4; i++){
//   fact*=i
// }
// console.log(fact)

//PRINT DUPLICATES FROM THE STRING
// let str='MADHUKUMAR'
// let str1=str.toLowerCase()
// let str2=str1.split('')
// let str3=[]
// for(let i=0; i<str2.length; i++){
//     for(let j=i; j<str2.length-1; j++){
//         if(str2[i]==str2[j+1]){
//             str3.push(str2[i])
//         }
//     }
// }
// console.log(str3.join())

//WAP TO PRINT UNIQUE DIGITS AND DUPICATE DIGITS
// let num = 9975612389;
// let numStr=num.toString();
// let unique=[];
// for(let i=0; i<numStr.length; i++){
//   if(numStr.indexOf(numStr[i])===numStr.lastIndexOf(numStr[i])){
//     unique.push(parseInt(numStr[i]))
//   }
// }
// console.log(unique)

let str="Selenium";
let str1="";
for(let i=0; i<str.length; i++){
str1+=str[i]
console.log(str1)
}















