<script setup lang="ts">
import Bitrix24Icon from "@bitrix24/b24icons-vue/common-service/Bitrix24Icon";
import AppHeader from "./components/AppHeader.vue";
</script>

<template>
  <Suspense>
    <B24App>
      <AppHeader />

      <B24Main>
        <RouterView />
      </B24Main>

      <B24Separator :icon="Bitrix24Icon" />

      <AppFooter />
    </B24App>
  </Suspense>
</template>
