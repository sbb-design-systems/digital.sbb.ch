---
layout: page.njk
tags: level3
key: ai_design_grundlagen_fr
title: "IA Design : Bases"
parent: guides_fr
order: 20
eleventyExcludeFromCollections: false
---

L'intelligence artificielle (IA) permet de répondre plus que jamais aux exigences des utilisatrices et utilisateurs. Les besoins et contextes individuels restent toutefois variés, raison pour laquelle il n’existe pas de «solution universelle» pour concevoir les interactions avec l’IA. Pour que les utilisatrices et utilisateurs puissent exploiter pleinement le potentiel de l’IA, nous devons concevoir l’interaction de manière consciente et centrée sur la personne. Nos [Principes de conception](/fr/principles/ux-principles/overview) s'appliquent ici aussi.
<br>

<sbb-link-list-anchor>
  <sbb-block-link href="/fr/guidelines/guides/ai-design-guide/#intégration-de-l'IA-dans-le-système">Intégration de l'IA dans le système</sbb-block-link>
  <sbb-block-link href="/fr/guidelines/guides/ai-design-guide/#défis-pour-les-utilisatrices-et-utilisateurs">Défis pour les utilisatrices et utilisateurs</sbb-block-link>
  <sbb-block-link href="/fr/guidelines/guides/ai-design-guide/#augmentation-vs.-automatisation">Augmentation vs. automatisation</sbb-block-link>
  <sbb-block-link href="/fr/guidelines/guides/ai-design-guide/#design-patterns">Design patterns</sbb-block-link>
</sbb-link-list-anchor>

## Intégration de l'IA dans le système
Si nous souhaitons mettre une IA à la disposition de notre clientèle ou de notre personnel, nous devons réfléchir au rôle de l’IA dans le système. Les dimensions suivantes nous aident à y parvenir:

1. **Portée :** Quelle est la part du système supportée par l’IA? S’agit-il d’un composant isolé, d’un flux, d’une fonctionnalité, d’une application ou d’une plateforme entière?

2. **Espace :** Comment l'IA est-elle présentée par rapport à la fonctionnalité? Occupe-t-elle le centre ou n'est-elle qu'un petit élément d'interface? Est-elle visible ou fonctionne-t-elle en arrière-plan ? Si visible : en permanence ou seulement sur demande?

3. **Fonctionnalité :** Comment l'IA interagit-elle avec les fonctions existantes? Peut-elle accéder à d'autres informations ou est-elle fonctionnellement isolée? Le modèle est-il exécuté de manière statique ou est-il continuellement adapté avec de nouvelles données et interfaces?

Une planification claire de ces dimensions aide à concevoir au mieux l'expérience utilisateur pour la clientèle ou le personnel.

Outre l’expérience utilisateur, d’autres aspects revêtent bien entendu une grande importance lors de la conception, tels que l’expérience de la marque, la protection et la sécurité des données. Ces dernières sont régies par des directives internes et des lois externes. Tu trouveras en outre des directives relatives à l’utilisation et à la signalétique du sous-domaine de l’IA générative sur le [portail de la Marque CFF](https://brand.sbb.ch/document/6/fr#/applications-numeriques/intelligence-artificielle).


## Défis pour les utilisatrices et utilisateurs
Il existe différents types de systèmes d’IA (p. ex. Large Language Models [LLM], Machine Learning, Reinforcement Learning, etc.). Ils peuvent être utilisés à des fins diverses et complexes, comme la reconnaissance de modèles et la génération de texte, d’images et de langues ou la prévision d’événements. Si les systèmes d’IA offrent de nombreuses possibilités, ils présentent également de nombreux défis pour les utilisatrices et utilisateurs: 
* Transparence et explicabilité: Le fonctionnement n’est pas facile à comprendre pour les utilisatrices et utilisateurs, c’est pourquoi on parle volontiers de «boîte noire». L’explicabilité, c’est-à-dire pourquoi un système fait telle ou telle proposition, est essentielle pour une utilisation réussie.
* Systèmes d’IA probabilistes et auto-apprenants:  Les systèmes d’IA répondent sur la base de probabilités. Les systèmes d’IA utilisent le feed-back par l’utilisation pour s’optimiser. Par conséquent, ils ne donnent pas toujours la même réponse et changent avec le temps.
* Erreurs, par exemple les hallucinations : Les résultats ne sont pas toujours corrects et doivent être vérifiés.

Ce qui est essentiel pour nous, c’est donc de savoir comment concevoir l’interaction entre l’humain et le système d’IA de manière à ce que les client·e·s ou le personnel atteignent leurs objectifs et qu’ils aient une confiance appropriée dans les résultats de l’IA. 


## Augmentation vs. automatisation
L’IA peut apporter une valeur ajoutée, notamment pour les tâches de routine monotones, en prenant en charge le travail des personnes et en l’exécutant de manière autonome (automatisation), ce qui accroît ainsi l’efficacité. Mais comme l’IA commet elle aussi des erreurs (voir ci-dessus), il est important de laisser la décision à un être humain dans des contextes complexes, incertains ou exigeant une certaine responsabilité. Dans ce cas, l’IA peut soutenir l’être humain (augmentation) par le biais de recommandations et de propositions. Celles-ci doivent être compréhensibles pour l’être humain, et pouvoir être influencées ou neutralisées. Le principe est le suivant: plus le risque et l’incertitude sont élevés, plus il y a d’augmentation. En cas de risque faible et de tâches bien définies, il y a d’avantage d’automatisation.

En fait, de nombreux systèmes sont hybrides: human-in-the-loop (HITL) pour les décisions critiques, human-on-the-loop (HOTL) pour la surveillance, human-in-command pour le contrôle stratégique.

En pratique, une approche itérative est souvent utile: commencer par l'augmentation, puis automatiser lentement et de manière sélective lorsque la confiance et les performances sont bonnes.


## Design patterns
Dans le cadre de la conception de systèmes d’IA, des solutions de conception éprouvées se sont établies et contribuent à créer des applications cohérentes et conviviales. Pour en savoir plus, consultez nos [Patterns](/fr/design-system/patternlibrary/overview/). 