<script lang="ts" setup>
import { useAttrs } from 'vue';

const attrs = useAttrs();
</script>
<template>
  <button type="button" class="btn btn-primary" v-bind="attrs"><slot /></button>
</template>

<style scoped></style>
