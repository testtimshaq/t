$(function(){
	var newTask1 = 'Вы забыли указать Название';
	var newTask2 = 'Вы забыли указать Описание';

	$('input')
	.keyup(function(){
		newTask1 = $(this).val();
		console.log(newTask1)
	})

	$('textarea')
	.keyup(function(){
		newTask2 = $(this).val();
		console.log(newTask2)
	})

	console.log(newTask1,newTask2);
	
	var div = '<div class="container-lg-3 bg-white position-relative new-task-cont"><img class="arrow" src="img/arrow.png"><div class="newTask1 border-bottom mt-4"><p><img class="remove-task ml-2" src="img/remove-task.png"></p></div><div class="newTask2"></div></div>';

		$('#task-button')
		.click(function(){
			var dealForm = $('#form')[0];
			if (dealForm.checkValidity()) {
			console.log('true',dealForm);
			$('#small').css('display','none');
			$('#left-column').append(div);			
			$('#left-column').find('div:last-child').find('.newTask1').find('p').prepend(newTask1);
			$('#left-column').find('div:last-child').find('.newTask2').append(newTask2);
			$('#form')[0].reset();
			} else {
				alert('Вы забыли заполнить поле(-я)');
			}
		});

		// $('body').on('click','img.arrow',function(){alert('it works');})

		$('body').on('click','img.remove-task', function(){
			$(this).parentsUntil('#left-column').remove();
			console.log('worked');
			if ($('img').is('.arrow','.remove-task')) {
			} else {
				$('#small').css('display','');
			}
		});

		$('body').on('click','img.arrow', function(){
			console.log('click on arrow');

			if ($(this).parent().find('div.newTask2').is(':visible'))
				{
				// $(this).parent().find('div.newTask2').fadeOut(800);
				// $(this).parent().find('div.newTask2').animate({width: 0, height: 0});
				$(this).parent().find('div.newTask2').slideToggle();
				$(this).css({transform: 'rotate(90deg)'});
				$(this).parent().css({height: '59px'})
			console.log('true');
			} else {
				// $(this).parent().find('div.newTask2').animate({width: '450px', height: '80px'});
				// $(this).parent().find('div.newTask2').fadeIn(800);
				$(this).parent().css({height: '140px'})
				$(this).parent().find('div.newTask2').slideToggle();
				$(this).css({transform: 'rotate(0)'});
			}

		});

});