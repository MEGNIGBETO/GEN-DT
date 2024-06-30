$(document).ready(function() {
    //$.getJSON('DATAANALYST/dataAnalyst.json', function(data) {
        // Gestion des services d'analyse de donnees
        var dataAnalystElement = `
        <!-- Animation accueil -->
        <div class="logo-anim-container">
            <span class="logo-part" id="part1">Gen</span>
            <span class="logo-part" id="part2">-</span>
            <span class="logo-part" id="part3">DT</span>
        </div>
        <div class="message-bienvenue">
            <p>
                Bienvenue sur notre plateforme de soutien à l'analyse de données statistique! <br>
                <a href="https://chat.whatsapp.com/F7weTSwRmEzLQQgAELIHOn">Contactez nous!</a>
            </p>
        </div>
        <div class="dataAnalyst-section">
            <h2 class="dataAnalyst-section-title">Annonces<span class="toggle-icon">+</span></h2>
            <div class="dataAnalyst-section-content" id="annonce">
            
            </div>
        </div>
        <div class="dataAnalyst-section">
            <h2 class="dataAnalyst-section-title">Dossiers en cours de traitement<span class="toggle-icon">+</span></h2>
            <div class="dataAnalyst-section-content" id="traitement">
            
            </div>
        </div>
        `;
        $('.service').append(dataAnalystElement);
    //});
});

$(document).ready(function() {
    $.getJSON('ESERVICE/DATAANALYST/dossierDataAnalyst.json', function(data) {
        // Générer les videos à partir du JSON
        $.each(data, function(index, dossierDataAnalyst) {
          var dossierDataAnalystElement = `
          <div class="dossierDataAnalyst-content" data-id="${dossierDataAnalyst.id}">
              <h2>${dossierDataAnalyst.theme}</h2>
              <ul>
                <li>Questionnaire : ${dossierDataAnalyst.questionnaire}</li>
                <li>Base de données : ${dossierDataAnalyst.base}</li>
                <li>Date de livraison : ${dossierDataAnalyst.dateLivraison}</li>
              </ul>
          </div>
          `;
            if(dossierDataAnalyst.statut=="annonce"){
                $('#annonce').append(dossierDataAnalystElement);
            } else {
                $('#traitement').append(dossierDataAnalystElement);
            }
        });
    });  
})


$(document).ready(function() {
    $('.dataAnalyst-section-title').click(function(){
        var content = $(this).next('.dataAnalyst-section-content');
        content.slideToggle(300);
        var icon = $(this).find('.toggle-icon');
        if(icon.text()=='+'){
            icon.text('-');
        } else {
            icon.text('+');
        }
    });
});

