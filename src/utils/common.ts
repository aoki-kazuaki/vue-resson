import type { FormItemsConst } from '@/types/formItem';

/**
 * 該当のvalue値をもつラベルの名称を取得する
 * @param 取得したい対象の持つvalue値
 * @param 対象となるformItemsConst
 */
export const getLabelNameWithValue = (formItemsConst: FormItemsConst, value: string): string => {
  const target = formItemsConst.items.find((item) => item.value === value);
  if (!target) return '';
  return target.label;
};
