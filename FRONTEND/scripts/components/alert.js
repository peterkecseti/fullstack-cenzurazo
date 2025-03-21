export default function Alert(){
    var element = document.querySelector('Alert');
    const alert = document.createElement('div')

    if(element == null){
        return;
    }

    alert.className = 'row'
    alert.innerHTML = `
            <div id="alert-success" class="alert alert-success position-fixed fixed-bottom text-center mx-auto w-50 shadow"
                 role="alert" style="display: none; bottom: 20px; left: 50%; transform: translateX(-50%); ">
                ${element.innerHTML}
            </div>
    `

    element.innerHTML = "";
    element.prepend(alert);
}