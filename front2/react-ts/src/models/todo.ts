class Todo {
  constructor(todoText: string) {
    this.text = todoText;
    this.date = new Date().toISOString();
  }

  text: string;
  date: string;
}

export default Todo;
