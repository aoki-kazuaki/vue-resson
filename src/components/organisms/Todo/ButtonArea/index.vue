<script lang="ts" setup>
import { ButtonBase } from '@/components/atoms/ButtonBase';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();

const onClickAddNew = () => {
  const currentPath = route.fullPath;
  const toRoute = `${currentPath}/addItem`;
  router.push(toRoute);
};
</script>
<template>
  <div>
    <ButtonBase @click="onClickAddNew">新規登録</ButtonBase>
  </div>
</template>

<style scoped></style>
