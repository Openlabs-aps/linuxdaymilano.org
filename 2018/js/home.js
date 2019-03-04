jQuery(function ($) {

	//Countdown js
	$("#countdown").countdown({
		date: "27 october 2018 09:30:00",
		format: "on"
	},
		function () {
			// callback function
		}
	);

	// Carousel Auto Slide Off
	$('#event-carousel, #twitter-feed, #sponsor-carousel ').carousel({
		interval: false
	});


	// Contact form validation
	var form = $('.contact-form');
	form.submit(function () {
		'use strict',
			$this = $(this);
		$.post($(this).attr('action'), function (data) {
			$this.prev().text(data.message).fadeIn().delay(3000).fadeOut();
		}, 'json');
		return false;
	});

	$('.main-nav.scrollable ul').onePageNav({
		currentClass: 'active',
		changeHash: true,
		scrollSpeed: 0,
		scrollOffset: 100,
		scrollThreshold: 0,
		filter: ':not(.no-scroll)'
	});

	function menuToggle() {
        var windowWidth = $(window).width();

        if (windowWidth > 767) {
            $(window).on('scroll', function () {
                if ($(window).scrollTop() > 405) {
                    $('.main-nav').addClass('fixed-menu animated slideInDown');
                } else {
                    $('.main-nav').removeClass('fixed-menu animated slideInDown');
                }
            });
        } else {
            $('.main-nav').addClass('fixed-menu');
        }
    }

    menuToggle();

    $(window).resize(function () {
        menuToggle();
    });
});


// Google Map Customization
(function () {

	var map;

	map = new GMaps({
		el: '#gmap',
		lat: 45.4542967,
		lng: 9.2147251,
		scrollwheel: false,
		zoom: 16,
		zoomControl: false,
		panControl: false,
		streetViewControl: false,
		mapTypeControl: false,
		overviewMapControl: false,
		clickable: false
	});

	var image = 'images/map-icon.png';
	map.addMarker({
		lat: 45.4542967,
		lng: 9.2147251,
		icon: image,
		animation: google.maps.Animation.DROP,
		verticalAlign: 'bottom',
		horizontalAlign: 'center',
		backgroundColor: '#3e8bff',
	});


	var styles = [

		{
			"featureType": "road",
			"stylers": [
				{ "color": "#b4b4b4" }
			]
		}, {
			"featureType": "water",
			"stylers": [
				{ "color": "#d8d8d8" }
			]
		}, {
			"featureType": "landscape",
			"stylers": [
				{ "color": "#f1f1f1" }
			]
		}, {
			"elementType": "labels.text.fill",
			"stylers": [
				{ "color": "#000000" }
			]
		}, {
			"featureType": "poi",
			"stylers": [
				{ "color": "#d9d9d9" }
			]
		}, {
			"elementType": "labels.text",
			"stylers": [
				{ "saturation": 1 },
				{ "weight": 0.1 },
				{ "color": "#000000" }
			]
		}

	];

	map.addStyle({
		styledMapName: "Styled Map",
		styles: styles,
		mapTypeId: "map_style"
	});

	map.setStyle("map_style");
}());



