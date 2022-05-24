<template>
  <v-container>
    <v-row>
      <v-col>
        <h1 class="text-center">
          {{ t('output') }}
        </h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col
        v-for="(array, index) in cartesianProduct"
        :key="index"
      >
        <gene-output-banner
          :gene-array="array"
          :percent-to-change="percentToChange"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { useGeneStore } from '@/store'
import { Gene, GeneSet } from '@/types'
import { computed } from 'vue'
import GeneOutputBanner from './GeneOutputBanner.vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const { getGeneCols: cols } = useGeneStore()

// TODO fix this
const arraysBySlot = computed<Array<Array<Gene>>>(() => {
  const array: Array<Array<Gene>> = [[], [], [], [], []]
  cols.forEach((element) => {
    let counter = 0
    for (const iterator of element.values) {
      array[counter].push(iterator)
      counter++
    }
  })
  return array
})
const valuesBySlot = computed<Array<GeneSet>>(() => {
  const array: Array<GeneSet> = [{ yValue: 0, gValue: 0, hValue: 0, xValue: 0, wValue: 0 }, { yValue: 0, gValue: 0, hValue: 0, xValue: 0, wValue: 0 }, { yValue: 0, gValue: 0, hValue: 0, xValue: 0, wValue: 0 }, { yValue: 0, gValue: 0, hValue: 0, xValue: 0, wValue: 0 }, { yValue: 0, gValue: 0, hValue: 0, xValue: 0, wValue: 0 }]
  arraysBySlot.value.forEach((element, index) => {
    for (const iterator of element) {
      switch (iterator.value) {
        case 'Y':
          array[index].yValue = array[index].yValue + iterator.number
          break
        case 'G':
          array[index].gValue = array[index].gValue + iterator.number
          break
        case 'H':
          array[index].hValue = array[index].hValue + iterator.number
          break
        case 'X':
          array[index].xValue = array[index].xValue + iterator.number
          break
        case 'W':
          array[index].wValue = array[index].wValue + iterator.number
          break
      }
    }
  })
  return array
})
const resultValues = computed<Array<{id: number, values: Array<Gene>}>>(() => {
  const whole: Array<{id: number, values: Array<Gene>}> = []
  valuesBySlot.value.forEach((element, outerCount) => {
    const arr = Object.entries(element).sort((a, b) => b[1] - a[1])
    const highestValue: number = arr[0][1]
    if (highestValue !== 0) {
      const highest = arr.filter((element) => element[1] === highestValue)
      const deep: {id: number, values: Array<Gene>} = { id: outerCount, values: [] }
      highest.forEach((element, innerCount) => {
        switch (element[0]) {
          case 'yValue':
            deep.values.push({ id: innerCount, value: 'Y', color: 'success', number: element[1] })
            break
          case 'gValue':
            deep.values.push({ id: innerCount, value: 'G', color: 'success', number: element[1] })
            break
          case 'hValue':
            deep.values.push({ id: innerCount, value: 'H', color: 'success', number: element[1] })
            break
          case 'xValue':
            deep.values.push({ id: innerCount, value: 'X', color: 'error', number: element[1] })
            break
          case 'wValue':
            deep.values.push({ id: innerCount, value: 'W', color: 'error', number: element[1] })
            break
          default:
            deep.values.push({ id: innerCount, value: 'Y', color: 'success', number: element[1] })
        }
      })
      whole.push(deep)
    }
  })
  return whole
})
const convertToArray = computed<Array<Array<Gene>>>(() => Object.entries(resultValues.value).map(el => el[1].values))
const cartesianProduct = computed<Array<Array<Gene>>>(() =>
  convertToArray.value.reduce((a, b) => a.map((x) => b.map((y) => x.concat([y as never]))).reduce((a, b) => a.concat(b), []), [[]]))
const percentToChange = computed<number>(() => 100 / cartesianProduct.value.length)

</script>
