<template>
  <v-banner
    two-line
    width="100%"
  >
    <v-container>
      <v-row dense>
        <v-col>
          <div v-if="divIsRendered">
            <v-slide-x-transition group>
              <v-btn
                v-for="item in props.col.values"
                :key="item.id"
                class="ma-1"
                :color="item.color"
                rounded
                @click="emit('gene-remove', item.id)"
              >
                {{ item.value }}
              </v-btn>
            </v-slide-x-transition>
          </div>
          <h2
            v-else
            class="ma-2"
          >
            {{ t('notActive') }}
          </h2>
        </v-col>
        <v-col>
          <v-chip-group>
            <v-chip
              v-for="(gene, index) in allGenes"
              :key="index"
              class="pr-5 pl-5"
              :color="gene.color"
              :disabled="chipIsDisabled"
              @click="emit('gene-add', gene)"
            >
              {{ gene.value }}
            </v-chip>
          </v-chip-group>
        </v-col>
      </v-row>
    </v-container>
  </v-banner>
</template>

<script setup lang="ts">
import { defineProps, ref, defineEmits, computed } from 'vue'
import { Gene, GeneColSet } from '@/types'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const emit = defineEmits<{(e: 'gene-add', value: Gene): void, (e: 'gene-remove', value: number): void}>()

const props = defineProps<{col: GeneColSet}>()

const allGenes = ref<Array<Gene>>([{ id: 1, value: 'Y', color: 'success', number: 0.6 }, { id: 2, value: 'G', color: 'success', number: 0.6 }, { id: 3, value: 'H', color: 'success', number: 0.6 }, { id: 4, value: 'X', color: 'error', number: 1 }, { id: 5, value: 'W', color: 'error', number: 1 }])

const chipIsDisabled = computed<boolean>(() => props.col.values.length > 4)
const divIsRendered = computed<boolean>(() => props.col.values.length > 0)

</script>
