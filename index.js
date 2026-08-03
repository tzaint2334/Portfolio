

const menu = document.querySelector(".menu");
const nav = document.querySelector("nav");

menu.addEventListener("click", () => {
    nav.classList.toggle("active");

    if(nav.classList.contains("active")){
        menu.innerHTML = '<i class="fas fa-times"></i>';
    }else{
        menu.innerHTML = '<i class="fas fa-bars"></i>';
    }
});



document.querySelectorAll("nav a").forEach(link => {

    link.addEventListener("click", () => {

        nav.classList.remove("active");

        menu.innerHTML = '<i class="fas fa-bars"></i>';

    });

});



const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if(pageYOffset >= sectionTop){

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if(link.getAttribute("href") === "#" + current){

            link.classList.add("active");

        }

    });

});


const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 80){

        header.style.background = "#08101d";

        header.style.boxShadow = "0 10px 25px rgba(0,0,0,.3)";

    }

    else{

        header.style.background = "rgba(15,23,42,.85)";

        header.style.boxShadow = "none";

    }

});

/*=========================
    SCROLL ANIMATION
==========================*/

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.15
});

document.querySelectorAll(".card,.skill-card,.project-card,.timeline-content,.certificate-card").forEach(el=>{

    el.classList.add("hidden");

    observer.observe(el);

});

/*=========================
    TYPING EFFECT
==========================*/

const text = [
    "Full Stack Developer",
    "Web Developer",
    "Java Developer",
    "Frontend Developer"
];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type(){

    if(count === text.length){
        count = 0;
    }

    currentText = text[count];

    letter = currentText.slice(0, ++index);

    document.querySelector(".hero-left h2").textContent = letter;

    if(letter.length === currentText.length){

        setTimeout(() => {

            erase();

        },1500);

    }

    else{

        setTimeout(type,100);

    }

})();

function erase(){

    letter = currentText.slice(0,--index);

    document.querySelector(".hero-left h2").textContent = letter;

    if(letter.length === 0){

        count++;

        setTimeout(type,300);

    }

    else{

        setTimeout(erase,50);

    }

}


const topBtn = document.querySelector(".scroll-top");

window.addEventListener("scroll",()=>{

    if(window.scrollY > 400){
        topBtn.classList.add("show");
    }else{
        topBtn.classList.remove("show");
    }

});

topBtn.addEventListener("click",()=>{

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

});
/*=========================
LOADER
=========================*/

window.addEventListener("load",()=>{

setTimeout(()=>{

document.getElementById("loader").style.opacity="0";

document.getElementById("loader").style.visibility="hidden";

},2000);

});