const lenis = new Lenis();
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);
let animtext = document.querySelector(".text2");
let trgipage = document.querySelector(".page2");

gsap.from(".text2", {
  duration: 0.8,
  width: "0%",
  scrollTrigger: {
    trigger: ".page2",
    markers: true,
    start: "top 58%",
    end: "bottom 80%",
    scrub: 2,
  },
});
