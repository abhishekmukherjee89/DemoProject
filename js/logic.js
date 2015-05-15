$(document).ready(function() {
	$(".menu--top_list").eq(1).click(function(){
		$(".about").scroll();
	});

	$(".sign-buttons--top_text").eq(1).click(function(){
		$('.dialog-container').fadeIn(300);
		$('.dialog.sign-up').fadeIn(300);
	});

	$(".sign-buttons--top_text").eq(0).on("click", function() {
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
	    if(is_name){input.removeClass("invalid").addClass("valid");}
	    else{input.removeClass("valid").addClass("invalid");}
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
	    var is_name=input.val();
	    if(is_name){input.removeClass("invalid").addClass("valid");}
	    else{input.removeClass("valid").addClass("invalid");}
	});
	
	$('#user_password').on('input', function() {
	    var input=$(this);
	    var is_name=input.val();
	    if(is_name){input.removeClass("invalid").addClass("valid");}
	    else{input.removeClass("valid").addClass("invalid");}
	});
	
	$('#conf_password').on('input', function() {
	    var input=$(this);
	    var is_name=input.val();
	    if(is_name){input.removeClass("invalid").addClass("valid");}
	    else{input.removeClass("valid").addClass("invalid");}
	});
	
	
	
	
});