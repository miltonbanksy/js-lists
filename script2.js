const inputText = document.getElementById('input-text');
const btnTextToArray = document.getElementById('btn-text-to-array');
const btnArrayToText = document.getElementById('btn-array-to-text');

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

btnTextToArray.addEventListener('click', () => {
    const rawText = getString();
    const cleanedText = cleanWhitespace(rawText);
    const wordsArray = splitIntoWords(cleanedText);

    // OPTION 1: show one word per line
    //inputText.value = oneWordPerLine(wordsArray);

    // OPTION 2: show JSON array instead
    inputText.value = toJsonArray(wordsArray);
});

btnArrayToText.addEventListener('click', () => {
    const arrayText = getString();
});
