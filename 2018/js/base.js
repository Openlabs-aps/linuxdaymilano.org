jQuery(function ($) {
    // close navbar on menu select
    $('.nav a').on('click', function () {
        $('.navbar-collapse').collapse('hide');
    });
});