# Défi JavaScript : Le Jeu de la Vie
Bienvenue dans le défi JavaScript du "Jeu de la Vie" ! Ce défi vous mettra au défi de créer une simulation du "Jeu de la Vie" de John Conway en utilisant JavaScript. Le "Jeu de la Vie" est un automate cellulaire fascinant qui évolue à partir d'un ensemble de règles simples.


## Objectif

L'objectif de ce défi est de créer une interface utilisateur pour visualiser et simuler le "Jeu de la Vie" en action. Vous devrez mettre en place une grille bidimensionnelle (plateau de jeu) avec des cellules pouvant être vivantes ou mortes, et implémenter les règles du jeu pour faire évoluer l'état des cellules.

## Règles du Jeu

Le "Jeu de la Vie" se déroule sur une grille carrée, où chaque cellule peut être dans l'un des deux états : vivante ou morte. Les cellules évoluent en fonction des règles suivantes à chaque génération (itération) :

- Une cellule vivante avec 2 ou 3 voisins vivants reste vivante à la génération suivante.
- Une cellule vivante avec moins de 2 voisins vivants meurt de solitude.
- Une cellule vivante avec plus de 3 voisins vivants meurt de surpopulation.
- Une cellule morte avec exactement 3 voisins vivants devient vivante (naissance).


## Instructions

1. Créez une interface utilisateur qui affiche une grille bidimensionnelle de cellules.
2. Permettez aux utilisateurs de cliquer sur les cellules pour les faire passer de l'état vivant à mort et vice versa.
3. Implémentez les règles du "Jeu de la Vie" pour faire évoluer l'état des cellules à chaque génération.
4. Ajoutez des boutons de contrôle pour démarrer, mettre en pause et réinitialiser la simulation.
5. Fournissez un moyen pour les utilisateurs de définir la taille de la grille et d'ajuster la vitesse de la simulation.


## Défis supplémentaites

1. Ajoutez des schémas préconfigurés (vaisseaux, planeurs, etc.) que les utilisateurs peuvent placer sur la grille.

2. Créez des statistiques pour suivre le nombre de générations, le nombre de cellules vivantes, etc.

3. Implémentez des fonctionnalités de sauvegarde et de chargement pour permettre aux utilisateurs de sauvegarder leurs configurations de jeu.

4. Ajoutez des animations et des transitions pour rendre la simulation plus visuellement attrayante.
Ressources


## Tips 
Si vous n'êtes pas familier avec le "Jeu de la Vie", vous pouvez consulter [cet article Wikipédia](https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life) pour en savoir plus sur ses règles et ses modèles.


Amusez-vous bien et que la simulation commence !