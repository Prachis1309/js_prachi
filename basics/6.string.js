const gamename="Prachi"
const gamename1=new String("Prachi")//convert gamename1 as a object means stroe in heap
console.log(gamename[0])
console.log(gamename1[0])
console.log(gamename1.__proto__)

console.log(gamename1.toUpperCase())
console.log(gamename1.substring(0,4))
//slics can have -ve value and start from end
//substring ignore -ve and start from 0
//trim remove whitespace 


// *******************************
const name = "hitesh"
const repoCount = 50

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('hitesh-hc-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'));