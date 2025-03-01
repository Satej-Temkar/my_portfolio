gsap.registerPlugin(ScrollTrigger);

// Horizontal scrolling >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
const horizontalSections = gsap.utils.toArray(".horizontal");

horizontalSections.forEach(function (section) {
  let animeWrap = section.querySelector(".horizontal__animation-wrap");
  let animationContentWrap = section.querySelector(".animation__content__wrap");

  let getToValue = () =>
    -(animationContentWrap?.scrollWidth - window.innerWidth / 2);

  if (window.innerWidth < 650) {
    getToValue = () =>
      -(animationContentWrap?.scrollWidth - window.innerWidth / 2 - 140);
  }

  gsap.fromTo(
    animeWrap,
    {
      x: () => (animeWrap.classList.contains("to--right") ? 0 : getToValue()),
    },
    {
      x: () => {
        return animeWrap.classList.contains("to--right") ? getToValue() : 0;
      },
      ease: "none",
      scrollTrigger: {
        trigger: animeWrap,
        start: "top top",
        end: () =>
          "+=" +
          (animationContentWrap?.scrollWidth - window.innerWidth / 2 - 120),
        pin: animeWrap,
        invalidateOnRefresh: true,
        //anticipatePin: 1,
        scrub: true,
        // markers: true,
      },
    }
  );
});

// Hero Timeline >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

const heroTl = gsap.timeline({
  scrollTrigger: {
    trigger: "#hero",
    start: "top bottom",
    toggleActions: "play none restart none",
  },
});

// Nav
heroTl.from(".nav__logo", {
  y: -30,
  opacity: 0,
  ease: "back",
});

heroTl.from(".nav__items .nav__item", {
  y: -30,
  opacity: 0,
  stagger: 0.1,
  ease: "back",
});

//Hero content
heroTl.from(".hero__content .hero__content__item", {
  y: 30,
  opacity: 0,
  stagger: 0.1,
});

// Hero illustration slide
heroTl.from(".hero__illustration", {
  y: 30,
  opacity: 0,
  // ease: Bounce.easeOut,
});

// Hero illustration rotate
heroTl.to(".hero__illustration__img", {
  rotate: 90,
  repeat: -1,
  duration: 20,
  yoyo: true,
});

// Hero illustration text sroll
gsap.to(".hero__illustration__text", {
  y: "-115px",
  repeat: -1,
  duration: 10,
  yoyo: true,
  opacity: 1,
  delay: 2,
});

// Projecsts section >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

const projectsTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".projects",
    start: "top bottom",
    toggleActions: "restart none none none",
  },
});

projectsTl.from(".projects__main__title", {
  scale: 0.5,
  opacity: 0,
  duration: 1,
  ease: "back",
});

projectsTl.from(".project__item", {
  y: 30,
  opacity: 0,
  stagger: 0.2,
});

// About section >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

const aboutTl = gsap.timeline({
  duration: 0.5,
  scrollTrigger: {
    trigger: ".about",
    start: "top bottom",
    toggleActions: "restart none restart none",
  },
});

aboutTl.from(".gsap-about__item", {
  y: 30,
  opacity: 0,
  stagger: 0.3,
});

// Experience section >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

const exTl = gsap.timeline({
  duration: 0.5,
  scrollTrigger: {
    trigger: ".resume",
    start: "top bottom",
    toggleActions: "restart none restart none",
  },
});

exTl.from(".gsap-resume__item", {
  y: 30,
  opacity: 0,
  stagger: 0.3,
});

// Services section >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

const servicesTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".services",
    start: "top top",
    end: "+=4000",
    scrub: true,
    pin: true,
    anticipatePin: 1,
  },
});

const animateServicesTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".services",
    start: "top bottom",
    toggleActions: "restart none restart none",
  },
});

servicesTl.from(".gsap-service-item-1", { xPercent: -100 });
servicesTl.from(".gsap-service-item-2", { yPercent: -100 });
servicesTl.from(".gsap-service-item-3", { xPercent: 100 });
servicesTl.from(".gsap-service-item-4", { yPercent: 100 });

animateServicesTl.from(".gsap-service-item", {
  y: 30,
  opacity: 0,
  delay: 0.8,
  stagger: 0.3,
});

// Tech section >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

const techTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".tech",
    start: "top bottom",
    toggleActions: "restart none restart none",
  },
});

techTl.from(".gsap-tech__item", {
  opacity: 0,
  scale: 0.5,
  ease: "back",
  duration: 0.5,
  stagger: 0.3,
});

// Contact section >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

const contactTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".contact",
    start: "top bottom",
    toggleActions: "restart none restart none",
  },
});

contactTl.from(".gsap-contact__item", {
  y: 30,
  opacity: 0,
  delay: 0.5,
  stagger: 0.3,
});
