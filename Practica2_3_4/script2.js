// Objeto para almacenar los resultados ya calculados
const memo = {};

function fibonacci(n) {
    if (n <= 1) {
        return n;
    } else if (memo[n]) {
        // Si ya hemos calculado el término, lo retornamos desde la memoria
        return memo[n];
    } else {
        // Calculamos el término y lo almacenamos en la memoria
        memo[n] = fibonacci(n - 1) + fibonacci(n - 2);
        return memo[n];
    }
}

function generateFibonacci() {
    const n = parseInt(document.getElementById("n").value);

    if (isNaN(n) || n < 1) {
        alert("Por favor, ingrese un número válido mayor o igual a 1.");
        return;
    }

    const resultElement = document.getElementById("result");
    resultElement.textContent = "Serie de Fibonacci:";

    for (let i = 0; i < n; i++) {
        const term = fibonacci(i);
        resultElement.textContent += " " + term;

        // Detener la generación cuando alcanza el término deseado
        if (term >= n) {
            break;
        }
    }
}

function clearResults() {
    const resultElement = document.getElementById("result");
    resultElement.textContent = "";
    document.getElementById("n").value = "";
}