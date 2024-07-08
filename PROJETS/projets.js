$(document).ready(function() {
    $.getJSON('PROJETS/projets.json', function(data) {
        var projectsContainer = $('#projects-container');
    
        $.each(data, function(index, project) {
            var projectHTML = `
            <div class="project">
                <h2 class="project-section-title">${project.title}<span class="toggle-icon">+</span></h2>
                <div class="project-section-content" id="presentation-projet">
                    <h3>${project.subtitle}</h3>
                    <p>${project.description}</p>
                    
                    <h4>Objectifs</h4>
                    <ul>${project.objectives.map(obj => `<li>${obj}</li>`).join('')}</ul>
                    
                    <h4>Équipe</h4>
                    <div class="team">
                    ${project.team.map(member => `
                        <div class="team-member">
                        <img src="${member.photo}" alt="${member.name}">
                        <h5>${member.name}</h5>
                        <p>${member.role}</p>
                        <p>${member.bio}</p>
                        </div>
                    `).join('')}
                    </div>

                    <h4>Timeline</h4>
                    <ul>${project.timeline.map(event => `<li>${event.date}: ${event.event}</li>`).join('')}</ul>

                    <h4>Galerie</h4>
                    <div class="gallery">
                    ${project.gallery.map(img => `<img src="${img}" alt="Gallery image">`).join('')}
                    </div>

                    <h4>Documents</h4>
                    <ul>${project.documents.map(doc => `<li><a href="${doc.url}">${doc.title}</a></li>`).join('')}</ul>

                    <h4>Impact</h4>
                    <p>${project.impact}</p>
                </div>
            </div>
            `;  
            projectsContainer.append(projectHTML);
        });
        
        $('.project-section-title').click(function(){
            var contentProjet = $(this).next('.project-section-content');
            contentProjet.slideToggle(700);
            var icon = $(this).find('.toggle-icon');
            if(icon.text()=='+'){
                icon.text('-');
            } else {
                icon.text('+');
            }
        });
    });
});

