$(function () {
    // Bootstrap Scroolspy 
    $('body').scrollspy({
        target: ".navbar",
        offset: 50
    });
    $(".menu a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {
                window.location.hash = hash;
            });
        }
    });
    // Sticky Menu Settings
    $(document).on('scroll', function () {
        if ($(this).scrollTop() > .5) {
            $('.full_header').addClass('sticky');
        } else {
            $('.full_header').removeClass('sticky');
        }
    })
    //VenoBox Lightbox
    $('.venobox').venobox();
    // Preloader    
    var $window = $(window);
    $window.on('load', function () {
        $('#preloader').fadeOut('slow', function () {
            $(this).remove();
        });
    });
});
