let buttonsIncrease = document.querySelectorAll(".btnIncrease");
let buttonsReduce = document.querySelectorAll(".btnReduce");
const allInputs = document.querySelectorAll("input[data-price]");
const sumaTotal = document.querySelector("#total-price--total");
const shipping = document.getElementById("shipping").innerText;
const priceShipping = shipping.split("$");



for (const button of buttonsIncrease) {
    button.addEventListener("click", addBtnSuma );
}

for (const button of buttonsReduce) {
    button.addEventListener("click", addBtnResta );
}

for (const inputElement of allInputs) {
    inputElement.addEventListener("change", inputValidation);
}



function addBtnSuma (event) {
    const idInput = event.target.dataset.input;
    document.querySelector("#" + idInput).value = parseInt(document.querySelector("#" + idInput).value) + 1;
    recorridoInputs();
    
}

function addBtnResta (event) {
    const idInput = event.target.dataset.input;
    document.querySelector("#" + idInput).value = parseInt(document.querySelector("#" + idInput).value) - 1;
    recorridoInputs();
    inputValidation(idInput, event)
}

function inputValidation (idInput, eventButton ) {
    console.log(parseInt(document.querySelector("#" + idInput).value))

    if (parseInt(document.querySelector("#" + idInput).value) === 0) {
        console.log(eventButton)
        eventButton.target.disable = false;
    } else {
        eventButton.target.disable = true;
    }
}


function recorridoInputs () {
    let totalProduct = 0;
    
    for (const inputSelector of allInputs) {
        let productPrice = parseFloat(inputSelector.dataset.price);
        let productCount = inputSelector.value;
        totalProduct = totalProduct + productCount * productPrice;

    }
    if (totalProduct === 0) {
        totalProduct = 0;
    } else{
        totalProduct = parseFloat(totalProduct + parseFloat(priceShipping[1]));
    }
    
    sumaTotal.innerHTML = "$" + totalProduct.toFixed(2); 
    
}



