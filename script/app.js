let textarea = document.querySelector("textarea"); //recupère le textarea (on peut utiliser aussi #text-area)
textarea.style.resize = 'none'; // impossible de resize le text-area
textarea.spellcheck = false; // supprime la détection des fautes d'orthographes (possible de le faire en html)
textarea.addEventListener("input", function () {
    let target = event.currentTarget; // Identifie l'élément avant que l'évènement se produise
    let currentLength = target.value.length; // Identifier l'élèment à partir du moment où il s'est produit
    let progressBar = document.querySelector(".progress-bar");
    if (currentLength >= 2) {
        currentLengthDiviser = currentLength / 2 // Diviser par 2 pour avoir max 100 width (pas 200)
        progressBar.style.width = currentLengthDiviser + '%'; // Change la width selon le nombre de caractère
        progressBar.textContent = currentLengthDiviser + '%'; // Afficher le %
        if (currentLengthDiviser <= 50) {
            progressBar.style.backgroundColor = 'green';
        }
        else {
            if (50 < currentLengthDiviser < 85) {
                progressBar.style.backgroundColor = 'orange';
            }
            if (85 <= currentLengthDiviser) {
                progressBar.style.backgroundColor = 'red';
            }
        }
    }
    else {
        progressBar.style.width = '0%';
        progressBar.textContent = currentLength / 2 + '%';
        progressBar.style.backgroundColor = 'green';
    }
});

// Fonctionnel :

// Récupère et envoie vers la div 
// let result = document.querySelector(".result"); // Selectionne la div résult
// textarea.addEventListener("input", event => {
//     let targ = event.currentTarget;
//     let currentValue = targ.value;
//     document.querySelector(".result").innerHTML = currentValue;
// });

let ecris = document.querySelector("textarea");
let lis = document.querySelector(".result");

ecris.addEventListener("input", function () {
    let resultat = ecris.value;
    lis.innerHTML = resultat;
});

// Chgmt de couleurs
ecris.addEventListener("mouseover", mouseOver);
ecris.addEventListener("mouseout", mouseOut);
let anim = document.querySelector(".animation");

function mouseOver() {
    anim.style.backgroundColor = "blue";
}

function mouseOut() {
    anim.style.backgroundColor = "red";
}

// Bouton (bold, paragraph, ...)
function bold() {
    let bold = "<b> </b>";
    
}

// Dark Mode (merci internet 😀)
function darkmode() {
    var element = document.body; // l'élément body est sélectionné
    element.classList.toggle("darkmode"); // bascule vers darkmode
    lis.classList.toggle("resultDark");
}

