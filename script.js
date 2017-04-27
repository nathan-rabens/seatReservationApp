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

	//change color of selected seat, assign selectedSeat value
	$('.seat').click(function(e) {
		guestName = $(this).attr("data-lastname", "test");

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
		$('div').each(function(i) {
			if $(i).hasClass('selected') {
					i = {
						firstName: $('#first-name').val(),
						lastName: $('#last-name').val(),
						phoneNumber: $('#phone').val(),
						email: $('#email').val(),
						request: $('#request').val(),
//						attr('data-lastname', seat.lastName)
					}
				seats2.push(i);
					})
				});
		if ($('div').hasClass('selected')) {
			$('.selected').removeClass('selected').addClass('reserved');
			$('.reserved p').text('Reserved');	
			}
		
		
		
	})
////		seats.forEach(function(seat) {
//			if ( $('div').each(function(i) {
//				if ($(this).hasClas('selected') {
//					seat = {
//						firstName: $('#first-name').val(),
//						lastName: $('#last-name').val(),
//						phoneNumber: $('#phone').val(),
//						email: $('#email').val(),
//						request: $('#request').val(),
////						attr('data-lastname', seat.lastName)
//					}
//				seats2.push(seat);
//					})
//				});
////				
////			}).hasClass('selected') ) {
////					seat = {
////						firstName: $('#first-name').val(),
////						lastName: $('#last-name').val(),
////						phoneNumber: $('#phone').val(),
////						email: $('#email').val(),
////						request: $('#request').val(),
//////						attr('data-lastname', seat.lastName)
////				}
////				seats2.push(seat);
////			}
//				console.log(seats2);
//				
////				{
////				seat.firstName = $('#first-name').val();
////				seat.lastName = $('#last-name').val();
////				seat.phoneNumber = $('#phone').val();
////				seat.email = $('#email').val();
////				seat.request = $('#request').val(); 
////				seat.attr('data-lastname', seat.lastName)
////			}
//			if ($('div').hasClass('selected')) {
//			$('.selected').removeClass('selected').addClass('reserved');
//			$('.reserved p').text('Reserved');	
//			}
//
//	
////		if ($('div').hasClass('selected')) {
////			$('.selected').removeClass('selected').addClass('reserved');
//////			$('.reserved p').text('Reserved');
//////		})
////		
//////		$('.reserved').attr('data-lastname', 'test');
//////		console.log(data-lastname);
////		console.log(selectedSeat);
////
////	});

	
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
