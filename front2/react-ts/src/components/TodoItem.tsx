import React from "react";

import Todo from "../models/todo";
import classes from "./TodoItem.module.css";

const TodoItem: React.FC<{ text: string }> = (props) => {
  return <li className={classes.item}>{props.text}</li>;
};

export default TodoItem;
