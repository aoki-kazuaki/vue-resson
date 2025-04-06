<script lang="ts" setup>
import { DropdownPopover } from '@/components/molecules/DropdownPopover';
import type { PageLink } from '@/types/common';

const PAGE_LINKS: PageLink[] = [
  { text: 'トップページ', path: '/' },
  { text: 'Todoアプリケーション', path: '/todo' },
] as const;
</script>

<template>
  <div>
    <DropdownPopover popover-id="home_page_link" button-text="遷移先を選択してください">
      <li v-for="link in PAGE_LINKS" :key="link.path">
        <RouterLink :to="link.path">{{ link.text }}</RouterLink>
      </li>
    </DropdownPopover>
  </div>
</template>

<style scoped></style>
