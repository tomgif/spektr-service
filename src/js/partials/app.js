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
        icon: '../img/marker.png'
    });
}

(function ($) {
	$(function () {
		$.scrollify({
			section:".js-slide",
			before: function () {
				var currentSlide = $.scrollify.current(),
					slideIndex = currentSlide.index(),
					header = $('.js-header');
				if (slideIndex !== 0) {
					header.addClass('is-visible');
				} else {
					header.removeClass('is-visible');
				}

				currentSlide.addClass('is-fade');
					currentSlide.find(".js-bar__progress").each(function() {
						if (!$(this).hasClass('is-fixed')) {
							$(this)
								.data("origWidth", $(this).width())
								.width(0)
								.animate({
									width: $(this).data("origWidth")
								}, 2000).addClass('is-fixed');
						}
				    });
			},
			afterRender: function () {
				this.before()
			}

		});

		$(".js-scroll").click(function(e) {
			var href = $(this).attr('href');
			$.scrollify.move(href);
		});

		$('.js-slider').slick({
			infinite: true,
			slidesToShow: 3,
			slidesToScroll: 1,
			arrows: true
		});

		var hashChange = {
			init: function () {
				var hash = window.location.hash,
					currentLink = $('a.js-scroll[href=' + hash + ']'),
					allLinks = $('a.js-scroll');
				if (!currentLink.hasClass('is-active')) { //if current link is not underlined
					currentLink.addClass('is-active');
				} else {
					allLinks.not(currentLink).removeClass('is-active'); //get all links, exclude current, and remove all classes
				}
			}
		}

		hashChange.init();
		$(window).on('scroll', function() {
			hashChange.init();
		});

	});
})(jQuery);