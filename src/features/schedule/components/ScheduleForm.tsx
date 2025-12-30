import { useState } from 'react'
import type { Schedule } from '../types'


type Props = {
    initialData?: Schedule
    onSubmit: (schedule: Schedule) => void
    onCancel?: () => void
}

export const ScheduleForm = ({
    initialData,
    onSubmit,
    onCancel,
}: Props) => {
    
    const [title, setTitle] = useState(initialData?.title ?? '')
    const [date, setDate] = useState(initialData?.date ?? '')
    const [memo, setMemo] = useState(initialData?.memo ?? '')

    const handleSubmit = () => {
        if (!title || !date) return

        onSubmit({
            id: initialData?.id ?? crypto.randomUUID(),
            title,
            date,
            memo,
        })

        if(!initialData){
            setTitle('')
            setDate('')
            setMemo('')
        }
    }

    return (
        <div>
            <h2>{initialData ? '予定編集' : '予定追加' }</h2>

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


            <button onClick={handleSubmit}>
                {initialData ? '更新' : '追加' }
            </button>

            {onCancel && (
                <button onClick={onCancel}>キャンセル</button>
            )}
        </div>
    )
}