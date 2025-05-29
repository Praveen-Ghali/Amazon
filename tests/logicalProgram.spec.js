// function checkPrimeNum(num){
//     let count=0;
//     for(let i=1; i<=num; i++){
//         if(num%i==0){
//             count++;
//         }
//     }
//     if(count==2 && num!=1){
//         console.log(`${num} is a prime number`)
//     }
//     else{
//         console.log(`${num} is not a prime number`)
//     }
// }
// checkPrimeNum(112)
// checkPrimeNum(29)
// checkPrimeNum(2)

//PRINT FACTORS OF NUMBER
// let num=20
// for(let i=1; i<=num; i++){
//     if(num%i==0){
//         console.log(i)
//     }
// }

//FIND FACTORIAL OF GIVEN NUMBER
// let num=4;
// let fact=1;
// for(let i=num; i>=1; i--){
//     fact=fact*i
// }
// console.log(fact)

//PRINT 10 FIBONACCI SERIES
// let a=0;
// let b=1;
// console.log(a)
// console.log(b)
// for(let i=1; i<=8; i++){
//     let sum=a+b;
//     console.log(sum)
//     a=b;
//     b=sum
// }

//SELECT THE EMPLOYEE HAVING SALARY MORE THAN 25000
// let employee = [
//     {name: "Praveen",age: 27,sal: 15000},
//     {name: "Madhukumar",age: 15,sal: 35000},
//     {name: "Narahari",age: 30,sal: 45000}];
// for(let i=0; i<employee.length; i++){
//     if(employee[i].sal>25000){
//         console.log(employee[i])
//     }
// }

//SEPARATE VOWELS AND CONSONANTS FROM THE STRING
// let str="Javascript"
// let vowelSet="aeiou"
// let str1=str.toLowerCase()
// let vowels=""
// let consonants=""
// for(let i=0; i<str1.length; i++){
//     if(vowelSet.includes(str1[i])){
//         vowels+=str1[i]
//     }
//     else{
//         consonants+=str1[i]
//     }
// }
// console.log(vowels)
// console.log(consonants)

//LARGEST ELEMENT PRESENT IN AN  ARRAY
// let a=[5,6,7,1,2,10,25,41,100,155]
// console.log(Math.max(...a))
// let large=a[0]
// for(let i=0; i<a.length; i++){
//     if(a[i]>large){
//         large=a[i]
//     }
// }
// console.log(large)

// //SUM OF ELEMENTS PRESENT IN AN ARRAY
// let a=[1,2,3,4,5,6]
// let sum=0
// for(let s of a){
//     sum+=s
// }
// console.log(sum)

//SUM OF THE EVEN ELEMENTS PRESENT IN AN ARRAY
//  let a=[1,2,3,4,5,6]
// let sum=0;
// for(let s of a ){
//     if(s%2==0){
//         sum+=s
//     }
// }
// console.log(sum)

//FIND THE AVEARAGE OF ELEMENTS PRESENT IN AN ARRAY   
// let a=[10,20,30,40,50]
// let avg=0;
// for( let a1 of a){
//     avg+=a1
// }
// console.log(avg);

//WAP TO SEPARATE ALPHABETS FROM THE URL
// let str="https://www.programiz.com123/javascript/online-compiler/"
// console.log(str.replace(/[^a-zA-Z]/g,''))

//PRINT THE CONSECUTIVE NUMBERS 
// let num = 9975612389;
// let numStr=num.toString()
// console.log(typeof numStr);
// for(let i=0; i<numStr.length-1; i++){
//     let curr=parseInt(numStr[i])
//     let next=parseInt(numStr[i+1])
//     let next1=parseInt(numStr[i+2])
//     if((curr+1===next)){
//         console.log(`${curr},${next}`)
//     }
//     if(curr+1===next || next+1===next1){
//          console.log(`${curr},${next},${next1}`)
//     }
// }


//REMOVE DUPLICATES FROM THE STRING
// let str='MADHUKUMAR'
// let str1="";
// let str2="";
// for(let i=0; i<str.length; i++){
//     if(!str1.includes(str[i]))
//         str1+=str[i]
//     else{
//         str2+=str[i]
//     }
// }
//console.log(str1)  //MADHUKR: string without duplicates 
//console.log(str2);  //UMA: duplicates in the string


//WAP TO PRINT UNIQUE DIGITS AND DUPICATE DIGITS
// let num = 997561238988;
// let numStr=num.toString()
// let uniqueNum=[]
// let duplicateNum=[]
// for(let i=0; i<numStr.length; i++){
//     if(numStr.indexOf(numStr[i])===i){
//         uniqueNum.push(numStr[i])
//     }
//     else{
//         duplicateNum.push(numStr[i])
//     }
// }
// console.log(uniqueNum.join(''));
// console.log(duplicateNum.join(''))

// let str="Playwright"
// for(let i=0; i<str.length; i++){
//     console.log(str.slice(0, i+1));
    
// }

//FIND SUMMATION OF DIGITS PRESENT IN THE STRING
// let str='123456fgdjcf155'
// let digits=str.replace(/[^0-9]/g,'')
// let sum=0;
// for(let s of digits){
//     sum+=parseInt(s)
// }
// console.log(sum)


//TO CHECK NUMBER IS PALINDROME OR NOT
// let num=1331
// let numStr=num.toString()
// let revnumStr=numStr.split('').reverse().join('')
// let revNum=parseInt(revnumStr);
// if(num===revNum){
//     console.log(`${num} is palindrome`);
// }
// else{
//     console.log(`${num} is not a palindrome`);
// }


//TO FIND THE FREQUENCY OF THE ELEMENTS PRESENT INSIDE THEARRAY
// const fruits =["apple","banana","mango","orange","orange","apple"];  
// let result=[]
// for(let i=0; i<fruits.length; i++){
//     if(result[fruits[i]]){
//         result[fruits[i]]++
//     }
//     else{
//         result[fruits[i]]=1
//     }
// }
// console.log(result);

//TO FIND THE FREQUENCY OF THE ELEMENTS PRESENT INSIDE THE ARRAY
// const name1 ="Praveen";  
// let result=[]
// for(let i=0; i<name1.length; i++){
//     if(result[name1[i]]){
//         result[name1[i]]++
//     }
//     else{
//         result[name1[i]]=1
//     }
// }
// console.log(result);


// let arr=[[1,2,3],[4,5,6],[7,8,9]]
// let arr1=arr.flat()
// console.log(arr1)
// console.log(Math.min(...arr1))

// //SEPARATING UPPERCASE AND LOWERCASE FROM THE STRING
// let str='AsdfFSGBDgdsas'
// console.log(str.replace(/[^a-z]/g,''))
// console.log(str.replace(/[^A-Z]/g,''))

//INCREASE THE PRICE BY 10%
// let obj=[{prod:"car",price:1000},
//         {prod:"bus",price:2000},
//         {prod:"train",price:3000}]
// let hike=obj.filter((o)=>{
//     return o.price=o.price+(o.price*0.1)
// })
// console.log(hike)

//MAKE THE FIRST LETTER OF DAY UPPERCASE
// const days = ["monday","tuesday","wednesday","thursday","friday","saturday","sunday "];
// const d1=[]
// for(let i=0; i<days.length; i++){
//     let day=days[i]
//     let d=day[0].toUpperCase()+days[i].slice(1)
//     d1.push(d)
// }
// console.log(d1)

//TO CHECK STRINGS ARE ANAGRAM OR NOT
// let str="Listen"
// let str1="Silent"
// let str2=str.toLowerCase().split('').sort().join('')
// let str3=str1.toLowerCase().split('').sort().join('')
// console.log(str2)
// console.log(str3)
// if(str2===str3){
//     console.log(`${str} and ${str1} are anagrams`)
// }
// else{
//     console.log(`${str} and ${str1} are not anagrams`)
// }

//FIND THE SUM OF THE PRICE 
// let obj=[{product:"Book", price:10},
//         {product:"pen",price:"100"},
//         {price:13},
//         {product:"bag",price:500},
//         {product:"sheets",price:"1"}]
//     let sum=0
// for(let o of obj){
//     let pri=parseInt(o.price)
//     sum+=pri
// }
// console.log(sum)

//FIND THE SUM OF THE PRICE BY USING REDUCE METHOD
// let obj=[{product:"Book", price:10},
//         {product:"pen",price:"100"},
//         {price:13},
//         {product:"bag",price:500},
//         {product:"sheets",price:"1"}]
// let sum=obj.reduce((acc,curr)=>{
//     let p=parseInt(curr.price)
//     acc+=p
//     return acc
// },0)
// console.log(sum)

//Input: ab cb ef
//output:ba cb fe
// let str="ab cd ef”
// let str1=str.split(' ')
// let str3=""
// for(let i=0; i<str1.length; i++){
//     let str2=str1[i].split('')
//     if(i%2===0){
//         let p1=str2.reverse().join("")
//         str3+=p1+" "
    
//     }
//     else{
//         str3+=str2.join('')+" "
//     }
// }
// console.log(str3)

//REVERSE EACH WORDS IN THE SENTENCE
// let s="Hello good morning"
// let s1=s.split(' ')
// let rev=""
// for(let i=0; i<s1.length; i++){
//     let s2=s1[i].split('').reverse().join('')
//     rev+=s2+' '
// }
// console.log(rev)

//REVERSE THE SENTENCE
// let sentence="Hello good morning"
// let s=sentence.split('').reverse().join('')
// console.log(s)


//REMOVE DUPLICATES IN THE INTEGER ARRAY
//by using for loop
// let arr=[1,2,3,1,4,3,9,9,2]	
// let arr1=[]
// for(let s of arr){
//     if(!arr1.includes(s)){
//         arr1.push(s)
//     }
// }
// console.log(arr1)

// console.log(...new Set(arr))


//FIND THE INDEX OF MAXIMUM AND MINIMUM ELEMENTS INDEX
// let arr=[3,4,5,8,10,9,11,13,15,1]
// let maxValue=Math.max(...arr)
// // console.log(maxValue)
// let maxValueIndex=arr.indexOf(maxValue)
// let minValue=Math.min(...arr)
// let minValueIndex=arr.indexOf(minValue)
// console.log(`maximum value is ${maxValue} and its index is ${maxValueIndex}`)
// console.log(`minimum value is ${minValue} and its index is ${minValueIndex}`)

//BUBBLE SORT =>ASCENDING THE ELEMENTS IN ASCENDING ORDER
// function f1(arr){
//     //let n=arr.length;
//     for(let i=0; i<arr.length-1; i++){
//         for(let j=0; j<arr.length-1; j++){
//             if(arr[j]>arr[j+1]){
//                 let temp=arr[j]
//                 arr[j]=arr[j+1]
//                 arr[j+1]=temp
//             }
//         }
       
//     }
//      return arr
// }
// let a=[3,4,5,8,10,9,11,13,15,1]
// console.log(f1(a))
	
// let asc=a.sort((a,b)=>b-a)	
// console.log(asc)

//input: dabDhgjBCJK output: sort only uppercase character and find maximum ASCII value 
// let str="dabDhgjBCJK"
// let str1=str.replace(/[^A-Z]/g,'')
// let uc=str1.split('')
// let uc1=[]
// for(let i=0; i<uc.length; i++){
//     let ascii=uc[i].charCodeAt(0)
//     uc1.push(ascii)
    
// }
// console.log(uc1)
// console.log(Math.max(...uc1))


//PRINT THE FIRST DUPLICATE CHARACTER IN THE STRING
// let str="Hellooorii"
// let str1=''
// for(let i=0; i<str.length; i++){
//     if(!str1.includes(str[i]))
//     str1+=str[i]
//     else{
//         console.log(str[i])
//       break;
//     }
// }


//INPUT: Hello   //OUTPUT: Hello  Hell  Hel  He  H
// let str="Hello"
// let str1=str.split('')
// let str1=""
// for(let i=str.length-1; i>=0; i--){
//     console.log(str.slice(0,i+1))
// }
// for(let s of str1){
//     console.log(s)
// }

//INPUT:abbcccdddde OUTPUT: ab2c3d4e
// let str="abbcccdddde"
// let str1=str.split('')
// let str2=""
// let count=1
// for(let i=0; i<str1.length; i++){
//     if(str1[i]===str1[i+1]){
//         count++
//     }
//     else{
//         str2+=str1[i]
//         if(count>1){
//             str2+=count
//         }
//         count=1
        
//     }
// }
// console.log(str2)


let arr=[1,2,4,2,4,3,5,6,6]
for(let i=0; i<arr.length; i++){
    let count=0;
    for(let j=0; i<arr.length; j++){
        if(arr[i]==arr[j]){
            count++
        }
    }
    if(count===1){
        console.log(arr[i])
    }
}

































































