const pages = {
hero: document.getElementById("hero"),
response: document.getElementById("response"),
itinerary: document.getElementById("itinerary"),
letter: document.getElementById("letter"),
final: document.getElementById("final")
};

const noBtn = document.getElementById("noBtn");

/* ================= NO BUTTON ESCAPE ================= */
noBtn.addEventListener("mouseover", () => {
noBtn.style.left = Math.random() * 80 + "vw";
noBtn.style.top = Math.random() * 80 + "vh";
});

/* ================= YES CLICK ================= */
function goYes(){
showResponse(true);
}

/* ================= RESPONSE PAGE ================= */
function showResponse(isYes){

pages.hero.classList.remove("active");
pages.response.classList.add("active");

document.getElementById("responseTitle").innerText =
isYes ? "Yay ❤️" : "Oops 😝";

document.getElementById("responseText").innerHTML =
isYes
? "I knew you'd say YES ❤️"
: "You cannot say NO today 😌 but it's okay... you're still coming anyway!";
}

/* ================= NAVIGATION ================= */
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

/* ================= TYPING LETTER ================= */
const text = `
Happy Birthday Atikah ❤️

Today is your special day, and I just want you to know how much you mean to me.

Thank you for always being yourself, for your kindness, and for making my days better just by being in them.

I hope this little surprise brings you happiness and a smile.

I’m really glad I get to spend this day with you.

Love you always ❤️
— Azril
`;

let i = 0;

function typeLetter(){
const el = document.getElementById("typing");

if(i < text.length){
el.innerHTML += text.charAt(i);
i++;
setTimeout(typeLetter, 30);
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
particleCount: 80,
spread: 90,
origin: { y: 0.6 }
});
}, 2000);
}
}

/* ================= FLOATING HEARTS ================= */
setInterval(() => {
const heart = document.createElement("div");
heart.classList.add("heart-float");
heart.innerHTML = "❤️";

heart.style.left = Math.random() * 100 + "vw";
heart.style.fontSize = (12 + Math.random() * 20) + "px";
heart.style.animationDuration = (4 + Math.random() * 3) + "s";

document.body.appendChild(heart);

setTimeout(() => {
heart.remove();
}, 7000);

}, 400);