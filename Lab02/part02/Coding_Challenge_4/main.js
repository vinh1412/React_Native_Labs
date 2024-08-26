let calcTip=(bill)=>bill>=50 && bill<=300 ? bill*0.15 : bill*0.2;

// Test data
let bills=[22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
let tips=[];
let totals=[];
for(let i=0; i<bills.length; i++){
    tips.push(calcTip(bills[i]));
    totals.push(bills[i]+tips[i]);
    console.log(`The bill was ${bills[i]}, the tip was ${tips[i]}, and the total value ${totals[i]}`);
}

//Bonus
function calcAverage(arr){
    let sum=0;
    for(let i=0; i<arr.length; i++){
        sum+=arr[i];
    }
    return sum/arr.length;
}
console.log(`Average of totals: ${calcAverage(totals)}`);