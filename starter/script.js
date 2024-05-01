/*

let js ="Amazing";
console.log(40+8+16-19);

let firstName = "Amodh"; //Declaring a variable
console.log(firstName);

javascriptIsFun ='YES';
console.log(typeof javascriptIsFun);
let year;
console.log(year);
console.log(typeof year); 
year=2024;
console.log(typeof year);
console.log(typeof null);



const now=2030;
const ageAmodh=now-2002;
const ageUser=now-2015;
console.log(ageAmodh,ageUser);

console.log(ageAmodh*2,ageUser/10,2**3);
// 2**3 means 2 to the power of 3 = 2*2*2
const firstName='Amodh';
const lastName='Nepal';
console.log(firstName+' '+lastName);




const fistName='Amodh';
const job='teacher';
const birthYear =1991;
const year=2037;
const amodh="I'm" +fistName+ ', a'+(year-birthYear)+ " years old " +job+ "!";
console.log(amodh);
// alt of writing strings
const amodhNew =`I'm ${firstName}, a ${year-birthYear} year old ${job}!`;
console.log(amodhNew);


// Taking Decisons:if/else Statements

const age=19;
const ifOldEnough = age>=18;
if(ifOldEnough){
    console.log('You are old enough to get a driving license');
}else{
    const yearsLeft=18-age;
    console.log('Age requirement not met. Wait for' +yearsLeft+  ' more years');
}


const birthYear=1991;
let century;
if(birthYear<=2000){
   century=20;
}else{
   century=21;
}
console.log(century);


// Type coversion 
const inputYear='1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear)+18);

console.log(Number('Jonas'));    // NaN is Not a Number
console.log(typeof NaN);
console.log(String(23),23);

// type coercion
console.log('I am' +23+ ' Years Old'); 
console.log('23'-'10'-3);
console.log('23'/'2');    

let n='1'+1;
n=n-1;
console.log(n);


// Truthy and Falsey  values in JavaScript

console.log(Boolean(0));         // false
console.log(Boolean(undefined));  // false
console.log(Boolean(''));  // false
console.log(Boolean(Jonas));          // true
console.log(Boolean({}));            // true

const money = 0;
if(money) {
    console.log("Don't spend it a;;!");
}else{
    console.log('You should get a job!');
}



const age='18';
if(age===18) console.log('You are an adult!(Strict)');

if(age==18) console.log('You just became and adult(Loose)');   

const favourite = prompt("What's your favourite number?");
console.log(favourite);
console.log(typeof favourite);
if(favourite == 23){  //It will do type coercion so always use strict eqality operator i.e ===
    console.log('Cool! 23 is an amazinmg number!');
}
if(favourite !==23) console.log('WHy not 7?');


const hasDriversLicense=true;
const hasGoodVision =false;
console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense );


// if(hasDriversLicense && hasGoodVision){ 
//     console.log('Get behind the wheel!');}
// else{
//     console.log('Someone else should drive');
// }

const isTired=false;
console.log(hasDriversLicense && hasGoodVision && isTired); 

if(hasDriversLicense && hasGoodVision && !isTired){ 
    console.log('Get behind the wheel!');}
else{
    console.log('Someone else should drive');
}


const day='monday';
switch(day){
    case 'monday': //day === 'monday'
        console.log('Plan course structure');
        console.log('Go to coding meetup');
        break;
        case 'tuesday':
            console.log('Prepare theory videos');
            break;
            case 'wednesday':
                case 'thursday':
                    console.log('Write code examples');
                    break;
                    case 'friday':
                        console.log('Record videos');
                        break;
                        case 'saturday':
                            case 'sunday':
                                console.log('Relax and  have fun');
                                break;
                                default:
                                    console.log('Not a valid day');
}
*/
// Conditional(Ternary) Operator 
const age=23;
age>=18 ? console.log('I like to drink wine'):
console.log('I like to drink water');


const drink =age>=18? 'wine': 'water';
console.log(drink);
let drink2;
if(age>=18){
    drink2= 'wine';
}else{
    drink2='water';
}
console.log(drink2);

console.log(`I like to drink ${ age>=18 ? 'wine' : 'water'}`);