# Test technique sur l'API Hearthstone

Ce projet a été effectué via l'api : https://rapidapi.com/omgvamp/api/hearthstone

### Les consignes étaient les suivantes
L’application doit comporter :

- Un champ de recherche pour trouver une carte via son nom (attention, il faut préciser la
langue à l’API pour faire des recherches dans la bonne langue).
- Un système de visualisation des cartes trouvées pour permettre l’ajout au deck.
- Une page de visualisation du deck avec la possibilité d’en retirer des cartes.

L’application front-end doit être réalisée en Javascript.

Bonus :
- Rendre compatible l’application web sur tablette et mobile
- Utiliser React
- Utiliser Typescript
- Faire un deck de 30 cartes mais pour une même "class" (typologie de héro)

## Notes sur le code fourni

Ce projet a été fait via l'api donnée, qui malheureusement ne comportait pas les retours les plus simples à traiter.\
Certaines images et données (liste des héros fausse, images manquantes) ont du être ajoutées en dur pour restituer la fidélité des informations du jeu.\
Pour information, les cartes sont filtrées par Class (donc accessibles par le héro, ainsi que les Neutres), mais les cartes sont également triées arbitrairement par leur présence dans les extensions/versions du jeu (afin d'éviter d'avoir autant de fois la carte qu'elle n'est présente dans les versions/extensions, comme l'API les retourne).\

Certaines améliorations auraient pu être faites, mais le projet étant plus conséquent que prévu (temps de recherche des assets, création du parcours, responsive design, prise en compte des retours API...), ces améliorations ne sont pas présentes (ajout de carte en double lorsqu'elles le permettent, modal de validation de suppression...).\

Les images utilisées ne sont pas libres de droits, Blizzard ne fournis pas d'assets gratuits.\

Le parcours est le suivant : 
- page de sélection du héro (portrait noir et blanc et indication des cartes si le deck est incomplet)
- page du héro sélectionné avec possibilité de rechercher, de supprimer et d'ajouter jusqu'à 30 cartes de sa class ou des cartes neutres

### Lancement du projet

Exécuter `npm install` puis `npm start` à la racine du projet.\
Ouvrir [http://localhost:3000](http://localhost:3000) dans le navigateur.



