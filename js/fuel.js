
let btn = document.querySelector('#fuel-btn');
let input1 = document.querySelector('#input1');
let input2 = document.querySelector('#input2');
let input3 = document.querySelector('#res');

btn.addEventListener('click', function getRemainingFuel() {
    return input3.value =  Math.floor(Number(input1.value) * ( Number(input2.value) / 100 ));
}
)







