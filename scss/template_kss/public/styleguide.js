$(function(){
	hljs.initHighlightingOnLoad();

	var ref = $('.kss-styleguide-menu').find('.kss-styleguide-menu-list').data('kss-ref');
	$('.kss-styleguide-menu').find('a').eq(ref).addClass('selected');
});
