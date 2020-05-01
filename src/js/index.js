var selectFirstText = document.querySelector("h1");
var firstText =  "Hi";
var contentFirstText = 0;

var selectSecondText = document.querySelector("h2")
var secondText = "I'm ALEXANNE"
var contentSecondText = 0;

var selectThirdText = document.querySelector("p")
var thirdText = "student in developpement web";
var contentThirdText = 0;

function typeText(){
    setInterval(() => {
    if(contentFirstText<firstText.length){
      selectFirstText.innerHTML += firstText.charAt(contentFirstText);
        contentFirstText++;
    }
        else if(contentFirstText !== 'undefined' && contentSecondText<secondText.length){
               selectSecondText.innerHTML += secondText.charAt(contentSecondText);
               contentSecondText++;
    }
    if(contentSecondText == secondText.length && contentThirdText<thirdText.length){
      selectThirdText.innerHTML += thirdText.charAt(contentThirdText);
      contentThirdText++;
    }
}, 80);
}
typeText()
