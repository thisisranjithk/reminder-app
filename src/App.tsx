import { useEffect, useState } from "react";
import ReminderList from "./components/ReminderList";
import { Todo } from "./types/reminders";
import {
  getTodos,
  deleteTodo,
  createTodo,
  updateTodo,
} from "./components/services/reminders";
import ReminderFrom from "./components/ReminderFrom";

function App() {
  const [reminders, setReminders] = useState<Todo[]>([]);
  const [editItem, setEditItem] = useState<Todo | undefined>();

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

  const removeReminder = (id: number) => {
    setReminders(reminders.filter((item) => item.id !== id));
    deleteTodo(id);
  };

  const editReminder = (item: Todo) => {
    setEditItem(item);
  };

  const updateReminder = (updatedItem: Todo) => {
    updateTodo(updatedItem);
    setReminders(
      reminders.map((reminder) =>
        reminder.id === updatedItem.id ? updatedItem : reminder
      )
    );
    setEditItem(undefined);
  };
  return (
    <>
      <ReminderFrom
        onAddReminder={addReminder}
        editItem={editItem}
        onUpdateReminder={updateReminder}
      />
      <ReminderList
        onRemoveReminder={removeReminder}
        items={reminders}
        onEditReminder={editReminder}
      />
    </>
  );
}

export default App;
