<template>
  <v-list dense nav>
    <v-list-item v-for="(item,index) in list" :key="index" :to="item.path">
      <v-list-item-icon>
        <v-icon>{{ item.meta.icon }}</v-icon>
      </v-list-item-icon>
      <v-list-item-content>
        <v-list-item-title>{{ item.meta.title }}</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
  </v-list>
</template>

<script>
export default {
  name: 'RouterNavigation',
  props: {
    root: {
      type: String,
      default: '/'
    }
  },
  data() {
    return {
      list: []
    }
  },
  created() {
    this.$router.options.routes.map((value, index) => {
      if (value.path === this.root) {
        this.list = value.children
      }
    })
  }
}
</script>

<style scoped>

</style>
