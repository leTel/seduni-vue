<template>
  <v-container>
    <v-row class="my-5">
      <v-col>
        <v-img max-height="300" contain src="../assets/img/full_logo.png" />
      </v-col>
    </v-row>

    <v-row class="my-3">
      <v-col class="text-center">
        <v-btn
          color="#3b5998"
          dark
          href="https://www.facebook.com/SEDUNI.VS"
          target="_blank"
        >
          Rejoignez-nous sur Facebook
          <v-icon right>mdi-facebook</v-icon>
        </v-btn>
      </v-col>
    </v-row>

    <v-row class="my-3">
      <v-col v-for="card in primaryCards" :key="card.title" cols="12" md="4">
        <v-card :to="card.to">
          <v-img
            :src="card.src"
            class="white--text align-end"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
            height="300px"
          >
            <v-card-title v-text="card.title"></v-card-title>
          </v-img>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn icon>
              <v-icon>mdi-arrow-right</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>

    <v-row class="my-3">
      <v-col v-for="card in secondaryCards" :key="card.title" cols="12" md="6">
        <v-card :to="card.to">
          <v-card-title v-text="card.title"></v-card-title>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn icon>
              <v-icon>mdi-arrow-right</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      primaryCards: [
        {
          title: 'Histoire',
          to: 'history',
          src: require('@/assets/img/history_card.jpg')
        },
        {
          title: 'Artisanat',
          to: 'craft',
          src: require('@/assets/img/craft_card.jpg')
        },
        {
          title: 'Combat',
          to: 'fight',
          src: require('@/assets/img/fight_card.jpg')
        }
      ],
      secondaryCards: [
        {
          title: 'Qui sommes-nous ?',
          to: 'about'
        },
        {
          title: 'Nous contacter',
          to: 'contact'
        }
      ]
    }
  }
}
</script>
