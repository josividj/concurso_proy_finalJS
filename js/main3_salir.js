document.addEventListener('DOMContentLoaded', () => {
    const script = document.createElement('script');
    script.src = '../js/promises.js';
    script.onload = mostrarParticipantes; // Llama a mostrarParticipantes después de que se cargue el script
    document.head.appendChild(script);
});

let numerosPC = JSON.parse(localStorage.getItem('numerosPC'));
let numerosAlumno = JSON.parse(localStorage.getItem('numerosAlumno'));
let primosPC = JSON.parse(localStorage.getItem('pcPrimos'));

function mostrarParticipantes() {
    const tablaBody = document.getElementById('tabla-body');
    tablaBody.innerHTML = '';

    const alumnos = recuperarAlumnos();
    console.log(alumnos);

    alumnos.forEach(alumno => {
        const primosAlumno = obtenerNumerosPrimos(numerosAlumno);
        const primosPCK = obtenerNumerosPrimos(numerosPC);
        localStorage.setItem('pcPrimos', JSON.stringify(primosPCK));

        tablaBody.innerHTML = tablaBody.innerHTML +
            `<tr>
            <td>${alumno.nombre}</td>
            <td>${alumno.escuela}</td>
            <td>${alumno.numerosAlumno}</td>
            <td>${primosAlumno}</td>
            <td>${numerosPC}</td>
            <td>${primosPC}</td>      
        </tr>`
    });

    saludoFinal.then(() => {
        Swal.fire({
            title: 'Chauuuuuu',
            html: '<img src="../img/icons8-pixel-cat-48.png" alt="gatito">',
            icon: 'info',
        });
        document.body.classList.add('fadeOut');        
        setTimeout(() => {
            document.body.classList.remove('fadeOut');            
            document.body.style.display = 'none';
        }, 2000);

        console.log('Acá está el saludo final');
    });
}
