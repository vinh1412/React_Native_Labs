var markMass1 = 78;
var markHeight1 = 1.69;
var johnMass1 = 92;
var johnHeight1 = 1.95;


var markMass2 = 95;
var markHeight2 = 1.88;
var johnMass2 = 85;
var johnHeight2 = 1.76;

var markBMI1 = markMass1 / (markHeight1 ** 2);
var johnBMI1 = johnMass1 / (johnHeight1 ** 2);

var markBMI2 = markMass2 / (markHeight2 ** 2);
var johnBMI2 = johnMass2 / (johnHeight2 ** 2);

var markHigherBMI1 = markBMI1 > johnBMI1;
var markHigherBMI2 = markBMI2 > johnBMI2;

if (markHigherBMI1) {
    console.log(`Mark's BMI (${markBMI1.toFixed(2)}) is higher than John's (${johnBMI1.toFixed(2)})!`);
} else {
    console.log(`John's BMI (${johnBMI1.toFixed(2)}) is higher than Mark's (${markBMI1.toFixed(2)})!`);
}

if (markHigherBMI2) {
    console.log(`Mark's BMI (${markBMI2.toFixed(2)}) is higher than John's (${johnBMI2.toFixed(2)})!`);
}
else {
    console.log(`John's BMI (${johnBMI2.toFixed(2)}) is higher than Mark's (${markBMI2.toFixed(2)})!`);
}
