const pages = {
hero: document.getElementById("hero"),
response: document.getElementById("response"),
itinerary: document.getElementById("itinerary"),
letter: document.getElementById("letter"),
final: document.getElementById("final")
};

const noBtn = document.getElementById("noBtn");

/* ================= PAGE CONTROL ================= */
function goYes(){
showResponse(true);
}

function showResponse(isYes){

pages.hero.classList.remove("active");
pages.response.classList.add("active");

document.getElementById("responseTitle").innerText =
isYes ? "Yay ❤️" : "Oops 😝";

document.getElementById("responseText").innerText =
isYes
? "I knew you'd say YES ❤️"
: "You cannot say NO today 😌 but it's okay... you're still coming anyway!";
}

function showItinerary(){
pages.response.classList.remove("active");
pages.itinerary.classList.add("active");
}

function showLetter(){
pages.itinerary.classList.remove("active");
pages.letter.classList.add("active");
typeLetter();
}

function showFinal(){
pages.letter.classList.remove("active");
pages.final.classList.add("active");

startConfetti();
}

/* ================= NO BUTTON (FIXED MOBILE + DESKTOP) ================= */

let activated = false;

function moveNoButton(){

if(!activated){
noBtn.style.position = "fixed";
activated = true;
}

const padding = 20;

const maxX = window.innerWidth - noBtn.offsetWidth - padding;
const maxY = window.innerHeight - noBtn.offsetHeight - padding;

const x = Math.random() * maxX;
const y = Math.random() * maxY;

noBtn.style.left = x + "px";
noBtn.style.top = y + "px";
}

/* desktop */
noBtn.addEventListener("mouseenter", moveNoButton);

/* mobile touch */
noBtn.addEventListener("touchstart", function(e){
e.preventDefault();
moveNoButton();
});

/* ================= TYPING LETTER ================= */

const text = `
Happy Birthday Atikah ❤️

Today is your special day.

I just want you to know how much you mean to me.

Thank you for always being you.

I’m really grateful to celebrate this day with you.

Love you always ❤️
— Azril
`;

let i = 0;

function typeLetter(){
const el = document.getElementById("typing");

if(i < text.length){
el.innerHTML += text.charAt(i);
i++;
setTimeout(typeLetter, 25);
}
}

/* ================= CONFETTI ================= */
function startConfetti(){

if(window.confetti){

confetti({
particleCount: 150,
spread: 100,
origin: { y: 0.6 }
});

setInterval(() => {
confetti({
particleCount: 70,
spread: 90,
origin: { y: 0.6 }
});
}, 2500);

}
}

/* ================= FLOATING HEARTS ================= */
setInterval(() => {

const heart = document.createElement("div");
heart.classList.add("heart-float");
heart.innerHTML = "❤️";

heart.style.left = Math.random() * 100 + "vw";
heart.style.fontSize = (12 + Math.random() * 18) + "px";
heart.style.animationDuration = (4 + Math.random() * 3) + "s";

document.body.appendChild(heart);

setTimeout(() => {
heart.remove();
}, 7000);

}, 500);
