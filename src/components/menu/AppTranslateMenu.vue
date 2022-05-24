<template>
  <v-menu
    offset-y
    open-on-hover
  >
    <template #activator="{ on, attrs }">
      <v-btn
        :aria-label="t('aria.translateMenu')"
        v-bind="attrs"
        tile
        icon
        v-on="on"
      >
        <v-icon>mdi-translate</v-icon>
      </v-btn>
    </template>
    <v-list>
      <v-list-item
        v-for="language in availableLocales"
        :key="language"
        class="text-uppercase"
        @click="changeLanguage(language)"
      >
        {{ language }}
      </v-list-item>
      <v-list-item
        rel="noopener"
        link
        href="https://github.com/kwiksilver3441/rust-playground.git"
        target="_blank"
        class="text-capitalize"
      >
        {{ t('helpTranslate') }}
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { tauriStore } from '@/plugins'

const { locale, availableLocales, t } = useI18n()

const changeLanguage = async (language: string): Promise<void> => {
  locale.value = language
  await tauriStore.set('i18n-lang', language)
}

onMounted(async (): Promise<void> => {
  const lang = await tauriStore.get<string>('i18n-lang')
  if (lang != null) {
    locale.value = lang
  }
})

</script>
