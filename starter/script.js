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
*/


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