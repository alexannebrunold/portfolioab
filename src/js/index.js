// Pour la page loader
// Ce que je souhaite faire : 
// Le texte s'écrit lettre par lettre

// Il faut un tableau du texte [ALexanne]
// une boucle tannt que i < Alexanne alors +1 des lettres
// Ajouter chaque lettre dans une balise h1 HTML

// var txt = ['Alexanne'];
// var i = []
// for (let i = 0; i < txt.length; i++) {
//     if(i < txt){
//         document.querySelector("h1").innerHTML = (i = i + txt[i]);
//     }
    
// }

document.addEventListener('DOMContentLoaded',function(){
    var txt = [ "Hi" + '<br/>' + "I'm Alexanne"];
    var p = ["<br>" + "Student web developper"];

      function typeWriter(txt, i) {
      if (i < (txt.length)) {
       document.querySelector("h1").innerHTML = txt.substring(0, i+1);
        setTimeout(function() {
          typeWriter(txt, i + 1)
        }, 100);
      }

        document.querySelector("p").innerHTML = p.substring(0, i+1);
        setTimeout(function() {
          typeWriter(p, i + 1)
        }, 100);
      
      }
    function StartTextAnimation(i) {
        if (i < txt[i].length) {
            typeWriter(txt[i], 0);
           }
    }
    StartTextAnimation(0);
  });

