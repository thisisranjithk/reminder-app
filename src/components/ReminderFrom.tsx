import { useEffect, useState } from "react";
import { Todo } from "../types/reminders";

interface ReminderFromProps {
  onAddReminder: (title: string) => void;
  onUpdateReminder: (updatedItem: Todo) => void;
  editItem: Todo | undefined;
}

export default function ReminderFrom({
  onAddReminder,
  editItem,
  onUpdateReminder,
}: ReminderFromProps): JSX.Element {
  const [title, setTitle] = useState<string>("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (editItem) {
      onUpdateReminder({
        id: editItem.id,
        title,
      });
      setTitle("");
    } else {
      onAddReminder(title);
      setTitle("");
    }
  };

  useEffect(() => {
    if (editItem) {
      setTitle(editItem.title);
    }
  }, [editItem]);

  return (
    <form className="m-3" onSubmit={handleSubmit}>
      <div className="w-25">
        <label htmlFor="reminder" className="form-label">
          Enter the Reminder
        </label>
        <input
          type="text"
          id="reminder"
          className="form-control"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <button
        className={`mt-3 btn ${
          editItem ? "btn-success" : "btn-primary"
        } rounded-pill`}
      >
        {editItem ? "Update Reminder" : "+ Add Reminder"}
      </button>
    </form>
  );
}
