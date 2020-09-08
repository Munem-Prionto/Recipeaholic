const mNavBtn = document.querySelector('.nav__mobile-nav__btn');
const mNavDiv = document.querySelector('.nav__mobile-nav');



mNavBtn.addEventListener('click' , e=> {
    console.log(e)
    mNavDiv.classList.toggle('nav__m__sideNav');

    /* mNavDiv.style.width = "100%"; */
})
