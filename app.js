let searchBtn = document.querySelector('#search-btn');
let searchBar = document.querySelector('.search-bar-container'); 
let loginBtn = document.querySelector('#login-btn');
let loginForm = document.querySelector('.login');
let loginClose = document.querySelector('#formclose'); 
let menu = document.querySelector('#menu-bar') ;
let navbar = document.querySelector('.navbar')
let videoBtn= document.querySelectorAll('.vid-btn')

menu.addEventListener('click',()=>
{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');

});

window.onscroll=()=>    
{
    searchBtn.classList.remove('fa-times');
    searchBar.classList.remove('active');
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
    loginForm.classList.remove('active');
    

}
searchBtn.addEventListener('click',()=>
{
    searchBtn.classList.toggle('fa-times');
    searchBar.classList.toggle('active');

});
 
loginBtn.addEventListener('click',()=>
{
    loginForm.classList.add('active');


});
loginClose.addEventListener('click',()=>
{
    loginForm.classList.remove('active');
    

});
videoBtn.forEach(btn=>{
    btn.addEventListener('click',()=>{
        document.querySelector('.videoctrl .active').classList.remove('active');
        btn.classList.add('active');
        let newsrc = btn.getAttribute('data-src');
        document.querySelector('#video-options').src=newsrc;
    });
}); 


 