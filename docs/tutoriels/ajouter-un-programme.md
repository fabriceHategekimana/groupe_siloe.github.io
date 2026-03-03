---
sidebar_position: 3
title: Ajouter un programme
---

# Comment ajouter un programme

Ce guide explique comment créer un nouveau programme (liste de chants pour un événement).

## Étapes

### 1. Créer le fichier

Créez un nouveau fichier dans le dossier `docs/programmes/`. Utilisez le format de date dans le nom :

```
docs/programmes/AAAA-MM-JJ-description.md
```

**Exemple :** `docs/programmes/2026-03-15-culte-dimanche.md`

### 2. Ajouter l'en-tête

```markdown
---
title: "Culte du dimanche - 15 mars 2026"
sidebar_label: "15/03/2026 - Culte"
---
```

### 3. Écrire le contenu

Ajoutez les informations de l'événement et la liste des chants sous forme de tableau :

```markdown
# Programme du culte - Dimanche 15 mars 2026

**Type :** Culte du dimanche
**Lieu :** Église
**Heure :** 10h00

---

## Liste des chants

| # | Chant | Tonalité | Notes |
|---|-------|----------|-------|
| 1 | Nom du chant | Ré maj | Ouverture |
| 2 | Nom du chant | Mi min | Adoration |
```

### 4. Lier aux paroles (optionnel)

Pour lier un chant à ses paroles, utilisez un lien Markdown :

```markdown
| 1 | [Nom du chant](/docs/chants/nom-du-fichier) | Ré maj | Ouverture |
```

---

:::info Conseil
Ajoutez une section **Notes** en bas du programme pour les instructions spéciales (transitions, solos, etc.).
:::
