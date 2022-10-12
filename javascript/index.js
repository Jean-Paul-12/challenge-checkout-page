document.querySelector("#btnReduce").addEventListener("click",reduce);
document.querySelector("#btnIncrease").addEventListener("click",increase);

let i = 1;

function reduce (){
    i = i - 1; 
    document.querySelector("#msgValue").innerHTML = i
}

function increase (){
    i = i + 1; 
    document.querySelector("#msgValue").innerHTML = i
}