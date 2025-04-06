<script lang="ts" setup>
import type { TodoData } from '@/types/Todo';
import { TodoListDeletedCard } from '../ListDeletedCard';

type DefineProps = {
  todoIsDeleted: TodoData[];
  itemToIsDeleteToggle: (id: string) => void;
  itemToDelete: (id: string) => void;
};

const props = defineProps<DefineProps>();
</script>
<template>
  <ul>
    <li v-for="item in props.todoIsDeleted" :key="item.id">
      <TodoListDeletedCard :todo-is-deleted="item" :item-to-is-delete-toggle="props.itemToIsDeleteToggle" :item-to-delete="props.itemToDelete"/>
    </li>
  </ul>
</template>

<style scoped></style>
