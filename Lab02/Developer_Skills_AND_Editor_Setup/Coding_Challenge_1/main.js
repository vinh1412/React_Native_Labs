function printForecast(arr){
    let str='';
    for(let i=0; i<arr.length; i++){
        str+=`${arr[i]}°C in ${i+1} days... `;
    }
    console.log('...'+str);
}

// Test data 1
arr1=[17, 21, 23];
(printForecast(arr1));
// Test data 2
arr2=[12, 5, -5, 0, 4];
printForecast(arr2);