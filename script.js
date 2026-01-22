const inputTextToEdit = document.getElementById("input-text-to-edit");
const outputText = document.getElementById("output-text");
const btnListToJSON = document.getElementById('btn-list-to-json');
const btnRemoveNumbers = document.getElementById("btn-remove-numbers");
const btnRemovePunctuation = document.getElementById("btn-remove-punctuation");
const btnRemoveNumbersColonsSpaces = document.getElementById("btn-remove-numbers-colons-spaces");
const btnConvertToArrayNewLineItems = document.getElementById("btn-convert-to-array-new-line-items");
const btnCreateNewList = document.getElementById('btn-create-new-list');
const listContainer = document.getElementById('list-container');

// LISTENERS
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
    const listText = inputTextToEdit.value;
    const listArray = listText.split('\n').filter(item => item.trim() !== '');
    const jsonArrayString = JSON.stringify(listArray, null, 2);
    outputText.value = jsonArrayString;
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
    const originalString = inputTextToEdit.value; 
    const originalString2 = removeNumbersColonsSpaces(originalString);
    outputText.value = originalString2;
});

btnConvertToArrayNewLineItems.addEventListener('click', () => {
    const originalString = inputTextToEdit.value; 
    const array = originalString
        .split(/\r?\n/)
        .map(item => item.trim())
        .filter(item => item.length > 0 );

    const result = JSON.stringify(array, null, 2);
    outputText.value = result;
});

// HELPER FUNCTIONS
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