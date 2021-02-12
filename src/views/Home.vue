<template>
  <v-container>
    <page-title title="Association SEDUNI" />

    <v-row class="my-3">
      <v-col class="text-center">
        <facebook-link>Rejoignez-nous</facebook-link>
      </v-col>
    </v-row>

    <v-row class="my-3">
      <v-col v-for="card in primaryCards" :key="card.title" cols="12" md="4">
        <v-hover v-slot:default="{ hover }">
          <v-card :to="card.to" :elevation="hover ? 16 : 2">
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
        </v-hover>
      </v-col>
    </v-row>

    <v-divider />

    <v-row class="my-3">
      <v-col v-for="card in secondaryCards" :key="card.title" cols="12" md="4">
        <v-hover v-slot:default="{ hover }">
          <v-card :to="card.to" :elevation="hover ? 16 : 2">
            <v-card-title v-text="card.title"></v-card-title>

            <v-card-actions>
              <v-spacer></v-spacer>

              <v-btn icon>
                <v-icon>mdi-arrow-right</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-hover>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import FacebookLink from '@/components/FacebookLink.vue'

export default {
  components: { FacebookLink },
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
          title: 'Devenir membre',
          to: 'becoming-member'
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
