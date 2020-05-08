let menuBg = document.getElementById('menuBg')
let menu = document.getElementById('menu')

menuBg.addEventListener("click", ()=>{
    if(!menuBg.getAttribute("clicked")){
        menuBg.classList.toggle("clicked")
    }
    if(!menu.getAttribute("visible")){
        menu.classList.toggle("visible")
    }
})
