<template>
  <v-container>
    <page-title icon="mdi-bookshelf" title="Bibliothèque" />

    <inline-image-card
      position="left"
      title="Les livres"
    >
      <p>
        La bibliothèque des SEDUNI est composée d'ouvrage historique et
        contemporains. Nous essayons de découvrir toutes les facettes de cette
        époque.
      </p>
      <p>
        <b>La langue, le commerce, les migrations, la guerre, l'artisanat</b>
        ne sont que quelques uns des thèmes que nous étudions.
      </p>
    </inline-image-card>
    <v-row>
      <v-col
        v-for="book in books"
        :key="book"
        class="d-flex child-flex"
        cols="12"
        sm="6"
        md="4"
        lg="2"
      >
        <v-dialog v-model="dialogs[get_key(book)]" width="500">
          <template v-slot:activator="{ on, attrs }">
            <v-hover v-slot:default="{ hover }">
              <v-card v-bind="attrs" v-on="on" :elevation="hover ? 16 : 2">
                <v-img
                  :src="
                    require('@/assets/img/library/' + book.replace('./', ''))
                  "
                  :aspect-ratio="3 / 4"
                />
              </v-card>
            </v-hover>
          </template>
          <v-img
            :src="require('@/assets/img/library/' + book.replace('./', ''))"
          />
        </v-dialog>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
const books = require.context('@/assets/img/library', false, /^.*\.jpg$/).keys()
let dialogs = {}
books.forEach(book => {
  dialogs[getKey(book)] = false
})
function getKey(book) {
  return book.replace('./', '').replace('.jpg', '')
}

export default {
  data() {
    return {
      books: books,
      dialogs: dialogs
    }
  },
  methods: {
    get_key(book) {
      return getKey(book)
    }
  }
}
</script>
