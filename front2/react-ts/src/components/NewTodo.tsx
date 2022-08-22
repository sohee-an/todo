import React from "react";
import { useRef } from "react";
import classes from "./NewTodo.module.css";

const NewTodo: React.FC<{ onAddTodo: (text: string) => void }> = (props) => {
  const todoTextRef = useRef<HTMLInputElement>(null);

  const onSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    const enteredText = todoTextRef.current!.value;

    //빈 내용은 에러처리
    if (enteredText.trim().length === 0) {
      return;
    }

    props.onAddTodo(enteredText);
  };
  return (
    <form onSubmit={onSubmitHandler} className={classes.form}>
      <label htmlFor="text">new Todo</label>
      <input type="text" id="text" ref={todoTextRef} />

      <button>add todo</button>
    </form>
  );
};

export default NewTodo;
