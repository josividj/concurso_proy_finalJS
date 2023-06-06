alumnos = [];
numerosAlumno = [];
primosPC = [];

function esPrimo(numero) {
    for (let i = 2; i < numero; i++) {
        if (numero % i === 0) {
            return false;
        }
    }
    return numero !== 1;
}

function obtenerNumerosPrimos(numeros) {
    const numerosPrimos = [];
    for (let i = 0; i < numeros.length; i++) {
        if (esPrimo(numeros[i])) {
            numerosPrimos.push(numeros[i]);
        }
    }
    return numerosPrimos;
}

function registrarUsuario(numerosAlumno, primosAlumno) {
    const numerosPC = JSON.parse(localStorage.getItem('numerosPC'));
    const nuevoAlumno = new Alumno(inputNombre.value, inputEscuela.value, numerosAlumno, primosAlumno, numerosPC, primosPC);
    alumnos.push(nuevoAlumno);
    localStorage.setItem('alumnos', JSON.stringify(alumnos));
}

function actualizarNumerosElegidos(numeros) {
    inputNumeros.placeholder = numeros.join(', ');
}

function actualizarNumerosPC(numero) {
    inputNumerosPC.placeholder = numero.join(', ');
}


function cargarNumeros() {
    for (let i = 0; i < 5; i++) {
        let numero = parseInt(prompt("Ingrese un número entre 100 y 900"));
        while (isNaN(numero) || numero < 100 || numero > 900) {
            numero = parseInt(prompt("El número ingresado no es válido. Ingrese un número entre 100 y 900"));
        }
        numerosAlumno.push(numero);
    }
    actualizarNumerosElegidos(numerosAlumno);
    localStorage.setItem('numerosAlumno', JSON.stringify(numerosAlumno));
    return numerosAlumno;
}


function cargarNumerosPC() {
    for (let i = 0; i < 5; i++) {
        let numeroCompu = Math.round(Math.random() * (900 - 100) + 100);
        numerosPC.push(numeroCompu);
    }
    console.log(numerosPC);
    actualizarNumerosPC(numerosPC);
    localStorage.setItem('numerosPC', JSON.stringify(numerosPC));
    return numerosPC;
}

function validarInputs() {
    const nombre = inputNombre.value.trim();
    const escuela = inputEscuela.value.trim();

    if (nombre === '' || escuela === '') {
        return false; // Retorna falso si alguno de los campos está vacío
    }

    const soloCaracteresNombre = /^[A-Za-z\s]+$/;
    const soloCaracteresEscuela = /^[A-Za-z0-9\s]+$/;

    if (!soloCaracteresNombre.test(nombre) || !soloCaracteresEscuela.test(escuela)) {
        return false; // Retorna falso si alguno de los campos contiene caracteres no permitidos
    }

    return true; // Retorna verdadero si ambos campos cumplen con las condiciones
}

function recuperarAlumnos() {
    const alumnosGuardados = JSON.parse(localStorage.getItem('alumnos'));
    if (alumnosGuardados) {
        let alumnos = alumnosGuardados;
        return alumnos;
    } else {
        return [];
    }
}

function limpiarFormulario(form) {
    form.reset();
    localStorage.clear();
    inputNombre2.placeholder = '';
    numerosPC.length = 0;
    inputPrimosAlumnos.placeholder = '';
    inputPrimosPC.placeholder = '';

    alumnos.length = 0;
    numerosAlumno.length = 0;
    numerosPC.length = 0;
}

const apiKey = '495bee143c6358e72c8c4534b98c19a8'

function obtenerDatosClima() {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=Pilar,Buenos%20Aires,Argentina&appid=${apiKey}`)
        .then((response) => response.json())
        .then(data => {
            console.log(data);
            const temperatura = data.main.temp;
            const temperaturaCelsius = temperatura - 273.15;
            console.log(temperaturaCelsius);
            const elementoTemperatura = document.getElementById('temperatura');
            elementoTemperatura.textContent = temperaturaCelsius.toFixed(2);            
        })  
        .catch(error => {
            console.log('Error', error);
        });
}

