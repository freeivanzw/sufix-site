$(function () {
    if(window.innerWidth < 1024) {
        $('.input-wrap').children(['input', 'textarea']).on('focus', function () {
            $(this).parent('.input-wrap').addClass('active');
        })
        $('.input-wrap').children(['input', 'textarea']).on('focusout', function () {
            $(this).parent('.input-wrap').removeClass('active');
        })
    }
})