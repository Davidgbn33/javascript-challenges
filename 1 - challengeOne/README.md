# Défi JavaScript : Créez un Jeu de Quiz

Bienvenue dans ce défi JavaScript qui vous permettra de mettre en pratique de nombreuses notions que vous avez apprises jusqu'à présent. Dans ce défi, vous allez créer un jeu de quiz interactif. Voici ce que vous devez faire :


## Règles du Jeu

Le jeu doit poser une série de questions à l'utilisateur.

Chaque question doit avoir plusieurs options de réponse, mais une seule réponse correcte.

L'utilisateur doit sélectionner la réponse qu'il pense être correcte.

Le jeu doit tenir compte des réponses correctes et incorrectes de l'utilisateur.

À la fin du quiz, le jeu doit afficher le score de l'utilisateur et lui donner un classement (par exemple, "Vous êtes un expert en JavaScript !" ou "Vous avez encore des choses à apprendre !").


## Instructions
1. Créez un fichier JavaScript nommé quiz.js pour implémenter le jeu.

2. Définissez un tableau de questions, chaque question étant un objet avec les propriétés suivantes :

- question: La question elle-même.
- options: Un tableau contenant les options de réponse.
- correctAnswer: L'indice de la réponse correcte dans le tableau options.
Utilisez prompt pour poser chaque question à l'utilisateur et parseInt pour obtenir sa réponse sous forme de nombre.

3. Vérifiez si la réponse de l'utilisateur correspond à l'indice de la réponse correcte pour chaque question.

4. Tenez un compte du nombre de réponses correctes et incorrectes de l'utilisateur.

5. À la fin du quiz, calculez le score de l'utilisateur en pourcentage (nombre de réponses correctes / nombre total de questions * 100) et affichez-le.

6. En fonction du score, affichez un message de classement personnalisé pour l'utilisateur.


## Défi Supplémentaire

Ajoutez des fonctionnalités telles que le chronomètre pour limiter le temps de réponse par question, un système de niveaux de difficulté pour des questions plus avancées, ou la possibilité de rejouer le quiz avec des questions différentes.