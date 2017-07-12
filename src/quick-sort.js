'use strict';

function quickSort(input) {
    if(input == null){
        throw "err";
    }
    
    if(!(input  instanceof Array)){
        throw "Invalid Argument. Accpets only arrays";
    }
    
    if(input.length <= 1){
        return input;
    }
    
    var pivot = input[0];
    var left =[];
    var right = [];
    
    for(var i = 1; i< input.length; i++){
        input[i] < pivot ? left.push(input[i]) : right.push(input[i]);        
    }
    
    return quickSort(left).concat(pivot, quickSort(right));
};
module.exports = quickSort;