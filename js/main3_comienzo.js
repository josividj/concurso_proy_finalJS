const alumnos = [];
const numerosAlumno = [];
const numerosPC = [];
const primosPC = [];
const primosAlumno = [];

const inputNombre = document.getElementById('nombre-alumno');
const inputEscuela = document.getElementById('nombre-escuela');
const inputNumeros = document.getElementById('numeros');
const inputNumerosPC = document.getElementById('numeroscompu');
const botonCargar = document.getElementById('cargar');
const formRegistro = document.getElementById('myForm');
const tablaParticipantes = document.getElementById('tabla-participantes');


botonCargar.addEventListener('click', (e) => {
    e.preventDefault();
    if (validarInputs()) {
        const numerosAlumno = cargarNumeros();
        const primosAlumno = obtenerNumerosPrimos(numerosAlumno);
        registrarUsuario(numerosAlumno, primosAlumno);
        cargarNumerosPC();
    } else {        
        Swal.fire({
            title: '¡Algo salió mal!',
            text: 'Ooops!',
            icon: 'error'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: '¡Recuerde ingresar nombre y escuela!',
                    text: 'El nombre solo debe contener caracteres alfabéticos!',
                    icon: 'info'
                });
            }
        });

    }
});

