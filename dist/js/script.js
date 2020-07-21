window.addEventListener('DOMContentLoaded', () => {
    const menuList = document.querySelector('.menu__list'),
    menuItem = document.querySelectorAll('.menu__item'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menuList.classList.toggle('menu__list_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menuList.classList.toggle('menu__list_active');
        })
    })
});

$(document).ready(function() {
    $('.reviews__slider').slick({
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/back.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/next.svg"></button>',
        responsive: [
            {
              breakpoint: 992,
              settings: {
                arrows: false,
                dots: true
              }
            }]
    });

    $('#callbackme, .button_count').on('click', function() {
        $('.overlay, #callback').fadeIn('slow');
    });
    $('.modal__close').on('click', function() {
        $('.overlay, #consultation_modal, #callback, #thanks').fadeOut('slow');
    });
    $('.details').each(function(i) {
        $(this).on('click', function() {
            $('#consultation_modal .modal__header').text($('.prices-item__header').eq(i).text());
            $('.overlay, #consultation_modal').fadeIn('slow');
        })
    });

    function validateForms(form) {
        $(form).validate({
            rules: {
                name: "required",
                phone: "required",
                email: {
                    required: true,
                    email: true
                }
            },
            messages: {
                name: "", //Введите имя
                phone: "", //Введите номер
                email: {
                  required: "", //Введите эл. почту
                  email: "Неправильно введен адрес почты"
                }
            }
        });
    };

    validateForms('#consultation-form');
    validateForms('#contact form');
    validateForms('#consultation_modal form');
    validateForms('#callback form');

    $('input[name=phone]').mask("+7 (999) 999-99-99");

    $('form').submit(function(e) {
        e.preventDefault();
        $.ajax({
            type: "POST",
            url: "mailer/smart.php",
            data: $(this).serialize()
        }).done(function() {
            $(this).find("input").val("");
            $('#consultation, #callback').fadeOut();
            $('.overlay, #thanks').fadeIn('slow');
            $('form').trigger('reset');
        });
        return false;
    });

    $(window).scroll(function() {
        if ($(this).scrollTop()> 1200) {
            $('.pageup').fadeIn();
        } else {
            $('.pageup').fadeOut();
        }
    });

    $("a[href^='#up']").click(function(){
        const _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
        return false;
    });

    
});