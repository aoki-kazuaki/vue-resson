import { ref } from 'vue';

export const useToggle = (defaultValue: boolean = false) => {
  const state = ref(defaultValue);
  const toggle = (state.value = !state.value);
  const set = (value: boolean) => {
    state.value = value;
  };
  return [state, toggle, set];
};
