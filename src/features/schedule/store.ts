import { create } from 'zustand'
import  type { Schedule } from './types'

type ScheduleState = {
    schedules: Schedule[]
    addSchedule: (schedule: Schedule) => void
}

export const useScheduleStore = create<ScheduleState>((set) => ({
    schedules: [],
    addSchedule: (schedule) =>
        set((state) => ({
            schedules: [...state.schedules, schedule],
        })),
}))