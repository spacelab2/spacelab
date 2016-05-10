var gsap = require('gsap');

var demo = document.getElementById("demo");

TweenLite.fromTo(demo, 2, { x: '-=200px' }, { x: 150, ease: Power4.easeInOut, onStart: start, onUpdate: update, onComplete: complete });

TweenLite.to(demo, 0.4, { top: '100%', y: '-100%', ease: Bounce.easeOut, delay: 2 });
TweenLite.to(demo, 0.7, { x: '-=200px', y: '-100%', ease: Back.easeInOut, delay: 3 });
TweenLite.to(demo, 0.8, { x: '-=200px', y: '-100%', ease: Back.easeInOut, delay: 4.2 });
TweenLite.to(demo, 2.5, { top: '50%', y: '-50%', ease: Power0.easeNone, delay: 5 });
TweenLite.to(demo, 2.5, { x: '+=400px', ease: Elastic.easeInOut, delay: 7.7 });
TweenLite.to(demo, 2.5, { x: '-=400px', rotation: -720, ease: SlowMo.ease.config(0.1, 0.7, false), delay: 10.4 });


// 7. Callback functions
function start() {
    console.log('start');
}

function update() {
    console.log('animating');
}

function complete() {
    console.log('end');
}

