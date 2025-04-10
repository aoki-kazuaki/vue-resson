<script lang="ts" setup>
import { onMounted } from 'vue';
import { AppFooter } from './components/organisms/App/Footer';
import { AppHeader } from './components/organisms/App/Header';
import { useUserDetailStore } from './store/useUserDetail';
import type { UserDetail } from './types/userAuth';

const DUMMY_USER: UserDetail = {
  userName: '青木 和明',
  userId: 'string6666',
};
const { userDetail, setUserDetail } = useUserDetailStore();

onMounted(() => {
  setUserDetail(DUMMY_USER);
});
</script>
<template>
  <AppHeader :user-detail="userDetail" />
  <RouterView />
  <AppFooter />
</template>

<style scoped></style>
