import { Application } from "pixi.js"
import { createEffect, createSignal } from "solid-js"

import { RunState, TimeState } from "../state/state"
import type { ITask } from "../task/interfaces"


const createMainLoop = (task: ITask, app: Application) => {
    // @see https://pixijs.com/8.x/guides/components/application/ticker-plugin
    task.init(app).then(() => {
        app.ticker.add((time) => {
            const [timeState, { updateElapsedTime }] = TimeState
            const adjustedDeltaTime = time.deltaTime * timeState.speedMultiplier
            updateElapsedTime(adjustedDeltaTime)
            // TODO what happened if completed, how to make endless simulations, reset() method?
            if (!task.is_completed()) {
                task.update(adjustedDeltaTime)
                task.render()
            }
        })
    })
}

export default (props: {
    width: number,
    height: number,
    task: ITask
}) => {
    const { task } = props

    const [canvas, setCanvas] = createSignal<HTMLCanvasElement>()
    const [isRunning] = RunState

    const app = new Application()
    app.init({ background: "#1099bb", width: props.width, height: props.height })
        .then(() => { setCanvas(app.canvas) })
        .catch((err) => console.error("Crashing when loading WebGL", err))

    createEffect(() => {
        // console.log("canvas effect")
        if (canvas()) {
            createMainLoop(task, app)
        }
    })

    createEffect(() => {
        // console.log("isRunning effect")
        if (isRunning()) {
            app.start()
        } else if (canvas()) {
            app.stop()
        }
    })
    
    return (<>{ canvas }</>)
}