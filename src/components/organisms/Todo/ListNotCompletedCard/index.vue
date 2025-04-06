<script lang="ts" setup>
import { ButtonPrimary } from '@/components/atoms/ButtonPrimary';
import { ButtonSecondary } from '@/components/atoms/ButtonSecondary';
import type { TodoData } from '@/types/Todo';

type DefineProps = {
  todoNotCompleted: TodoData;
  itemToCompleteToggle: (id: string) => void;
  itemToIsDeleteToggle: (id: string) => void;
};

const props = defineProps<DefineProps>();
</script>
<template>
  <div class="flex flex-col gap-1 border py-3 w-full px-2">
    <h4 class="font-bold">{{ props.todoNotCompleted.title }}</h4>
    <p>{{ props.todoNotCompleted.detail }}</p>
    <ul class="flex gap-1">
      <li>
        <ButtonPrimary @click="props.itemToCompleteToggle(props.todoNotCompleted.id)"> 完了 </ButtonPrimary>
      </li>
      <li>
        <ButtonSecondary @click="props.itemToIsDeleteToggle(props.todoNotCompleted.id)"> 削除 </ButtonSecondary>
      </li>
    </ul>
  </div>
</template>

<style scoped></style>
