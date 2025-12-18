import type { Schedule } from '../types'
import { useScheduleStore } from '../store'

type Props = {
    schedule: Schedule
}

export const ScheduleItem = ({ schedule }: Props) => {
    const removeSchedule = useScheduleStore((state) => state.removeSchedule)

    return (
        <li>
            <div>{schedule.date}</div>
            <div>{schedule.title}</div>
            {schedule.memo && <div>{schedule.memo}</div>}

            <button onClick={() => removeSchedule(schedule.id)}>
                削除 
            </button>
        </li>
    )
}