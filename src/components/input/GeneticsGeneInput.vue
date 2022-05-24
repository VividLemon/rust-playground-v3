<template>
  <v-container>
    <v-row>
      <v-col>
        <h1 class="text-center">
          {{ t('input') }}
        </h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-fade-transition group>
          <gene-input-container
            v-for="col in cols"
            :key="col.id"
            :col="col"
          />
        </v-fade-transition>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <gene-input-add-gene-col-fab />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { useGeneStore } from '@/store'
import GeneInputContainer from './GeneInputContainer.vue'
import GeneInputAddGeneColFab from './GeneInputAddGeneColFab.vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const { getGeneCols: cols } = useGeneStore()

</script>
