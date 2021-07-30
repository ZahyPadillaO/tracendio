// Controlador JS
var swiper = new Swiper('.swiper-container-logos', {

    loop: true,
    speed: 5000,
    autoplay: {
        delay: 500,
        centeredSlides: true,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    breakpoints: {
        480: {
            slidesPerView: 1,
            spaceBetween: 10,
        },

        640: {
            slidesPerView: 3,
            spaceBetween: 10,
        },
        768: {
            slidesPerView: 4,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 5,
            spaceBetween: 30,
        }
    },

})

var swiper2 = new Swiper('.swiper-container-lg', {

    loop: true,
    speed: 9000,
    autoplay: {
        delay: 1000,
        centeredSlides: true,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    breakpoints: {
        480: {
            slidesPerView: 1,
            spaceBetween: 10,
        },

        640: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 30,
        }
    },

})

window.onscroll = function () {
    if (window.scrollY > 10) {
        document.getElementsByClassName('site-header')[0].classList.add("navbar-background");

    } else if (window.scrollY <= 10) {
        document.getElementsByClassName('site-header')[0].classList.remove("navbar-background")
    }
    ;
}

function cambiarTexto(element, idSeparador) {
    if (element.classList.length > 1) {
        element.innerText = "Ver Más";
        document.getElementById(idSeparador).classList.remove('d-none')


    } else {
        element.innerText = "Ocultar"
        document.getElementById(idSeparador).classList.add('d-none')

    }

}

window.onload = function () {
    if (window.innerWidth > 960) {

        document.querySelector("#menu-item-6 >a ").innerHTML = 'Servicios <i class="fas fa-angle-down"></i>'

        var elementoHtml = document.querySelector("#menu-item-6 > .sub-menu > li > a");

        var contenidoSubMenu = elementoHtml.innerHTML;
        contenidoSubMenu += '<i class="ps-3 fas fa-angle-right"></i>';
        elementoHtml.innerHTML = contenidoSubMenu;

        elementoHtml = document.querySelector("#menu-item-6 > .sub-menu > li+li > a");
        contenidoSubMenu = elementoHtml.innerHTML;
        contenidoSubMenu += '<i class="ps-3 fas fa-angle-right"></i>';
        elementoHtml.innerHTML = contenidoSubMenu;

    } else {

        var icon = document.createElement("a");
        icon.innerHTML = '<i id="iconCall" class="fas fa-phone-alt fa-w-16 fa-1x" > </i>';
        icon.setAttribute('href', "tel:+593995872422");
        var titulo = document.querySelector(".wrap > .title-area");

        titulo.parentNode.insertBefore(icon, titulo.nextSibling);
    }

}


//Hubspot en WhatsApp
let boton = document.getElementById("botonWhatsApp");

boton.onclick = function () {

    jQuery.ajax({
        type: "POST",
        url: 'https://tracendio.com/wp-content/themes/genesis-tracendio/php/integracion_hubspot.php',
        data: {data: location.pathname},
        dataType: 'json',
        success: function (data) {
            window.open(
                'https://wa.me/593995872422?text=Hola!%20me%20interesa%20una%20traducci%C3%B3n',
                '_blank'
            );
        },
        error: function (error) {
            window.open(
                'https://wa.me/593995872422?text=Hola!%20me%20interesa%20una%20traducci%C3%B3n',
                '_blank'
            );
        }
    });

};
