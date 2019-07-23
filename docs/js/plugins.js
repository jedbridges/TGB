// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.

jQuery(function($){

    // Cycle plugin
    $('.slides').cycle({
        fx:     'none',
        speed:   1,
        timeout: 70
    }).cycle("pause");

    // Pause & play on hover
    $('.slideshow-block').hover(function(){
        $(this).find('.slides').addClass('active').cycle('resume');
    }, function(){
        $(this).find('.slides').removeClass('active').cycle('pause');
    });

});
