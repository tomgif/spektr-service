function init() { 
	var style = [{"stylers":[{"saturation":-100},{"gamma":0.8},{"lightness":4},{"visibility":"on"}]},{"featureType":"landscape.natural","stylers":[{"visibility":"on"},{"color":"#5dff00"},{"gamma":4.97},{"lightness":-5},{"saturation":100}]}]
	
	var map = new google.maps.Map(document.querySelector(".js-map"), {
		zoom: 18,
		center: new google.maps.LatLng(55.7225909, 37.5626563),
		scrollwheel: false,
		styles: style
	});

    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(55.7228274,37.5599352),
        map: map,
        icon: './img/marker.png'
    });
}

(function ($) {
	$(function () {

		$('a[href*="#"]:not([href="#"])').on('click', function(e) {

			if (this.hash !== "") {
				e.preventDefault();

				var hash = this.hash;

				$('html, body').animate({
					scrollTop: $(hash).offset().top
				}, 800, function(){
					window.location.hash = hash;
				});

			}

		});

		$('.js-nav').on('activate.bs.scrollspy', function () {
			var currentItem = $(this).find(".js-spy .is-active a"),
				hash = currentItem.attr("href");

			$(hash).addClass('is-fade');

			$('.js-spy .js-sub-menu').slideUp()
			currentItem.next(".js-sub-menu").slideDown()

			if (!hash || hash == '#home') {
				$('.js-header').removeClass('is-visible')
			} else {
				$('.js-header').addClass('is-visible')
			}

			if (hash == "#about") {
				$(hash).find(".js-bar__progress").each(function() {
					if (!$(this).hasClass('is-fixed')) {
						$(this)
							.data("origWidth", $(this).width())
							.width(0)
							.animate({
								width: $(this).data("origWidth")
							}, 1000).addClass('is-fixed');
					}
			    });
			}

		});
/*
		$('.js-menu__item').hover(function() {
			if ($(this).is(':visible')) {
				$(this).find("ul").slideDown(300);
			}
		}, function () {
			var self = this;
			setTimeout(function () {
				if (!$('.js-header').is(':hover')) {
					$(self).find("ul").slideUp(300);
				}
			}, 800);
		});*/

		$('.js-slider').slick({
			infinite: true,
			slidesToShow: 3,
			slidesToScroll: 1,
			arrows: true
		});

		$('.js-modal').fancybox({
			helpers: {
				overlay: {
					locked: false
				}
			}
		});

	});
})(jQuery);

function init() { 
	var style = [{"stylers":[{"saturation":-100},{"gamma":0.8},{"lightness":4},{"visibility":"on"}]},{"featureType":"landscape.natural","stylers":[{"visibility":"on"},{"color":"#5dff00"},{"gamma":4.97},{"lightness":-5},{"saturation":100}]}]
	
	var map = new google.maps.Map(document.querySelector(".js-map"), {
		zoom: 18,
		center: new google.maps.LatLng(55.7225909, 37.5626563),
		scrollwheel: false,
		styles: style
	});

    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(55.7228274,37.5599352),
        map: map,
        icon: './img/marker.png'
    });
}