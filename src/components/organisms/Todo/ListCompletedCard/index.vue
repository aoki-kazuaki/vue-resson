<script lang="ts" setup>
import { ButtonPrimary } from '@/components/atoms/ButtonPrimary';
import { ButtonSecondary } from '@/components/atoms/ButtonSecondary';
import type { TodoData } from '@/types/Todo';
type DefineProps = {
  todoCompleted: TodoData;
  itemToCompleteToggle: (id: string) => void;
  itemToIsDeleteToggle: (id: string) => void;
};

const props = defineProps<DefineProps>();
</script>
<template>
  <div class="flex flex-col gap-1 border py-3 w-full px-2">
    <h4 class="font-bold">{{ props.todoCompleted.title }}</h4>
    <p>詳細</p>
    <p>{{ props.todoCompleted.detail }}</p>
    <ul class="flex gap-1">
      <li>
        <ButtonPrimary @click="props.itemToCompleteToggle(props.todoCompleted.id)"> 戻す </ButtonPrimary>
      </li>
      <li>
        <ButtonSecondary @click="props.itemToIsDeleteToggle(props.todoCompleted.id)"> 削除 </ButtonSecondary>
      </li>
    </ul>
  </div>
</template>

<style scoped></style>
