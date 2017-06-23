/**
 * Created by quazinafiulislam on 11/8/14.
 */

$(document).ready(function(){
    $('.js-menu-trigger').on('click touchstart', function(e){
        $('.js-menu').toggleClass('is-visible');
        $('.js-menu-screen').toggleClass('is-visible');
        e.preventDefault();
    });

    $('.js-menu-screen').on('click touchstart', function(e){
        $('.js-menu').toggleClass('is-visible');
        $('.js-menu-screen').toggleClass('is-visible');
        e.preventDefault();
    });

    function scroll_if_anchor(href) {
        href = typeof(href) == "string" ? href : $(this).attr("href");

        if(!href) return;

        var fromTop = 75;

        var $target = $(href);

        if($target.length) {
            $("html, body").animate({ scrollTop: $target.offset().top - fromTop });
            if(history && "pushState" in history) {
                history.pushState({}, document.title, window.location.pathname + href);
                return false;
            }
        }
    }

    // When our page loads, check to see if it contains and anchor
    scroll_if_anchor(window.location.hash);

    // Intercept all anchor clicks
    $("div.article-container, a.footnote-reference, a.fn-backref").on("click", "a[href^='#']", scroll_if_anchor);
});