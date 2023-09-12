// Clase base para las figuras geométricas
class FiguraGeometrica {
    constructor() {
        this.nombre = '';
    }

    calcularArea() {}

    calcularPerimetro() {}
}

// Clase para el rectángulo
class Rectangulo extends FiguraGeometrica {
    constructor(base, altura) {
        super();
        this.nombre = 'Rectángulo';
        this.base = base;
        this.altura = altura;
    }

    calcularArea() {
        return this.base * this.altura;
    }

    calcularPerimetro() {
        return 2 * (this.base + this.altura);
    }
}

// Clase para el círculo
class Circulo extends FiguraGeometrica {
    constructor(radio) {
        super();
        this.nombre = 'Círculo';
        this.radio = radio;
    }

    calcularArea() {
        return Math.PI * this.radio ** 2;
    }

    calcularPerimetro() {
        return 2 * Math.PI * this.radio;
    }
}

// Clase para el cuadrado
class Cuadrado extends FiguraGeometrica {
    constructor(lado) {
        super();
        this.nombre = 'Cuadrado';
        this.lado = lado;
    }

    calcularArea() {
        return this.lado ** 2;
    }

    calcularPerimetro() {
        return 4 * this.lado;
    }
}

// Clase para el triángulo
class Triangulo extends FiguraGeometrica {
    constructor(base, altura, ladoA, ladoB, ladoC) {
        super();
        this.nombre = 'Triángulo';
        this.base = base;
        this.altura = altura;
        this.ladoA = ladoA;
        this.ladoB = ladoB;
        this.ladoC = ladoC;
    }

    calcularArea() {
        return (this.base * this.altura) / 2;
    }

    calcularPerimetro() {
        return this.ladoA + this.ladoB + this.ladoC;
    }
}

// Función para manejar el cambio de selección de figura
function handleShapeChange() {
    const shapeSelector = document.getElementById('shape');
    const selectedShape = shapeSelector.value;

    const inputFields = document.getElementById('inputFields');
    inputFields.innerHTML = ''; // Limpia los campos de entrada previos

    const resultElement = document.getElementById('result');
    resultElement.innerHTML = ''; // Limpia el resultado anterior

    // Crea y agrega campos de entrada específicos según la figura seleccionada
    if (selectedShape === 'rectangulo') {
        inputFields.innerHTML = `
            <label for="base">Base:</label>
            <input type="number" id="base" required>
            <label for="altura">Altura:</label>
            <input type="number" id="altura" required>
        `;
    } else if (selectedShape === 'circulo') {
        inputFields.innerHTML = `
            <label for="radio">Radio:</label>
            <input type="number" id="radio" required>
        `;
    } else if (selectedShape === 'cuadrado') {
        inputFields.innerHTML = `
            <label for="lado">Lado:</label>
            <input type="number" id="lado" required>
        `;
    } else if (selectedShape === 'triangulo') {
        inputFields.innerHTML = `
            <label for="base">Base:</label>
            <input type="number" id="base" required>
            <label for="altura">Altura:</label>
            <input type="number" id="altura" required>
            <label for="ladoA">Lado A Izquierda:</label>
            <input type="number" id="ladoA" required>
            <label for="ladoB">Lado B Derecha:</label>
            <input type="number" id="ladoB" required>
            <label for="ladoC">Lado C Base:</label>
            <input type="number" id="ladoC" required>
        `;
    }
}

// Función para calcular y mostrar resultados
function calcularResultado() {
    const shapeSelector = document.getElementById('shape');
    const selectedShape = shapeSelector.value;

    let figura;

    // Crea una instancia de la figura seleccionada y calcula el área y el perímetro
    if (selectedShape === 'rectangulo') {
        const base = parseFloat(document.getElementById('base').value);
        const altura = parseFloat(document.getElementById('altura').value);
        figura = new Rectangulo(base, altura);
    } else if (selectedShape === 'circulo') {
        const radio = parseFloat(document.getElementById('radio').value);
        figura = new Circulo(radio);
    } else if (selectedShape === 'cuadrado') {
        const lado = parseFloat(document.getElementById('lado').value);
        figura = new Cuadrado(lado);
    } else if (selectedShape === 'triangulo') {
        const base = parseFloat(document.getElementById('base').value);
        const altura = parseFloat(document.getElementById('altura').value);
        const ladoA = parseFloat(document.getElementById('ladoA').value);
        const ladoB = parseFloat(document.getElementById('ladoB').value);
        const ladoC = parseFloat(document.getElementById('ladoC').value);
        figura = new Triangulo(base, altura, ladoA, ladoB, ladoC);
    }

    const resultadoArea = figura.calcularArea();
    const resultadoPerimetro = figura.calcularPerimetro();

    const resultElement = document.getElementById('result');
    resultElement.innerHTML = `
        <p>Nombre de la figura: ${figura.nombre}</p>
        <p>Área: ${resultadoArea.toFixed(2)}</p>
        <p>Perímetro: ${isNaN(resultadoPerimetro) ? 'No se puede calcular' : resultadoPerimetro.toFixed(2)}</p>
    `;
}

// Manejadores de eventos
document.getElementById('shape').addEventListener('change', handleShapeChange);
document.getElementById('calculateButton').addEventListener('click', calcularResultado);

// Llama a handleShapeChange una vez para configurar los campos de entrada inicialmente
handleShapeChange();