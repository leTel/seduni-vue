<template>
  <v-row>
    <v-col v-if="imgSrc" cols="12" md="4" :order-md="order">
      <v-card>
        <v-img :src="imgSrc" max-height="200" />
      </v-card>
    </v-col>

    <v-col cols="12" :md="imgSrc ? 8 : 12">
      <v-card>
        <v-card-title v-if="title">{{ title }}</v-card-title>
        <v-card-text>
          <slot></slot>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: {
    title: {
      type: String
    },
    imgSrc: {
      type: String,
      required: true
    },
    position: {
      type: String,
      required: true
    }
  },
  computed: {
    order() {
      if (this.position === 'right') {
        return 'first'
      }

      return 'last'
    }
  }
}
</script>
