const toggleBtn = document.querySelector('.navbar_toogleBtn');
const menu = document.querySelector('.navbar_menu');

toggleBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
});
function myFunction() {
    alert("형진이 짱~?");
}