// Exemple de récupération de cours via une API (Azure)
fetch('https://votre-api-azure.com/get-courses') // Remplacer par l'URL réelle de votre API Azure
    .then(response => response.json())
    .then(data => {
        // Affichage des cours dans la liste
        const coursesList = document.getElementById('courses');
        data.courses.forEach(course => {
            const listItem = document.createElement('li');
            listItem.textContent = course.name; // Nom du cours
            coursesList.appendChild(listItem);
        });
    })
    .catch(error => {
        console.error('Erreur lors de la récupération des cours:', error);
        const coursesList = document.getElementById('courses');
        const listItem = document.createElement('li');
        listItem.textContent = "Erreur lors de la récupération des cours.";
        coursesList.appendChild(listItem);
    });
