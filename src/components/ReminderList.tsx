import { Todo } from "../types/reminders";

interface ReminderListProps {
  items: Todo[];
}
function ReminderList({ items }: ReminderListProps) {
  return (
    <ul className="list-group">
      {items.map((item: Todo) => (
        <li className="list-group-item" key={item.id}>
          {item.title}
        </li>
      ))}
    </ul>
  );
}

export default ReminderList;
