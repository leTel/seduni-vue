<template>
  <v-container>
    <page-title title="Association SEDUNI" />

    <v-row class="my-3">
      <v-spacer></v-spacer>
      <v-col>
        <v-row>
          <v-col class="text-center">
            <facebook-link>Rejoignez-nous</facebook-link>
          </v-col>
          <v-col class="text-center">
            <instagram-link>Suivez-nous</instagram-link>
          </v-col>
        </v-row>
      </v-col>
      <v-spacer></v-spacer>
    </v-row>

    <v-divider />

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

    <v-row class="my-3 justify-center">
      <v-col v-for="card in secondaryCards" :key="card.title" cols="12" md="4">
        <v-hover v-slot:default="{ hover }">
          <v-card :to="card.to" :elevation="hover ? 12 : 2">
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
import InstagramLink from '@/components/InstagramLink.vue'

export default {
  components: { FacebookLink, InstagramLink },
  data() {
    return {
      primaryCards: this.$store.getters.primaryPages,
      secondaryCards: this.$store.getters.secondaryPages
    }
  }
}
</script>
