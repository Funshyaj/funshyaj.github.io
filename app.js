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
const seeMoreBtn = document.querySelectorAll('.see-more-button');

seeMoreBtn.forEach(btn => {
   btn.addEventListener('click', () => {
let seeMore = btn.nextElementSibling;
if (seeMore.style.display === 'block'){
   btn.innerHTML = 'See more...'
    seeMore.style.display = 'none'
    btn.style.paddingBottom = '0px'
    
}
 else seeMore.style.display = 'block' , btn.innerHTML = 'See less...' ,  btn.style.paddingBottom = '10px'

})
})
    
