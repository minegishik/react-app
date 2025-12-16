import { useState } from 'react'
import { useScheduleStore} from '../store'

export const ScheduleList = () => { 

    const { schedules, addSchedule,removeSchedule } = useScheduleStore()
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

    // const handleAdd = () => {
    //     addSchedule({
    //         id: crypto.randomUUID(),
    //         title: 'ミルク',
    //         date: '2025-03-21',
    //         memo: '120ml',
    //     })
    // }

    return(
        <div>
            <h2>予定を追加</h2>
            <input
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

            <hr />

            {schedules.length === 0 ? (
                <p>まだ予定はありません</p>
            ) : (
                <ul>
                    {schedules.map((s) => (
                        <li key={s.id}>
                            {s.date} / {s.title}
                            {s.memo && <div>{s.memo}</div>}
                            <button onClick={() => removeSchedule(s.id)}>
                                削除
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>

    )
    // const schedules = useScheduleStore((state) => state.schedules)

    // if (schedules.length === 0) {
    //     return <p>まだ予定はありません</p>
    // }

    // return (
    //     <ul>
    //         {schedules.map((s) => (
    //             <li key={s.id}>
    //                 <strong>{s.title}</strong> ({s.date})
    //             </li>
    //         ))}
    //     </ul>
    // )
}