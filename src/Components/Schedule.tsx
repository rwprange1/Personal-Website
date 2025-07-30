

interface ScheduleProps{
  list: String[]
}

function Schedule(props: ScheduleProps){
  const hours = Array.from({ length: 10 }, (_, i) => 9 + i); // 9AM–7PM


 

  return (
    <div className="max-w-lg mt-3  text-neutral-600 dark:text-gray-400   ">
      <ul  >
        {hours.map((hour, index) => (
          <li
            key={hour}
            className="border-t border-b border-gray-300  xl:p-1  hover:shadow-sm transition    [@media(max-height:1280px)]:min-h-15 xl:max-h-12 xl:min-h-12"
          >
            
            <div className="text-xs lg:text-sm xl:text-lg dark:text-green-800 text-blue-600">
              {props.list[index] }
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Schedule;