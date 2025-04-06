<script lang="ts" setup>
type DefineProps = {
  text?: string;
};

const props = withDefaults(defineProps<DefineProps>(), {
  text: '必須',
});
</script>
<template>
  <span class="w-9 py-0.5 px-1 bg-red-400 text-white rounded">{{ props.text }}</span>
</template>

<style scoped></style>
