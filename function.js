// =========================
// SCROLL ANIMATION
// =========================

const elements = document.querySelectorAll(".fade");

function showElements() {

    elements.forEach(function(element) {

        const position =
            element.getBoundingClientRect().top;

        const screenHeight =
            window.innerHeight;

        if (position < screenHeight - 100) {

            element.classList.add("show");

        }

    });

}


// ทำงานเมื่อเลื่อนหน้าเว็บ
window.addEventListener(
    "scroll",
    showElements
);


// ทำงานทันทีตอนเปิดเว็บไซต์
showElements();
