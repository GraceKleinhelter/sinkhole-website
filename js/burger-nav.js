const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-link-container');
    const navLinks = document.querySelectorAll('.nav-links');
    
    burger.addEventListener('click',() => { 
        //toggle nav
        nav.classList.toggle('nav-active');

        //animate links
        navLinks.forEach((link, index) => {
           if (link.style.animation){
            link.style.animation = ''
            } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
            }
        });
    //burger animation
        burger.classList.toggle('toggle');
    });


}

navSlide();