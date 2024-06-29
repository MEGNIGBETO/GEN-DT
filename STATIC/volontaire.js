$(document).ready(function() {
    $.getJSON('DATA/volontaire.json', function(data) {
        // Générer les videos à partir du JSON
        $.each(data, function(index, volontaire) {
          var volontaireElement = `
          <div class="volontaire-content" data-id="${volontaire.id}">
            <img src="${volontaire.photo}" alt="Photo de volontaire">
            <h2>${volontaire.nomPrenom}</h2>
            <h3>${volontaire.statut}</h3>
            <p class="biographie">${volontaire.biographie}</p>
            <p>
              <ul>
                <li>${volontaire.mail}</li>
              </ul>
            </p>
          </div>
          `;
          $('.equipe').append(volontaireElement);
        });
    });  
})