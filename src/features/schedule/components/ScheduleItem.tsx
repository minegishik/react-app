import type { Schedule } from '../types'
import { useScheduleStore } from '../store'
import {useState} from 'react'

type Props = {
    schedule: Schedule
}

export const ScheduleItem = ({ schedule }: Props) => {
    // const {removeSchedule, updateSchedule }= useScheduleStore()
    const removeSchedule = useScheduleStore((state) => state.removeSchedule)
    const updateSchedule = useScheduleStore((state) => state.updateSchedule)

     const [isEditing, setIsEditing] = useState(false)
     const [title, setTitle] = useState(schedule.title)
     const [date, setDate] = useState(schedule.date)
     const [memo, setMemo] = useState(schedule.memo ?? '')

     const handleSave = () => {
        updateSchedule({
            id: schedule.id,
            title,
            date,
            memo
        })
        setIsEditing(false)
     }

     if (isEditing) {

        return (
            <li>
                <input value={title} onChange={(e) => setTitle(e.target.value)} />
                <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
                <textarea value={memo} onChange={(e) => setMemo(e.target.value)} /> 
                
                <button onClick={handleSave}>保存</button>
                <button onClick={() => setIsEditing(false)}>キャンセル</button>
            </li>
        )
    }

    return (
     <li>
        <div>{schedule.date}</div>
        <div>{schedule.title}</div>
        {schedule.memo && <div>{schedule.memo}</div>}

        <button onClick={() => setIsEditing(true)}>編集</button>
        <button onClick={() => removeSchedule(schedule.id)}>削除</button>
        </li>
    )

}
