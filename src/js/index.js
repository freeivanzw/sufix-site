$(function () {
    if(window.innerWidth < 1024) {
        $('.input-wrap').children(['input', 'textarea']).on('focus', function () {
            $(this).parent('.input-wrap').addClass('active');
        })
        $('.input-wrap').children(['input', 'textarea']).on('focusout', function () {
            $(this).parent('.input-wrap').removeClass('active');
        })
    }

    $('.mob_menu-open').on('click', function (e) {
        e.preventDefault();

        $('.mob_menu').addClass('active');
    })

    $('.mob_menu-close').on('click', function (e) {
        e.preventDefault();

        $('.mob_menu').removeClass('active');
    })

    $('.mob_top-menu').find('a').each(function (index, element) {
       if($(element).next('ul').length != 0) {
           $(this).parent('li').addClass('has_drop');

           $('.has_drop').on('click', 'a', function (e) {
               if($(this).closest('li').is('.has_drop')) {
                   e.preventDefault();
                   $(this).closest('li').toggleClass('menu_opened');
               }
           })
       }
    })


    if($('.main_banner').index() == 0) {
        $('.site_header').addClass('header_transparent')
    }

    let $windowHeight = $(window).innerHeight();
    $(window).on('scroll', function () {
        if($(window).scrollTop() > $windowHeight) {
            $('.to_up').addClass('show_up')
        } else {
            $('.to_up').removeClass('show_up')
        }
    })

    $('.to_up').on('click', function (e) {
        e.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, 600);
    })

    $('.slider_block').slick({
        infinite: true,
        slidesToShow: 1,
        centerMode: true,
        variableWidth: true,
        dots: true,
    });
})