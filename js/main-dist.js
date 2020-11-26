



$(document).ready(function() {
		var w=$(window).outerWidth();
		var h=$(window).outerHeight();
		var ua = window.navigator.userAgent;
		var msie = ua.indexOf("MSIE ");
		var isMobile = {Android: function() {return navigator.userAgent.match(/Android/i);},BlackBerry: function() {return navigator.userAgent.match(/BlackBerry/i);},iOS: function() {return navigator.userAgent.match(/iPhone|iPad|iPod/i);},Opera: function() {return navigator.userAgent.match(/Opera Mini/i);},Windows: function() {return navigator.userAgent.match(/IEMobile/i);},any: function() {return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());}};
	function isIE() {
		ua = navigator.userAgent;
		var is_ie = ua.indexOf("MSIE ") > -1 || ua.indexOf("Trident/") > -1;
		return is_ie; 
	}
	if(isIE()){
		$('body').addClass('ie');
	}
	if(isMobile.any()){
		$('body').addClass('touch');
	}
$('#fullpage').fullpage({
    anchors: ['block1', 'block2', 'block3', 'block4', 'block5'],
    menu: 'menu-list',
    css3: true,
    scrollingSpeed: 800
});


// ==================MENU=========================================================================

$('.menu-btn').on('click', function(){
	$('.menu').toggleClass('open');
});
$('.menu-item').on('click', function(){
	if($('.menu').hasClass('open')){
		$('.menu').removeClass('open');
	}
});
$('html, body').on('click', function(e){
	if($('.menu').hasClass('open') && !$(e.target).is('.menu, .menu-btn')){
		$('.menu').removeClass('open');
	}
});

// ===============TABS==============================================================
$('body').on('click','.tab-navitem',function(event) {
			var eq=$(this).index();
		if($(this).hasClass('parent')){
			var eq=$(this).parent().index();
		}
	if(!$(this).hasClass('active')){
			$(this).closest('.tabs').find('.tab-navitem').removeClass('active');
			$(this).addClass('active');
			$(this).closest('.tabs').find('.tab-item').removeClass('active').eq(eq).addClass('active');
		if($(this).closest('.tabs').find('.slick-slider').length>0){
			$(this).closest('.tabs').find('.slick-slider').slick('setPosition');
		}
	}
});










});