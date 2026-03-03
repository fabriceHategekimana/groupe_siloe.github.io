---
sidebar_position: 2
title: Ajouter un chant
---

# Comment ajouter un chant au répertoire

Ce guide explique comment ajouter un nouveau chant avec ses paroles dans le répertoire de Siloé.

## Étapes

### 1. Créer le fichier

Créez un nouveau fichier dans le dossier `docs/chants/`. Le nom du fichier doit être en minuscules, sans accents, avec des tirets à la place des espaces.

**Exemple :** Pour le chant "Grand est l'Éternel", créez le fichier :
```
docs/chants/grand-est-l-eternel.md
```

### 2. Ajouter l'en-tête

En haut du fichier, ajoutez l'en-tête suivant (entre les `---`) :

```markdown
---
title: "Grand est l'Éternel"
sidebar_label: "Grand est l'Éternel"
---
```

### 3. Écrire le contenu

Ajoutez les informations du chant et les paroles :

```markdown
# Grand est l'Éternel

**Auteur :** Nom de l'auteur
**Tonalité :** Sol majeur

---

## Couplet 1

> Paroles du premier couplet...

## Refrain

> Paroles du refrain...
```

### 4. Sauvegarder et vérifier

Sauvegardez le fichier. Il apparaîtra automatiquement dans la barre latérale de la section **Chants**.

---

:::tip Format des paroles
Utilisez le symbole `>` au début de chaque ligne de paroles pour les mettre en forme dans un bloc citation. Cela les rend plus lisibles et visuellement distinctes.
:::
