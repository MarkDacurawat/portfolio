var slideimg = document.querySelector('#imgslide');
var images = ['responsive.jpg','skills.jpg','country.jpg','ytchannel.jpg'];
var i = 0;

function prev(){
	if(i <= 0) i = images.length;
		i--;
		return slide();
}
function next(){
	if(i >= images.length -1)i = -1;
		i++;
		return slide();
}
function slide(){
	return slideimg.setAttribute('src','./course/' + images[i]);
}

//Header
var header = document.querySelector('header');
window.addEventListener('scroll', function(){
	header.classList.toggle('sticky',window.scrollY > 15);
});


//email/phone

const email = document.querySelector('#email');
const phone = document.querySelector('#contact');

email.addEventListener('click',()=>{
  email.select();

  document.execCommand('copy');
  alert("copied");
});

phone.addEventListener('click',()=>{
	phone.select();
  
	document.execCommand('copy');
	alert("copied");
  });
