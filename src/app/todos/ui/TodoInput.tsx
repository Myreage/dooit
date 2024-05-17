type Props = {
  placeholder: string;
  value: string;
  id: string;
  onChange: (value: string) => void;
  onKeyDown: (event: { key: string }) => void;
};

export const TodoInput = ({
  id,
  onChange,
  onKeyDown,
  placeholder,
  value,
}: Props) => {
  return (
    <input
      className={
        "rounded-md placeholder-gray-500 px-4 py-2 w-full text-white bg-zinc-950 focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:ring-opacity-100"
      }
      placeholder={placeholder}
      value={value}
      id={id}
      onChange={(event) => onChange(event.target.value)}
      onKeyDown={onKeyDown}
    />
  );
};
