console.log("index.js");

console.log("index.js");

function Sections__init() {
  ScrollTrigger.create({
    scroller: ".site-wrap > main",
    trigger: ".site-wrap > main > .section-2",
    start: "top top",
    end: "top top",
    onEnter: () => { $('html').addClass('section-2-was-shown'); },
    onLeaveBack: () => { $('html').removeClass('section-2-was-shown'); },
  });

  ScrollTrigger.create({
    scroller: ".site-wrap > main",
    trigger: ".site-wrap > main > .section-3",
    start: "top top",
    end: "top top",
    onEnter: () => { $('html').addClass('section-3-was-shown'); },
    onLeaveBack: () => { $('html').removeClass('section-3-was-shown'); },
  });
}

Sections__init();