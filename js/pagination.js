$(function(){
		$('.liPaginate').liPaginate({
			easing:'easeOutQuart', //http://gsgd.co.uk/sandbox/jquery/easing/
			duration: 1000, // A string or number determining how long the animation will run
			effect:'simple', //simple, fade, hSlide, vSlide
			pagePos:'after', //after, before, double
			pageHeight:'auto'//[px] - height of paginate item, ['auto'] - detect window height
		});
});