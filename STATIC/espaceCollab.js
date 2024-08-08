$(document).ready(function() {
    $.getJSON('DATA/espaceCollab.json', function(data) {
        $.each(data, function(index, espaceCollab) {
          var espaceCollabElement = `
            <div class="titre-collab">${espaceCollab.titre}</div>
            <img class="image" src="${espaceCollab.image}" alt="">
            <!--<a class="inscriptionCollab" href="${espaceCollab.formulaire}">S'inscrire</a>-->
            <div class="logo-organisation">
                <img src="${espaceCollab.logoGenDT}" alt="">
                <img src="${espaceCollab.logoPartner}" alt="">
            </div>
          `;
          $('.collab').append(espaceCollabElement);
        });
    });  
})
