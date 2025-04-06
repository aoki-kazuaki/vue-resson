<script lang="ts" setup>
import { defineProps } from 'vue';

type DefineProps = {
  popoverId: string;
  buttonText: string | number;
};

const props = defineProps<DefineProps>();
</script>
<template>
  <button class="btn" :popovertarget="props.popoverId" :style="`anchor-name: ${props.popoverId}`">
    {{ props.buttonText }}
  </button>
  <ul
    class="dropdown menu rounded-box bg-base-100 w-52 shadow-sm"
    popover
    :id="props.popoverId"
    :style="`position-anchor: ${props.popoverId}`"
  >
    <slot />
  </ul>
</template>

<style scoped></style>
