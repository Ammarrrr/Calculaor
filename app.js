function getNum(num) {
    document.getElementById('result');
    result.value += num;
}

function btnClear() {
    document.getElementById('result');
    result.value = '';   
}

function getResult() {
    document.getElementById('result');
    result.value = eval(result.value)
}