<template>
  <v-container>
    <page-title icon="mdi-at" title="Contact" />

    <v-row>
      <v-col cols="12" md="6">
        <v-card>
          <v-card-title>Envoyez-nous un message</v-card-title>
          <v-card-text>
            <p>
              Nous sommes très réactifs sur Facebook. Écrivez-nous depuis notre
              page pour avoir une réponse rapide !
            </p>
            <facebook-link>SEDUNI</facebook-link>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12" md="6">
        <v-card>
          <v-card-title>Envoyez-nous un e-mail</v-card-title>
          <v-card-text>
            <p>
              Si vous préférez les e-mails, écrivez-nous à l'adresse
              <a href="mailto: info.seduni@gmail.com" class="text-large">
                info.seduni@gmail.com
              </a>
            </p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import FacebookLink from '../components/FacebookLink.vue'
export default {
  components: { FacebookLink }
}
</script>
