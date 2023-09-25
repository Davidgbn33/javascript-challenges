# Défi JavaScript : Jeu du Pendu

Bienvenue dans le défi "Jeu du Pendu" ! Dans ce défi, vous allez créer un jeu classique de pendu où les joueurs doivent deviner un mot en proposant des lettres. 

## Objectif du Jeu

Votre objectif est de créer un jeu du pendu interactif en utilisant JavaScript. Les joueurs devront deviner un mot caché en proposant des lettres, et chaque lettre correcte révélée ne fait pas apparaître une partie du pendu.

## Instructions

1. Créez une liste de mots cachés dans votre code JavaScript. Vous pouvez choisir un tableau de mots ou un seul mot, selon votre préférence.

2. Affichez un espace réservé pour le mot caché, avec des tirets bas pour chaque lettre non encore devinée. Par exemple, si le mot caché est "javascript", vous pouvez l'afficher comme "_ _ _ _ _ _ _ _ _".

3. Permettez aux joueurs de proposer des lettres. Vous pouvez ajouter une zone de texte où ils peuvent entrer leurs réponses.

4. Vérifiez si la lettre proposée est présente dans le mot caché. Si oui, remplacez le tiret bas correspondant par la lettre correcte dans le mot caché affiché.

5. Si la lettre n'est pas dans le mot, dessinez une partie du pendu. Vous pouvez représenter le pendu en utilisant un dessin ASCII et ajouter des parties à chaque mauvaise supposition.

6. Limitez le nombre de tentatives (et de parties du pendu) pour que le jeu ne devienne pas trop facile.

7. Affichez le résultat du jeu à la fin, en indiquant si le joueur a gagné ou perdu.

8. Facultatif : Ajoutez des fonctionnalités supplémentaires, telles qu'un compteur de scores, des indices ou une liste de lettres déjà proposées.

## Comment Commencer

1. Créez un fichier HTML pour votre jeu, avec un espace réservé pour le mot caché, un champ de saisie pour les lettres et un espace pour afficher le pendu.

2. Dans votre fichier JavaScript, définissez la liste de mots cachés, initialisez le mot caché avec des tirets bas et ajoutez la logique du jeu.

3. Utilisez des fonctions JavaScript pour rendre le code plus lisible et maintenable.

4. Testez votre jeu en jouant vous-même et en demandant à d'autres personnes de l'essayer.



## Défis supplémentaires

1. Thème Visuel : Donnez un aspect visuel plus attrayant au jeu en ajoutant des éléments graphiques, tels qu'une image de pendu qui se construit progressivement à chaque mauvaise supposition. Vous pouvez également utiliser des animations pour ajouter du dynamisme au jeu. Par exemple, vous pouvez faire apparaître le pendu en utilisant des transitions CSS ou des bibliothèques d'animation JavaScript.

2. Niveaux de Difficulté : Permettez aux joueurs de choisir parmi plusieurs niveaux de difficulté. Vous pouvez avoir des mots cachés plus faciles pour les débutants et des mots plus difficiles pour les joueurs expérimentés. Ajustez également le nombre de tentatives en fonction du niveau de difficulté. Par exemple, un niveau facile pourrait avoir plus de tentatives que le niveau difficile.

3. Base de Données de Mots : Intégrez une base de données de mots cachés pour rendre le jeu plus varié. Vous pouvez utiliser une API de mots ou une base de données locale pour stocker une grande variété de mots. Cela permettra aux joueurs de jouer plusieurs parties sans répétition. Vous pouvez également ajouter des catégories de mots pour donner un thème au jeu, comme "animaux", "nourriture" ou "pays".
