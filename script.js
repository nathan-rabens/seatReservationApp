$(document).ready(function(){
	
	$("#submit-btn").click(function(){
		firstName = $("#first-name").val();
		lastName = $("#last-name").val();
		phoneNumber = $("#phone").val();
		email = $("#email").val();
		request = $("#request").val();
	});

	console.log(firstName);
	
});

