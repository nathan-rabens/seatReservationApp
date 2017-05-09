$(document).ready(function(){
	//drop-down seating area
	$('.seatPicker').click(function(){
		$('#seating-area').toggle('slow');
	});

	$('#seating-area').click(function(){
		$('#reservation-form').slideDown('slow');

	})

	var seats = [];

	var seats2 = [];

	var seat;

	var selectedSeat;

	var guestName;

	var name;

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

	console.log(seats);
	//change color of selected seat, assign selectedSeat value
	$('.seat').click(function(e) {
		guestName = $(this).attr("data-lastname", "test");

		if ($(this).hasClass('selected')) {
			$(this).removeClass('selected');
			$(this).css('background-color', '#E5E7E6');
		} else {
			$(this).addClass('selected').css('background-color', '#646362');
		}

		selectedSeat = e.target.innerText;

		
	});


	//function to add user info to selected seat
	$('#submit-btn').click(function() {
		seats.forEach(function(seat) {
			if (selectedSeat == seat.number) {
				seat.firstName = $('#first-name').val();
				seat.lastName = $('#last-name').val();
				seat.phoneNumber = $('#phone').val();
				seat.email = $('#email').val();
				seat.request = $('#request').val();
				guestName.attr('data-lastname', seat.lastName)
			}
		})
		if ($('div').hasClass('selected')) {
			$('.selected').removeClass('selected').addClass('reserved');
			$('.reserved p').text('Reserved');
		}

//		$('.reserved').attr('data-lastname', 'test');
//		console.log(data-lastname);
		console.log(guestName);

	});
	
	console.log(seats);

	//add last name when reserved seat is hovered
	$('.seat').mouseover(function() {
		if ( $(this).hasClass('reserved') ) {
			name = $(this).attr('data-lastname');
			$(this).children('p').text(name);
		}
	})

	//return to reserved when mouse out
	$('.seat').mouseout(function() {
		if ( $(this).hasClass('reserved') ) {
			$(this).children('p').text('Reserved');
		}
	})

});
