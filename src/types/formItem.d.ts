/**ラジオボタン, チェックボックス用定数管理 */
export type FormItemConst = {
  label: string | number;
  value: string;
};

/** フォームアイテム一覧を定数管理する際使用する型の一覧 */
export type FormItemsConst = {
  name: string;
  items: FormItem[];
};

/**フォームアイテム(ラジオボタン, チェックボックスで使用するdefineProps) */
export type FormItemDetail<T = string> = {
  label: string;
  name: string;
  value: string;
  modelValue: T;
};
