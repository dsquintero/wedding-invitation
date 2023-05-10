$(document).ready(function () {
    console.log("Hello World!");
    // Obtener el elemento de audio
    // var audio = document.getElementById('my-audio');
    // audio.play();

    // $('#navbarResponsive ul li a').on("click", function(){
    //     $('#btn_menu').click();
    // });
    $('body').scrollspy({ target: '.navbar-collapse' });
    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive ul li a')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });


    const elementosAnimados = document.querySelectorAll('.title');

    const observador = new IntersectionObserver((entradas) => {
        entradas.forEach((entrada) => {
            if (entrada.isIntersecting) {
                const indice = Array.from(elementosAnimados).indexOf(entrada.target);
                animarElemento(entrada.target, indice);
                //observador.unobserve(entrada.target);
            }
        });
    });

    elementosAnimados.forEach((elemento) => {
        observador.observe(elemento);
    });

});

const animarElemento = (elemento, indice) => {
    const animacion = elemento.dataset.animacion;
    elemento.classList.add(`animado-${indice}`, 'animate__animated', `animate__${animacion}`);

    // Eliminar la clase de animación después de que la animación haya terminado
    elemento.addEventListener('animationend', () => {
        elemento.classList.remove(`animado-${indice}`, 'animate__animated', `animate__${animacion}`);
    }, { once: true });
}




var countDownDate = new Date("Aug 19, 2023 16:30:00").getTime();
// var countDownDate = new Date("May 6, 2023 17:39:00").getTime();

// Update the count down every 1 second
var x = setInterval(function () {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="demo"
    document.getElementById("days").innerHTML = days;
    document.getElementById("Hours").innerHTML = hours;
    document.getElementById("Minutes").innerHTML = minutes;
    document.getElementById("Seconds").innerHTML = seconds;

    // If the count down is finished, write some text
    if (distance < 0) {
        clearInterval(x);
        const countdown = document.getElementById("countdown");
        const es_hoy = document.getElementById("es-hoy");
        countdown.style.display = "none";
        es_hoy.style.display = "block";
    }
}, 1000);

