import { useState, useMemo } from "react";


function Schedule(){
    const hours = Array.from({ length: 8 }, (_, i) => 9 + i); // 9AM–5PM

  const formatHour = (hour: number) => {
    const period = hour >= 12 ? 'PM' : 'AM';
    const formatted = hour > 12 ? hour - 12 : hour;
    return `${formatted}:00 ${period}`;
  };

  // Generate mock data with 3 "hello" and 2 "office hours"
  const timeBlocks = useMemo(() => {
    const labels = Array(hours.length).fill('');
    const indices = [...Array(hours.length).keys()];

    const shuffle = (array: number[]) =>
      array.sort(() => Math.random() - 0.5);

    const shuffled = shuffle(indices);

    shuffled.slice(0, 3).forEach((i) => (labels[i] = 'hello'));
    shuffled.slice(3, 5).forEach((i) => (labels[i] = 'office hours'));

    return labels;
  }, []);

  return (
    <div className="max-w-md mx-auto mt-3 text-gray-400   ">
      <ul >
        {hours.map((hour, index) => (
          <li
            key={hour}
            className="border-t-1 border-b-1 border-gray-300  p-3  hover:shadow-sm transition"
          >
            <div className="text-xl font-medium  mb-1">
              {formatHour(hour)} - {formatHour(hour + 1)}
            </div>
            <div className="text-lg ">
              {timeBlocks[index] || <span className=" italic">—</span>}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Schedule;