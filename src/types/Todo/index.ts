export type TodoData = {
  id: string;
  title: string;
  detail: string;
  kind: string;
  speed: string[];
  createdAt: string;
  updateAt: string;
  completed: boolean;
  isDeleted: boolean;
};

/**layoutとrouter(子)による共通のProps */
export type TodoCommonProps = {
  todoCompleted: TodoData[];
  todoNotCompleted: TodoData[];
  todoIsDeleted: TodoData[];
  todoIsDeletedEmpty: boolean;
  addTodoData: (data: TodoData) => void;
  itemToCompleteToggle: (id: string) => void;
  itemToIsDeleteToggle: (id: string) => void;
  itemToDelete: (id: string) => void;
};
