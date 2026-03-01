import { Application, Container, Graphics, Sprite } from "pixi.js"

import { PixiTask, type TPixiRenderer } from "simulation-construction-kit"

import { SmoothRuleX } from "./rules"


// TODO what from Task can be used in a Task parent class -> MyTask extends Task, Task implements ITask
class Task extends PixiTask {

    private parent?: Application

    private sequences: { state: number, square: Sprite }[][]
    private rule: (ki: number[], ko: number[]) => number

    private cell_size: number

    private inner_kernel_radius: number

    private outer_kernel_radius: number

    private initial_sequence: number[]

    private get_inner_kernel = (sequence: { state: number }[], center: number, radius: number) => {
        const k: number[] = []
        const size = 1 + radius * 2
        for (let i = 0, index = center - radius; i < size; i = i + 1, index = index + 1) {
            k.push(sequence[index]?.state ?? 0)
        }
        return k
    }

    private get_outer_kernel = (sequence: { state: number }[], center: number, inner_radius: number, outer_radius: number) => {
        const k: number[] = []
        const inner_start = center - inner_radius
        const inner_end = center + inner_radius
        const size = 1 + outer_radius * 2
        for (let i = 0, index = center - outer_radius; i < size; i = i + 1, index = index + 1) {
            if (index < inner_start || index > inner_end) {
                k.push(sequence[index]?.state ?? 0)
            }
        }
        return k
    }

    private draw_sequence = () => {
        if (this.parent) {
            for (let i = this.iterations_now; i <= this.iterations_now; i = i + 1) {
                for (let j = 0; j < this.initial_sequence.length; j = j + 1) {
                    const cell = this.sequences[i][j]
                    const color = 255 * (1 - cell.state)
                    cell.square.tint = `rgb(${color},${color},${color})`
                }
            }
        }
    }

    private initialize_grid = () => {
        if (this.parent) {
            const graphics = new Graphics()
            graphics.rect(0, 0, this.cell_size, this.cell_size).fill(0xffffff)
            const texture = this.parent.renderer.generateTexture(graphics)
            const sprites = new Container()
            this.parent.stage.addChild(sprites)
            this.sequences = []
            for (let i = 0; i < this.iterations_max; i = i + 1) {
                this.sequences[i] = []
                for (let j = 0; j < this.initial_sequence.length; j = j + 1) {  
                    const state = (i === 0 && this.initial_sequence) ? this.initial_sequence[j] : 1
                    const square = new Sprite(texture)
                    square.x = this.cell_size * j
                    square.y = this.cell_size * i
                    this.sequences[i][j] = { state, square }
                    sprites.addChild(square)
                }
            }
        }
    }

    protected render = () => {
        this.draw_sequence()
    }

    protected update = (delta_time: number) => {
        const current_sequence = this.sequences[this.iterations_now - 1]
        for (let j = 0; j < current_sequence.length; j = j + 1) {
            this.sequences[this.iterations_now][j].state = this.rule(
                this.get_inner_kernel(current_sequence, j, this.inner_kernel_radius), // radius 1 -> size = 3
                this.get_outer_kernel(current_sequence, j, this.inner_kernel_radius, this.outer_kernel_radius) // radius 3 -> size = 9
            )
        }
    }

    constructor(
        sequence: number[],
        rule?: (ki: number[], ko: number[]) => number,
        options?: {
            iterations?: number,
            cell_size?: number,
            inner_kernel_radius?: number,
            outer_kernel_radius?: number
        }
    ) {
        super()
        this.sequences = []
        this.initial_sequence = sequence
        this.rule = rule || SmoothRuleX
        
        this.set_max_iterations(options?.iterations || sequence.length)
        this.cell_size = options?.cell_size || 10
        this.inner_kernel_radius = options?.inner_kernel_radius || 1
        this.outer_kernel_radius = options?.outer_kernel_radius || 4
    }

    init = async (renderer: TPixiRenderer) => {
        this.parent = renderer.get_renderer()
        this.initialize_grid()
        this.draw_sequence()
    }

}

export default Task