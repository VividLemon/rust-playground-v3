import { defineStore } from 'pinia'
import { tauriStore } from '../plugins'

type Themes = 'light' | 'dark'
interface State {theme: Themes}
export const useThemeStore = defineStore('themes', {
  state: (): State => {
    return {
      theme: 'dark'
    }
  },
  getters: {
    getTheme: (state) => state.theme
  },
  actions: {
    async changeTheme (theme: Themes): Promise<void> {
      this.theme = theme
      await tauriStore.set('app-theme', theme)
    },
    async setTheme (): Promise<void> {
      const theme = await tauriStore.get<Themes>('app-theme')
      if (theme == null) {
        this.theme = 'dark'
        return
      }
      this.theme = theme
    }
  }
})
