import { useScheduleStore} from '../store'
import { ScheduleItem } from './ScheduleItem'
import { ScheduleForm } from './ScheduleForm'

export const ScheduleList = () => { 

    const schedules = useScheduleStore((state) => state.schedules)
    const addSchedule = useScheduleStore((state) => state.addSchedule)

    

    return (
        <>
            <ScheduleForm onSubmit={addSchedule} />

            {schedules.length === 0 && <p>まだ予定はありません</p>}
        
            <ul>
                {schedules.map((s) => (
                    <ScheduleItem key={s.id} schedule={s} />
                ))}
            </ul>
        </>
    )
}