<template>
  <v-banner>
    <template #icon>
      <span :class="changeTextColor">
        {{ fixedPercent }}%
      </span>
    </template>
    <v-chip-group>
      <v-chip
        v-for="(gene, index) in geneArray"
        :key="index"
        :color="gene.color"
      >
        {{ gene.value }}
      </v-chip>
    </v-chip-group>
  </v-banner>
</template>

<script setup lang="ts">
import { Gene } from '@/types'
import { computed, defineProps, withDefaults } from 'vue'

const props = withDefaults(defineProps<{geneArray: Array<Gene>, percentToChange?: number}>(), { percentToChange: 0 })

const changeTextColor = computed<string>(() => (props.percentToChange >= 50) ? 'success--text' : 'error--text')
const fixedPercent = computed<string>(() => props.percentToChange.toFixed(0))

</script>
