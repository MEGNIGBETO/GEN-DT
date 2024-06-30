$(document).ready(function() {
    const members = [
        {
            id: "johndoe",
            avatar: "path/to/avatar1.jpg",
            name: "John Doe",
            contact: "john.doe@example.com",
            degree: "Master en Développement Territorial",
            skills: ["Gestion de projet", "Analyse de données", "Communication"],
            experiences: ["Projet A", "Projet B", "Projet C"],
            achievements: ["Réussite A", "Réussite B"]
        },
        {
            id: "janesmith",
            avatar: "path/to/avatar2.jpg",
            name: "Jane Smith",
            contact: "jane.smith@example.com",
            degree: "Doctorat en Sciences Environnementales",
            skills: ["Recherche", "Rédaction scientifique", "Conférences"],
            experiences: ["Projet D", "Projet E"],
            achievements: ["Publication X", "Récompense Y"]
        }
        // Ajouter plus de membres ici
    ];

    members.forEach(member => {
        $('#member-space').append(`
            <div class="member-card" id="${member.id}">
                <img src="${member.avatar}" alt="Avatar de ${member.name}">
                <div class="member-info">
                    <h3>${member.name}</h3>
                    <p><strong>Contact:</strong> ${member.contact}</p>
                    <p><strong>Plus haut diplôme:</strong> ${member.degree}</p>
                    <p><strong>Compétences:</strong> ${member.skills.join(', ')}</p>
                    <p><strong>Expériences/Projets avec l'organisation:</strong> ${member.experiences.join(', ')}</p>
                    <p><strong>Réalisations:</strong> ${member.achievements.join(', ')}</p>
                </div>
                <div id="qrcode-${member.id}"></div>
            </div>
        `);
        new QRCode(document.getElementById(`qrcode-${member.id}`), {
            text: window.location.href + '#' + member.id,
            width: 100,
            height: 100
        });
    });

    $('#search-button').click(function() {
        const query = $('#search-bar').val().toLowerCase();
        $('.member-card').hide();
        members.forEach(member => {
            if (member.id.toLowerCase() === query) {
                $(`#${member.id}`).show();
            }
        });
    });

    // Check URL hash for direct access
    const urlHash = window.location.hash.substring(1);
    if (urlHash) {
        $(`#${urlHash}`).show();
    }

    // QR Code scanner
    $('#start-qr-scanner').click(function() {
        $('#qr-reader').show();
        const html5QrCode = new Html5Qrcode("qr-reader");

        html5QrCode.start(
            { facingMode: "environment" }, // Use rear camera
            {
                fps: 10, // Frame per second for qr code scanning
                qrbox: { width: 250, height: 250 } // Define scanning box size
            },
            (decodedText, decodedResult) => {
                // Handle decoded text
                html5QrCode.stop();
                window.location.href = decodedText;
            },
            (errorMessage) => {
                // Handle error
                console.warn(`QR Code no match: ${errorMessage}`);
            }
        ).catch((err) => {
            // Start failed
            console.error(`Unable to start scanning, error: ${err}`);
        });
    });
});
