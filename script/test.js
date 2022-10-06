const ecris = document.querySelector("textarea");
const lis = document.querySelector(".result");
ecris.style.resize = 'none'; // impossible de resize le text-area
ecris.spellcheck = false; // supprime la détection des fautes d'orthographes (possible de le faire en html)

ecris.addEventListener("keyup", function () {
    let resultat = ecris.value;
    lis.innerHTML = resultat;
    currentLength = lis.innerText.length;
    currentLength2 = currentLength / 2;
    let progressBar = document.querySelector(".progress-bar");
    progressBar.style.width = currentLength2 + '%'; // Change la width selon le nombre de caractère
    progressBar.textContent = currentLength2 + '%'; // Afficher le %
    console.log(currentLength2)
    if (currentLength2 >= 100) {
        alert("Le maximum de caractère a été utilisé !");
        ecris.maxLength = currentLength;
    }
    if (currentLength2 <= 50) {
        progressBar.style.backgroundColor = 'green';
    }
    else {
        if (50 < currentLength2 <= 85) {
            progressBar.style.backgroundColor = 'orange';
        }
        if (currentLength2 > 85) {
            progressBar.style.backgroundColor = 'red';
        }
    }
});



// Chgmt de couleurs
ecris.addEventListener("mouseover", mouseOver);
ecris.addEventListener("mouseout", mouseOut);
let anim = document.querySelector(".animation");
// Souris sur l'éditeur de texte
function mouseOver() {
    anim.style.backgroundColor = "blue";
}
// Souris en dehors de l'éditeur de texte
function mouseOut() {
    anim.style.backgroundColor = "red";
}

// Btn 
function bold() {
    ecris.value += "<b></b>" ;
}

function underline() {
    ecris.value += "<u></u>" ;
}

function i() {
    ecris.value += "<i></i>" ;
}

function h1() {
    ecris.value += "<h1></h1>" ;
}

function p() {
    ecris.value += "<p></p>" ;
}

// Dark Mode
function darkmode() {
    let element = document.body; // l'élément body est sélectionné
    element.classList.toggle("darkmode"); // bascule vers darkmode
    lis.classList.toggle("resultDark");
}

// Refresh 
function refresh(){
    window.location.reload("Refresh")
}