const pages = {
welcome: document.getElementById("welcome"),
message: document.getElementById("messagePage"),
itinerary: document.getElementById("itineraryPage"),
letter: document.getElementById("letterPage"),
final: document.getElementById("finalPage")
};

const noBtn = document.getElementById("noBtn");
const bgMusic = document.getElementById("bgMusic");

/* NO BUTTON MOVE */
noBtn.addEventListener("mouseover", () => {
noBtn.style.left = Math.random()*80 + "vw";
noBtn.style.top = Math.random()*80 + "vh";
});

/* MUSIC */
function playMusic(){
bgMusic.volume = 0.4;
bgMusic.play().catch(()=>{});
}

/* YES / NO */
function acceptDate(){
playMusic();
showMessage(true);
}

/* MESSAGE */
function showMessage(isYes){
pages.welcome.classList.remove("active");
pages.message.classList.add("active");

document.getElementById("answerTitle").innerText = isYes ? "Yay ❤️" : "Oops 😝";

document.getElementById("answerMessage").innerHTML =
isYes
? "I knew you'd say YES ❤️"
: "You cannot say NO 😌 but it's okay, you're still coming!";
}

/* ITINERARY */
function showItinerary(){
pages.message.classList.remove("active");
pages.itinerary.classList.add("active");
}

/* LETTER TYPE */
const text = `Happy Birthday my love ❤️

You are the best part of my life.

Thank you for everything.

I love you so much ❤️`;

let i = 0;

function type(){
const el = document.getElementById("typingText");
if(i < text.length){
el.innerHTML += text[i];
i++;
setTimeout(type, 30);
}
}

/* LETTER */
function showLetter(){
pages.itinerary.classList.remove("active");
pages.letter.classList.add("active");
type();
}

/* FINAL */
function showFinal(){
pages.letter.classList.remove("active");
pages.final.classList.add("active");

confetti({ particleCount: 120, spread: 90 });
setInterval(()=>confetti({particleCount:60,spread:80}),2000);
}

/* HEARTS */
setInterval(()=>{
const h=document.createElement("div");
h.innerHTML="❤️";
h.style.position="absolute";
h.style.left=Math.random()*100+"vw";
h.style.animation="floatUp 6s linear";
document.body.appendChild(h);
setTimeout(()=>h.remove(),6000);
},400);