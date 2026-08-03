// Welcome Message
console.log("Welcome to Zain Tahir Resume Website");

// Smooth Fade Animation
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
});

sections.forEach((section) => {
    section.style.opacity = "0";
    section.style.transform = "translateY(30px)";
    section.style.transition = "all 0.8s ease";
    observer.observe(section);
});

// Button Hover Effect
const buttons = document.querySelectorAll(".btn");

buttons.forEach((btn) => {
    btn.addEventListener("mouseenter", () => {
        btn.style.transform = "scale(1.05)";
    });

    btn.addEventListener("mouseleave", () => {
        btn.style.transform = "scale(1)";
    });
});

// Current Year in Footer
const footer = document.querySelector("footer p");
if (footer) {
    footer.innerHTML = `© ${new Date().getFullYear()} Zain Tahir | All Rights Reserved`;
}

// Print Confirmation
const printBtn = document.querySelector("button");

if (printBtn) {
    printBtn.addEventListener("click", () => {
        setTimeout(() => {
            alert("Your resume is ready to print or save as PDF.");
        }, 500);
    });
}