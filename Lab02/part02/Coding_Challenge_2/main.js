let calcTip=(bill)=>bill>=50 && bill<=300 ? bill*0.15 : bill*0.2;

// Test data
let bill_100=calcTip(100);
console.log(`The bill was 100, the tip was ${bill_100}, and the total value ${100+bill_100}`);

// Test data
let bills=[125, 555, 44];
let tips=[calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
let total=[bills[0]+tips[0], bills[1]+tips[1], bills[2]+tips[2]];
console.log(`The bills were ${bills}, the tips were ${tips}, and the total values ${total}`);
