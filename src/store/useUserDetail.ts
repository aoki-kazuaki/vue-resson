import { EMPTY_INPUT } from '@/constants/common';
import type { UserDetail } from '@/types/userAuth';
import { defineStore } from 'pinia';
import { computed, ref } from 'vue';

export const useUserDetailStore = defineStore('userDetail', () => {
  const USER_DETAIL_DEFAULT: UserDetail = { userId: EMPTY_INPUT, userName: EMPTY_INPUT };

  const userDetailRef = ref<UserDetail>(USER_DETAIL_DEFAULT);

  const setUserDetail = (newDetail: UserDetail) => {
    userDetailRef.value = newDetail;
  };

  const userDetail = computed(() => userDetailRef.value);

  return { userDetail, setUserDetail };
});
