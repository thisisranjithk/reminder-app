export default function ReminderFrom() {
  return (
    <form className="m-3">
      <div className="w-50">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Enter the Reminder
        </label>
        <input type="email" className="form-control" />
      </div>
      <button className="mt-3 btn btn-primary"> + Add Reminder</button>
    </form>
  );
}
