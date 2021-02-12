<template>
  <v-row v-if="position == 'left'">
    <v-col cols="12" md="8">
      <v-card>
        <v-card-title v-if="title">{{ title }}</v-card-title>
        <v-card-text>
          <slot></slot>
        </v-card-text>
      </v-card>
    </v-col>
    <v-col cols="12" md="4">
      <v-card>
        <v-img :src="imageSrc" max-height="200" />
      </v-card>
    </v-col>
  </v-row>
  <v-row v-else-if="position == 'right'">
    <v-col cols="12" md="4">
      <v-card>
        <v-img :src="imageSrc" max-height="200" />
      </v-card>
    </v-col>
    <v-col cols="12" md="8">
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
    imageSrc: {
      type: String,
      required: true
    },
    position: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped></style>
