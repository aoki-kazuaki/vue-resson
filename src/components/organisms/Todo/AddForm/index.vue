<script lang="ts" setup>
import { FormItemCheck } from '@/components/atoms/FormItemCheck';
import { FormItemColumn } from '@/components/atoms/FormItemColumn';
import { FormItemGroup } from '@/components/atoms/FormItemGroup';
import { FormItemInput } from '@/components/atoms/FormItemInput';
import { FormItemRadio } from '@/components/atoms/FormItemRadio';
import { FormSubmitArea } from '@/components/atoms/FormSubmitArea';
import { Modal } from '@/components/atoms/Modal';
import { DEFAULT_VALUE_INDEX, EMPTY_INPUT } from '@/constants/common';
import { ADD_TODO_FORM_KINDS, ADD_TODO_FORM_SENSE_OF_SPEED } from '@/constants/todo';
import type { TodoCommonProps } from '@/types/Todo';
import { formatYYYYMMDDTHHmmss } from '@/utils/dateFormat';
import { generateRandomString } from '@/utils/generateString';
import dayjs from 'dayjs';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

type DefineProps = {} & TodoCommonProps;

const props = defineProps<DefineProps>();

const router = useRouter();

/**Todo入力フォームのマウント時に固定の乱数を生成する */
const id = generateRandomString();
/**TODOタイトル入力欄 */
const inputTitle = ref(EMPTY_INPUT);
/**TODOタイトル入力欄バリデーションメッセージ */
const inputTitleErrorMessage = ref(EMPTY_INPUT);
/**TODO詳細記入欄 */
const inputDetail = ref(EMPTY_INPUT);
/**該当する内容選択欄(radio) */
const radioKind = ref(ADD_TODO_FORM_KINDS.items[DEFAULT_VALUE_INDEX].value);
/**タスク期日選択欄(checkbox) */
const checkSpeed = ref([]);
/**タスク期日選択欄バリデーションメッセージ(checkbox) */
const checkSpeedErrorMessage = ref(EMPTY_INPUT);

const onSubmitEvent = () => {
  // エラーメッセージを全てリセット
  inputTitleErrorMessage.value = EMPTY_INPUT;
  checkSpeedErrorMessage.value = EMPTY_INPUT;

  const title = inputTitle.value.trim();
  const detail = inputDetail.value.trim();
  const kind = radioKind.value;
  const speed = checkSpeed.value.slice();
  const createdAt = formatYYYYMMDDTHHmmss(dayjs()) as string;
  const updateAt = formatYYYYMMDDTHHmmss(dayjs()) as string;
  const completed = false;
  const isDeleted = false;

  const formValidation: Record<string, boolean> = {
    titleIsEmpty: title === EMPTY_INPUT,
    checkSpeedIsEmpty: speed.length <= 0,
  };

  if (formValidation.titleIsEmpty) inputTitleErrorMessage.value = 'タイトルは入力必須です';
  if (formValidation.checkSpeedIsEmpty) checkSpeedErrorMessage.value = '予定期日は選択必須です';

  const validationArray = Object.values(formValidation);
  if (validationArray.some((v) => v)) return;

  const data = {
    id: id,
    title: title,
    detail: detail,
    kind: kind,
    speed: speed,
    createdAt: createdAt,
    updateAt: updateAt,
    completed: completed,
    isDeleted: isDeleted,
  };

  props.addTodoData(data);
  router.back();
};

const closeAddForm = () => {
  router.back();
};
</script>
<template>
  <Modal :onClickModal="closeAddForm">
    <form @submit.prevent="onSubmitEvent" class="flex flex-col gap-2.5 w-full">
      <FormItemColumn>
        <FormItemGroup
          title="作業タスク名"
          description-text="タスクの名称を入力してください"
          :isRequired="true"
          :errorMessage="inputTitleErrorMessage"
        >
          <FormItemInput v-model="inputTitle" />
        </FormItemGroup>
        <FormItemGroup title="詳細" description-text="タスクの詳細を入力してください">
          <FormItemInput v-model="inputDetail" />
        </FormItemGroup>
        <FormItemGroup title="該当種別" description-text="該当種別を選択してください">
          <FormItemRadio
            v-for="item in ADD_TODO_FORM_KINDS.items"
            v-model="radioKind"
            :key="item"
            :name="ADD_TODO_FORM_KINDS.name"
            :label="item.label"
            :value="item.value"
          />
        </FormItemGroup>
        <FormItemGroup
          title="タスク完了予定"
          description-text="タスク完了予定を選択してください(いずれか選択必須、複数可)"
          :isRequired="true"
          :error-message="checkSpeedErrorMessage"
        >
          <FormItemCheck
            v-for="item in ADD_TODO_FORM_SENSE_OF_SPEED.items"
            v-model="checkSpeed"
            :name="ADD_TODO_FORM_SENSE_OF_SPEED.name"
            :key="item"
            :label="item.label"
            :value="item.value"
          />
        </FormItemGroup>
        <FormSubmitArea button-text="やめる" :onClickButton="closeAddForm" />
      </FormItemColumn>
    </form>
  </Modal>
</template>

<style scoped></style>
