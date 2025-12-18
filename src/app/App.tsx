import { ScheduleList } from '../features/schedule/components/ScheduleList'
import { ScheduleForm } from '../features/schedule/components/ScheduleForm'

function App(){
    return (
     <>
      <h1>育児スケジュール</h1>
      <ScheduleForm />
      <ScheduleList />
     </>
    )
}

export default App