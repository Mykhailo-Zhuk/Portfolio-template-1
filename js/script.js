const navList = document.querySelector(".first-block__items");
const btn = document.querySelectorAll('.first-btn'); 

btn.forEach(sectionButton => {
    sectionButton.addEventListener("click", function (e) {
        navList.classList.toggle('button__clicked');
    });
});