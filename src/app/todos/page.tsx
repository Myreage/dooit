"use client";
import { MouseEvent, useState } from "react";
import { Todo } from "./ui/Todo";
import { TodoList } from "./ui/TodoList";
import { TodoInput } from "./ui/TodoInput";

type Todo = {
  content: string;
  done: boolean;
  id: string;
  due: "P1" | "P2" | "P3";
};

export default function Page() {
  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleKeyDown = (event: { key: string }) => {
    if (event.key === "Enter") {
      setTodos([
        ...todos,
        {
          content: newTodo,
          done: false,
          id: `${new Date().getTime()}`,
          due: "P1",
        },
      ]);
      setNewTodo("");
    }
  };

  const handleClickOnTodo = (todo: { id: string }) => {
    const newTodos = todos.map((t) => {
      if (t.id === todo.id) {
        return {
          ...t,
          done: !t.done,
        };
      }
      return t;
    });
    setTodos(newTodos);
  };

  const handleClickOnPriorityPill =
    (todo: { id: string }) => (event: MouseEvent) => {
      event.stopPropagation();
      const newTodos = todos.map((t) => {
        if (t.id === todo.id) {
          if (t.due === "P1") {
            return {
              ...t,
              due: "P2" as const,
            };
          }

          if (t.due === "P2") {
            return {
              ...t,
              due: "P3" as const,
            };
          }

          return {
            ...t,
            due: "P1" as const,
          };
        }
        return t;
      });

      setTodos(newTodos);
    };

  const doneTodos = todos.filter((todo) => todo.done);

  const notDoneTodos = todos
    .filter((todo) => !todo.done)
    .toSorted((a, b) => {
      if (a.due === "P1" && b.due !== "P1") {
        return -1;
      }

      if (a.due === "P2" && b.due === "P3") {
        return -1;
      }

      return 1;
    });

  return (
    <div className="flex flex-col items-center mt-20">
      <div className="w-1/2 space-y-12">
        <TodoInput
          id="new-todo"
          onChange={setNewTodo}
          onKeyDown={handleKeyDown}
          placeholder="New todo"
          value={newTodo}
        />

        <TodoList
          doneTodos={doneTodos}
          notDoneTodos={notDoneTodos}
          onPillClick={handleClickOnPriorityPill}
          onTodoClick={handleClickOnTodo}
        />
      </div>
    </div>
  );
}
