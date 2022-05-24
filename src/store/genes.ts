import { Gene, GeneColSet } from '@/types'
import { defineStore } from 'pinia'
interface State {cols: Array<GeneColSet>}
export const useGeneStore = defineStore('genes', {
  state: (): State => {
    return {
      cols: [{ id: 1, values: [{ id: 1, value: 'Y', color: 'success', number: 0.6 }, { id: 2, value: 'G', color: 'success', number: 0.6 }, { id: 3, value: 'H', color: 'success', number: 0.6 }, { id: 4, value: 'X', color: 'error', number: 1 }, { id: 5, value: 'W', color: 'error', number: 1 }] }, { id: 2, values: [{ id: 1, value: 'G', color: 'success', number: 0.6 }, { id: 2, value: 'Y', color: 'success', number: 0.6 }, { id: 3, value: 'X', color: 'error', number: 1 }, { id: 4, value: 'X', color: 'error', number: 1 }, { id: 5, value: 'W', color: 'error', number: 1 }] }]
    }
  },
  getters: {
    getGeneCols: (state): Array<GeneColSet> => state.cols,
    getGeneColsLength: (state): number => state.cols.length
  },
  actions: {
    addGeneCol (id: number): void {
      const index = this.cols.findIndex(el => el.id === id)
      if (index !== -1) {
        const nextHighestId = this.getHighestId() + 1
        const obj = { id: nextHighestId, values: [] }
        this.cols.splice(index + 1, 0, obj)
      }
    },
    addGeneColByPush (): void {
      const nextHighestId = this.getHighestId() + 1
      const obj = { id: nextHighestId, values: [] }
      this.cols.push(obj)
    },
    removeGeneCol (id: number): void {
      const index = this.cols.findIndex(el => el.id === id)
      if (index !== -1) {
        this.cols.splice(index, 1)
      }
    },
    duplicateGeneCol (id: number): void {
      const index = this.cols.findIndex(el => el.id === id)
      if (index !== -1) {
        const gene = this.cols[index]
        const nextHighestId = this.getHighestId() + 1
        const obj = { id: nextHighestId, values: [...gene.values] }
        this.cols.splice(index + 1, 0, obj)
      }
    },
    geneAdd ({ gene, id }: {gene: Gene, id: number}): void {
      const foundGene = this.cols.find(el => el.id === id)
      if (foundGene != null) {
        const values = foundGene.values
        const idInGene = values[values.length - 1]?.id
        const { color, number, value } = gene
        const obj: Gene = { id: (idInGene != null) ? idInGene + 1 : 0, color, number, value }
        values.push(obj)
      }
    },
    geneRemove ({ idInGene, idOfCol }: {idInGene: number, idOfCol: number}): void {
      const gene = this.cols.find(el => el.id === idOfCol)
      if (gene != null) {
        const values = gene.values
        values.splice(values.findIndex(el => el.id === idInGene))
      }
    },
    getHighestId (): number {
      return this.cols.reduce((p, c) => p.id > c.id ? p : c).id
    }
  }
})
