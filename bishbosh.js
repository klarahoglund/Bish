const btn = document.querySelector('#btn')
let i = document.querySelector('#lowNumber');
let hightNumber = document.querySelector('#hightNumber');
let firstNumber = document.querySelector('#firstNumber');
let secondNumber = document.querySelector('#secondNumber');

btn.addEventListener('click', calculateBishBosh);

function calculateBishBosh() {
    let i = document.querySelector('#lowNumber').value;
    let hightNumber = document.querySelector('#hightNumber').value;
    let firstNumber = document.querySelector('#firstNumber').value;
    let secondNumber = document.querySelector('#secondNumber').value;
    let output = document.querySelector('#output');
    let result = new Array();

    do {

        if (dividableBy3(i, firstNumber) && (!dividableBy4(i, secondNumber))) {

            result.push("Bish");
        }
        if ((!dividableBy3(i, firstNumber)) && dividableBy4(i, secondNumber)) {
            result.push("Bosh");
        }
        if (dividableBy3(i, firstNumber) && dividableBy4(i, secondNumber)) {
            result.push("Bish-Bosh");
        }
        if ((!dividableBy3(i, firstNumber)) && (!dividableBy4(i, secondNumber))) {
            result.push(i);
        }

        i++;
    } while (i < (hightNumber))
    output.innerHTML = result.join(", ");

}

function dividableBy3(i, firstNumber) {
    if (i % firstNumber == 0) {
        return true;
    }
    else return false;

}
function dividableBy4(i, secondNumber) {
    if (i % secondNumber == 0) {
        return true;
    }

}