const inputText = document.getElementById('input-text');
const btnTextToArray = document.getElementById('btn-text-to-array');
const btnCapsFirstLetters = document.getElementById('btn-caps-first-letters');

let capsToggle = "lower";
let wordsArray = [];

function getString() {
    return inputText.value;
}

function cleanWhitespace(text) {
    return text.replace(/\s+/g, ' ').trim();
}

function splitIntoWords(text) {
    return text.split(' ');
}

function oneWordPerLine(words) {
    return words.join('\n');
}

function toJsonArray(words) {
    return JSON.stringify(words, null, 2);
}

function makeFirstLetterCapital(array) {
    const capitalizedWords = array.map(word => {
        if (word.length === 0) {
            return ''; // handle empty strings if necessary
        }

        const firstLetter = word.charAt(0).toUpperCase();
        const restOfWord = word.slice(1);

        return firstLetter + restOfWord;
    });
    return capitalizedWords;
}

function makeLowerCase(array) {
    const lowerCaseWords = array.map(word => {
        return word.toLowerCase();
    });
    return lowerCaseWords;
}

btnTextToArray.addEventListener('click', () => {
    const rawText = getString();
    const cleanedText = cleanWhitespace(rawText);
    wordsArray = splitIntoWords(cleanedText);

    // OPTION 1: show one word per line
    //inputText.value = oneWordPerLine(wordsArray);

    // OPTION 2: show JSON array instead
    inputText.value = toJsonArray(wordsArray);
});


btnCapsFirstLetters.addEventListener('click', () => {
    if (capsToggle == "lower") {
        capsToggle = "upper";
        const capitalizedWords = makeFirstLetterCapital(wordsArray);
        inputText.value = toJsonArray(capitalizedWords);
    } else {
        capsToggle = "lower";
        const capitalizedWords = makeLowerCase(wordsArray);
        inputText.value = toJsonArray(capitalizedWords);
    }
});
