<script lang="ts" setup>
import { useAttrs } from 'vue';

const attrs = useAttrs();
</script>
<template>
  <button type="button" class="btn" v-bind="attrs"><slot /></button>
</template>

<style scoped></style>
