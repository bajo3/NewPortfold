// Declare variables using const or let depending on if they need to be reassigned later
const radius = 340;
const autoRotate = true;
const rotateSpeed = -60;
const imgWidth = 190;
const imgHeight = 230;

// Call init function after the DOM has loaded
window.addEventListener("load", () => {
    setTimeout(init, 1000);
});

// Use const instead of let since these variables are not reassigned
const odrag = document.getElementById("drag");
const ospin = document.getElementById("spin");
const aImg = ospin.getElementsByTagName("img");
const aEle = [...aImg];

ospin.style.width = `${imgWidth}px`;
ospin.style.height = `${imgHeight}px`;

const ground = document.getElementById("ground");
ground.style.width = `${radius * 3}px`;
ground.style.height = `${radius * 3}px`;

function init(delayTime = 0) {
    aEle.forEach((ele, i) => {
        ele.style.transform = `rotateY(${i * (360 / aEle.length)}deg) translateZ(${radius}px)`;
        ele.style.transition = "transform 1s";
        ele.style.transitionDelay = `${delayTime || (aEle.length - i) / 4}s`;
    });
}

function applyTransform(obj) {
    if (tY > 180) tY = 180;
    if (tY < 0) tY = 0;

    obj.style.transform = "rotateX(" + (-tY) + "deg) rotateY(" + (tX) + "deg)";
}


function playSpin(yes) {
    ospin.style.animationPlayState = yes ? "running" : "paused";
}

let sX = 0,
    sY = 0,
    desX = 0,
    desY = 0,
    tX = 0,
    tY = 10;

if (autoRotate) {
    const animationName = rotateSpeed > 0 ? "spin" : "spinRevert";
    ospin.style.animation = `${animationName} ${Math.abs(
        rotateSpeed
    )}s infinite linear`;
}

document.onpointerdown = function (e) {
    clearInterval(odrag.timer);
    e = e || window.event;
    sX = e.clientX;
    sY = e.clientY;

    document.onpointermove = function (e) {
        e = e || window.event;
        const nX = e.clientX;
        const nY = e.clientY;

        desX = nX - sX;
        desY = nY - sY;
        tX += desX * 0.1;
        tY += desY * 0.1;

        applyTransform(odrag);

        sX = nX;
        sY = nY;
    };

    document.onpointerup = function (e) {
        odrag.timer = setInterval(function () {
            desX *= 0.95;
            desY *= 0.95;
            tX += desX * 0.1;

            applyTransform(odrag);

            playSpin(false);

            if (Math.abs(desX) < 0.5 && Math.abs(desY) < 0.5) {
                clearInterval(odrag.timer);
                playSpin(true);
            }
        }, 17);

        document.onpointermove = null;
        document.onpointerup = null;
    };

    return false;
};