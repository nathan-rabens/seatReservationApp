$(document).ready(function(){
	//////////create empty array for seats with loop (1 to 24) CHELSEA

	//delcare empty seats array
	var seats = [];
	//declare empty seat var
	var seat
	//create function to push 24 seats, with props, into seats array
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
		//var for selectedSeat =
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

		seats.forEach(function(seat){
			if (selectedSeat === seat.number) {
				seat.firstName = "Chelsea";
				seat.lastName = document.getElementById('last-name').value;
//				seat.lastName = $('#last-name');
			}
		console.log(seat);
		})
	})

	$('#submit-btn').click(addInfo());

	console.log(seats);
//	console.log(seats);
//	$("#submit-btn").click(addInfo(event.target));
//
//	console.log(seats);

	//if clicked add class selected to seat Karen

	//if seat is clicked form drops down NATHAN

	//if form submited, seats with class selected toggleClass to researved, add innerText = seat.name Karen
  // $(#book) function(){
  //   if {
  //
  //   }
  // };

	//create empty array for seats with loop (1 to 24)

	//push seats with empty object properties into the array ((name.val, seat number.text, phone.val, email.val, request.val))

	//if clicked add class selected to seat

	//if seat is clicked form drops down

	//if form submited, seats with class selected toggleClass to researved, add innerText = seat.name


	//add button that drops down seating-area div if clicked

//hover over seat to change color (check availability)

//when click seat will say which seat
  $(".seat").click(function(){
        $(this).text("Reserve a Seat!").css("background-color", "#c6ff6b");

    });

$('.seatPicker').click(function(){
  $('#seating-area').toggle('slow');
});

$('#seating-area').click(function(){
  $('#reservation-form').toggle('slow');
})

});
