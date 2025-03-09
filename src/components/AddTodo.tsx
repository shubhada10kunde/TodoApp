import React, { ChangeEvent, FormEvent, useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

type AddTodoProps = {
  onAddTodo: (todoText: string) => void;
};

const AddTodo: React.FC<AddTodoProps> = (props) => {
  const [text, setText] = useState<string>("");

  const changeEventHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  const submitHandler = (event: FormEvent) => {
    event.preventDefault();
    props.onAddTodo(text);
    setText("");
  };

  return (
    <form onSubmit={submitHandler} className="flex items-center gap-5">
      <Input
        onChange={changeEventHandler}
        value={text}
        type="text"
        placeholder="Write a new todo..."
        className="w-fit text-white"
      />
      <Button type="submit">Add Todo</Button>
    </form>
  );
};

export default AddTodo;
