// Chargement du JSON des recettes depuis le dossier Content
fetch('./Content/recettes.json') // Modifiez le chemin d'accès ici
  .then(response => response.json())
  .then(data => {
    const mainContent = document.getElementById('main-content');

    // Boucle à travers chaque recette
    data.recettes.forEach(recette => {
      // Création d'une boîte pour chaque recette
      const recetteBox = document.createElement('div');
      recetteBox.classList.add('recette-box');
      
      // Création d'éléments pour afficher les détails de la recette
      const recetteNom = document.createElement('h2');
      recetteNom.textContent = recette.nom;

      const recetteId = document.createElement('p');
      recetteId.textContent = "ID : " + recette.id;

      const recetteDifficulte = document.createElement('p');
      recetteDifficulte.textContent = "Difficulté : " + recette.difficulte;

      const recetteTemps = document.createElement('p');
      recetteTemps.textContent = "Temps de préparation : " + recette.temps_preparation;

      const recetteImage = document.createElement('img');
      recetteImage.src = recette.image;
      recetteImage.alt = recette.nom;
      
      // Ajout des éléments à la boîte de recette
      recetteBox.appendChild(recetteImage);
      recetteBox.appendChild(recetteNom);
      recetteBox.appendChild(recetteId);
      recetteBox.appendChild(recetteDifficulte);
      recetteBox.appendChild(recetteTemps);

      // Ajout de la boîte de recette au contenu principal
      mainContent.appendChild(recetteBox);
    });
  })
  .catch(error => console.error('Erreur lors du chargement des recettes :', error));
