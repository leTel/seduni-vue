<template>
  <v-container>
    <page-title icon="mdi-at" title="Contact" />

    <v-row>
      <v-col cols="12" md="6">
        <v-card>
          <v-card-title>Envoyez-nous un message</v-card-title>
          <v-card-text>
            <p>
              Nous sommes très réactifs sur les réseaux sociaux. Écrivez-nous
              depuis nos pages pour avoir une réponse rapide !
            </p>
            <v-row>
              <v-col>
                <facebook-link>Page facebook</facebook-link>
              </v-col>
              <v-col>
                <instagram-link>Page instagram</instagram-link>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12" md="6">
        <v-card>
          <v-card-title>Envoyez-nous un e-mail</v-card-title>
          <v-card-text>
            <p>
              Si vous préférez les e-mails, écrivez-nous à l'adresse
              <a href="mailto: info.seduni@gmail.com">
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
import FacebookLink from '@/components/FacebookLink.vue'
import InstagramLink from '@/components/InstagramLink.vue'
export default {
  components: { FacebookLink, InstagramLink }
}
</script>
