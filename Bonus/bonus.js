document.addEventListener('DOMContentLoaded', function() { //verifie que la page est chargée
    let button = document.createElement('button'); // créer un élément
    button.type = 'button'; // définie le type
    button.innerHTML = 'Bouton'; 
    button.className = 'btn-style';

    function create(elem, className, childName) {
        let elem = document.createAttribute('"'+ elem +'"');
        elem.className = "'" + className + "'";
        childName.appendChild(elem);
    }

    button.onclick = function() {
        button.style.display = 'none';
        let div = document.createElement('div'); // créer une div
        div.className = 'grid';
        container.appendChild(div);
        for (let i = 0; i < 9; i++) { // défini à 9 parce qu'il y a 9 cases à remplir
            let div = document.createElement('div'); // créer une div
            div.className = 'grid';
            container.appendChild(div);
        }
    };
    let container = document.querySelector('.container');
    container.appendChild(button);
});