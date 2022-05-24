<template>
  <v-list>
    <!-- TODO create a HomeView -->
    <v-list-item to="/">
      <v-list-item-action>
        <v-icon>mdi-apps</v-icon>
      </v-list-item-action>
      <v-list-item-content>
        <v-list-item-title>
          {{ t('nav.home') }}
        </v-list-item-title>
      </v-list-item-content>
    </v-list-item>
    <!-- GeneticsView -->
    <v-list-item to="/">
      <v-list-item-action>
        <v-icon>mdi-apps</v-icon>
      </v-list-item-action>
      <v-list-item-content>
        <v-list-item-title>
          {{ t('nav.genetics') }}
        </v-list-item-title>
      </v-list-item-content>
    </v-list-item>
    <!-- TODO Github -->
    <v-list-item
      rel="noopener"
      link
      href="#"
      target="_blank"
    >
      <v-list-item-content>
        {{ t('suggestAddition') }}
      </v-list-item-content>
    </v-list-item>
  </v-list>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const links: Array<{name: string, to: string, icon?: string}> = [
  { name: 'genetics', to: '/', icon: '' }
  // { name: 'blank', to: '/blank' }
  // Add more links here
]

</script>
