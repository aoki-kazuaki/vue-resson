<script lang="ts" setup>
import { ButtonPrimary } from '@/components/atoms/ButtonPrimary';
import { ButtonSecondary } from '@/components/atoms/ButtonSecondary';
import type { TodoData } from '@/types/Todo';

type DefineProps = {
  todoIsDeleted: TodoData;
  itemToIsDeleteToggle: (id: string) => void;
  itemToDelete: (id: string) => void;
};

const props = defineProps<DefineProps>();
</script>
<template>
  <div class="flex flex-col gap-1 border py-3 w-full px-2">
    <h4 class="font-bold">{{ props.todoIsDeleted.title }}</h4>
    <p>{{ props.todoIsDeleted.detail }}</p>
    <ul class="flex gap-1">
      <li>
        <ButtonPrimary @click="props.itemToIsDeleteToggle(props.todoIsDeleted.id)"> 復旧 </ButtonPrimary>
      </li>
      <li>
        <ButtonSecondary @click="props.itemToDelete(props.todoIsDeleted.id)"> 完全に削除 </ButtonSecondary>
      </li>
    </ul>
  </div>
</template>

<style scoped></style>
