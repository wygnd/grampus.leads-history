import { defineStore } from "pinia";
import {
  B24Frame,
  initializeB24Frame,
  LoggerFactory,
} from "@bitrix24/b24jssdk";
import { computed } from "vue";

export const useBitrixStore = defineStore("bitrix24", async () => {
  const $logger = LoggerFactory.createForBrowser("B24/jsSdk::vue", true);
  let $bx24: undefined | B24Frame;

  const init = async () => {
    try {
      $bx24 = await initializeB24Frame();
    } catch (e) {
      console.log(e);
      await $logger.error("Ошибка при подключении", { error: e });
    }
  };
  const destroy = () => {
    if (!$bx24) {
      return;
    }

    $bx24.destroy();
  };
  const isInit = computed(() => {
    if (!$bx24) {
      return false;
    }

    return $bx24.isInit;
  });

  await init();

  return {
    isInit,
    init,
    destroy,
  };
});
