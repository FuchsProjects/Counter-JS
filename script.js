var currentNumberWrapper = document.getElementById("currentNumber")
var currentNumber =0;

    if (currentNumber <0){
    } else {
function increment() {
    if (currentNumber <=9) {
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;
    } else { alert ('Você não pode inserir mais que 10')}
}
function decrement() {
    if (currentNumber >= -9){ 
    currentNumber = currentNumber -1;
    currentNumberWrapper.innerHTML = currentNumber;
    } else { alert ('Você não pode inserir menos que -10')}
  }
}

