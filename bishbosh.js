const btn = document.querySelector('#btn')
let i = document.querySelector('#lowNumber').value;
let hightNumber = document.querySelector('#hightNumber').value;
let firstNumber = document.querySelector('#firstNumber').value;
let secondNumber = document.querySelector('#secondNumber').value;

btn.addEventListener('click', calculateBishBosh);

function calculateBishBosh() {
    do {

        if ((dividableBy3(i)) && (!dividableBy4(i))) {

            console.log("Bish, ");
        }
        if ((!dividableBy3(i)) && (dividableBy4(i))) {
            console.log("Bosh, ")
        }
        if ((dividableBy3(i)) && (dividableBy4(i))) {
            console.log("Bish-Bosh")
        }
        if ((!dividableBy3(i)) && (!dividableBy4(i)))
            console.log(i);

        i++;
    } while (i < 100)
}

function dividableBy3(i) {
    if (i % firstNumber == 0) {
        return true;
    }
    else return false;

}
function dividableBy4(i) {
    if (i % secondNumber == 0) {
        return true;
    }

}