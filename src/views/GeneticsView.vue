<template>
  <v-container
    class="mt-2"
    fluid
  >
    <v-row>
      <v-col class="text-center">
        <h1>
          {{ t('message') }}
        </h1>
      </v-col>
    </v-row>
    <v-row class="text-center">
      <v-col>
        <genetics-gene-input />
      </v-col>
      <v-divider vertical />
      <v-col>
        <gene-output />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import GeneOutput from '@/components/output/GeneOutput.vue'
import GeneticsGeneInput from '@/components/input/GeneticsGeneInput.vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

</script>
