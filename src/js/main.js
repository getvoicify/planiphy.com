import '../css/main.scss';
let currPhraseInx = 0;
const phrases = [
    "Organize Your Time.",
    "Schedule Your Meetings.",
    "Share Your Availability."
];

function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

async function animateWord(phrase, el) {
    for (let i = 0; i < phrase.length; i++) {
        el.innerText = phrase.substring(0, i + 1);
        await sleep(150);
    }

    await sleep(2000);

    for (let i = phrase.length; i > 0; i--) {
        el.innerText = phrase.substring(0, i - 1);
        await sleep(25);
    }
    await sleep(250);
}

const el = document.getElementById('phrases');

async function run() {

    while(true) {
        if (currPhraseInx > phrases.length - 1) {
            currPhraseInx = 0;
        }
        await animateWord(phrases[currPhraseInx], el);
        currPhraseInx++
    }

}

run().catch(console.error);
