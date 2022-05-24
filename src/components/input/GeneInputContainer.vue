<template>
  <v-container>
    <v-row>
      <v-col>
        <gene-input-container-genetics-gatherer
          :col="col"
          @gene-add="handleGeneClick"
          @gene-remove="handleGeneRemove"
        />
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <gene-input-container-chip-group-actions
          @add-gene-group="addGeneCol(col.id)"
          @remove-gene-group="removeGeneCol(col.id)"
          @duplicate-gene-group="duplicateGeneCol(col.id)"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { Gene, GeneColSet } from '@/types'
import { computed, defineProps } from 'vue'
import { useGeneStore } from '@/store'
import GeneInputContainerChipGroupActions from './GeneInputContainerChipGroupActions.vue'
import GeneInputContainerGeneticsGatherer from './GeneInputContainerGeneticsGatherer.vue'

const { geneAdd, geneRemove, addGeneCol, removeGeneCol, duplicateGeneCol } = useGeneStore()

const props = defineProps<{col: GeneColSet}>()

const id = computed<number>(() => props.col.id)

const handleGeneClick = (gene: Gene): void => geneAdd({ gene, id: id.value })
const handleGeneRemove = (idInGene: number) => geneRemove({ idInGene, idOfCol: id.value })

</script>
