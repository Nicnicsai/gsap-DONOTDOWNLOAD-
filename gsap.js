//https://scrollmagic.io/docs/ScrollMagic.Scene.html#constructor
//https://ihatetomatoes.net/5-days-with-scrollmagic/

// INIT CONTROLLER
let controller = new ScrollMagic.Controller();

// CREATE TRIGGERS


// CREATE SCENE : A Scene defines where the controller should react and how.
let scene = new ScrollMagic.Scene({
    triggerElement: '.wrapper',
    duration: "100%",
    triggerHook: 0.5  //Can be a number between 0 and 1 defining the position of the trigger Hook in relation to the viewport.
})

    //ADD SCENE TO CONTROLLER
    .addTo(controller);


/*1: ADVERTISEMENT*/
gsap.fromTo(".headline p", {x: 1700}, {x: -500, duration: 12, repeat: -1});


/*2: BOOKS*/

// make timeline for books
let tlBooks = gsap.timeline({paused: true}); // no 'new' WHY PAUSED to TRUE?

// decide the animation
tlBooks.to(".first", {
    duration: 1.5,
    x: -600,
    ease: "ExpoInOut"
});
tlBooks.to(".second", {
    duration: 1,
    x: -500,
    ease: "ExpoInOut"
});
tlBooks.to(".third", {
    duration: 1,
    x: -400,
    ease: "ExpoInOut"
});

// select divs to be moved
const BOOKS = document.querySelector(".books");

//add eventlisteners to it
BOOKS.addEventListener("mouseenter", function () {
    tlBooks.play();
});

BOOKS.addEventListener("mouseleave", function () {
    tlBooks.reverse();
});


/*3: DUMMY TEXT */

gsap.from(".dummytitle", {x: "-100%", duration: 1, opacity: 0});
gsap.from(".dummytext", {x: "100%", duration: 1, opacity: 0});

/*4: MOTIONPATH SMILEY */
//register the plugin (only once)
gsap.registerPlugin(MotionPathPlugin);

//centers the smiley div on path
gsap.set("#smiley", {xPercent: -50, yPercent: -50, transformOrigin: "50% 50%"});

gsap.to("#smiley", {
    duration: 9,
    motionPath:
        {path: "#path",
         autoRotate: true
        }
});

/*5: BACKGROUNDCOLOR CHANGE */


