import { MouseEvent } from "react";
import { Todo } from "./Todo";

type Todo = {
  content: string;
  done: boolean;
  id: string;
  due: "P1" | "P2" | "P3";
};

type Props = {
  onTodoClick: (todo: Todo) => void;
  onPillClick: (todo: Todo) => (event: MouseEvent) => void;
  notDoneTodos: Todo[];
  doneTodos: Todo[];
};

export const TodoList = ({
  doneTodos,
  notDoneTodos,
  onTodoClick,
  onPillClick,
}: Props) => {
  return (
    <div className="space-y-3">
      <div>
        <div className="flex items-end space-x-3">
          <p className="text-xl ">Todo</p>
          <p className="text-zinc-400"> {notDoneTodos.length} tasks</p>
        </div>

        {notDoneTodos.map((todo, index) => (
          <Todo
            onClick={onTodoClick}
            onPillClick={onPillClick}
            todo={todo}
            key={index.toString()}
          />
        ))}
      </div>

      <hr className="h-px bg-zinc-700 border-0 " />

      <div>
        <div className="flex items-end space-x-3">
          <p className="text-xl ">Completed</p>
          <p className="text-zinc-400"> {doneTodos.length} tasks</p>
        </div>
        {doneTodos.map((todo, index) => (
          <Todo
            key={index.toString()}
            onClick={onTodoClick}
            onPillClick={onPillClick}
            todo={todo}
          />
        ))}
      </div>
    </div>
  );
};
