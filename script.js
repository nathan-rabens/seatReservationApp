$(document).ready(function(){
	//drop-down seating area
	$('.seatPicker').click(function(){
		$('#seating-area').toggle('slow');
	});

	//drop down reservation form
	$('#seating-area').click(function(){
		$('#reservation-form').toggle('slow');

	})

	var seats = [];

	var seat;

	var selectedSeat;

	//create function to push 24 seats, with props, into seats array
	function addSeats() {
		for (i=1; i<25; i++) {
			seat = {
				number: i,
				firstName: '',
				lastName: '',
				phoneNumber: '',
				email: '',
				request: '',
			}
			seats.push(seat);
		}
	}

	addSeats();

	//change color of selected seat, assign selectedSeat value
	$('.seat').click(function(e) {

		if ($(this).hasClass('selected')) {
			$(this).removeClass('selected');
			$(this).css('background-color', '#0ebaa1');
		} else {
			$(this).addClass('selected').css('background-color', '#c6ff6b');
		}

		selectedSeat = e.target.innerText;
		console.log(e.target.innerText);

	});

	//function to add user info to selected seat
	$('#submit-btn').click(function() {
		console.log(selectedSeat);
		seats.forEach(function(seat){
			if (selectedSeat == seat.number) {
				seat.firstName = $('#first-name').val();
				seat.lastName = $('#last-name').val();
				seat.phoneNumber = $('#phone').val();
				seat.email = $('#email').val();
				seat.request = $('#request').val();
			}
		})
		if ($('div').hasClass('selected')) {
			$('div').removeClass('selected').addClass('reserved');
		} else if ($('div').hasClass('reserved')) {
			$('.reserved').attr('.innerText', '');
		}
		console.log(seats);
	});
//
//	if ($('.reserved')) {
//		$('.reserved p').text('"Reserved for" + seat.lastName');
//	}

});
