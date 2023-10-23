$(function(){
	
	//write your code here
	 $('#num1').hide()
	 $('#num2').hide()
	 $('#num3').hide()
	$('.finish').hide()
	let car1 = $('#car1')
	let car2 = $('#car2')
	let carOneTime = Math.floor((Math.random(1000) * 5000));
	let carTwoTime = Math.floor((Math.random(1000) * 5000));
	
	$('#race1').on('click',function(e) {
		e.preventDefault()
		let car = $('.car')
		let num1 = $('#num1')
		let num2 = $('#num2')
		let num3 = $('#num3')
		

		num3
		.fadeIn()
		.fadeOut()
		.delay(1000)
		num2
		.delay(1000)
		.fadeIn()
		.fadeOut()
		.delay(1000)
		num1
		.delay(2000)
		.fadeIn()
		.fadeOut()
		.delay(1000)
		car
		.delay(3000)
		

		car1.animate({
			left: 1090
		},carOneTime, function() {
			$('.finish').show()
			if(carOneTime < carTwoTime) {
				$('#carOne').html(`<div style='border: gray 2px solid; padding:10px;' >
					Finished in <span style="color: red;">first</span> place with a time of <span style="color: white;"> ${carOneTime} </span>miliseconds 
				`)
				$('#carTwo').html(`<div style='border: gray 2px solid; padding:10px;' >
					Finished in <span style="color: white;"> second </span> place with a time of   <span style="color: red;">${carTwoTime}  </span>miliseconds
				`)
				
				
			}
			
		})
		
		car2.animate({
			left: 1090
		},carTwoTime, function() {
			$('.finish').show()
			if(carOneTime > carTwoTime) {
				$('#carTwo').html(`<div style='border: gray 2px solid; padding:10px;' >
					Finished in <span style="color: red; ">first</span> place with a time of <span  style="color: red;">  ${carTwoTime} </span> miliseconds<div>
				`)
				$('#carOne').html(`<div style='border: gray 2px solid; padding:10px;' >
					Finished in <span style="color: white;"> second </span> place with a time of <span  style="color: white;"> ${carOneTime} </span>miliseconds <div>
				`)
				
			}
			
		})
		

	})

	$('#startOver').on('click',function (e) {
		e.preventDefault()

		location.reload()
		
	})


	

});