---
sidebar_position: 4
title: Publier un article de blog
---

# Comment publier un article dans le journal

Le journal (blog) est utilisé pour documenter les répétitions, événements et partager des vidéos. Voici comment publier un nouvel article.

## Étapes

### 1. Créer le fichier

Créez un nouveau fichier dans le dossier `blog/`. Le nom du fichier doit commencer par la date :

```
blog/AAAA-MM-JJ-titre-de-l-article.md
```

**Exemple :** `blog/2026-03-01-repetition-mars.md`

### 2. Ajouter l'en-tête

```markdown
---
title: "Répétition du 1er mars"
authors: [nom]
tags: [répétition]
---
```

**Tags disponibles :**
- `répétition` - Pour les comptes-rendus de répétitions
- `événement` - Pour les événements spéciaux
- `vidéo` - Pour les partages de vidéos YouTube
- `annonce` - Pour les annonces importantes

### 3. Écrire le contenu

Rédigez votre article en Markdown. Pour les vidéos YouTube, ajoutez l'import du composant juste après l'en-tête `---`, puis utilisez-le dans le contenu :

```markdown
---
title: "Mon article"
authors: [siloe]
tags: [vidéo]
---

import YouTube from '@site/src/components/YouTube';

## Vidéo de la semaine

<YouTube videoId="abc123" title="Ma vidéo" />
```

- `videoId` : l'identifiant de la vidéo YouTube (dans `https://www.youtube.com/watch?v=abc123`, c'est `abc123`)
- `title` : (optionnel) un titre descriptif pour l'accessibilité

Vous pouvez mettre **plusieurs vidéos** dans le même article :

```markdown
<YouTube videoId="abc123" title="Première vidéo" />
<YouTube videoId="def456" title="Deuxième vidéo" />
```

### 4. Ajouter un résumé

Utilisez `<!--truncate-->` pour définir où le texte sera coupé dans la liste du blog :

```markdown
Résumé visible dans la liste du blog...

<!--truncate-->

Suite de l'article visible uniquement sur la page complète...
```

---

:::tip
Ajoutez des photos et vidéos pour rendre vos articles plus vivants !
:::
