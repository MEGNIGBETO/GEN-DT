$(document).ready(function() {
    $.getJSON('MEMBRE/membre.json', function(data) {
        $.each(data, function(index, member) {
            $('#member-space').append(`
                <div class="member-card" id="${member.id}">
                    <img class="avatar" src="${member.avatar}" alt="Avatar de ${member.name}">
                    <div class="member-info">
                        <h3>${member.name}</h3>
                        <p><strong>E-mail:</strong> ${member.contact}</p>
                        <p><strong>Plus haut diplôme:</strong> ${member.degree}</p>
                        <p><strong>Compétences:</strong> ${member.skills.join(', ')}</p>
                        <p><strong>Expériences/Projets avec l'organisation:</strong> ${member.experiences.join(', ')}</p>
                        <p><strong>Réalisations:</strong> ${member.achievements.join(', ')}</p>
                    </div>
                    <div class=qrCodeImg id="qrcode-${member.id}"></div>
                </div>
            `);

            new QRCode(document.getElementById(`qrcode-${member.id}`), {
                text: window.location.href + '#' + member.id,
                width: 100,
                height: 100
            });
        });
    });

    $('#search-button').click(function() {
        const query = $('#search-bar').val().toLowerCase();
        $('.member-card').hide();
        $.getJSON('MEMBRE/membre.json', function(data) {
            $.each(data, function(index, member) {
                if (member.id.toLowerCase() === query) {
                    $(`#${member.id}`).show();
                }
            });
        });
    });
});



window.addEventListener('DOMContentLoaded', function(){
    document.getElementById("start-qr-scanner").onclick = function() { 
        function domReady(fn) {
            if (
                document.readyState === "complete" ||
                document.readyState === "interactive"
            ) {
                setTimeout(fn, 1000);
            } else {
                document.addEventListener("DOMContentLoaded", fn);
            }
        }
    
        // If found you qr code
        function onScanSuccess(decodeText, decodeResult) {
            //alert("You Qr is : " + decodeText, decodeResult);
            localStorage.setItem('qrCodeContent', decodeText.split("#")[1]);
            const query = localStorage.getItem('qrCodeContent');
            //console.log(query)
            $('.member-card').hide();
            $.getJSON('MEMBRE/membre.json', function(data) {
                $.each(data, function(index, member) {
                    if (member.id.toLowerCase() === query) {
                        $(`#${member.id}`).show();
                    }
                });
            });
            localStorage.removeItem('qrCodeContent');
            if (
                $("#html5-qrcode-button-camera-stop").length 
                && 
                !$('#qr-reader').is(':visible')
            ) 
            $("#html5-qrcode-button-camera-stop").trigger("click");
        }

    
        domReady(function () {
    
            let htmlscanner = new Html5QrcodeScanner(
                "my-qr-reader",
                { fps: 10, qrbos: 250 }
            );
            htmlscanner.render(onScanSuccess);
        });
    };  
});
