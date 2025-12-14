import { useScheduleStore} from '../store'

export const ScheduleList = () => {
    const schedules = useScheduleStore((state) => state.schedules)

    if (schedules.length === 0) {
        return <p>まだ予定はありません</p>
    }

    return (
        <ul>
            {schedules.map((s) => (
                <li key={s.id}>
                    <strong>{s.title}</strong> ({s.date})
                </li>
            ))}
        </ul>
    )
}