import { useEffect, useState } from "react";
import ReminderList from "./components/ReminderList";
import { Todo } from "./types/reminders";
import { getTodos } from "./components/services/reminders";
import ReminderFrom from "./components/ReminderFrom";

function App() {
  const [reminders, setReminders] = useState<Todo[]>([]);

  useEffect(() => {
    const fetchTodos = async () => {
      const response = await getTodos();
      setReminders(response.data);
    };

    fetchTodos();
  }, []);
  return (
    <>
      <ReminderFrom />
      <ReminderList items={reminders} />
    </>
  );
}

export default App;
