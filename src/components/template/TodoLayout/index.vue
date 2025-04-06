<script lang="ts" setup>
import { Separator } from '@/components/atoms/Separator';
import { TodoButtonArea } from '@/components/organisms/Todo/ButtonArea';
import { TodoListCompleted } from '@/components/organisms/Todo/ListCompleted';
import { TodoListDeleted } from '@/components/organisms/Todo/ListDeleted';
import { TodoListNotCompleted } from '@/components/organisms/Todo/ListNotCompleted';
import type { TodoCommonProps } from '@/types/Todo';
import { RouterView } from 'vue-router';

type DefineProps = {} & TodoCommonProps;

// Props 型定義
const props = defineProps<DefineProps>();
</script>

<template>
  <div class="mx-auto w-11/12 py-6 gap-3 flex flex-col">
    <h2 class="font-bold">Todoアプリケーション</h2>
    <TodoButtonArea />
    <div class="flex justify-between">
      <div class="w-full">
        <h3 class="text-2xl font-bold">・未完了リスト</h3>
        <TodoListNotCompleted
          :todo-not-completed="props.todoNotCompleted"
          :item-to-complete-toggle="props.itemToCompleteToggle"
          :item-to-is-delete-toggle="props.itemToIsDeleteToggle"
        />
      </div>
      <Separator class="mx-2" />
      <div class="w-full">
        <h3 class="text-2xl font-bold">・完了リスト</h3>
        <TodoListCompleted
          :todo-completed="props.todoCompleted"
          :item-to-complete-toggle="props.itemToCompleteToggle"
          :item-to-is-delete-toggle="props.itemToIsDeleteToggle"
        />
      </div>
    </div>
    <div v-if="!props.todoIsDeletedEmpty" class="w-full">
      <h3>削除済みリスト</h3>
      <TodoListDeleted
        :todo-is-deleted="props.todoIsDeleted"
        :item-to-is-delete-toggle="props.itemToIsDeleteToggle"
        :item-to-delete="props.itemToDelete"
      />
    </div>
  </div>
  <!-- ルーティング子要素のまとめ -->
  <RouterView v-slot="{ Component }">
    <component :is="Component" v-bind="props" />
  </RouterView>
</template>

<style scoped></style>
