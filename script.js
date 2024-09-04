// Example: Fetch and display featured project data (replace with your API)
fetch('https://api.scratch.mit.edu/projects/featured')
    .then(response => response.json())
    .then(projects => {
        const projectList = document.getElementById('project-list');
        projects.forEach(project => {
            const projectCard = document.createElement('li');
            projectCard.classList.add('project-card');
            projectCard.innerHTML = `
                <a href="${project.url}" target="_blank">
                    <img src="${project.thumbnail.url}" alt="${project.title}">
                    <h3>${project.title}</h3>
                </a>
            `;
            projectList.appendChild(projectCard);
        });
    });

// Add event listeners for buttons (Example: "Start Creating")
const startCreatingButton = document.getElementById('start-creating');
startCreatingButton.addEventListener('click', () => {
    // Redirect to Scratch project creation page
    window.location.href = 'https://scratch.mit.edu/projects/new';
});

