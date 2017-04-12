$(document).ready(function() {
	
	$("#galery_grid").mixItUp();

	$(".s_galery li").click(function() {
		$(".s_galery li").removeClass("active");
		$(this).addClass("active");	
	});

	// увеличение изображений при клике
	$(".popup").magnificPopup({type:"image"});
	$(".popup_content").magnificPopup({
		type:"inline",
 		 midClick: true
	});

	$(".top_text h1").animated("fadeInDown", "fadeOutUp");
	$(".top_text p, .section_header").animated("fadeInUp", "fadeOutDown");
	$(".animation_2").animated("fadeInLeft", "fadeOutLeft");
	$(".animation_3").animated("fadeInRight", "fadeOutRight");
	$(".animation_1").animated("flipInY", "fadeOutY");

	function heightDetect() {
	$(".main_head").css("height", $(window).height());
	};
	heightDetect();
	$(window).resize(function(){
		heightDetect ();
	});

$(".toggle_mnu").click(function() {
  $(".sandwich").toggleClass("active");
});

$(".top_mnu ul a").click(function() {
	$(".top_mnu").fadeOut(600);
	$(".sandwich").toggleClass("active");
});

$(".toggle_mnu").click(function() {
	if ($(".top_mnu").is(":visible")) {
		$(".top_text").removeClass("h_opacity");
		$(".top_mnu").fadeOut(600);
		$(".top_mnu li a").removeClass("fadeInUp animated");
		} else {
		$(".top_text").addClass("h_opacity");
		$(".top_mnu").fadeIn(600);
		$(".top_mnu ul li a").addClass("fadeInUp animated");	
	};
});

//jqвалидатор в форме отправки сообщений
 $("input, select, textarea").not("[type=submit]").jqBootstrapValidation(); 

//плавная навигация по сайту
$(".top_mnu ul a").mPageScroll2id();

});
$(window).load('load',function() {

	$(".loader_inner").fadeOut('slow');
	$(".loader").delay(400).fadeOut();

}); 


