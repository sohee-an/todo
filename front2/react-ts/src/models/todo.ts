class Todo {
  constructor(todoText: string, id: string) {
    this.text = todoText;
    this.id = id;
    this.date = new Date().toISOString();
  }
  id: string; //초기화시키기
  text: string;
  date: string;
}

export default Todo;
