<script setup lang="ts">
import { useBitrixStore } from "../store/bitrix-store.ts";
import { computed } from "vue";

const bitrix = useBitrixStore();

const isInitialized = computed(() => {
  return bitrix.isInit;
});
</script>

<template>
  <B24Footer>
    <template #left>
      <B24Badge
        v-if="isInitialized"
        label="Подключен"
        color="air-primary"
        size="xl"
      />
      <B24Badge
        v-else
        label="Не подключен"
        color="air-primary-alert"
        size="xl"
      />
    </template>
    <template #right>
      <ProseP small accent="less" class="mb-0">
        Built with Bitrix24 UI • &copy; {{ new Date().getFullYear() }}
      </ProseP>
    </template>
  </B24Footer>
</template>

<style scoped></style>
