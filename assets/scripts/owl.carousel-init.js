jQuery("#carousel").owlCarousel({
	autoplay: true,
	lazyLoad: true,
	loop: true,
	responsiveClass: true,
	autoHeight: false,
	autoplayTimeout: 5000,
	smartSpeed: 800,
	nav: false,
	responsive: {
		0: {
			items: 1
		},
		600: {
			items: 2
		},
		1024: {
			items: 3
		},
		1366: {
			items: 3
		}
	}
});