<template>
  <v-app :theme="theme">
    <v-navigation-drawer
      v-model="drawer"
      fixed
      app
    >
      <app-navbar />
    </v-navigation-drawer>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <v-app-bar-nav-icon
        :aria-label="t('aria.menu')"
        @click="drawer = !drawer"
      />
      <v-toolbar-title
        class="text-capitalize"
      >
        {{ t('rustPlayground') }}
      </v-toolbar-title>
      <v-spacer />
      <app-dark-button />
      <app-translate-menu />
    </v-app-bar>
    <v-main>
      <v-container
        fluid
        style="min-height: 75vh;"
        class="mb-16"
      >
        <router-view />
      </v-container>
      <app-custom-footer class="mt-16" />
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
/*
imports
composables
emits
props
refs
reactives
computed
methods
hooks
*/
import { ref } from 'vue'
import AppTranslateMenu from './components/menu/AppTranslateMenu.vue'
import AppDarkButton from './components/menu/AppDarkButton.vue'
import AppCustomFooter from './components/menu/AppCustomFooter.vue'
import AppNavbar from './components/menu/AppNavbar.vue'
import { useI18n } from 'vue-i18n'
import { useThemeStore } from './store'

const { t } = useI18n()
const { getTheme: theme } = useThemeStore()

const drawer = ref(false)
// TODO create tests
// TODO read vuejs testing. One for unit test and other for component tests
// TODO after that begin adding the ability to save states, on geneticsView close and open it will save/open the state from fs
// Then add the ability to save and export states, also import new states. Create a modal to view all the different states.h\
</script>
