//SEPARATING CHARACTERS AND NUMBERS FROM THE STRING
let s = "as412cgjhg185"
let num=''
for(let i=0; i<s.length; i++){
    if(s[i]>=0 && s[i]<=9){
       s+= s[i]
    }
}
console.log(num)