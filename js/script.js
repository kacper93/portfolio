$(".menuIcon").on("click", function () {
	//	$(".menuIcon span").toggleClass("active");
	$(".menuList").toggleClass("active");
})

$(".start").on("click", function () {
	$("body, html").animate({
		scrollTop: $(".header").offset().top
	}, 1500);
	$(".menuList").removeClass("active");
})

$(".me").on("click", function () {
	$("body, html").animate({
		scrollTop: $(".container").offset().top
	}, 1500);
	$(".menuList").removeClass("active");
})

$(".technology").on("click", function () {
	$("body, html").animate({
		scrollTop: $(".skills").offset().top
	}, 1500);
	$(".menuList").removeClass("active");
})

$(".done").on("click", function () {
	$("body, html").animate({
		scrollTop: $(".projects").offset().top
	}, 1500);
	$(".menuList").removeClass("active");
})

$(".address").on("click", function () {
	$("body, html").animate({
		scrollTop: $(".contact").offset().top
	}, 1500);
	$(".menuList").removeClass("active");
})


$(document).on("scroll", function () {
	if ($(document).scrollTop() - 200 > $(".skills").offset().top - $(window).innerHeight()) {
		$(".skills__wrap--card").css({
			transform: "rotateY(0deg)"
		})
	}
})

$(document).on("scroll", function () {
	if ($(document).scrollTop() - 350 > $(".projects").offset().top - $(window).innerHeight()) {
		$(".projects__wrap").css({
			transform: "translateY(0%)",
			opacity: 1
		})
	}
})
