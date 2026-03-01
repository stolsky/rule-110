import { Application, Container, Graphics, Sprite, Ticker } from 'pixi.js'

import { type TPixiRenderer, PixiTask } from "simulation-construction-kit"

import { Rule110 } from './rules'


// TODO what from Task can be used in a Task parent class -> MyTask extends Task, Task implements ITask
class Task extends PixiTask {

    private parent?: Application

    private sequences: { state: number, square: Sprite }[][]
    private rule: (L: number, C: number, R: number) => number

    private cell_size: number = 0

    private initial_sequence: number[] = []


    private draw_sequence = () => {
        if (this.parent) {
            for (let i = this.iterations_now; i <= this.iterations_now; i = i + 1) {
                for (let j = 0; j < this.initial_sequence.length; j = j + 1) {
                    const cell = this.sequences[i][j]
                    cell.square.tint = cell.state ? 0x000000 : 0xffffff
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
                current_sequence[j - 1]?.state ?? 0,
                current_sequence[j    ]?.state ?? 0,
                current_sequence[j + 1]?.state ?? 0
            )
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
        super()
        this.initial_sequence = sequence
        this.rule = rule || Rule110
        
        this.set_max_iterations(options?.iterations || sequence.length)
        this.cell_size = options?.cell_size ?? 10
        this.sequences = []
    }

    init = async (renderer: TPixiRenderer) => {
        // this.set_frame_rate(10)
        this.parent = renderer.get_renderer()
        this.initialize_grid()
        this.draw_sequence()
    }

}

export default Task