const pages = {
hero: document.getElementById("hero"),
response: document.getElementById("response"),
itinerary: document.getElementById("itinerary"),
letter: document.getElementById("letter"),
final: document.getElementById("final")
};

const noBtn = document.getElementById("noBtn");
const popup = document.getElementById("popup");

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
const text = `
Happy Birthday Atikah ❤️

Thank you for being in my life.

I hope today brings you happiness ❤️
`;

let i = 0;

function typeLetter(){
const el = document.getElementById("typing");

if(i < text.length){
el.innerHTML += text[i];
i++;
setTimeout(typeLetter, 25);
}
}

/* POPUP NO BUTTON */
noBtn.addEventListener("click", function(){
popup.classList.remove("hidden");
});

function closePopup(){
popup.classList.add("hidden");
}
