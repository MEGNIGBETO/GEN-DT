let citation = [];
const citationElement = document.getElementById('citation-place');

//Fonction pour charger les citations à partir du fichier JSON
function loadQuotes(){
    $.getJSON('DATA/quote.json', function(data){
        citation = data;
        changeQuote(); //Initialiser avec une citation
        setInterval(changeQuote, 15000); //changer la citation toutes les 5 secondes
    });
}

//Fonction pour selectionner une citation aléoire
function getRandomQuote(){
    const randomIndex = Math.floor(Math.random()*citation.length);
    return citation[randomIndex];
}

//Fonction pour changer la citation avec animation
function changeQuote(){
    citationElement.textContent = getRandomQuote();
    citationElement.classList.remove('fade-in');
    citationElement.classList.add('fade-out');

    setTimeout(()=>{
        citationElement.textContent = getRandomQuote();
        citationElement.classList.remove('fade-in');
        citationElement.classList.add('fade-out');
    }, 5000);
}

//Charger les citations et initialiser l'affichage()
loadQuotes();