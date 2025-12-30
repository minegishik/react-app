import { create } from 'zustand'
import  type { Schedule } from './types'

type ScheduleState = {
    schedules: Schedule[]
    addSchedule: (schedule: Schedule) => void
    removeSchedule: (id: string) => void
    updateSchedule: (schedule: Schedule) => void
}

export const useScheduleStore = create<ScheduleState>((set) => ({
    schedules: [],

    addSchedule: (schedule) =>
        set((state) => ({
            schedules: [...state.schedules, schedule],
        })),

        removeSchedule: (id) =>
        set((state) => ({
            schedules: state.schedules.filter((s) => s.id != id),
        })),
        
        updateSchedule: (updated) =>
            set((state) => ({
                schedules: state.schedules.map((s) =>
                    s.id === updated.id ? updated : s
            ),
            })),
}))