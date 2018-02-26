$(document).ready(function(){
	$('.sl').slick({
				autoplay: true,
				autoplaySpeed: 1000,
				speed: 2000,
				dots: true,			
				edgeFriction: '0.5',
				pauseOnDotsHover: true,
				vertical: false,
				slidesToShow: 4,
				slidesToScroll: 4,
				arrows: true,
				responsive: [
		{
			breakpoint: 1280,
			settings: {
			slidesToShow: 3,
			slidesToScroll: 3,
			infinite: true,
			dots: true,
			arrows: true,
			autoplay: false,
			}
		},
		{
			breakpoint: 1024,
			settings: {
			slidesToShow: 2,
			slidesToScroll: 2,
			infinite: false,
			dots: true,
			arrows: true,
			}
		},
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				arrows: false,
			}
		},
		{

		}
		// You can unslick at a given breakpoint now by adding:
		// settings: "unslick"
		// instead of a settings object
	]
	});
});