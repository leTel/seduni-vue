<template>
  <v-list-item active-class="primary--text" :to="link.to" two-line>
    {{ link.title }}
    <v-spacer />
    <v-icon right>{{ link.icon }}</v-icon>
  </v-list-item>
</template>

<script>
export default {
  props: {
    link: {
      type: Object,
      required: true
    }
  }
}
</script>
