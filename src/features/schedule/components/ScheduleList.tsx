import { useState } from 'react'
import { useScheduleStore} from '../store'
import { ScheduleItem } from './ScheduleItem'
import { ScheduleForm } from './ScheduleForm'
import type { Schedule } from '../types'

export const ScheduleList = () => { 

    const schedules = useScheduleStore((s) => s.schedules)
    const addSchedule = useScheduleStore((s) => s.addSchedule)
    const updateSchedule = useScheduleStore((s) => s.updateSchedule)
    const removeSchedule = useScheduleStore((s) => s.removeSchedule)

    const [editing, setEditing] = useState<Schedule | null>(null)

    

    return (
        <>
            <ScheduleForm
            initialData={editing ?? undefined}
            onSubmit={(schedule) => {
                editing ? updateSchedule(schedule) : addSchedule(schedule)
                setEditing(null)
            }}
            onCancel={() => setEditing(null)}
             />

            {schedules.length === 0 && <p>まだ予定はありません</p>}
        
            <ul>
                {schedules.map((s) => (
                    <ScheduleItem
                        key={s.id}
                        schedule={s}
                        onEdit={setEditing}
                        onDelete={removeSchedule}
                    />
                ))}
            </ul>
        </>
    )
}