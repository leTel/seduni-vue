<template>
  <v-container>
    <page-title icon="mdi-book-open-page-variant-outline" title="Histoire" />

    <inline-image-card
      position="left"
      title="L'histoire de nos ancètres"
      :img-src="require('@/assets/img/history_card.jpg')"
    >
      <p>
        La recherche historique constitue l'activité centrale de notre
        association.
      </p>
      <p>
        Notre objectif est de
        <b>
          connaître au mieux la vie des membres de la tribu des SEDUNI
        </b>
        qui vivaient dans la région sédunoise.
      </p>

      <p>
        À partir des informations récoltées, nous pouvons procéder à la
        reproduction de divers objets dont les armes et armures que nous
        utilisons durant nos entraînements.
      </p>
    </inline-image-card>

    <inline-image-card
      position="right"
      title="Période et zone géographique"
      :img-src="require('@/assets/img/la_tene_map.png')"
    >
      <p>
        La culture celte s'étend sur plus de 1500 ans et s'est répandue sur une
        zone géographique dépassant l'Europe.
      </p>
      <p>
        Dans le cadre de nos recherches, nous essayons de nous focaliser sur la
        <b>
          région des Alpes durant la période dite du "La Tène moyen"
        </b>
        qui représente une période allant de -300 à -100.
      </p>
      <p>
        Bien évidemment, pour pouvoir dessiner une image la plus précise
        possible de cette région à cette période, il faut également procéder par
        comparaison et déduction. Nous étudions donc des sources très
        diversifiées.
      </p>
    </inline-image-card>
    <inline-image-card
      position="left"
      title="Les sources"
      :img-src="require('@/assets/img/library.jpg')"
    >
      <p>
        Les Celtes n'ayant que très peu utilisé l'écriture, les sources
        historiques sont rares. Nous pouvons toutefois nous baser sur le travail
        des historiens, linguistes, archéologues et autres afin d'en apprendre
        d'avantage sur les Celtes.
      </p>
      <p>
        La
        <b>
          visite de musées, la participations à des conférences et l'étude des
          ouvrages
        </b>
        de notre
        <router-link :to="{ name: 'library' }">bibliothèque</router-link> sont
        les principales activités liées à la recherche historique que propose
        notre association.
      </p></inline-image-card
    >
  </v-container>
</template>
