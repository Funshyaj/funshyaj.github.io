const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger'); const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul'); const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a'); const header = document.querySelector('.header.container'); hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active'); mobile_menu.classList.toggle('active');
}); 
document.addEventListener('scroll', () => {
    var scroll_position = window.scrollY; if (scroll_position > 250) {
        header.style.backgroundColor = '#29323c';
    } else {
        header.style.backgroundColor = 'transparent';
    }}); menu_item.forEach((item) => {
    item.addEventListener('click', () => {
        hamburger.classList.toggle('active'); mobile_menu.classList.toggle('active');
    });
});



// logic for see more button on projects
// logic for first button

const seeMoreBtn = document.querySelectorAll('.see-more-button');
const seeMoreBtn1 = document.querySelector('.see-more-button1');


seeMoreBtn1.addEventListener('click', () => {
    let seeMore1 = seeMoreBtn1.nextElementSibling;
    let parent = seeMoreBtn1.parentElement;

  
     if (seeMore1.style.display === 'none')
     {
        // if its a tablet or higher
        if (window.outerWidth >= 768){
            parent.style.paddingTop = '120px'
        }
        
          // if its a PC
          if (window.outerWidth >= 1024){
            parent.style.paddingTop = '170px'
        }
        seeMore1.style.display = 'block' 
      seeMoreBtn1.innerHTML = 'See less...' 
        seeMoreBtn1.style.paddingBottom = '10px'
   
       
     }
   
   else if (seeMore1.style.display === 'block'){
       seeMoreBtn1.innerHTML = 'See more...'
        seeMore1.style.display = 'none'
        seeMoreBtn1.style.paddingBottom = '0px'
        
        if (window.outerWidth >= 768){
           parent.style.paddingTop = '0px'
       }
        }
   
        })
   


seeMoreBtn.forEach(btn => {
   btn.addEventListener('click', () => {

let seeMore = btn.nextElementSibling;
let parent = btn.parentElement;
if (seeMore.style.display === 'block'){
   btn.innerHTML = 'See more...'
    seeMore.style.display = 'none'
    
}
 else {seeMore.style.display = 'block' 
  btn.innerHTML = 'See less...' 
 }

})
})



    
