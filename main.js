let result = document.getElementById('result');
let firstParam;
let secondParam;
result.innerHTML = 0;

function setNumber(event) {
    result.innerHTML += event.target.innerHTML;
}

function add() {
    if (!firstParam) {
        firstParam = result.innerHTML;
        result.innerHTML = 0;
    }
}

function equal() {
    if (firstParam) {
        result.innerHTML = +firstParam + +result.innerHTML;
    }
}