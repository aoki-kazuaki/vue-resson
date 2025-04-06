/**v-model使用時のemit型定義 */
export type EmitModelValue<T = string> = {
  (e: 'update:modelValue', value: T): void;
};
