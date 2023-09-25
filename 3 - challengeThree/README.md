# Défi JavaScript : Touché Coulé

Bienvenue dans le défi "Touché Coulé" ! Dans ce défi, vous allez créer un jeu de stratégie naval où vous devrez détecter et détruire des sous-marins ennemis en utilisant des bateaux alliés.

## Objectif du Jeu

Votre objectif est de détecter et de détruire des sous-marins ennemis qui se cachent dans une zone maritime. Vous disposez d'une matrice représentant la zone, où chaque case peut contenir un des éléments suivants :
- "*" : Eau
- "0" : Bateau allié
- "1" : Sous-marin ennemi

Chaque bateau allié tire dans les 4 directions autour de lui. 
Lorsqu'il touche un ennemi, il passe à la diretion suivante. 
Les torpilles naviguant sous l'eau, il ne touchera pas les bateaux alliés et passera au travers.

Votre mission est de déterminer le nombre de sous-marins ennemis touchés par vos bateaux alliés.

## Instructions

1. Vous allez devoir créer une matrice (tableau de tableaux) qui représente la zone maritime. Vous pouvez définir la taille de la matrice en fonction de la complexité que vous souhaitez pour le défi.

2. Placez aléatoirement des sous-marins ennemis ("1") et des bateaux alliés ("0") dans la matrice. Le reste des cases est rempli du symbole ("*")

3. Créez un algorithme qui permet à vos bateaux alliés de tirer sur des cases de la matrice pour détecter et détruire des sous-marins ennemis.

4. Calculez et affichez le résultat global du nombre de sous-marins touchés.

## Exemple de Matrice

Voici un exemple de matrice pour vous aider à visualiser la zone maritime :

```
[
["*", "*", "1", "0", "0"],
["*", "*", "*", "0", "1"],
["*", "*", "*", "*", "0"],
["0", "*", "*", "*", "1"],
["0", "*", "*", "*", "*"]
]
```



## Comment Commencer

1. Implémenter le jeu dans le fichier `js/challenge3.js`.

2. Définissez la matrice de la zone maritime et placez aléatoirement les sous-marins ennemis et les bateaux alliés.

3. Implémentez la logique du jeu permettant aux bateaux alliés de tirer et de mettre à jour la matrice.

4. Affichez la matrice avec les résultats des tirs et calculez le nombre de sous-marins ennemis touchés.

5. Testez votre jeu en exécutant le fichier JavaScript dans un navigateur ou un environnement d'exécution de code.

Amusez-vous bien en créant ce jeu "Touché Coulé" et en développant vos compétences en JavaScript tout en résolvant ce défi de stratégie naval !




## Défis Supplémentaires

1. Créer une fonction générant aléatoirement la matrice.

2. Implémenter un affichage sur le navigateur et non pas sur la console en utilisant par exemple des icones (💧, ⛴ et 👾) plutôt que *, 0 et 1.

3. Affichez la matrice avec les résultats des tirs, en remplaçant les sous-marins ennemis touchés par des "💥" et en laissant les sous-marins non touchés comme des "👾".