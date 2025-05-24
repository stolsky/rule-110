import { Application, Graphics, Ticker } from 'pixi.js'

import type { ITask } from '../../lib/sick/task/interfaces'
import { Rule110 } from './rules'


// TODO what from Task can be used in a Task parent class -> MyTask extends Task, Task implements ITask
class Task implements ITask {

    private parent?: Application

    private sequence: number[] = []
    private rule: (L: number, C: number, R: number) => number
    private iterations_max: number = 0
    private iterations_now: number = 0

    private cell_size: number = 0

    private draw_sequence = () => {
        if (this.parent) {
            const graphics = new Graphics()
            for (let i = 0; i < this.sequence.length; i = i + 1) {
                const cell = this.sequence[i]
                const color = cell === 1 ? 0x000000 : 0xffffff
                graphics.rect(
                    this.cell_size * i,
                    this.cell_size * this.iterations_now,
                    this.cell_size,
                    this.cell_size
                ).fill(color)
            }
            this.parent.stage.addChild(graphics)
        }
    }

    constructor(
        sequence: number[],
        rule?: (L: number, C: number, R: number) => number,
        options?: {
            iterations?: number,
            cell_size?: number
        }
    ) {
        this.sequence = sequence
        this.rule = rule || Rule110
        
        this.iterations_max = options?.iterations || this.sequence.length
        this.cell_size = options?.cell_size || 10
    }

    init = async (app: Application) => {
        this.parent = app
        this.draw_sequence()
    }

    is_completed = () => this.iterations_now > this.iterations_max

    render = () => {
        this.draw_sequence()
    }

    update = (delta_time: number) => {
        // TODO move to parent class -> super() , super.update()
        this.iterations_now = this.iterations_now + 1

        const next_sequence: number[] = []
        for (let i = 0; i < this.sequence.length; i = i + 1) {
            next_sequence[i] = this.rule(
                this.sequence[i - 1] || 0,
                this.sequence[i] || 0,
                this.sequence[i + 1] || 0
            )
        }
        this.sequence = next_sequence
    }

}

export default Task