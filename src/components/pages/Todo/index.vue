<script lang="ts" setup>
import { TodoLayout } from '@/components/template/TodoLayout';
import type { TodoData } from '@/types/Todo';
import { computed, ref, type ComputedRef } from 'vue';

const todoDataRef = ref<TodoData[]>([]);
/**todoとして完了ステータスになっており、論理削除済みでないもの */
const todoCompleted: ComputedRef<TodoData[]> = computed(() =>
  todoDataRef.value.filter((todo) => todo.completed && !todo.isDeleted),
);

/**todoとして未完了ステータスになっており、論理削除済みでないもの */
const todoNotCompleted: ComputedRef<TodoData[]> = computed(() =>
  todoDataRef.value.filter((todo) => !todo.completed && !todo.isDeleted),
);

/**論理削除実施済みのもの */
const todoIsDeleted: ComputedRef<TodoData[]> = computed(() => todoDataRef.value.filter((todo) => todo.isDeleted));

/**論理削除の項目が存在している場合true */
const todoIsDeletedEmpty = computed(() => {
  return todoIsDeleted.value.length <= 0;
});

/**データの登録を実施する */
const addTodoData = (data: TodoData): void => {
  todoDataRef.value.push(data);
};

/**データの完了状態を切り替える */
const itemToCompleteToggle = (id: string): void => {
  const targetIndex = todoDataRef.value.findIndex((todo) => todo.id === id);
  if (targetIndex === -1) return alert('対象のデータが存在しませんでした');
  todoDataRef.value[targetIndex].completed = !todoDataRef.value[targetIndex].completed;
};

/**データの論理削除状態の切り替え */
const itemToIsDeleteToggle = (id: string): void => {
  const targetIndex = todoDataRef.value.findIndex((todo) => todo.id === id);
  if (targetIndex === -1) return alert('対象のデータが存在しませんでした');
  todoDataRef.value[targetIndex].isDeleted = !todoDataRef.value[targetIndex].isDeleted;
};

/**論理削除済みデータデータ一覧からデータを完全に削除する */
const itemToDelete = (id: string): void => {
  const targetIndex = todoDataRef.value.findIndex((todo) => todo.id === id);
  if (targetIndex === -1) return alert('対象のデータが存在しませんでした');
  todoDataRef.value.splice(targetIndex, 1);
};
</script>
<template>
  <div>
    <TodoLayout
      :todoCompleted="todoCompleted"
      :todoNotCompleted="todoNotCompleted"
      :todoIsDeleted="todoIsDeleted"
      :todoIsDeletedEmpty="todoIsDeletedEmpty"
      :addTodoData="addTodoData"
      :itemToCompleteToggle="itemToCompleteToggle"
      :itemToIsDeleteToggle="itemToIsDeleteToggle"
      :itemToDelete="itemToDelete"
    />
  </div>
</template>

<style scoped></style>
