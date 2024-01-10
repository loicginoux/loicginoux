---
layout: ../../layouts/BlogLayout.astro
title: Mes règles de conventions pour le css
date: 2015-07-14
description: "Comment mettre de l'ordre dans vos fichiers css"
tags: ["css", "guidelines"]
lang: "fr"
published: true
---


Je profite de ce 14 juillet pour lire un peu sur les conventions css des différents sites web. Pour les anglophones, je vous conseille de lire comment font les différents sites tels que [Trello](http://blog.trello.com/refining-the-way-we-structure-our-css-at-trello/), [Medium](https://gist.github.com/fat/a47b882eb5f84293c4ed) ou bien encore [Github](http://markdotto.com/2014/07/23/githubs-css/). Ces sites ont suivi leur propre chemin en mixant à leur sauce des méthodes tels que [BEM](https://en.bem.info/method/) (Blocks - Elements - Modifiers) ou bien le [OOCSS](http://www.smashingmagazine.com/2011/12/12/an-introduction-to-object-oriented-css-oocss/). Si vous ne connaissiez pas ces techniques, commencez par ça, ca ne peut que vous faire du bien!
<!-- more -->

Bon je vais pas vous faire un dessin, mais ces techniques ont été mis au point pour mettre de l'ordre dans vos fichiers css. **Voici les principaux bénéfices** à suivre ce genre de conventions css:

*  votre code sera beaucoup **plus simple à maintenir**. Le prochain développeur à mettre le nez dans votre code vous en remerciera.

*  **vous gagnerez en performance** au niveau du rendu de la page, En faisant les choses bien, vous gagnerez en taille du fichier, mais aussi vous serez plus efficaces sur les sélecteurs css.


J'aimerai donc garder ici quelques règles à suivre que je donne sans aucun ordre:

Conventions générales
==============

*  **utilisez au possible les classes** plutôt que tout autre type de sélecteurs

*  utilisez un seul tiret pour le nom des classes (```header-title```), pas de camelCase ni d'underscore.

*  séparer la valeur après les 2 points. Ex: pas de ```color:white;mais plutôt ```color: white;```

*  utilisez les raccourcis quand cela est possible, le 0 n'a pas besoin d'unité. Ex: pas de ```margin: 10px 0px 10px 0px;mais plutôt ```margin: 10px 0;```

*  utilisez un [normalize.css](https://github.com/necolas/normalize.css), c'est bien!

*  Les noms des classes doivent ajouter une information au développeur. Un nom de classe trop générale vous fera perdre du temps, surtout sur un projet en équipe

*  dans un souci de réutilisation, séparer les règles css de structure et celles d'apparence

*  **éviter des styles dépendant du contexte**. Mauvais exemple: ```article > p:nth-child(2) > span.plop```


J'aime beaucoup aussi ces règles utilisées chez Medium:

*  **un préfixe "js-"** est utilisé pour les classes qui vont être manipulées par javascript. Durant les refactoring ca évitera de supprimer et casser des comportements javascripts. Ex:

``` html
<a href="/login" class="btn btn-primary js-login"></a>
```

*  **un préfixe "u-"** pour les classes ""utils". Les class tels que ```.u-pull-left```, ```.u-capitalize```, etc..

*  **un préfixe "is-"** pour indiquer un état, qui pourra ensuite être ajouté ou pas via javascript. Ex: ```.is-closed```, ```.is-expanded```

*  dans la veine de la technique BEM, Ils utilisent les  et les doubles tirets ou underscor pour séparer les blocks des éléments ou les éléments des modifiers. On peut par exemple prendre comme convention```.block-name_element-name``` et pour séparer un modifier ```.element-name--big```.



Maintenabilité
==============

*  utilisez un **préprocesseur**: sass, scss, less, celui que vous voulez.

*  **indentez vos règles imbriquées**.

``` css
.header {  height: 100px }

.header-title {   color: red  }
```

*  utilisez [autoprefixer](https://github.com/ai/) pour ajouter les vendor prefixes



Performances
==============

*  gardez les sélecteurs aussi petits que possible et évitez les imbrications non nécessaires.

``` css
# bad
.header .title h1 {
  font-weight: bold
}

# good
.header-title {
  font-weight: bold
}
```

*  n'utilisez **pas de tag html dans vos sélecteurs**. Les navigateurs lisent les règles css de la droite vers la gauche. Si vous terminez votre règle avec div, par exemple ```.content div {...};``` le navigateur va parser tous les divs de votre page... BAAAD!

*  utilisez des **sprites** pour les images (quand on en a beaucoup).

*  pour le déploiement en production, combinez au maximum vos fichiers css en un seul ou 2 fichiers css. Ensuite il faut bien sûr **minimiser vos fichiers**, encore mieux les **gzipper** et si vous avez un **CDN** sur lequel le placer vous avez tout gagné.

C'est tout pour aujourd'hui, N'hésitez pas si vous avez des techniques que vous voudriez partager aussi.

Happy Coding!

