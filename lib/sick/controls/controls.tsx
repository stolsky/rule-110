import { Show } from "solid-js"

import { RunState, TimeState } from "../state/state"
import { formatTime } from "../utilities/time"

import "./controls.css"


export default (props: {
    useLeave?: boolean,
    useSpeedUp?: boolean,
    useSlowDown?: boolean,
    useMultiplier?: boolean,
    useShowTime?: boolean
}) => {
    const [isRunning, { startSimulation, pauseSimulation }] = RunState
    const [timeState, { decreaseSpeed, increaseSpeed, isMaximumSpeed, isMinimumSpeed }] = TimeState

    return (
        <div class="Controls">
            <Show when={ !isRunning() }>
                <button onclick={ () => startSimulation() }>play</button>
            </Show>
            <Show when={ isRunning() }>
                <button onclick={ () => pauseSimulation() }>stop</button>
            </Show>
            <Show when={ props.useSlowDown || false }>
                <button onclick={ () => decreaseSpeed() } disabled={ isMinimumSpeed() }>slow down</button>
            </Show>
            <Show when={ props.useMultiplier || false }>
                <p>{timeState.speedMultiplier}x</p>
            </Show>
            <Show when={ props.useSpeedUp || false }>
                <button onclick={ () => increaseSpeed() } disabled={ isMaximumSpeed() }>speed up</button>
            </Show>
            <Show when={ props.useShowTime || true }>
                <p>{ formatTime(timeState.elapsedTime) }</p>
            </Show>
            <Show when={ props.useLeave || false }>
                <button>leave</button>
            </Show>
        </div>
    )
}