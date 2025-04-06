<script lang="ts" setup>
import type { EmitModelValue } from '@/types/emits';
import { useAttrs } from 'vue';

type DefineProps = {
  modelValue: string;
};
type DefineEmits = {} & EmitModelValue;

const props = defineProps<DefineProps>();
const emit = defineEmits<DefineEmits>();
const attrs = useAttrs();

const onChangeInput = (e: Event) => {
  const value = (e.target as HTMLInputElement).value;
  emit('update:modelValue', value);
};
</script>
<template>
  <label class="w-full flex flex-col gap-2">
    <input class="input w-full" :value="props.modelValue" @input="onChangeInput" v-bind="attrs" />
  </label>
</template>

<style scoped></style>
