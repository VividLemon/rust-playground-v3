<template>
  <v-btn
    icon
    :aria-label="t('aria.toggleDarkMode')"
    @click="toggleDark"
  >
    <v-icon>
      {{ icon }}
    </v-icon>
  </v-btn>
</template>

<script setup lang="ts">
import { useThemeStore } from '@/store'
import { computed, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const { getTheme: theme, setTheme, changeTheme } = useThemeStore()

const icon = computed<string>(() => (theme === 'dark') ? 'mdi-weather-night' : 'mdi-weather-sunny')

const toggleDark = async (): Promise<void> => {
  if (theme === 'dark') {
    await changeTheme('light')
    return
  }
  await changeTheme('dark')
}

onMounted(async (): Promise<void> => await setTheme())

</script>
