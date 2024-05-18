import { Pill } from "@/app/ui/components/Pill";
import { MouseEvent } from "react";

type Todo = {
  content: string;
  due: "P1" | "P2" | "P3";
  id: string;
  done: boolean;
};

type Props = {
  key: string;
  onClick: (todo: Todo) => void;
  onPillClick: (todo: Todo) => (event: MouseEvent) => void;
  todo: Todo;
};

const pillColorMap = {
  P1: "blue" as const,
  P2: "yellow" as const,
  P3: "red" as const,
};

const CheckBoxIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className={"w-6 h-6 text-white group-hover:text-lime-600"}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
    />
  </svg>
);

const CheckedBoxIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6 text-lime-600"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
    />
  </svg>
);

export const Todo = ({ todo, key, onClick, onPillClick }: Props) => {
  if (todo.done) {
    return (
      <div
        key={key}
        className="flex cursor-pointer hover:bg-zinc-800 p-3 rounded"
        onClick={() => onClick(todo)}
      >
        <CheckedBoxIcon />
        <p className="cursor-pointer line-through text-zinc-500 ml-2">
          {todo.content}
        </p>
      </div>
    );
  }

  return (
    <div
      key={key}
      className="group flex place-content-between cursor-pointer hover:bg-zinc-800 p-3 rounded"
      onClick={() => onClick(todo)}
    >
      <div className="flex group-hover:line-through group-hover:text-zinc-500">
        <CheckBoxIcon />
        <p className="cursor-pointer ml-2">{todo.content}</p>
      </div>

      <div>
        <Pill
          color={pillColorMap[todo.due]}
          content={todo.due}
          size="small"
          onClick={(event) => onPillClick(todo)(event)}
        />
      </div>
    </div>
  );
};
