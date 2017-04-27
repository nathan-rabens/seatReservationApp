$(document).ready(function(){
	function test(){
$( "div" ).data( "test", { first: 16, last: "pizza!" } );
$( "span:first" ).text( $( "div" ).data( "test" ).first );
$( "span:last" ).text( $( "div" ).data( "test" ).last );
	}

	test();

	//drop-down seating area
	$('.seatPicker').click(function(){
		$('#seating-area').toggle('slow');
	});

	$('#seating-area').click(function(){
		$('#reservation-form').slideDown('slow');

	})

	var seats = [];

	var seat;

	var selectedSeat;


	var guestName;

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
				console.log(seat);
				guestName = seat.lastName;
				console.log(guestName);
			}
		})
		if ($('div').hasClass('selected')) {
			$('.selected').removeClass('selected').addClass('reserved');
			$('.reserved p').text('Reserved');
		}

	});



	//add last name when reserved seat is hovered
	$('.seat').mouseover(function() {
		seats.forEach(function() {
			if (selectedSeat == seat.number) {
				guestName =  this.lastName;
				console.log(guestName);
			}
		})
		guestName = seat.lastName;
		if ( $(this).hasClass('reserved') ) {
			$(this).children('p').text('Last Name');
		}
	})

	//return to reserved when mouse out
	$('.seat').mouseout(function() {
		if ( $(this).hasClass('reserved') ) {
			$(this).children('p').text('Reserved');
		}
	})


});
