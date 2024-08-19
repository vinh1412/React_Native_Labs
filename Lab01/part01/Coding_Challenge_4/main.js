function calculateTotal(bill){
    var tip=bill>=50 && bill<=300 ? bill*0.15 : bill*0.20;  
    var total=bill+tip;
    console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${total}`);
}
// Test for bill values 275
calculateTotal(275);
// Test for bill values 40
calculateTotal(40);
// Test for bill values 430
calculateTotal(430);