const popover = document.querySelector ('.popover');
const navigationbasket = document.querySelector ('.navigation-basket');
const navigationuserlogin = document.querySelector ('.navigation-user-login');
const modalcontainer = document.querySelector ('.modal-container');
const modalclose = document.querySelector ('.modal-close');

navigationbasket.addEventListener('click', ()=>{
    popover.classList.toggle('popover-open');
    // mainmenu.classList.toggle('menu-open');
});

navigationuserlogin.addEventListener('click', ()=>{
    modalcontainer.classList.toggle('modal-container-close');
});

modalclose.addEventListener('click', ()=>{
    modalcontainer.classList.toggle('modal-container-close');
});

$(document).ready(function(){
    $('.your-class').slick({
        dots: true,
        arrows: false
    });
  });