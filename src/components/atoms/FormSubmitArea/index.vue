<script lang="ts" setup>
import { ButtonBase } from '../ButtonBase';
import { ButtonPrimary } from '../ButtonPrimary';
type DefineProps = {
  buttonText?: string;
  submitButtonText?: string;
  onClickButton: () => void;
};

// デフォルト値を持たせたい場合はwithDefaultでdefinePropsでラップする
const props = withDefaults(defineProps<DefineProps>(), {
  buttonText: 'リセット',
  submitButtonText: '確定',
});
</script>
<template>
  <div class="flex justify-center gap-3 w-full">
    <ButtonBase class="w-1/3" @click="props.onClickButton">{{ props.buttonText }}</ButtonBase>
    <ButtonPrimary class="w-1/3" type="submit">{{ props.submitButtonText }}</ButtonPrimary>
  </div>
</template>

<style scoped></style>
