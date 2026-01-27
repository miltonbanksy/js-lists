const inputTextToEdit = document.getElementById("input-text-to-edit");
const outputText = document.getElementById("output-text");
const btnListToJSON = document.getElementById('btn-list-to-json');
const btnFormatToNewLines = document.getElementById('btn-format-to-new-lines');
const btnRemoveNumbers = document.getElementById("btn-remove-numbers");
const btnRemovePunctuation = document.getElementById("btn-remove-punctuation");
const btnRemoveNumbersColonsSpaces = document.getElementById("btn-remove-numbers-colons-spaces");
const btnCreateNewList = document.getElementById('btn-create-new-list');
const listContainer = document.getElementById('list-container');

function displayOriginalText(text) {
    outputText.value = text;
}

btnFormatToNewLines.addEventListener('click', () => {
    let text = inputTextToEdit.value;
    displayOriginalText(text);
    let formattedText = text
        .trim() // remove leading or trailing white spaces
        .split(/\s+/)
        .join('\n');

    inputTextToEdit.value = formattedText;
});

btnCreateNewList.addEventListener('click', () => {
    let listTitle = prompt("Enter a title for the new list:", "List of ");
    
    if (listTitle == null || listTitle == '') {
        return;
    } else {
        const column = document.createElement('div');
        column.classList.add('flex-row');
        const listColumn = document.createElement('textarea');
        const title = document.createElement('h3');
        title.textContent = listTitle;
        //const lineBreak = document.createElement('br');
        //lineBreak.classList.add('flex-row');
        const button = document.createElement('button');
        button.classList.add('flex-row');
        button.textContent = "Random";
        column.appendChild(title);
        //column.appendChild(lineBreak);
        column.appendChild(listColumn);
        column.appendChild(button);
        listContainer.appendChild(column);
    };
});


btnListToJSON.addEventListener('click', () => {
    const text = inputTextToEdit.value;
    displayOriginalText(text);
    const listArray = text.split('\n').filter(item => item.trim() !== '');
    const jsonArrayString = JSON.stringify(listArray, null, 2);
    inputTextToEdit.value = jsonArrayString;
});

btnRemoveNumbers.addEventListener("click", () => {
    const originalString = inputTextToEdit.value; 
    const originalString2 = removeNumbersFromString(originalString);
    outputText.value = originalString2;
});

btnRemovePunctuation.addEventListener("click", () => {
    const originalString = inputTextToEdit.value; 
    const originalString2 = removePunctuationFromString(originalString);
    outputText.value = originalString2;
});

btnRemoveNumbersColonsSpaces.addEventListener('click', () => {
    const text = inputTextToEdit.value;
    outputText.value = text;
    const originalString2 = removeNumbersColonsSpaces(text);
    inputTextToEdit.value = originalString2;
});


function removeNumbersFromString(str) {
    return str.replace(/\d/g, '');
};

function removePunctuationFromString(str) {
    return str.replace(/[^\w\s+]/g, '').trim();
}

function removeNumbersColonsSpaces(str) {
    let cleanedString = str.replace(/[0-9:]/g, '');
    
    // Replace multiple spaces with a single space and trim leading/trailing spaces
    cleanedString = cleanedString.replace(/\s+/g, ' ').trim(); 

    return cleanedString;
};

function convertToArrayNewLineItems(str) {
    const createdArray = str.split(',').map(item => item.trim());
    return createdArray;
}