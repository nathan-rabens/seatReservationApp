$(document).ready(function(){

	//create empty array for seats with loop (1 to 24) CHELSEA
	
	var seats = [];
	var seat
	
	function addSeats() {
		for (i=1; i<25; i++) {	
			seat = {
				number: i,
				firstName: "",
				lastName: "",
				phoneNumber: "",
				email: "",
				request: "",	
			}
			seats.push(seat);
		} 
	}
	
	addSeats();
	
	console.log(seats);
	
	//push seats with empty object properties into the array ((name.val, seat number.text, phone.val, email.val, request.val)) CHELSEA
		
	function addInfo() {
		var selectedSeat = $('.selected p').text();
		console.log(selectedSeat);
		selectedSeat = parseInt(selectedSeat);
		console.log(selectedSeat);
		if (selectedSeat === seat.number ) {
//			seat.firstName = $("#first-name").val();
			seat.firstName = 'Chelsea';
//			seat.lastName = $("#last-name").val();
			seat.lastName = 'Weber';
//			seat.phoneNumber = $("#phone").val();
			seat.phoneNumber = '2483455519';
//			seat.email = $("#email").val();
//			seat.request = $("#request").val();		
		}
		console.log(seats);
	}
	
	addInfo();
//	$("#submit-btn").click(addInfo(event.target));
//	
//	console.log(seats);
	

	
	//if clicked add class selected to seat KAREN
	
	//if seat is clicked form drops down NATHAN
	
	//if form submited, seats with class selected toggleClass to researved, add innerText = seat.name KAREN
	
	//add button that drops down seating-area div if clicked NATHAN
	
	
	

});
//hover over seat to change color (check availability)
// or mouseover to show text underneath- "reserve a seat"
  //   $(".seat").hover(function(){
  //      $(this).css("background-color", "#c6ff6b");
  //     }, function(){
  //       $(this).css("background-color", "#0ebaa1");
  //  });
  $(".seat").click(function(){
        $(this).text("Reserve a Seat!").css("background-color", "#c6ff6b");
    });
