<script lang="ts" setup>
import type { TodoData } from '@/types/Todo';
import { TodoListCompletedCard } from '../ListCompletedCard';

type DefineProps = {
  todoCompleted: TodoData[];
  itemToCompleteToggle: (id: string) => void;
  itemToIsDeleteToggle: (id: string) => void;
};

const props = defineProps<DefineProps>();
</script>
<template>
  <ul>
    <li v-for="item in todoCompleted" :key="item.id">
      <TodoListCompletedCard
        :todo-completed="item"
        :item-to-complete-toggle="props.itemToCompleteToggle"
        :item-to-is-delete-toggle="props.itemToIsDeleteToggle"
      />
    </li>
  </ul>
</template>

<style scoped></style>
