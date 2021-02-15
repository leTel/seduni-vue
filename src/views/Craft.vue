<template>
  <v-container>
    <page-title icon="mdi-hand-saw" title="Artisanat" />

    <inline-image-card
      position="left"
      title="Méthodologie"
      :img-src="require('@/assets/img/craft_card.jpg')"
    >
      <p>
        Afin de réaliser nos reproductions, nous nous basons autant que possible
        sur des <b>sources historiques</b> de la période qui nous intéresse.
      </p>
      <p>
        Quand ces sources viennent à manquer ou sont fragmentaires, il nous faut
        alors faire des <b>hypothèses qui seront validées sur le terrain</b>.
      </p>
    </inline-image-card>

    <inline-image-card
      position="right"
      title="Objets reproduits"
      :img-src="require('@/assets/img/spina.jpg')"
    >
      <p>
        <b>Boucliers, lances, cottes de maille, javelines et frondes</b> sont
        quelques uns des objets que nous reproduisons couramment pour une
        utilisation lors de nos
        <router-link :to="{ name: 'fight' }">combats</router-link>.
      </p>
      <p>
        Mais l'artisanat ne s'arrête pas aux armes et armures, et nous
        travaillons également à la reproduction de toutes autres objets de la
        vie quotidienne des Celtes.
      </p>
    </inline-image-card>

    <inline-image-card
      position="left"
      title="Objectif à long terme"
      :img-src="require('@/assets/img/javelins.jpg')"
    >
      <p>
        En réalisant ces reproductions, beaucoup de questions sont soulevées.
        Ceci nous permet d'approfondir nos connaissances sur les objets
        réalisés.
      </p>
      <p>
        Notre objectif est de réaliser des objets aussi justes historiquement
        que possible. Ceci est très ambitieux et demande un important travail de
        <b
          >recherche autant sur les objets eux-mêmes que sur les techniques de
          travail et les outils utilisés</b
        >.
      </p>
    </inline-image-card>
  </v-container>
</template>
