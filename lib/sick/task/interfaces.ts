import type { Application } from "pixi.js";


interface ITask {

    init: (application: Application) => Promise<void>

    is_completed: () => boolean

    render: () => void

    update: (delta_time: number) => void

}

export type {
    ITask
}