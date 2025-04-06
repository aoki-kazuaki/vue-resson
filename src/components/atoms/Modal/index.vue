<script lang="ts" setup>
type DefineProps = {
  onClickModal?: () => void;
};

const props = defineProps<DefineProps>();
</script>
<template>
  <div class="modal modal-open" @click="props.onClickModal?.()">
    <div class="modal-box" @click.stop>
      <slot />
    </div>
  </div>
</template>

<style scoped></style>
