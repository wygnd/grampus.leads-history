<script setup lang="ts">
import { computed } from "vue";
import GitHubIcon from "@bitrix24/b24icons-vue/social/GitHubIcon";
import TelegramIcon from "@bitrix24/b24icons-vue/outline/TelegramIcon";

const tgLink = computed(() => {
  return typeof window !== "undefined" &&
    window.navigator?.language.includes("ru")
    ? "https://t.me/"
    : "https://t.me/";
});
</script>

<template>
  <B24Header>
    <template #left>
      <RouterLink to="/">
        <AppLogo class="w-auto h-[40px] shrink-0" />
      </RouterLink>
    </template>

    <template #right>
      <B24ColorModeButton
        :content="{ align: 'end', side: 'bottom' }"
        color="air-secondary-accent-2"
      />

      <B24Button
        :to="tgLink"
        target="_blank"
        aria-label="Telegram"
        color="air-tertiary-no-accent"
        :icon="TelegramIcon"
      />

      <B24Button
        to="/"
        target="_blank"
        aria-label="Github"
        :icon="GitHubIcon"
      />
    </template>
  </B24Header>
</template>

<style scoped></style>
