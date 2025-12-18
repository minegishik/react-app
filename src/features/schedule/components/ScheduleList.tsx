import { useScheduleStore} from '../store'
import { ScheduleItem } from './ScheduleItem'

export const ScheduleList = () => { 

    const schedules = useScheduleStore((state) => state.schedules)

    if (schedules.length === 0) {
        return <p>まだ予定はありません</p>
    }

    return (
        <ul>
            {schedules.map((s) => (
                <ScheduleItem key={s.id} schedule={s} />
            ))}
        </ul>
    )
}