/*
  Input: 0.67
  Output:
  {
    quarters: 2,
    dimes: 1,
    nickels: 1,
    pennies: 2
  }

*/
let input =document.getElementById("input");
let button=document.getElementById("button");
let output = document.getElementById("output");

button.removeEventListener("click", coinCounter);

function coinCounter (input) {
    // Initialize a JavaScript object to hold the coins
    console.log(Math.floor(input.value /.25));
    var coinPurse = {};
    
    var inputFix =input.value *100;

    coinPurse.quarters = Math.floor(inputFix.value /.25);
    
    coinPurse.dimes =Math.floor((inputFix.value % .25) / .10);
    coinPurse.nickels=Math.floor(((inputFix.value % .25) % .10)/.05);
    coinPurse.pennies=Math.floor((((inputFix.value % .25) %.10) %.05)) *100;
    return coinPurse;
  }
  
  var coins = coinCounter()
  console.log();