/* ================= PAGE HANDLING ================= */

const welcome = document.getElementById("welcome");
const messagePage = document.getElementById("messagePage");
const itineraryPage = document.getElementById("itineraryPage");
const letterPage = document.getElementById("letterPage");
const finalPage = document.getElementById("finalPage");

const noBtn = document.getElementById("noBtn");

let noClickCount = 0;

/* ================= MOVE "NO" BUTTON ================= */

noBtn.addEventListener("mouseover", () => {
    moveNoButton();
});

noBtn.addEventListener("click", () => {
    noClickCount++;

    // Still continue anyway 😏
    showAnswer(false);
});

function moveNoButton() {
    const x = Math.random() * 200 - 100;
    const y = Math.random() * 200 - 100;

    noBtn.style.transform = `translate(${x}px, ${y}px)`;
}

/* ================= YES BUTTON ================= */

function acceptDate() {
    showAnswer(true);
}

/* ================= ANSWER PAGE ================= */

function showAnswer(isYes) {
    welcome.classList.remove("active");
    messagePage.classList.add("active");

    const title = document.getElementById("answerTitle");
    const msg = document.getElementById("answerMessage");

    if (isYes) {
        title.innerHTML = "Yay! ❤️";
        msg.innerHTML = "I knew you'd say YES 😍 <br> Can't wait for our special day!";
        triggerConfetti();
    } else {
        title.innerHTML = "😝 Oops!";
        msg.innerHTML = "Sorry 😌 you cannot say NO. <br><br> But don't worry... I'm still taking you out ❤️";
        triggerConfetti();
    }
}

/* ================= ITINERARY ================= */

function showItinerary() {
    messagePage.classList.remove("active");
    itineraryPage.classList.add("active");
}

/* ================= LETTER ================= */

function showLetter() {
    itineraryPage.classList.remove("active");
    letterPage.classList.add("active");
}

/* ================= FINAL PAGE ================= */

function showFinal() {
    letterPage.classList.remove("active");
    finalPage.classList.add("active");

    triggerConfetti();

    setInterval(triggerConfetti, 2000);
}

/* ================= CONFETTI ================= */

function triggerConfetti() {
    if (typeof confetti === "function") {
        confetti({
            particleCount: 100,
            spread: 80,
            origin: { y: 0.6 }
        });
    }
}

/* ================= OPTIONAL: AUTO HEARTS ================= */

setInterval(() => {
    createHeart();
}, 400);

function createHeart() {
    const heart = document.createElement("div");
    heart.innerHTML = "❤️";
    heart.style.position = "absolute";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = Math.random() * 20 + 15 + "px";
    heart.style.animation = "floatUp 6s linear";
    heart.style.top = "100vh";
    heart.style.opacity = "0.7";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 6000);
}