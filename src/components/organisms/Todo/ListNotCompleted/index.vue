<script lang="ts" setup>
import type { TodoData } from '@/types/Todo';
import { TodoListNotCompletedCard } from '../ListNotCompletedCard';

type DefineProps = {
  todoNotCompleted: TodoData[];
  itemToCompleteToggle: (id: string) => void;
  itemToIsDeleteToggle: (id: string) => void;
};

const props = defineProps<DefineProps>();
</script>
<template>
  <ul class="flex flex-col gap-1">
    <li v-for="item in props.todoNotCompleted" :key="item.id">
      <TodoListNotCompletedCard
        :todo-not-completed="item"
        :item-to-complete-toggle="props.itemToCompleteToggle"
        :item-to-is-delete-toggle="props.itemToIsDeleteToggle"
      />
    </li>
  </ul>
</template>

<style scoped></style>
