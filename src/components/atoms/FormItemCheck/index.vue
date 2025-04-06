<script lang="ts" setup>
import type { EmitModelValue } from '@/types/emits';
import type { FormItemDetail } from '@/types/formItem';

type DefineProps = {} & FormItemDetail<string[]>;
type DefineEmits = {} & EmitModelValue<string[]>;

const props = defineProps<DefineProps>();
const emit = defineEmits<DefineEmits>();

const onChange = (e: Event) => {
  const value = (e.target as HTMLInputElement).value;
  const copy = [...props.modelValue];
  if (copy.includes(value)) {
    const targetIndex = copy.findIndex((item) => item === value);
    copy.splice(targetIndex, 1);
    return emit('update:modelValue', copy);
  }
  if (!copy.includes(value)) {
    copy.push(value);
    return emit('update:modelValue', copy);
  }
};
</script>
<template>
  <label>
    <div class="flex gap-0.5 items-center">
      <input
        class="checkbox"
        type="checkbox"
        :name="props.name"
        :value="props.value"
        :checked="props.modelValue.includes(props.value)"
        @change="onChange"
      />
      <p>{{ props.label }}</p>
    </div>
  </label>
</template>
