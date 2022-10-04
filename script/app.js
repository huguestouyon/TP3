let textarea = document.querySelector("textarea"); //recupère le textarea (on peut utiliser aussi #text-area)
textarea.style.resize = 'none'; // impossible de resize le text-area
textarea.spellcheck = false; // supprime la détection des fautes d'orthographes (possible de le faire en html)
textarea.addEventListener("input", function() { 
    let target = event.currentTarget; // Identifie l'élément avant que l'évènement se produise
    let maxLength = target.getAttribute("maxlength"); // récupère la max-length 200
    let currentLength = target.value.length; // Identifier l'élèment à partir du moment ou il s'est produit
    let progressBar = document.querySelector(".progress-bar");
    if(currentLength >= 2){
        currentLengthDiviser = currentLength / 2 // Diviser par 2 pour avoir max 100 width (pas 200)
        progressBar.style.width = currentLengthDiviser/2+'%'; // Change la width selon le nombre de caractère
        console.log(progressBar);
    }
    else {
        progressBar.style.width = '0%';
    }
});

