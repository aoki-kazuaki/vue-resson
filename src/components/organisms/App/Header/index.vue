<script lang="ts" setup>
import type { UserDetail } from '@/types/userAuth';

type DefineProps = {
  userDetail: UserDetail;
};

const props = defineProps<DefineProps>();
</script>
<template>
  <div>
    <header
      class="fixed top-0 left-0 flex h-20 w-full items-center border border-b-2 border-blue-300 shadow-xl bg-white"
    >
      <div class="mx-auto flex w-11/12 items-center justify-between">
        <RouterLink to="/">
          <h1 class="text-3xl font-bold">個人制作アプリ</h1>
        </RouterLink>
        <p>{{ props.userDetail.userName }}</p>
        <p class="text-3xl">For Vue Lesson</p>
      </div>
    </header>
    <div class="h-20 w-full" />
  </div>
</template>

<style scoped></style>
