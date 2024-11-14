import { Todo } from "../types/reminders";

interface ReminderListProps {
  items: Todo[];
  onRemoveReminder: (id: number) => void;
}
function ReminderList({ items, onRemoveReminder }: ReminderListProps) {
  return (
    <ul className="list-group">
      {items.map((item: Todo) => (
        <li className="list-group-item" key={item.id}>
          {item.title}
          <button
            onClick={() => onRemoveReminder(item.id)}
            className="btn btn-outline-danger rounded-pill mx-3"
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

export default ReminderList;
