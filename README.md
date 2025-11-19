# Kolizeo - Test technique de Florian Fougeray

Temps estimé : 2/3h<br />
Temps passé : 3h/3h30

## Journal de bord

Avant même de penser au projet, je vais d'abord lister ce qui ne m'est pas familier pour comprendre leurs enjeux.

- Unity Remote Config : Unity je connais, je joue un peu. Par contre dans ce contexte, ça ne me dit rien. <br />
  ➡️ Pour comprendre / me documenter, je me suis appuyé directement sur la doc de Unity + communiqué avec ChatGPT
  Pour ce cas précis, ne sachant pas comment opérer, je vais isoler le problème sur un script à part avant de l'implémenter dans ce projet.
  J'ai rencontré quelque difficulté pour construire l'URL, je ne trouvais pas la ressource dont j'avais besoin dans la doc, mais j'ai finis par y arriver.

- Vercel : Jamais utilisé mais je sais que c'est. <br />
  ➡️ J'utilise Render en temps normal. Après vérification, les deux se ressemblent beaucoup. Je ne serais donc pas perdu pour le déploiment !

- Backend avec Next : Déjà fait pour comprendre la logique mais jamais appliqué réellement.<br />
  ➡️ Je vais tenter d'organiser mon code comme je le fais avec Node directement.

## Réflexions

### Archi

Je suis moins habitué / fan du mono repo. Ici je vais m'adapter pour le test technique.<br />
Je trouve moins intuitif / lisible de tout rassembler au même endroit.<br />
La séparation des concepts rend la logique plus ordonné/rangé.<br />
Pour scale un projet, le maintenir ou gérer un fort trafic, avoir entièrement la main sur ce qu'on fait est un bon point d'entrée.

J'ai essayé d'avoir une approche organisé en séparant mes controllers de mes routes + usage API externe.

### UI/UX

Est-ce que je fais des liens simple ? Un dropdown ?<br />
J'ai opté pour les liens simple car il n'y en avait que 2. Dans le cadre du test ça me semble cohérent de garder un côté réactif.<br />

### Personnel

J'ai eu la maladresse de sous estimer la préparation avant de coder car peu de chose à mettre en place.<br />

Petit vent de panique au moment du deploy : Les liens ne fonctionnaient pas.<br />
➡️ J'ai bêtement ajouter mon .env sans modifier ma variable Next pour mon URL de base public.<br />
(J'ai pas vraiment paniqué hein, je précise quand même 👀...)

### Liens

- [Repo github](https://github.com/BaltiBlast/kolizeo-test)
- [Deploy / Rendu](https://kolizeo-test-one.vercel.app/)
