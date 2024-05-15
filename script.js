fetch('recettes.json')
    .then(response => response.json())
    .then(data => {
        const mainContent = document.getElementById('main-content');

        // Boucle à travers chaque recette
        data.forEach(recette => {
            // Création d'une div pour chaque recette
            const recetteDiv = document.createElement('div');
            recetteDiv.classList.add('recette');

            // Ajout de la classe pour le fond coloré
            recetteDiv.classList.add('recette-color');

            // Création d'un élément pour afficher le nom de la recette
            const recetteNom = document.createElement('h2');
            recetteNom.textContent = recette.nom;

            // Création d'un élément pour afficher la difficulté de la recette
            const recetteDifficulte = document.createElement('p');
            recetteDifficulte.textContent = "Difficulté : " + recette.difficulte;

            // Création d'un élément pour afficher le temps de préparation de la recette
            const recetteTemps = document.createElement('p');
            recetteTemps.textContent = "Temps de préparation : " + recette.temps_preparation;

            // Création de l'image de la recette
            const recetteImage = document.createElement('img');
            recetteImage.src = recette.image;
            recetteImage.alt = recette.nom;
            // Ajout d'une classe pour définir la taille de l'image
            recetteImage.classList.add('recette-image');

            // Création du lien autour de la recette
            const recetteLink = document.createElement('a');
            recetteLink.href = 'recette.html?id=' + recette.id;
            recetteLink.addEventListener('click', function() {
                localStorage.setItem('selectedRecipe', recette.id);
            });
            recetteLink.appendChild(recetteDiv);

            // Ajout des éléments à la div de la recette
            recetteDiv.appendChild(recetteNom);
            recetteDiv.appendChild(recetteDifficulte);
            recetteDiv.appendChild(recetteTemps);
            recetteDiv.appendChild(recetteImage);

            // Ajout de la div de recette au contenu principal
            mainContent.appendChild(recetteLink);
        });
    })
    .catch(error => {
        console.error('Erreur lors du chargement des recettes :', error);
    });
