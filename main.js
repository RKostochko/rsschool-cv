let offset = 0; 
const slider = document.querySelector('.slider');
const educationButton = document.querySelector('.education-btn');
const projectsButton = document.querySelector('.projects-btn');
const videoButton = document.querySelector('.video-btn');

projectsButton.addEventListener('click', function(){
	offset = 0;
	educationButton.classList.remove('slider-btn-active');
	projectsButton.classList.add('slider-btn-active');
	videoButton.classList.remove('slider-btn-active');
	slider.style.left = -offset + 'px';
});

educationButton.addEventListener('click', function(){
	offset = 1920;
	educationButton.classList.add('slider-btn-active');
	projectsButton.classList.remove('slider-btn-active');
	videoButton.classList.remove('slider-btn-active');
	slider.style.left = -offset + 'px';
});

videoButton.addEventListener('click', function(){
	offset = 3840;
	educationButton.classList.remove('slider-btn-active');
	projectsButton.classList.remove('slider-btn-active');
	videoButton.classList.add('slider-btn-active');
	slider.style.left = -offset + 'px';
});