# Défi JavaScript : Démineur

Bienvenue dans le défi JavaScript du Démineur ! 
Dans ce défi, vous allez créer une version jouable du célèbre jeu du Démineur en utilisant JavaScript. 
Le Démineur est un jeu de logique passionnant où le joueur doit déterminer l'emplacement des mines dans une grille en évitant de les faire exploser.


## Objectif

L'objectif de ce défi est de créer une interface utilisateur pour jouer au Démineur en ligne. Vous devrez générer une grille de jeu avec des cases vides et des mines cachées, puis permettre aux joueurs de cliquer sur les cases pour découvrir ce qu'elles contiennent. Le but du jeu est de découvrir toutes les cases vides sans cliquer sur une mine.

## Règles du Démineur

1. Une grille est composée de cases vides et de mines cachées.
2. Les cases vides peuvent contenir un nombre, indiquant le nombre de mines adjacentes.
3. Lorsqu'un joueur clique sur une case vide, toutes les cases adjacentes vides sont également découvertes.
4. Si un joueur clique sur une mine, le jeu est terminé.
5. Le joueur gagne en découvrant toutes les cases vides sans cliquer sur une mine.


## Instructions

1. Créez une interface utilisateur qui affiche une grille de jeu vide.
2. Générez une grille de jeu avec des mines cachées de manière aléatoire.
3. Lorsque le joueur clique sur une case, révélez son contenu (vide, nombre de mines adjacentes ou mine).
4. Appliquez les règles du jeu pour révéler automatiquement les cases adjacentes vides lorsque le joueur clique sur une case vide.
5. Gérez la fin du jeu lorsque le joueur découvre une mine ou gagne en découvrant toutes les cases vides.
6. Fournissez des boutons de contrôle pour démarrer une nouvelle partie et réinitialiser la grille.


## Défis supplémentaires

1. Implémentez un système de minuterie pour chronométrer le temps que prend le joueur pour résoudre le Démineur.
2. Ajoutez la possibilité pour le joueur de placer des drapeaux sur les cases supposées contenir des mines.
3. Créez différents niveaux de difficulté en ajustant la taille de la grille et le nombre de mines.
4. Ajoutez un générateur de grilles aléatoires pour offrir une expérience de jeu infinie.