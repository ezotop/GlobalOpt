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
                dots: true
              }
            }]
    });

    $(window).scroll(function() {
        if ($(this).scrollTop()> 1600) {
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