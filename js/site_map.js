$(document).ready(function()
{
//slide down main site map

	$('#main-sec').hide();
	$('#main-sec').delay(1000).slideDown(3000);
//fade in effect on sub-menus
	$('.inner-ul').hide();
	$('.inner-ul').delay(4000).fadeIn(3000);
	
});
