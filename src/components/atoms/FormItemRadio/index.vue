<script lang="ts" setup>
import type { EmitModelValue } from '@/types/emits';
import type { FormItemDetail } from '@/types/formItem';

type DefineProps = {} & FormItemDetail;

type DefineEmits = {} & EmitModelValue;

const props = defineProps<DefineProps>();

const emit = defineEmits<DefineEmits>();

const onChange = () => {
  emit('update:modelValue', props.value);
};
</script>

<template>
  <label>
    <div class="flex gap-1 items-center">
      <input
        type="radio"
        class="radio radio-sm"
        :name="props.name"
        :value="props.value"
        :checked="props.modelValue === props.value"
        @change="onChange"
      />
      <p>{{ props.label }}</p>
    </div>
  </label>
</template>

<style scoped></style>
