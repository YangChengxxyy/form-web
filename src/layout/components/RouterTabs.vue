<template>
  <div>
    <v-chip
      v-for="(item,index) in router"
      :key="index"
      class="mr-2"
      link
      :to="item"
      :close="router.length > 1"
      :color="randomColor()"
      text-color="white"
      @click:close="close(index)"
    >
      {{ item.meta.title }}
    </v-chip>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'RouterTabs',
  props: {
    root: {
      type: String,
      default: '/'
    }
  },
  data() {
    return {
      colorList: ['red', 'pink', 'purple', 'deep-purple', 'indigo', 'blue', 'light-blue', 'cyan', 'teal', 'green', 'deep-orange']
    }
  },
  computed: {
    ...mapGetters(['router'])
  },
  methods: {
    close(index) {
      this.$store.dispatch('router/removeRouter', index)
    },
    randomColor() {
      return this.colorList[Math.floor(Math.random() * this.colorList.length)]
    }
  }
}
</script>

<style scoped>

</style>
