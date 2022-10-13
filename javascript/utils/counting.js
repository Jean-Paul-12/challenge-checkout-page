



const btnsReduce = document.querySelectorAll(".btnReduce")//.addEventListener("click",reduce);
const btnsIncrease = document.querySelectorAll(".btnIncrease")//.addEventListener("click",increase);


function reduce (event){
    event.target.parentNode.querySelector(".msgValue").stepDown()
}

function increase (event){
    event.target.parentNode.querySelector(".msgValue").stepUp()
}

for (let i = 0; i < btnsReduce.length; i++){
    btnsReduce[i].addEventListener("click",function(event){
        reduce(event)
        console.log(event.target.parentNode.querySelector(".msgValue").value)
    });
}

for (let i = 0; i < btnsReduce.length; i++){
    btnsIncrease[i].addEventListener("click",function(event){
        increase(event)
        console.log(event.target.parentNode.querySelector(".msgValue").value)
    });
}


