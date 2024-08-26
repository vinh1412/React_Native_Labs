let calcAverage=(a, b, c)=>(a+b+c)/3;

function checkWinner(avgDolphins, avgKoalas){
    if(avgDolphins>=2*avgKoalas){
        console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
    }else if(avgKoalas>=2*avgDolphins){
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
    }else{
        console.log('No team wins');
    }
}

// Test data 1
let avgDolphins1=calcAverage(44, 23, 71);
let avgKoalas1=calcAverage(65, 54, 49);
// Test data 2
let avgDolphins2=calcAverage(85, 54, 41);
let avgKoalas2=calcAverage(23, 34, 27);

checkWinner(avgDolphins1, avgKoalas1);
checkWinner(avgDolphins2, avgKoalas2);