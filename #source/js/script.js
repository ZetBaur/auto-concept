

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









