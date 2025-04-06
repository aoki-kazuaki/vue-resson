<script lang="ts" setup>
import { computed } from 'vue';
import { FormItemRequired } from '../FormItemRequired';
type DefineProps = {
  title: string;
  descriptionText?: string;
  errorMessage?: string;
  isRequired?: boolean;
};

const props = defineProps<DefineProps>();
/**説明文が与えられているか判定 */
const descriptionTextExists = computed(() => Boolean(props.descriptionText));
/**エラーメッセージが与えられているか判定 */
const errorMessageExists = computed(() => Boolean(props.errorMessage));
</script>
<template>
  <div class="flex flex-col gap-1 w-full">
    <p class="text-xl font-bold" :class="{ 'text-red-400': errorMessageExists }">
      {{ props.title }} <FormItemRequired v-if="props.isRequired" />
    </p>
    <p v-if="descriptionTextExists">{{ props.descriptionText }}</p>
    <div class="flex gap-2">
      <slot />
    </div>
    <p v-if="errorMessageExists" class="text-red-400">{{ props.errorMessage }}</p>
  </div>
</template>

<style scoped></style>
