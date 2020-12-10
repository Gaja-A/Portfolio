
import AOS from "aos";
import 'aos/dist/aos.css';
import $ from 'jquery';

$(document).ready(function() {

    /* Init AOS */
    const aos_init = () => {
        AOS.init({
            duration: 1000,
            once: true
        });
        AOS.refresh();
    }
    aos_init();

    
    /* SCROLL ON MENU */
    $(document).on('click', '.nav-menu a, .scrollto', function(e) {
        var target = $(this.hash);
        if (target.length) {
            e.preventDefault();
            var scrollto = target.offset().top;

            $('html, body').animate({
                scrollTop: scrollto
            }, 1500);

            if ($(this).parents('.nav-menu, .mobile-nav').length) {
                $('.nav-menu .active, .mobile-nav .active').removeClass('active');
                $(this).closest('li').addClass('active');
            }
            return false;
        }
    });


    /* Navigation active on scroll */
    let nav_sections = $('section');
    let main_nav = $('.nav-menu, #mobile-nav');

    $(window).on('scroll', function() {
        let cur_pos = $(this).scrollTop() + 300;
        nav_sections.each(function() {
            let top = $(this).offset().top,
            bottom = top + $(this).outerHeight();

            if (cur_pos >= top && cur_pos <= bottom) {
                if (cur_pos <= bottom) {
                    main_nav.find('li').removeClass('active');
                }
                main_nav.find('a[href="#' + $(this).attr('id') + '"]').parent('li').addClass('active');
            }
            if (cur_pos < 200) {
                $(".nav-menu ul:first li:first").addClass('active');
            }
        });
    });


    /* SKILLS */
    $('.progress .progress-bar').each(function() {
        $(this).css("width", $(this).attr("aria-valuenow") + '%');
    });


    /* BACK TO TOP */
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    
    $('.back-to-top').click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 1500);

        return false;
    });
    
});
