//https://scrollmagic.io/docs/ScrollMagic.Scene.html#constructor
//https://ihatetomatoes.net/5-days-with-scrollmagic/


/*1: SCROLLMAGIC ANIMATION*/

// INIT CONTROLLER

//The main class that is needed once per scroll container. > default container is window
let controller = new ScrollMagic.Controller();

// CREATE TRIGGERS

//const trigger = Array.prototype.slice.call(document.querySelectorAll(".dummytext")); //Is it the same? why prototype?
//prototype.slice = oppervlakkige kopie van gedeelte van array/ verandert niet oorspronkelijke array
// call()methode roept een functie aan met een gegeven this waarde en afzonderlijk gedefineerde argumenten.
// de waarde van this is dan .dummytext?

const trigger = Array.from(document.querySelectorAll(".dummytext"));

console.log(trigger);

trigger.forEach(function (element) {

    const TEXTTWEEN = gsap.from(element, {y: "20%", duration: 1, opacity: 0});

// CREATE SCENE : A Scene defines where the controller should react and how.
    let DummyAnimation = new ScrollMagic.Scene({
        triggerElement: element, //defines the start of the scene
        reverse: true
    })

        //ADD SCENE TO CONTROLLER
        .setTween(TEXTTWEEN) //If you want to add multiple tweens, add them into a GSAP Timeline object and supply it instead
        .addTo(controller) //can add multiple scenes
    /*.addIndicators({
            colorStart: "orange"
        }
    );*/
});


/*1: ADVERTISEMENT*/
gsap.fromTo(".headline p", {x: 1700}, {x: -500, duration: 12, repeat: -1});

/*2: BOOKS + EYE ICON*/

// make timeline for books
let tlBooks = gsap.timeline({paused: true}); // no 'new' WHY PAUSED to TRUE?
// decide the animation

//Eases in a strong fashion either at the beginning
// (easeIn), the end (easeOut), or both (easeInOut).
tlBooks.to(".first", {
    duration: 1.5,
    x: -600,
    ease: "ExpoInOut"  //show as example bounce
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
const BOOKS = document.getElementById("eyes");

//add eventlisteners to it
BOOKS.addEventListener("mouseenter", function () {
    tlBooks.play(); //play method
});

BOOKS.addEventListener("mouseleave", function () {
    tlBooks.reverse();
});

let img = document.getElementById("eyes");
let imgSrc = img.src;
let imgHover = img.getAttribute("data-hover");

img.addEventListener("mouseenter", function () {
    img.setAttribute("src", imgHover);
});

img.addEventListener("mouseout", function () {
    img.setAttribute("src", imgSrc);
});


/*3: DUMMY TEXT */
const dummyTitle = gsap.from(".dummytext", {x: "100%", duration: 1, opacity: 0});

/*4: MOTIONPATH SMILEY */

//register the plugin (only once)
gsap.registerPlugin(MotionPathPlugin);

//centers the smiley div on path
gsap.set("#smiley", {xPercent: -50, yPercent: -50});
   //transform percentages are always relative to the element itself, not its parent
   //the transformOrigin allows you to provide the x/y coordinates for the point the object will rotate around
   //, transformOrigin: "50% 50%" not necessary > was for rotating


/*5: CONTROLLING ANIMATION */

let animation = gsap.to("#smiley", {
    duration: 9,
    motionPath:
        {
            path: "#path",
            autoRotate: true //so that head rotates with path
        }
});

// click handlers for controlling the tween instance...
document.querySelector("#play").onclick = () => animation.play();
document.querySelector("#pause").onclick = () => animation.pause();
document.querySelector("#resume").onclick = () => animation.resume();
document.querySelector("#reverse").onclick = () => animation.reverse();
document.querySelector("#restart").onclick = () => animation.restart();


