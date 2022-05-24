<template>
  <v-btn
    fab
    elevation="2"
    fixed
    bottom
    right
    color="secondary"
    :aria-label="t('aria.addGene')"
    @click="addGeneColByPush"
  >
    <v-icon>mdi-plus</v-icon>
  </v-btn>
</template>

<script setup lang="ts">
import { useGeneStore } from '@/store'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const { addGeneColByPush } = useGeneStore()

</script>
