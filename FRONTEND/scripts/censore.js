document.addEventListener('DOMContentLoaded', () => {
    var btnStart = document.getElementById('btn-start');

    btnStart.addEventListener('click', ()=>{
        var blur = document.getElementById('blur'); 
        blur.classList.toggle("active");

        var input = document.getElementById('textarea-input');
        var text = input.value;

        // send to backend
        
    })

})