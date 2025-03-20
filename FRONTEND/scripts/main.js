import Append from "./components/append.js";

document.addEventListener('DOMContentLoaded', () => {
    
    Append(); // load components

    document.getElementById("add-words").addEventListener('click', ()=>{
        var textarea = document.getElementById('words-textarea')
        var words = textarea.value
            .split('\n')                            // split content by rows
            .filter(line => line.trim() !== "");    // delete empty rows


        console.log(words) // send words to backend

        let alertBox = document.getElementById("alert-success");
        alertBox.style.display = "block";
        setTimeout(() => {
            alertBox.style.display = "none";
        }, 3000);
    })

})