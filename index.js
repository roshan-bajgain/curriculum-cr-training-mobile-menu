console.log('hello roshan');
window.addEventListener('DOMContentLoaded', () => {
const btn = document.querySelector('#menu_btn');
const menu = document.querySelector('#mobile-nav');
const close = document.querySelector('#mobile-nav span');
const list = document.querySelectorAll('#mobile-nav ul li');

btn.addEventListener('click', () => {
    menu.style.display = 'flex';
})
close.addEventListener('click', () => {
    menu.style.display = 'none';
  })
  list.forEach(li=> {
    li.addEventListener('click', () => {
      menu.style.display = 'none';
    })
  })  
});