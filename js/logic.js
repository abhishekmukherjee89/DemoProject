$(document).ready(function() {
	$("#one").click(function(event){
		$(".div1").slideDown("slow");
		event.stopPropagation();

	});

	$("body *").not("#one").click(function(event) {
		$(".div1").slideUp("slow");
		event.stopPropagation();
	});

	$("#two").click(function(event){
		$(".div2").slideDown();
		event.stopPropagation();

	});

	$("body *").not("#two").click(function(event) {
		$(".div2").slideUp();
		event.stopPropagation();

	});

	$("#b1").click(function(event){
		$(".wrapper1").slideDown();
		$(".popup").show();
		event.stopPropagation();
	});


	$(".close,#b2").click(function(event) {
		$(".wrapper1").slideUp();
		$(".popup").hide();
		event.stopPropagation();

	});

	$("#b2").click(function(event){
		$(".wrapper2").slideDown();
		$(".popup").show();
		event.stopPropagation();

	});

	$(".close,#b1").click(function(event) {
		$(".wrapper2").slideUp();
		event.stopPropagation();

	});


	$("#signIn").click(function() {
		var id1 = $('#pass').val();
		var id2 = $('#conpass').val();
		if (id1 === id2) {
			alert('Passed');
			return true;
		}
		else
		{
			alert('Wrong input');
			return false;
		}

	});


});









