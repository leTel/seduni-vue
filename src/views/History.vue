<template>
  <v-container>
    <page-title icon="mdi-book-open-page-variant-outline" title="Histoire" />

    <inline-image-card
      position="left"
      title="L'histoire de nos ancètres"
      :image-src="require('../assets/img/history_card.jpg')"
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
        qui viaient dans la région sédunoise.
      </p>

      <p>
        A partir des informations récoltées, nous pouvons procéder à la création
        de divers objects dont les armes et armures que nous utilisons durant
        nos entraînements.
      </p>
    </inline-image-card>

    <inline-image-card
      position="right"
      title="Période et zone géographique"
      :image-src="require('../assets/img/la_tene_map.png')"
    >
      <p>
        La culture celte s'étend sur plus de 1500 ans et s'est répandue sur une
        zone géographique dépassant l'Europe.
      </p>
      <p>
        Dans le cadre de nos recherches, nous essayons de nous focaliser sur la
        <b>
          région des Alpes durant la période dite de "La Tène moyenne"
        </b>
        qui représente une période allant de -300 à -100 BCE.
      </p>
      <p>
        Bien évidemment, pour pouvoir dessiner une image la plus précise
        possible de cette région à cette période, il faut également procéder par
        comparaison et déduction. Nous étudions donc des sources très
        diversifiées.
      </p>
    </inline-image-card>
  </v-container>
</template>

<script>
import InlineImageCard from '@/components/InlineImageCard.vue'
export default {
  components: { InlineImageCard }
}
</script>
