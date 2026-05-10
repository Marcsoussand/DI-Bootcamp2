const DAYS = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];

export default function Calendar({ selectedDay, onSelectDay }) {
  return (
    <div className="calendar">
      {DAYS.map((day) => (
        <button
          key={day}
          className={`day-btn ${selectedDay === day ? "active" : ""}`}
          onClick={() => onSelectDay(day)}
        >
          {day.charAt(0).toUpperCase() + day.slice(1)}
        </button>
      ))}
    </div>
  );
}
