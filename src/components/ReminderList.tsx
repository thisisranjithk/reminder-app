import { Todo } from "../types/reminders";

interface ReminderListProps {
  items: Todo[];
  onRemoveReminder: (id: number) => void;
  onEditReminder: (item: Todo) => void;
}

function ReminderList({
  items,
  onRemoveReminder,
  onEditReminder,
}: ReminderListProps): JSX.Element {
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
          <button
            onClick={() => onEditReminder({ id: item.id, title: item.title })}
            className="btn btn-outline-success rounded-fill"
          >
            Edit
          </button>
        </li>
      ))}
    </ul>
  );
}

export default ReminderList;
