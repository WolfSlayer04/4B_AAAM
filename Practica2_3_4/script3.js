function calcularMCD() {
    const num1 = parseInt(document.getElementById("num1").value);
    const num2 = parseInt(document.getElementById("num2").value);

    if (isNaN(num1) || isNaN(num2)) {
        alert("Por favor, ingrese dos números enteros válidos.");
        return;
    }

    const mcd = calcularMCDRecursivo(num1, num2);

    const resultElement = document.getElementById("result");
    resultElement.textContent = `El MCD de ${num1} y ${num2} es: ${mcd}`;
}

function calcularMCDRecursivo(a, b) {
    if (b === 0) {
        return a;
    } else {
        return calcularMCDRecursivo(b, a % b);
    }
}

function limpiarCampos() {
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
    const resultElement = document.getElementById("result");
    resultElement.textContent = "";
}