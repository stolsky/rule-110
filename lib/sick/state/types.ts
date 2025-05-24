import type { Accessor } from "solid-js"


type RunStateType = [
    isRunning: Accessor<boolean>,
    {
        startSimulation(): void
        pauseSimulation(): void
    }
]

type TimeStateType = [
    {
        speedMultiplier: number
        elapsedTime: number
    },
    {
        decreaseSpeed(): void
        getElapsedTime(): number
        increaseSpeed(): void
        isMaximumSpeed(): boolean
        isMinimumSpeed(): boolean
        updateElapsedTime(deltaTime: number): void
    }
]


export {
    type RunStateType,
    type TimeStateType
}