# Convention CSS du projet pour avoir une écriture cohérentes

 Le présent document liste les conventions pour ce projet, celles-ci sont
 importantes pour une maintenabilité sur le long terme. Le but ici, c'est que
 peu importe le nombre d'intervenants, il faut garder un code propre et
 compréhensible par tous.

## Nom des classes

Les classes doivent être écrites en camel case et de préférence en anglais.

```css
/* Good - Use camel case */
.className {}

/* Bad - don't use underscores */
.class_name {}

/* Bad - don't use dashes */
.class-name {}
```

### Exceptions

Les classes pour les icônes sont générées automatiquement par [Compass](http://compass-style.org/help/tutorials/spriting/) et, de ce fait écrites avec des tirets (exemple : `.icon-home`).

Les classes qui doivent s'appliquer dans un certain contexte sont suffixées du contexte, le suffixe doit être précédé d'un tiret (exemple : `.hide-mobile`)

# 1. Indentation

Chaque niveau d'indentation est composé de quatre espaces. Ne pas utiliser de tabulations (ou pour plus de confort, configurer votre éditeur pour qu'une tabulation égale à quatre espace).

```css
/* Good */
.element {
    color: #fff;
    background-color: #000;
}

/* Bad */
.element {
color: #fff;
background-color: #000;
}
```
# 2. Format

Le format de code choisi doit assurer : une bonne lisibilité, des commentaires clairs, une réduction des probabilités d'insertion accidentelle d'erreurs, et la production de fichiers diff et de résolution des problèmes pratiques.

 + Un seul sélecteur par ligne dans les régles à plusieurs sélecteurs.
 + Un espace avant l'accolade ouvrante d'une règle.
 + Une déclaration par ligne dans un bloc de déclarations.
 + Un espace après les deux points d'une déclaration.
 + Ajoutez toujours un point-virgule à la fin de la dernière déclaration d’un bloc.
 + Fermez l'accolade d'une règle au même niveau que le premier caractère de la règle.
 + Sautez une ligne entre chaque règle.

```css
.selector1,
.selector2,
.selector3 {
    background: #fff;
    box-sizing: border-box;
    color: #333;
    display: block;
}
```
## Ordre des Propriétés

L'ordre des propriétés doit toujours être la même, les propriétés doivent être déclarées par ordre alphabétique.

```css
.selector {
    background: #000;
    border: 0;
    color: #fff
    display: block;
    height: 100px;
    margin: 10px;
    padding: 10px;
    position: relative;
    width: 50%;
}
```
## Exceptions et légers écarts

De gros blocs de déclarations uniques peuvent utiliser un format légèrement différent, regroupées sur une seule ligne. Dans ce cas, il faut insérer un espace après l'accolade ouvrante et avant l'accolade fermante, sauter une ligne après la déclaration du bloc.

```css
.selector1 { width: 10%; }
.selector2 { width: 20%; }
.selector3 { width: 30%; }
```

Les longues valeurs de propriétés, séparées par des virgules (comme des ensembles de dégradés et d'ombres) peuvent être agencées sur plusieurs lignes de manière à améliorer la lisibilité et produire des fichiers diff plus utiles.

```css
.selector {
    box-shadow:
        1px 1px 1px #000,
        2px 2px 1px 1px #ccc inset;
    background-image:
        linear-gradient(#fff, #ccc),
        linear-gradient(#f3c, #4ec);
}
```
## Préprocesseurs : considérations additionnelles pour le formatage

Les différents préprocesseurs CSS offrent des possibilités, des fonctionnalités et une syntaxe différentes. Les conventions doivent être étendues pour s'adapter aux particularités des préprocesseurs que l'on utilise. Les conventions suivantes font référence à Sass.

 + Limiter l'imbrication à trois niveaux de profondeur. Réexaminez toute imbrication supérieure à quatres niveaux de profondeur. Cela évite des sélecteurs CSS trop spécifiques.
 + Placez toujours les déclarations `@extend` en début de bloc.
 + Si possible, regroupez toutes les déclarations `@include` en début de bloc juste après les déclarations `@extend`.

```css
.selector {
    @extend .otherRule;
    @include box-sizing(border-box);
    @include clearfix();
    width: 250px;
    // other declarations
}
```
## Divers

 + Utilisez des minuscules pour les valeurs hexadécimales, exemple : `#aaa `.
 + Utilisez toujours le même type de guillemets. Ma préférence va aux doubles guillemets, exemple : `content: " "`.
 + Utilisez toujours des guillemets pour les valeurs dans les sélecteurs, exemple : `input[type="checkbox"]`.
 + Lorsque c'est autorisé, évitez de spécifier les unités pour les valeurs nulles, exemple : `margin: 0`.

# 3. Commentaires

Avec _sass_ on peut se permettre de répartir les déclarations css dans plusieurs fichiers car ceux-ci seront réunis et minifiés en un seul fichier css lors de la compilation.

On trouvera donc en début de fichier une description ayant ce format :

```css
// @desc        Description du contenu de la feuille de style
// @name        Non de la feuille de style
// @author      Auteur ayant créé la feuille de style (optionel)
// @tested      Version des navigateurs testés
// @requires    Déclaration des dépendances (autres feuille sass)
```

À l'intérieur des feuilles de styles on commentera les déclaration en s'appuyant sur [KSS](http://warpspire.com/kss/) pour pouvoir générer la documentation que vous êtes en train de lire.

 + Evitez les commentaires en fin de ligne.
 + Gardez une longueur de ligne de taille raisonnable, par exemple 80 caractères.
 + Utilisez les commentaires comme bon vous semble pour diviser le code CSS en parties distinctes.
 + Rédigez vos commentaires avec des majuscules et des minuscules et gardez une indentation constante pour le texte.

### Exemple de commentaires pour SASS:
```css
// Bloc de commentaire de section
// ==========================================================================

// Bloc de commentaire de sous-section
// --------------------------------------------------------------------------

//
// Groupe de bloc de commentaires.
// Parfait pour les explications sur plusieurs lignes.

// Commentaire simple

// Exemple de code : 
//    <button class="button">Button</button>
//    <a href="#" class="button">Button</a>
//    <input type="submit" class="button" value="Button" />
```

### Exemple de commentaires pour KSS:
```css
// Boutons
//
// Markup:
//    <button class="button {$modifiers}">button element</button>
//    <input type="submit" class="button {$modifiers}" value="input:submit" />
//    <a href="#" class="button {$modifiers}">link element</a>
//
// .buttonOrange            - Bouton orange
// .buttonBlue              - Bouton bleu
//
// Styleguide 1.1
```

# 4. Écriture HTML

Lorsque l'on déclare des attribut dans le code HTML, le faire dans l'ordre alphabétique.

```css
<div class="color1" data-src="assets/list" id="sidebarList">
```
Lors de la déclaration de plusieurs classes, utiliser la même règle.

```css
<div class="color1 grid8 mb10 mt0" data-src="assets/list" id="sidebarList">
```
# Inspirations

Pour écrire ces conventions, je me suis inpiré de :
 + [idiomatic-css](https://github.com/DirtyF/idiomatic-css/tree/master/translations/fr-FR)
 + [CSS-Guidlines](https://github.com/flexbox/CSS-Guidelines/blob/master/README.md#convention-de-nommage)
 + [oocss-code-standards](https://github.com/stubbornella/oocss-code-standards)
