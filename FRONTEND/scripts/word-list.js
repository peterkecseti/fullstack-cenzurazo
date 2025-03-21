document.addEventListener('DOMContentLoaded', () => {

    // fetch word list from backend
    const placeholderWords = [
        'alma@barack,narancs,körte',
        'kutya@cica',
        'fekete@fehér,sárga,barna',
        'sötét@világos',
        'sötét@világos',
        'sötét@világos',
        'sötét@világos',
        'sötét@világos',
        'sötét@világos',
        'sötét@világos',
        'sötét@világos',
        'sötét@világos',
        'sötét@világos',
        'sötét@világos',
        'sötét@világos',
    ];

    var wordsTable = document.getElementById('words-list');

    placeholderWords.forEach(word => {
        var tableRow = document.createElement('tr')
        
        const colMainWord = document.createElement('td')
        colMainWord.innerHTML = word.split('@')[0];

        const colReplacementWords = document.createElement('td')
        colReplacementWords.innerHTML = word.split('@')[1];

        const colRemoveButton = document.createElement('td')
        const removeButton = document.createElement('button')
        removeButton.className = "btn btn-danger"
        removeButton.innerHTML = "Törlés"
        colRemoveButton.appendChild(removeButton)

        tableRow.appendChild(colMainWord)
        tableRow.appendChild(colReplacementWords)
        tableRow.appendChild(colRemoveButton)

        wordsTable.appendChild(tableRow);
    });
});