var selectFirstText = document.querySelector("h1");
var firstText = "Hi";
var contentFirstText = 0;

var selectSecondText = document.querySelector("h2");
var secondText = "I'm ALEXANNE";
var contentSecondText = 0;

var selectThirdText = document.querySelector("p");
var thirdText = "fullstack js developper";
var contentThirdText = 0;
var fini = false;

let arrow = document.querySelector(".loader__arrow");

//Text scribe
function typeText() {
	setInterval(() => {
		if (contentFirstText < firstText.length) {
			selectFirstText.innerHTML += firstText.charAt(contentFirstText);
			contentFirstText++;
		} else if (
			contentFirstText !== "undefined" &&
			contentSecondText < secondText.length
		) {
			selectSecondText.innerHTML += secondText.charAt(contentSecondText);
			contentSecondText++;
		}
		if (
			contentSecondText == secondText.length &&
			contentThirdText < thirdText.length
		) {
			selectThirdText.innerHTML += thirdText.charAt(contentThirdText);
			contentThirdText++;
			if (contentThirdText == thirdText.length) {
				fini = true;
				arrow.style.opacity = 1;
			} else {
				fini = false;
			}
		}
	}, 80);
}
typeText();

//Arrow scroll to the landing page
window.addEventListener("wheel", function () {
	if (fini == true) {
		window.location.href = "https://alexannebrd.netlify.app/screens/index.html";
	}
});

/**
 * Si la window.location.href == a href du html alors l'élément est en noir
 *
 */
