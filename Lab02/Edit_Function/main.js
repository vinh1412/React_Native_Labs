const numbers=[45, 4, 9, -1, 16, 25, -2];

//filter
Array.prototype.myFilter = function(callback) {
    let arr = [];
    for(var index in this){
        // console.log(index);
        if(this.hasOwnProperty(index)){
            var result= callback(this[index], index, this);
              if(result){
                arr.push(this[index]);
              }
        }
    }
    return arr;
};
var resultMyFilter = numbers.myFilter(function(number){
    return number>18;
});
console.log(resultMyFilter);

// some
Array.prototype.mySome=function(callback){
    for(var index in this){
        if(this.hasOwnProperty(index)){
            var result=callback(this[index], index, this);
            if(result){
                return true;
            }
        }
    }
    return false;
}

var resultMySome = numbers.mySome(function(number){
    return number<0;
});
console.log(resultMySome);

// every
Array.prototype.myEvery=function(callback){
    for(var index in this){
        if(this.hasOwnProperty(index)){
            var result=callback(this[index], index, this);
            if(!result){
                return false;
            }
        }
    }
    return true;
}

var resultMyEvery = numbers.myEvery(function(number){
    return number>0;
});
console.log(resultMyEvery);

// find
Array.prototype.myFind=function(callback){
    for(var index in this){
        if(this.hasOwnProperty(index)){
            var result=callback(this[index], index, this);
            if(result){
                return this[index];
            }
        }
    }
    return undefined;
}

var resultMyFind = numbers.myFind(function(number){
    return number<0;
});
console.log(resultMyFind);

// map
Array.prototype.myMap=function(callback){
    let arr=[];
    for(var index in this){
        if(this.hasOwnProperty(index)){
            var result=callback(this[index], index, this);
            if(result){
                arr.push(result);
            }
        }
    }
    return arr;
}

var resultMyMap = numbers.myMap(function(number){
    return number*2;
});
console.log(resultMyMap);

// reduce
Array.prototype.myReduce=function(callback, initialValue){
    let accumulator=initialValue !== undefined ? initialValue: this[0];
    let startIndex=initialValue !== undefined ? 0: 1;
    for(var i=startIndex; i<this.length; i++){
        accumulator=callback(accumulator, this[i], i, this);
    }
    return accumulator;
}
var resultMyReduce= numbers.myReduce(function(acc, element){
    return acc+element;
},0);
console.log(resultMyReduce);
