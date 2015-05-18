$(document).ready(function() {
	$(".menu--top_list").eq(1).click(function(){
		$(".about").scroll();
	});

	$(".sign-buttons--top_text").eq(1).click(function(e){
		$('.dialog-container').fadeIn(300);
		$('.dialog.sign-up').fadeIn(300);
	});

	$(".sign-buttons--top_text").eq(0).on("click", function(e) {
		$('.dialog-container').fadeIn(300);
		$('.dialog.sign-in').fadeIn(300);
	});
	
	
	/*$('.dialog-container').on('click', function(e) {
		$('.dialog-container').fadeOut(300);
		e.stopPropagation();
	});*/
	
	$('#u_name').on('input', function() {
	    var input=$(this);
	    var is_name=input.val();
	    if(is_name){
	    	input.removeClass("invalid").addClass("valid");
	    }
	    else{
	    	input.removeClass("valid").addClass("invalid");
	    	}
	});
	
	$('#u_email').on('input', function() {
	    var input=$(this);
	    var re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
	    var is_email=re.test(input.val());
	    if(is_email){input.removeClass("invalid").addClass("valid");}
	    else{input.removeClass("valid").addClass("invalid");}
	});
	
	$('#usr_name').on('input', function() {
	    var input=$(this);
	    var is_user=input.val();
	    if(is_user){input.removeClass("invalid").addClass("valid");}
	    else{input.removeClass("valid").addClass("invalid");}
	});
	
	$('#usr_name_2').on('input', function() {
	    var input=$(this);
	    var is_user=input.val();
	    if(is_user){input.removeClass("invalid").addClass("valid");}
	    else{input.removeClass("valid").addClass("invalid");}
	});
	
	$('#user_password').on('input', function() {
	    var input=$(this);
	    var is_password=input.val();
	    if(is_password){
	    	if($(this).val().length > 5){
	    		input.removeClass("invalid").addClass("valid");
    	}
    	else{input.removeClass("valid").addClass("invalid");}
    }
    else{input.removeClass("valid").addClass("invalid");}
	});
	
	$('#user_password_2').on('input', function() {
	    var input=$(this);
	    var is_password=input.val();
	    if(is_password){
	    	if($(this).val().length > 5){
	    		input.removeClass("invalid").addClass("valid");
    	}
    	else{input.removeClass("valid").addClass("invalid");}
    }
    else{input.removeClass("valid").addClass("invalid");}
	});
	
	$('#conf_password').on('input', function() {
	    var input=$(this);
	    var password=$("#user_password_2");
	    var is_name=input.val();
	    if(is_name) {
	    	if($(this).val().length > 5){
	    		input.removeClass("invalid").addClass("valid");
	    	}
	    	else{input.removeClass("valid").addClass("invalid");}
	    }
	    else{input.removeClass("valid").addClass("invalid");}
	});
	
	/*$(window).scroll(function(){
		  var sticky = $('.header-container'),
		      scroll = $(window).scrollTop();

		  if (scroll >= 100) sticky.addClass('fixed');
		  else sticky.removeClass('fixed');
		}); */
	
	/*$('.menu--top').find('a').click(function(){
	    var $href = $(this).attr('href');
	    var $anchor = $('#'+$href).offset();
	    window.scrollTo($anchor.left,$anchor.top);
	    return false;
	});*/
	
	$(".menu--top_list").eq(0).click(function(){
		$(document.body).animate({
		    'scrollTop':   $('#home').offset().top
		}, 2000);
	});
	
	$(".menu--top_list").eq(1).click(function(){
	$(document.body).animate({
	    'scrollTop':   $('#about').offset().top
		}, 2000);
	});
	
	$(".menu--top_list").eq(2).click(function(){
		$(document.body).animate({
		    'scrollTop':   $('#gallery').offset().top
		}, 2000);
	});
	
	$(".menu--top_list").eq(3).click(function(){
		$(document.body).animate({
		    'scrollTop':   $('#contact').offset().top
		}, 2000);
		});
	
	$(window).scroll(function(){
	    if ($(window).scrollTop() >= 160) {
	       $('.header-container').addClass('fixed-header');
	    }
	    else {
	       $('.header-container').removeClass('fixed-header');
	    }
	});
	
});