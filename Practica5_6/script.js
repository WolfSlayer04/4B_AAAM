function calculateChange() {
    const denominations = [100, 50, 20, 10, 5, 1, 0.5, 0.2, 0.01];
    const total = parseFloat(document.getElementById('total').value);
    const amountGiven = parseFloat(document.getElementById('amountGiven').value);
    let change = amountGiven - total;
    const result = [];

    if (change < 0) {
        document.getElementById('result').innerText = "La cantidad entregada es insuficiente.";
        return;
    }

    for (const denomination of denominations) {
        const count = Math.floor(change / denomination);
        if (count > 0) {
            result.push(`${count} moneda(s) de ${denomination} pesos`);
            change -= count * denomination;
            change = parseFloat(change.toFixed(2));
        }
    }

    if (change > 0) {
        result.push(`${change} pesos en cambio que no se pueden dar con monedas.`);
    }

    document.getElementById('result').innerText = `Cambio: ${amountGiven} - ${total} = ${amountGiven - total} pesos\n\n${result.join('\n')}`;
}

function clearInput() {
    document.getElementById('total').value = '';
    document.getElementById('amountGiven').value = '';
    document.getElementById('result').innerText = '';
}


function goToIndexPage() {
    window.location.href = "index2.html";
}