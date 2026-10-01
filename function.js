// Smooth scroll + อัปเดต URL (#about) ให้ปุ่ม Back ใช้ได้
const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;

document.querySelectorAll("a[href^='#']").forEach(link => {
    link.addEventListener("click", event => {
        const target = document.querySelector(link.getAttribute("href"));
        if (!target) return;

        event.preventDefault();
        target.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth" });
        history.pushState(null, "", link.getAttribute("href"));
    });
});

// ไฮไลต์เมนูตามส่วนที่กำลังดูอยู่
const navLinks = document.querySelectorAll(".nav-links a");
const sections = document.querySelectorAll("main section");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        navLinks.forEach(a =>
            a.classList.toggle("active", a.getAttribute("href") === "#" + entry.target.id)
        );
    });
}, { rootMargin: "-45% 0px -50% 0px" });

sections.forEach(section => observer.observe(section));

// ปีปัจจุบันใน footer
document.getElementById("year").textContent = new Date().getFullYear();
