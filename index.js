// Print Resume
function printResume() {
    window.print();
}

// Smooth Animation
const sections = document.querySelectorAll(".right section");

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, {
    threshold: 0.2
});

sections.forEach((section) => {
    section.style.opacity = "0";
    section.style.transform = "translateY(30px)";
    section.style.transition = "0.8s ease";
    observer.observe(section);
});

// Skill Hover Effect
const skills = document.querySelectorAll(".section li");

skills.forEach((skill) => {
    skill.addEventListener("mouseenter", () => {
        skill.style.color = "#ffd54f";
        skill.style.paddingLeft = "8px";
        skill.style.transition = "0.3s";
    });

    skill.addEventListener("mouseleave", () => {
        skill.style.color = "#fff";
        skill.style.paddingLeft = "0";
    });
});

// Dynamic Year
const footer = document.createElement("footer");
footer.innerHTML = `
<p style="text-align:center;padding:15px;color:#777;font-size:14px;">
© ${new Date().getFullYear()} Zain Tahir | Resume
</p>`;
document.body.appendChild(footer);

// Welcome Message
console.log("Welcome to Zain Tahir Resume");