import { TodoAddForm } from '@/components/organisms/Todo/AddForm';
import { Home } from '@/components/pages/Home';
import { Todo } from '@/components/pages/Todo';
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  { path: '/', component: Home },
  { path: '/todo', component: Todo, children: [{ path: 'addItem', component: TodoAddForm }] },
  // { path: '/todo-app', component: TodoApp, children: [{ path: '', component: '' }] }, 配列定義した内容でchildrenとしてネスト可能
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});

//main.ts内にこれ以降の処理記入
