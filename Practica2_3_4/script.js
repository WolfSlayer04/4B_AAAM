function calculateFactorial() {
    const numberInput = document.getElementById('number');
    const resultElement = document.getElementById('result');

    const number = parseInt(numberInput.value);

    if (isNaN(number)) {
        resultElement.textContent = 'Ingrese un número válido.';
        return;
    }

    if (number < 0) {
        resultElement.textContent = 'El factorial no está definido para números negativos.';
        return;
    }

    const factorial = calculateRecursiveFactorial(number);
    resultElement.textContent = `El factorial de ${number} es ${factorial}`;
}

function calculateRecursiveFactorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * calculateRecursiveFactorial(n - 1);
    }
}

function clearInputAndResult() {
    const numberInput = document.getElementById('number');
    const resultElement = document.getElementById('result');

    numberInput.value = ''; // Borra el valor del campo de entrada
    resultElement.textContent = ''; // Borra el resultado
}