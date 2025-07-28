

interface ScheduleProps{
  list: String[]
}

function Schedule(props: ScheduleProps){
  const hours = Array.from({ length: 10 }, (_, i) => 9 + i); // 9AM–7PM


 

  return (
    <div className="max-w-md mt-3  text-neutral-600 dark:text-gray-400   ">
      <ul  >
        {hours.map((hour, index) => (
          <li
            key={hour}
            className="border-t border-b border-gray-300  p-1  hover:shadow-sm transition  max-h-12 min-h-12"
          >
            
            <div className="text-lg dark:text-green-800 text-blue-600 text-">
              {props.list[index] }
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Schedule;