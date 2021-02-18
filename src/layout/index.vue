<template>
  <v-app>
    <v-navigation-drawer ref="nav" color="#2196F3" dark app>
      <!-- -->
      <RouterNavigation class="mt-8" />
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="appBarNavIconClick()" />
      <RouterTabs />
      <v-row>
        <v-col cols="3" offset="9" md="1" offset-md="11">
          <v-avatar>
            <img
              :src="user.avatarUrl"
              alt="YC"
            >
          </v-avatar>
        </v-col>
      </v-row>
    </v-app-bar><!-- 根据应用组件来调整你的内容 -->
    <v-main class="pa-4"><!-- 给应用提供合适的间距 -->
      <v-container fluid>
        <!-- 如果使用 vue-router -->
        <router-view />
      </v-container>
    </v-main>

    <v-footer app>
      <!-- -->
    </v-footer>
  </v-app>
</template>

<script>
import RouterNavigation from '@/layout/components/RouterNavigation'
import { mapGetters } from 'vuex'
import RouterTabs from '@/layout/components/RouterTabs'

export default {
  name: 'Layout',
  components: { RouterTabs, RouterNavigation },
  computed: {
    ...mapGetters(['user'])
  },
  watch: {

  },
  methods: {
    appBarNavIconClick() {
      this.$refs['nav'].isActive = !this.$refs['nav'].isActive
    }
  }
}
</script>

<style scoped>

</style>
