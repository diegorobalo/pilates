/***********nav************/
const hambu = document.getElementById('hambu');
const menu = document.getElementById('menu');
const chevron = document.getElementById('chevron');

hambu.addEventListener('click',()=>{
menu.classList.add('active')
})
chevron.addEventListener('click',()=>{
menu.classList.remove('active')
})

/**************svg animados************** */

$(function(){
  $("#includedContent4").load("svgMobile.html"); 
});


/*******************slider***********************/
	//Owl Carousel
	$('.sliderAuto').owlCarousel({
	  loop:true,
	  nav:true,
    items:1,
	autoplay:true,
    autoplayTimeout:5000 
});
	$('.slider').owlCarousel({
	  loop:true,
	  nav:true,
    items:1
	});
	$('.slider2').owlCarousel({
	  loop:true,
	  nav:true,
    items:1
	});

/*********************form*************************/
const btn = document.querySelector('.btn'),
form = document.getElementById('contact-form');

btn.addEventListener('click',(e)=>{
	e.preventDefault()
	grecaptcha.execute();
	btn.disabled = true;
	btn.style.opacity = 0;
	btn.style.visibility = 'hidden';
setTimeout(() => {
  form.reset();
  btn.style.opacity = 1;
  btn.style.visibility = 'visible';
}, 4000);
})
