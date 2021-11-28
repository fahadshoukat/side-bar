const toggleBtn = document.querySelector(".toggle-btn");
const closeBtn = document.querySelector(".close-btn");
const sideBar = document.querySelector(".sideBar");

toggleBtn.addEventListener('click', function(){
    sideBar.classList.toggle('show-sideBar');
});

closeBtn.addEventListener('click', function(){
    sideBar.classList.remove('show-sideBar');
})