import { useState } from 'react'
import  { useScheduleStore } from '../store'


export const ScheduleForm = () => {
    const addSchedule = useScheduleStore((state) => state.addSchedule)

    const [title, setTitle] = useState('')
    const [date, setDate] = useState('')
    const [memo, setMemo] = useState('')

    const handleSubmit = () => {
        if (!title || !date) return

        addSchedule({
            id: crypto.randomUUID(),
            title,
            date,
            memo,
        })

        setTitle('')
        setDate('')
        setMemo('')
    }

    return (
        <div>
            <h2>予定追加</h2>

            <input
                type="text"
                placeholder="タイトル"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />

            <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
            />

            <textarea
                placeholder="メモ"
                value={memo}
                onChange={(e) => setMemo(e.target.value)}
            />


            <button onClick={handleSubmit}>追加</button>
        </div>
    )
}