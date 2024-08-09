$(document).ready(function() {
    $.getJSON('DEPARTEMENT/departement.json', function(data) {
        $.each(data, function(index, departement) {
            $('#departement').append(`
                <div class="departement-presentation" id="${departement.id}">
                    <div class="departement-couverture">
                        <img  src="${departement.couverture}" alt="photo de couverture de ${departement.name}">
                    </div>
                    <div class="departement-info">
                        <h3>${departement.name}</h3>
                        <p>Visitez notre plateforme dédiée <a href="${departement.plateforme}">ici</a></p>
                    </div>
                </div>
            `);
        });
    });
});
