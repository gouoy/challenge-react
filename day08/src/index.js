import { getRandomName, getRandomEmail } from "./random.js";

const name1 = getRandomName();
const name2 = getRandomName();
const name3 = getRandomName();
console.log(name1, name2, name3); // Chad Lloyd Johanna Clark Nancy Mendoza

const email1 = getRandomEmail();
const email2 = getRandomEmail();
const email3 = getRandomEmail();
console.log(email1, email2, email3); // cowsiv@cagaz.ms pu@owwewmob.mo av@sot.mk 


/*
실행 결과 
> day08@1.0.0 start
> node src/index.js

Chad Lloyd Johanna Clark Nancy Mendoza
cowsiv@cagaz.ms pu@owwewmob.mo av@sot.mk

*/