

// Exercise 1: Ignore Even


for (let i = 0; i < 100; i++)       {
    if (i % 2 == 0) {
        continue;   
    } else {
        console.log(i);
    }
    
}



// Exercise 2: FIZZBUZZ

for ( i = 1; i < 100; i++) {
    if (i % 3 == 0 && i % 5 == 0){
        console.log("FIZZBUZZ");
    }else{
        if(i % 3 == 0 ){
        console.log("FIZZ")
        }
        if (i % 5 == 0) {
            console.log("BUZZ");
        }
}
}

// Exercise 3: Repeat With While and Do/While 

 let x = 1;

 while (x <= 100) {
    let output= "";
    
    if (x % 3 == 0){
        output += "FIZZ";
 }

 if (x % 5 == 0) {
     output += "BUZZ";
 }

 console.log(`${x} ${output}`);

x++;
}

let y =1;

do {

    let output = "";
    
    if (y % 3 ==0){
        output += "FIZZ";
    }

    if (y % 5 == 0){
        output += "BUZZ";

    }

   
console.log(`${y} ${output}`);
 
y++;
} while (y< 100);







//Exercise 4: Find Value 


let numberToFind = Math.round((Math.random() * 500)); // creates a random number between 0 and 500
let n = Math.round(Math.random() * (500 - 100) + 100); // creates a random number between 100 and 500

for ( let i = 1; i <= n; i++){
    if (i == numberToFind){
    console.log(`Found ${numberToFind}`);
    break;
 }


 if (i == n) {
  console.log(`Did not find ${numberToFind} within 1-${n}.. `);
 }
}


// Exercise 5: Customized FIZZBUZZ

let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let end = Math.round(Math.random() * (1000 - 1) + 1);
let start = Math.round(Math.random() * (10 - 1) + 1);


for (i = start; i <= end; i++){
    let output ="";

    if (i % fizzDivisor == 0 ){
        output += "FIZZ"
    }

    if (i % buzzDivisor == 0){
        output += "BUZZ"
    }

    console.log(`${i} ${output}`);
}



