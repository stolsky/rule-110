import { Application, Graphics, Ticker } from 'pixi.js'

import { PixiTask, type TPixiRenderer } from "simulation-construction-kit"

import { Rule110, SmoothRuleX } from './rules'


// TODO what from Task can be used in a Task parent class -> MyTask extends Task, Task implements ITask
class Task extends PixiTask {

    private parent?: Application

    private sequence: number[] = []
    private rule: (ki: number[], ko: number[]) => number

    private cell_size: number = 0

    private get_inner_kernel = (sequence: number[], center: number, radius: number) => {
        const k: number[] = []
        const size = 1 + radius * 2
        for (let i = 0, index = center - radius; i < size; i = i + 1, index = index + 1) {
            k.push(sequence[index] || 0)
        }
        return k
    }

    private get_outer_kernel = (sequence: number[], center: number, inner_radius: number, outer_radius: number) => {
        const k: number[] = []
        const inner_start = center - inner_radius
        const inner_end = center + inner_radius
        const size = 1 + outer_radius * 2
        for (let i = 0, index = center - outer_radius; i < size; i = i + 1, index = index + 1) {
            if (index < inner_start || index > inner_end) {
                k.push(sequence[index] || 0)
            }
        }
        return k
    }

    private draw_sequence = () => {
        if (this.parent) {
            const graphics = new Graphics()
            for (let i = 0; i < this.sequence.length; i = i + 1) {
                const cell = this.sequence[i]
                const color = 255 * (1 - cell)
                graphics.rect(
                    this.cell_size * i,
                    this.cell_size * this.iterations_now,
                    this.cell_size,
                    this.cell_size
                ).fill(`rgb(${color},${color},${color})`)
            }
            this.parent.stage.addChild(graphics)
        }
    }

    protected render = () => {
        this.draw_sequence()
    }

    protected update = (delta_time: number) => {
        const next_sequence: number[] = []
        // TODO for now hard coded ki and ko size
        // ki = 3, ko = 7
        for (let i = 0; i < this.sequence.length; i = i + 1) {
            next_sequence[i] = this.rule(
                this.get_inner_kernel(this.sequence, i, 1), // radius 1 -> size = 3
                this.get_outer_kernel(this.sequence, i, 1, 4) // radius 3 -> size = 9
            )
        }
        this.sequence = next_sequence
    }

    constructor(
        sequence: number[],
        rule?: (ki: number[], ko: number[]) => number,
        options?: {
            iterations?: number,
            cell_size?: number
        }
    ) {
        super()
        this.sequence = sequence
        this.rule = rule || SmoothRuleX
        
        this.set_max_iterations(options?.iterations || this.sequence.length)
        this.cell_size = options?.cell_size || 10
    }

    init = async (renderer: TPixiRenderer) => {
        this.parent = renderer.get_renderer()
        this.draw_sequence()
    }

}

export default Task