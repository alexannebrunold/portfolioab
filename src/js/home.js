AOS.init({
	disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
	startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
	initClassName: "aos-init", // class applied after initialization
	animatedClassName: "aos-animate", // class applied on animation
	useClassNames: true, // if true, will add content of `data-aos` as classes on scroll

	// Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
	offset: 10, // offset (in px) from the original trigger point
	delay: 200, // values from 0 to 3000, with step 50ms
	duration: 400, // values from 0 to 3000, with step 50ms
	easing: "ease", // default easing for AOS animations
	once: false, // whether animation should happen only once - while scrolling down
	mirror: false, // whether elements should animate out while scrolling past them
});

let menuBg = document.getElementById("menuBg");
let menu = document.getElementById("menu");

menuBg.addEventListener("click", () => {
	if (!menuBg.getAttribute("clicked")) {
		menuBg.classList.toggle("clicked");
	}
	if (!menu.getAttribute("visible")) {
		menu.classList.toggle("visible");
	}
});
