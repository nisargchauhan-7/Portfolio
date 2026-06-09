/* =========================
   GSAP SETUP
========================= */

gsap.registerPlugin(ScrollTrigger);

/* =========================
   HERO ANIMATIONS
========================= */

gsap.from(".hero-tag", {
    x: -100,
    opacity: 0,
    duration: 1,
    delay: 0.2,
    ease: "power3.out"
});

gsap.from(".hero h1", {
    y: 100,
    opacity: 0,
    duration: 1.2,
    delay: 0.4,
    ease: "power3.out"
});

gsap.from(".hero h2", {
    y: 50,
    opacity: 0,
    duration: 1,
    delay: 0.7,
    ease: "power3.out"
});

gsap.from(".hero h3", {
    y: 50,
    opacity: 0,
    duration: 1,
    delay: 0.9,
    ease: "power3.out"
});

gsap.from(".hero-desc", {
    y: 50,
    opacity: 0,
    duration: 1,
    delay: 1.1,
    ease: "power3.out"
});

gsap.from(".hero-btn", {
    scale: 0,
    opacity: 0,
    duration: 0.8,
    delay: 1.3,
    ease: "back.out(1.7)"
});

gsap.from(".hero-right", {
    x: 100,
    opacity: 0,
    duration: 1.2,
    delay: 0.8,
    ease: "power3.out"
});

/* =========================
   PROJECT ANIMATIONS
========================= */

gsap.from(".project-item", {

    y: 100,

    opacity: 0,

    duration: 1.2,

    stagger: 0.3,

    ease: "power3.out",

    scrollTrigger: {
        trigger: ".projects",
        start: "top 75%"
    }

});

/* =========================
   ABOUT ANIMATION
========================= */

gsap.from(".about", {

    y: 100,

    opacity: 0,

    duration: 1,

    scrollTrigger: {
        trigger: ".about",
        start: "top 80%"
    }

});

/* =========================
   CONTACT ANIMATION
========================= */

gsap.from(".contact h2", {

    y: 100,

    opacity: 0,

    duration: 1,

    scrollTrigger: {
        trigger: ".contact",
        start: "top 80%"
    }

});

/* =========================
   CUSTOM CURSOR
========================= */

const cursor = document.querySelector(".cursor");

if (cursor) {

    document.addEventListener("mousemove", (e) => {

        cursor.style.left = e.clientX + "px";
        cursor.style.top = e.clientY + "px";

    });

}

/* =========================
   CARD HOVER ANIMATION
========================= */

document.querySelectorAll(".project-preview").forEach((project) => {

    project.addEventListener("mouseenter", () => {

        gsap.to(project, {
            scale: 1.02,
            duration: 0.3
        });

    });

    project.addEventListener("mouseleave", () => {

        gsap.to(project, {
            scale: 1,
            duration: 0.3
        });

    });

});

/* =========================
   LENIS SMOOTH SCROLL
========================= */

const lenis = new Lenis();

function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

console.log("Portfolio Loaded Successfully 🚀");