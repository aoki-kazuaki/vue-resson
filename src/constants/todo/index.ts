import type { FormItemsConst } from '@/types/formItem';

/*TODO投稿フォームの種別選択欄 */
export const ADD_TODO_FORM_KINDS: FormItemsConst = {
  name: 'form-kind',
  items: [
    { label: 'プライベート', value: 'private' },
    { label: '仕事', value: 'works' },
    { label: 'その他', value: 'other' },
  ],
} as const;

export const ADD_TODO_FORM_SENSE_OF_SPEED: FormItemsConst = {
  name: 'form-sense-of-speed',
  items: [
    { label: '期日なし', value: '0' },
    { label: '緊急', value: '1' },
    { label: '今日中', value: '2' },
    { label: '今週中', value: '3' },
    { label: '今月中', value: '4' },
  ],
};
