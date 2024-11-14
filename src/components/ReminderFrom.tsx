import { useState } from "react";

interface ReminderFromProps {
  onAddReminder: (title: string) => void;
}

export default function ReminderFrom({
  onAddReminder,
}: ReminderFromProps): JSX.Element {
  const [title, setTitle] = useState<string>("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    onAddReminder(title);
    setTitle("");
  };

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
      <button className="mt-3 btn btn-primary"> + Add Reminder</button>
    </form>
  );
}
