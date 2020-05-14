AOS.init({
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: true, // if true, will add content of `data-aos` as classes on scroll
    
  
    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 10, // offset (in px) from the original trigger point
    delay: 200, // values from 0 to 3000, with step 50ms
    duration: 400, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
});


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

// //Crsl

// class Caroussel{

//     /**
//      * 
//      * @param {HTMLElement} element
//      * @param {Object} options
//      * @param {Object} [options.slidesToScroll=1] Nombre d'éléments à faire défiler
//      * @param {Object} [options.slidesVisible=1] Nombre d'éléments visible dans un slide
//      * @param {boolean} [options.loops=false] Doit-on boucler en fin de slide/caroussel
//      */

//      constructor(element, options ={}){
//          this.element = element;
//          this.options = Object.assign({},{
//              slidesToScroll: 1,
//              slidesVisible: 1,
//              loop: false
//          }, options)
//          let children = [].slice.call(element.children)
//          this.isMobile = false
//         this.currentItem = 0

//         //Modification du DOM
//          this.root = this.createDivWithClass('caroussel')
//           this.container = this.createDivWithClass('caroussel__container')
//           this.root.setAttribute('tabindex', '0')
//          this.root.appendChild(this.container)
//          this.element.appendChild(this.root)
//          this.items = children.map((child) => {
//              let item = this.createDivWithClass('caroussel__item')
//              item.appendChild(child)
//              this.container.appendChild(item)
//              return item
//          })
//          this.setStyle()
//          this.createNavigation()
       
//          //Evenements
//          this.onWindowResize()
//          window.addEventListener('resize', this.onWindowResize.bind(this))
//          this.root.addEventListener('keyup', (e)=>{
//              if(e.key === 'ArrowRight' || e.key === 'Right'){
//                  this.next()
//              }else if(e.key === "ArrowLeft" || e.key === 'Left'){
//                  this.prev()
//              }
//          })
//      }

//      /**
//       * Applique les bonnes dimensions aux éléments du caroussel
//       */

//      setStyle (){
//         let ratio = this.items.length / this.slidesVisible
//         this.container.style.width = (ratio * 100) + '%'
//         this.items.forEach(item => item.style.width = ((100/ this.slidesVisible) / ratio) +"%")
//      }

//      createNavigation(){
//         let nextButton = this.createDivWithClass('caroussel__next')
//         let prevButton = this.createDivWithClass('caroussel__prev')
//         this.root.appendChild(nextButton)
//         this.root.appendChild(prevButton)
//         nextButton.addEventListener('click',this.next.bind(this))
//         prevButton.addEventListener('click',this.prev.bind(this))
//      }

//      next(){
//         this.gotoItem(this.currentItem + this.slidesToScroll)
//      }

//      prev(){
//         this.gotoItem(this.currentItem - this.slidesToScroll)
//      }

//      /**
//       * Déplace le caroussel vers l'élément ciblé
//       * @param {number} index 
//       */

//      gotoItem (index){
//          if(index < 0){
//              if(this.options.loop){
//                 index = this.items.length - this.slidesVisible
//              }else{
//                  return
//              }

//          }
//              else if(index >= this.items.length || (this.items[this.currentItem + this.slidesVisible]===undefined && index > this.currentItem)){
//                  if(this.options.loop){
//                     index = 0
//                  }else{
//                      return
//                  }
                 
//              }
         
//          let translateX = index * -100/ this.items.length
//          this.container.style.transform = 'translate3d('+ translateX+'%, 0, 0)'
//         this.currentItem = index;
//      }
//      onWindowResize(){
//          let mobile = window.innerWidth < 768
//          if (mobile !== this.mobile){
//              this.isMobile = mobile
//              this.setStyle()
//          }
//      }

//      /**
//       * 
//       * @param {string} className 
//       * @returns {HTMLElement}
//       */
//      createDivWithClass (className){
//         let div = document.createElement('div')
//         div.setAttribute('class', className)
//         return div
//      }

//      /**
//       * @returns {number}
//       */
//      get slidesToScroll(){
//         return this.isMobile ? 1 : this.options.slidesToScroll
//      }
//      get slidesVisible(){
//         return this.isMobile ? 1 : this.options.slidesVisible
//      }
// }

// new Caroussel(document.querySelector('#caroussel1'), {
//     slidesToScroll: 1,
//     slidesVisible: 2,
//     loop:false
// })

/**
 * Ce que l'on veut, c'est : faire défiler en scrollant les items de la div container
 * Donc on a une taille d'item et un tableau d'items 
 * 
 */

//  let container = document.querySelector('.works__container')
//  let item = document.querySelectorAll('.works__container__item')
// //  container = window.innerWidth
// //  container = 1206

//  container.addEventListener("click", ()=>{
//      console.log('cc')
//      container.forEach(item => {
//         item.style.marginLeft = -80 + '%'
//      });
    
    // var cc = container.innerWidth = 1206
    // for (let i = 0; i < container.length; i++) {
        // if(item.style.marginLeft < cc ){
        //     item.style.marginLeft = -10;
        //     item.scrollLeft -= 10 
        // }
    // }
//  })