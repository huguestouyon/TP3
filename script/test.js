const ecris = document.querySelector("textarea");
const lis = document.querySelector(".result");
const progressBar = document.querySelector(".progress-bar");
ecris.style.resize = 'none'; // impossible de resize le text-area
ecris.spellcheck = false; // supprime la détection des fautes d'orthographes (possible de le faire en html)

ecris.addEventListener("keyup", function () {
    let resultat = ecris.value;
    lis.innerHTML = resultat;
    currentLength = lis.innerText.length;
    currentLength2 = currentLength / 2;
    
    progressBar.style.width = currentLength2 + '%'; // Change la width selon le nombre de caractère
    progressBar.textContent = currentLength2 + '%'; // Afficher le %
    if (currentLength >= 200) {
    alert("Le maximum de caractère a été utilisé !");
    ecris.setAttribute('maxLength', 0);
    }
    else {
        ecris.removeAttribute("maxLength");
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
let anim = document.querySelector(".container-anim");
// Souris sur l'éditeur de texte
function mouseOver() {
    anim.style.display = "block";
}
// Souris en dehors de l'éditeur de texte
function mouseOut() {
    anim.style.display = "none";
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
    ecris.classList.toggle("resultDark");
    document.querySelector(".dark-btn").classList.toggle("darkmode");
    document.querySelector(".bg-bar").classList.toggle("resultDark");
    document.querySelector(".btn-refresh").classList.toggle('resultDark');
    document.querySelector(".refresh-svg").classList.toggle('svg-dark');
    let btnClick = document.querySelectorAll(".btn-click");
    function btnC(btnClick) {
        btnClick.classList.toggle("resultDark");
    }
    btnClick.forEach(btnC);
}

// Refresh  (reload la page fonctionne aussi)
const refreshButton = document.querySelector('.btn-refresh');
refreshButton.addEventListener('click', function() {
    ecris.value = "";
    lis.innerHTML = "";
    progressBar.textContent = "0%";
    progressBar.style.width = "0%";
});