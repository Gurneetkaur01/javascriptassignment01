// Arrays for the random words
const nouns = ["The turkey", "My teacher", "The elephant", "The dog", "The cat"];
const verbs = ["sat on", "danced with", "saw", "doesn't like", "kissed"];
const adjectives = ["a funny", "a scary", "a goofy", "a slimy", "a barking"];
const secondNouns = ["monkey", "goat", "cow", "bug", "worm"];
const places = ["on the moon", "in my shoes", "in my soup", "on the grass", "in my bed"];

// Variables to store the selected words and the textToSpeak variable
let randomNoun = "";
let randomVerb = "";
let randomAdjective = "";
let randomSecondNoun = "";
let randomPlace = "";
let textToSpeak = "";  // This variable will hold the final sentence

// Event listeners for the buttons
document.getElementById("nounBtn").addEventListener("click", () => {
    randomNoun = nouns[Math.floor(Math.random() * nouns.length)];
    updateSentence();
});

document.getElementById("verbBtn").addEventListener("click", () => {
    randomVerb = verbs[Math.floor(Math.random() * verbs.length)];
    updateSentence();
});

document.getElementById("adjectiveBtn").addEventListener("click", () => {
    randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];
    updateSentence();
});

document.getElementById("secondNounBtn").addEventListener("click", () => {
    randomSecondNoun = secondNouns[Math.floor(Math.random() * secondNouns.length)];
    updateSentence();
});

document.getElementById("placeBtn").addEventListener("click", () => {
    randomPlace = places[Math.floor(Math.random() * places.length)];
    updateSentence();
});

// Button to pass the sentence to textToSpeak and call the speakNow function
document.getElementById("speakBtn").addEventListener("click", () => {
    if (textToSpeak) {
        speakNow(textToSpeak);
    }
});

// Button to reset the story
document.getElementById("resetBtn").addEventListener("click", () => {
    resetStory();
});

// Button to generate a full random sentence
document.getElementById("generateBtn").addEventListener("click", () => {
    randomNoun = nouns[Math.floor(Math.random() * nouns.length)];
    randomVerb = verbs[Math.floor(Math.random() * verbs.length)];
    randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];
    randomSecondNoun = secondNouns[Math.floor(Math.random() * secondNouns.length)];
    randomPlace = places[Math.floor(Math.random() * places.length)];
    updateSentence();
});

// Function to concatenate and display the sentence, and assign it to textToSpeak
function updateSentence() {
    textToSpeak = `${randomNoun} ${randomVerb} ${randomAdjective} ${randomSecondNoun} ${randomPlace}.`;
    document.getElementById("sentenceOutput").textContent = textToSpeak;
}

// Text-to-Speech function
function speakNow(textToSpeak) {
    const utterance = new SpeechSynthesisUtterance(textToSpeak);
    window.speechSynthesis.speak(utterance);
}

// Function to reset the story
function resetStory() {
    randomNoun = "";
    randomVerb = "";
    randomAdjective = "";
    randomSecondNoun = "";
    randomPlace = "";
    textToSpeak = "";  // Reset the sentence
    document.getElementById("sentenceOutput").textContent = "Your sentence will appear here.";
}
