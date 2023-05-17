

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

 while (x < 100) {
     if (x % 2 !== 0){
        console.log(i);
 }

x++;
}

let y =1;

do{
    if (y % 2 !==0){
        console.log(y);
    }

    y++;
} while (y< 100);



let a = 1;

while ( a <= 100){
    let output = "";

    if (a % 3 == 0){
        output += "FIZZ";
    }

    if (a % 5 == 0) {
        output += "BUZZ";
    }

    console.log(`${y} $ {output}`);


    a++;

}


let b = 1;

do {
    let output = "";

    if (b % 3 == 0) {
        output += "FIZZ";
    }

    if ( b % 5 == 0) {
        output += "BUZZ";
    }


    console.log(`${b} ${output}`);

    b++;
} while (b <= 100);



//Exercise 4: Find Value 


let NumberToFind = Math.round((Math.random() * 500)); // creates a random number between 0 and 500
let n = Math.round(Math.random() * (500 - 100) + 100); // creates a random number between 100 and 500

for (i = 1; i <= n; i++){
    if (i == NumberToFind){
    console.log(`Found ${NumberToFind}`);
    break;
 }


 if (i == n) {
  console.log(`Did not find ${numberToFind} within.... 1-${n}.. `);
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



