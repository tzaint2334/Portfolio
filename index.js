/*=============================
        MOBILE MENU
=============================*/

const menu = document.querySelector(".menu");
const navbar = document.getElementById("navbar");

menu.addEventListener("click",()=>{

    navbar.classList.toggle("active");

});


/*=============================
        STICKY HEADER
=============================*/

window.addEventListener("scroll",()=>{

    const header = document.getElementById("header");

    header.classList.toggle("sticky",window.scrollY>50);

});


/*=============================
        CLOSE MENU
=============================*/

document.querySelectorAll("#navbar a").forEach(link=>{

    link.addEventListener("click",()=>{

        navbar.classList.remove("active");

    });

});


/*=============================
        HERO ANIMATION
=============================*/

window.addEventListener("load",()=>{

    document.querySelector(".hero-content").animate(

        [

            {

                opacity:0,

                transform:"translateY(80px)"

            },

            {

                opacity:1,

                transform:"translateY(0)"

            }

        ],

        {

            duration:1200,

            easing:"ease"

        }

    );

});