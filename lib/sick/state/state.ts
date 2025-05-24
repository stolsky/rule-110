import { createStore } from "solid-js/store"
import { createSignal } from "solid-js"

import type { RunStateType, TimeStateType } from "./types"


const Speed = { min: 2 ** -3, factor: 2, max: 2 ** 10 }
const [timeState, setTimeState] = createStore({
        speedMultiplier: 1,
        elapsedTime: 0 // 53000000 // TODO reset elapsedTime to 0
})
const TimeState: TimeStateType = [
    timeState,
    {
        decreaseSpeed: () => setTimeState("speedMultiplier", (current) => {
            current = current / Speed.factor
            if (current < Speed.min) {
                current = Speed.min
            }
            return current
        }),
        getElapsedTime: () => timeState.elapsedTime,
        increaseSpeed: () => setTimeState("speedMultiplier", (current) => {
            current = current * Speed.factor
            if (current > Speed.max) {
                current = Speed.max
            }
            return current
        }),
        isMaximumSpeed: () => timeState.speedMultiplier === Speed.max,
        isMinimumSpeed: () => timeState.speedMultiplier === Speed.min,
        updateElapsedTime: (deltaTime: number) => setTimeState("elapsedTime", (current) => current + deltaTime)
    }
]

const [isRunning, setIsRunning] = createSignal(false)
const RunState: RunStateType = [
    isRunning,
    {
        startSimulation: () => setIsRunning(true),
        pauseSimulation: () => setIsRunning(false)
    }
]


export {
    RunState,
    TimeState
}