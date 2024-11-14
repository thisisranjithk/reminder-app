import { useEffect, useState } from "react";
import ReminderList from "./components/ReminderList";
import { Todo } from "./types/reminders";
import {
  getTodos,
  deleteTodo,
  createTodo,
} from "./components/services/reminders";
import ReminderFrom from "./components/ReminderFrom";

function App() {
  const [reminders, setReminders] = useState<Todo[]>([]);

  const removeReminder = (id: number) => {
    setReminders(reminders.filter((item) => item.id !== id));
    deleteTodo(id);
  };

  useEffect(() => {
    const fetchTodos = async () => {
      const response = await getTodos();
      setReminders(response.data);
    };
    fetchTodos();
  }, []);

  const addReminder = (title: string) => {
    const newReminder: Todo = {
      id: Date.now(),
      title,
    };
    createTodo(newReminder);
    setReminders([newReminder, ...reminders]);
  };

  return (
    <>
      <ReminderFrom onAddReminder={addReminder} />
      <ReminderList onRemoveReminder={removeReminder} items={reminders} />
    </>
  );
}

export default App;
