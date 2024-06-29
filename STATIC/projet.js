//presentations des projets par un affichage automatique à partir du json
$(document).ready(function() {
    $.getJSON('DATA/projet.json', function(data) {
        // Générer les videos à partir du JSON
        $.each(data, function(index, projet) {
          var projetElement = `
          <div class="projet">
            <div class="projet-content" data-id="${projet.id}">
                <h2>${projet.nom}</h2>
                <p>${projet.description}</p>
                <p>Lien vers le groupe WhatsApp : <a href="https://chat.whatsapp.com/CiYHOb1Gusw9TZlflyM1LT">clic ici</a></p>
            </div>
          <div>
          `;
          $('.projet-page').append(projetElement);
        });
    });  
})
