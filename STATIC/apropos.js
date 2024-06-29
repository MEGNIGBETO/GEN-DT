$(document).ready(function() {
    $.getJSON('DATA/apropos.json', function(data) {
        // Générer les videos à partir du JSON
        $.each(data, function(index, apropos) {
          var aproposElement = `
          <div class="apropos-content" data-id="${apropos.id}">
              <h2>${apropos.titre}</h2>
              <h3>${apropos.sousTitre}</h3>
              <p>${apropos.illustration}</p>
              <p>${apropos.paragraphe}</p>
          </div>
          `;
          $('.apropos').append(aproposElement);
        });
    });  
})