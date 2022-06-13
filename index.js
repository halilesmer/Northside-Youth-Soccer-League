const names = ['Jaspreet','Karolina', 'Stian', 'Thomas', 'Yaser'];

console.log(names[ names.length - (names.length -1)])

/* let myAge = 41;
const juliasAge = 41;

if (myAge < juliasAge) {
  console.log("Julia is older than you");
} else if(myAge> juliasAge) {
  console.log('Julia is younger than you');
} else {
  console.log("You have the same age as Julia")
} */


/* let age = 3

if (age > 21) {
  console.log(`You are greater than 21`)
} else{
  console.log(`You are younger than 21`)
  
} */




/* 
let j = 1;
for (;;) {
  console.log(j);
  j += 2;
  if (j > 10) {
    break;
  }
} */




/* function missingWords(s, t) {
  let missing = [];

  let a = s.split(" ");
  let b = t.split(" ");

  a.forEach((word, i) => {
    /* asagidaki '- missing.length' ne ise yariyor? 
    if (word !== b[i - missing.length]) {
        //console.log('missing',missing);  //why complete always
        console.log("i", word, [i]);
        console.log("b", b[i]);
      console.log("missing ", missing);

console.log("b+ -miss.lenth", [i - missing.length]);
        missing.push(word)
    }
  });

  return missing;
}

console.log(
  "result",
  missingWords(
    "I am using hackerrank to improve programming am",

    "am hackerrank to improve"
  )
); */
/* 
      console.log("b+ -miss.lenth", b[i - missing.length]);
      console.log("i", [i]); //each i doesnt matched
      console.log("b-i", b[i]); 

      // why is missing length undefined??
      console.log("missing lenth", missing.length); */
