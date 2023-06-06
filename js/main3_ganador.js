let numerosPC = [];

const inputNombre2 = document.getElementById('nombre-alumno2')
const inputPrimosAlumnos = document.getElementById('primAlumno');
const inputPrimosPC = document.getElementById('primCompu');
const botonReset = document.getElementById('borrar');
const formRegistro = document.getElementById('my-form');
const botonConsultar = document.getElementById('consultar');
const botonContinuar = document.getElementById('seguir');
const consultarBtn = document.getElementById('consultar-btn');
const elementoTemperatura = document.getElementById('temperatura');


consultarBtn.addEventListener('click', (e) => {
    e.preventDefault();
    obtenerDatosClima();
});



botonConsultar.addEventListener('click', (eve) => {
    eve.preventDefault();

    let alumnosGuardados = JSON.parse(localStorage.getItem('alumnos'));
    if (alumnosGuardados) {
        const nombreAlumno = alumnosGuardados[0].nombre;
        let numerosAlumno = JSON.parse(localStorage.getItem('numerosAlumno'));
        const alumnosPrimosGuardados = obtenerNumerosPrimos(numerosAlumno);
        localStorage.setItem('alumnosPrimos', JSON.stringify(alumnosPrimosGuardados));
        const primosAlumno = JSON.parse(localStorage.getItem('alumnosPrimos'));
        console.log(primosAlumno);

        inputNombre2.placeholder = nombreAlumno;

        let numerosPCguardados = JSON.parse(localStorage.getItem('numerosPC'));
        console.log(numerosPCguardados);
        let pcPrimosGuardados = obtenerNumerosPrimos(numerosPCguardados);
        console.log(pcPrimosGuardados);
        localStorage.setItem('pcPrimos', JSON.stringify(pcPrimosGuardados));
        let primosPC = JSON.parse(localStorage.getItem('pcPrimos'));
        console.log(primosPC)

        inputPrimosAlumnos.placeholder = primosAlumno ? primosAlumno.join(', ') : '';
        inputPrimosPC.placeholder = primosPC ? primosPC.join(', ') : '';

        console.log(primosPC.length)
        console.log(primosAlumno.length)



        if ((!primosPC || primosPC.length === 0) && primosAlumno.length !== 0) {
            Swal.fire({
                title: `La computadora no encontró números primos`,
                text: `Por lo tanto, ganó ${nombreAlumno} con ${primosAlumno.length} números primos!!!`,
                icon: "success",
            });

        }

        if ((!primosAlumno || primosAlumno.length === 0) && primosPC.length !== 0) {
            Swal.fire({
                title: `${nombreAlumno} no encontró ningún número primo`,
                text: `Por lo tanto, ganó la computadora con ${primosPC.length} números primos!!!`,
                icon: "success",
            });

        }

        if ((primosPC.length === 0) && (primosAlumno.length === 0)) {
            Swal.fire({
                title: `Hubo empate`,
                text: `entre la computadora y ${nombreAlumno} y ninguno encontró números primos!!!`,
                icon: "success",
            });
        }


        if (primosPC.length !== 0 && primosAlumno.length !== 0) {
            if (primosPC.length > primosAlumno.length) {
                Swal.fire({
                    title: "Ganó la Computadora",
                    text: `Con ${primosPC.length} números primos!!!`,
                    icon: "success",
                });
            } else if (primosPC.length < primosAlumno.length) {
                Swal.fire({
                    title: `Ganó ${nombreAlumno}`,
                    text: `Con ${primosAlumno.length} números primos!!!`,
                    icon: "success",
                });
            } else if (primosPC.length === primosAlumno.length){
                Swal.fire({
                    title: `Hubo empate entre la Computadora y ${nombreAlumno} con ${primosAlumno.length} números primos`,
                    text: "Felicitaciones",
                    icon: "success",
                });
            }
        }
    }
});



botonContinuar.addEventListener('click', (evento) => {
    evento.preventDefault();

    window.location.href = './comienzo.html';
});

botonReset.addEventListener('click', (evento) => {
    evento.preventDefault();
    limpiarFormulario(formRegistro);
    window.location.href = '../index.html';
});