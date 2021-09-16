const menu = document.querySelector('.menu');
const navOpen = document.querySelector('.hamburger');
const navClose = document.querySelector('.close');
const navBar = document.querySelector('.nav');


const navLeft = menu.getBoundingClientRect().left;
navOpen.addEventListener('click', () => {
	if(navLeft < 0) {
		menu.classList.add('show');
		document.body.classList.add('show');
		navBar.classList.add('show');
	}
})
navClose.addEventListener('click', () => {
	if(navLeft < 0) {
		menu.classList.remove('show');
		document.body.classList.remove('show');
		navBar.classList.remove('show');
	}
})

// Fix Nav
const navHeight = navBar.getBoundingClientRect().height;
window.addEventListener('scroll', () => {
	const scrollHeight = window.pageYOffset;
	if(scrollHeight > navHeight) {
		navBar.classList.add('fix-nav');
	} else {
		navBar.classList.remove('fix-nav');
	}
})

// Scroll to
const links = [...document.querySelectorAll('.scroll-link')];

links.map(link => {
	link.addEventListener('click', e => {
		e.preventDefault();

		const id = e.target.getAttribute('href').slice(1);
		const el =document.getElementById(id);
		let position = el.offsetTop - navHeight;

		window.scrollTo({
			top: position,
			left: 0,
		})

		navBar.classList.remove('show')
		menu.classList.remove('show')
		document.body.classList.remove('show')
	})
})

new TypeIt('#type1', {
	speed: 120,
	loop: true,
	waitUntilVisible: true,
})
.type('Developer', { delay: 400 })
.pause(500)
.delete(9)
.type('Front-End', {delay: 400})
.pause(500)
.delete(9)
.go();

new TypeIt('#type2', {
	speed: 120,
	loop: true,
	waitUntilVisible: true,
})
.type('Developer', { delay: 400 })
.pause(500)
.delete(9)
.type('Front-End', {delay: 400})
.pause(500)
.delete(9)
.go();

// GSAP
gsap.from('.logo', {opacity: 0, duration: 1, delay: .5, y: -10})
gsap.from('.hamburger', {opacity: 0, duration: 1, delay: 1, x: 20})
gsap.from('.banner', {opacity: 0, duration: 1, delay: 1.5, x: -200})
gsap.from('.hero h3', {opacity: 0, duration: 1, delay: 2, y: -50})
gsap.from('.hero h2', {opacity: 0, duration: 1, delay: 2.5, y: -45})
gsap.from('.hero h4', {opacity: 0, duration: 1, delay: 3, y: -30})
gsap.from('.hero a', {opacity: 0, duration: 1, delay: 3.5, y: 50})
gsap.from('.nav-item', {opacity: 0, duration: 1, delay: 1.2, y: 30, stagger: .2,})
gsap.from('.icons a', {opacity: 0, duration: 1, delay: 4, x: -30, stagger: .2,})

// Glidejs

const glide = document.querySelector('.glide');
if(glide)
new Glide (glide, {
type: 'carousel',
startAt: 0,
perView: 3,
gap: 30,
hoverpause: true,
autoplay: 2000,
animationDuration: 800,
animationTimingFunc: 'ease-in-out',
breakpoints: {
	996: {
		perView: 2,
	},
	768: {
		perView: 1,
	},
	
}
}).mount()

AOS.init();


/* Score */
console.log('Привет. Если будут какие-то сложности напиши мне в дискорд: RKostochko#8102 \nНадеюсь тебе понравится моя работа.')
console.log('1. вёрстка валидная +10 \n2. вёрстка семантическая +20 \n3.для оформления СV используются css-стили +10 \n4. контент размещается в блоке, который горизонтально центрируется на странице. Фоновый цвет, если он есть, тянется во всю ширину страницы +10 \n5. вёрстка адаптивная: ни на одном из разрешений экрана до 320px включительно не появляется горизонтальная полоса прокрутки, при этом всё содержание страницы сохраняется +10 \n6. есть адаптивное бургер-меню. Ссылки в пунктах меню ведут на основные разделы CV. При кликах по пунктам меню реализована плавная прокрутка по якорям. При уменьшении ширины экрана меню становится адаптивным +10 \n7. на странице СV присутствует изображение - фото или аватарка автора CV, пропорции изображения не искажены, у изображения есть атрибут alt (может быть пустым) +10 \n8. контакты для связи и перечень навыков оформлены в виде списка ul > li +10 \n9. CV содержит контакты для связи, краткую информацию о себе, перечень навыков, информацию об образовании и уровне английского +10 \n10. CV содержит пример вашего кода (например, решение задачи с сайта codewars) с подсветкой кода (оставил ссылку на CodeWars) +10 \n11. CV содержит изображения-ссылки на выполненные вами проекты. При клике по изображению страница проекта открывается в новой вкладке. У каждого проекта есть название, небольшое описание, указан перечень используемых технологий. +10 \n12. CV выполнено на английском языке +10 \n13. выполнены требования к Pull Request: есть ссылка на задание, скриншот страницы СV, ссылка на деплой страницы CV на GitHub Pages, выполнена самооценка (самооценку расписываем по пунктам критериев оценки, указывая балл за каждый пункт) +10 \n14. есть видеорезюме автора CV на английском языке. 0/10 \n15. Дизайн пусть оценит проверяющий :)');
console.log('Score: 140/160 \n-10 за отсутствие видео \n-10 за дизайн (на усмотрение проверяющего)');
console.log('P.S. Вопросы могут быть по поводу примера кода. Я не видел его в дизайне сайта, поэтому сделал ссылку на кодварс. Надеюсь на понимание с вашей стороны.')