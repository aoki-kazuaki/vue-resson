<script lang="ts" setup>
import { ref } from 'vue';

const boo = ref(true);
const onClick = () => {
  boo.value = !boo.value;
};
// 動的クラス変更の実行サンプル。とする。
</script>
<template>
  <footer class="fixed bottom-0 left-0 flex h-12 w-full items-center bg-blue-300">
    <div class="w-full">
      <p class="text-center" :class="{ 'bg-amber-900': boo, 'font-bold': boo, 'text-6xl': boo }" @click="onClick">
        コピーライトです
      </p>
    </div>
  </footer>
  <div class="h-12 w-full" />
</template>

<style scoped></style>
