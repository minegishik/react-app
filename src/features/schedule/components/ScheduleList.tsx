import { useScheduleStore} from '../store'

export const ScheduleList = () => { 

    const { schedules, addSchedule } = useScheduleStore()

    const handleAdd = () => {
        addSchedule({
            id: crypto.randomUUID(),
            title: 'ミルク',
            date: '2025-03-21',
            memo: '120ml',
        })
    }

    return(
        <div>
            <button onClick={handleAdd}>予定を追加</button>

            {schedules.length === 0 ? (
                <p>まだ予定はありません</p>
            ) : (
                <ul>
                    {schedules.map((s) => (
                        <li key={s.id}>
                            {s.date} / {s.title}
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