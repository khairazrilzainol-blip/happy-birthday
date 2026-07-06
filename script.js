const pages = {
hero: document.getElementById("hero"),
response: document.getElementById("response"),
itinerary: document.getElementById("itinerary"),
letter: document.getElementById("letter"),
final: document.getElementById("final")
};

const noBtn = document.getElementById("noBtn");

/* YES */
function goYes(){
showResponse();
}

/* RESPONSE */
function showResponse(){

pages.hero.classList.remove("active");
pages.response.classList.add("active");

document.getElementById("responseTitle").innerText = "Yay ❤️";
document.getElementById("responseText").innerText = "I knew you'd say YES ❤️";
}

/* NAVIGATION */
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

confetti({ particleCount: 150, spread: 100 });
}

/* TYPE LETTER */
const text = `Happy Birthday Atikah ❤️

Thank you for being part of my life.

I hope today makes you smile always ❤️`;

let i = 0;

function typeLetter(){
const el = document.getElementById("typing");

if(i < text.length){
el.innerHTML += text[i];
i++;
setTimeout(typeLetter, 25);
}
}

/* FIXED NO BUTTON (iPhone SAFE) */
let active = false;

function moveNo(){

if(!active){
noBtn.style.position = "fixed";
noBtn.style.zIndex = "999";
active = true;
}

const maxX = window.innerWidth - noBtn.offsetWidth - 20;
const maxY = window.innerHeight - noBtn.offsetHeight - 20;

let x = Math.random() * maxX;
let y = Math.random() * maxY;

y = Math.max(80, y);

noBtn.style.left = x + "px";
noBtn.style.top = y + "px";
}

/* desktop */
noBtn.addEventListener("mouseenter", moveNo);

/* mobile */
noBtn.addEventListener("touchstart", function(e){
e.preventDefault();
moveNo();
});
