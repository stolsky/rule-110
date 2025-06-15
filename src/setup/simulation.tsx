import { Controls, Overlay, Page, Panel, Visualization } from "simulation-construction-kit"

import Rule110Task from "../simulation/task_rule110"
import SmoothRuleXTask from "../simulation/task_smooth_rule110"
import {
    generate_random_continuous_sequence as continuous_sequence,
    generate_random_discrete_sequence as discrete_sequence
} from "../simulation/sequences"
import { Rule110, SmoothRuleX } from "../simulation/rules"

import "./simulation.css"


export default () => {

    // TODO move all to configuration page

    const sequence_size = 300

    const sequence = new Array(sequence_size).fill(0)
    sequence[sequence_size - 1] = 1

    const options = {
        iterations: 250,
        cell_size: 2
    }

    const canvas_width = 600
    const canvas_height = 500

    // TODO control number, size, layout, etc. of canvases on configuration page

    // TODO how i have access to the start configuration (sequence, etc.)

    // TODO setup SmoothRule -> different inner & outer radius, discrete functions
    // TODO screenshot Visualization -> Header

    return (
        <Page>
            <div class="Grid">
                <Visualization
                    width={canvas_width} height={canvas_height}
                    task={ new Rule110Task(sequence, Rule110, options) }
                    title="Rule 110"
                />
                <Visualization
                    width={canvas_width} height={canvas_height}
                    task={ new Rule110Task(discrete_sequence(sequence_size), Rule110, options) }
                    title="Rule 110"
                />
                <Visualization
                    width={canvas_width} height={canvas_height}
                    task={ new SmoothRuleXTask(sequence, SmoothRuleX, options) }
                    title="Smooth Rule X"
                />
                <Visualization
                    width={canvas_width} height={canvas_height}
                    task={ new SmoothRuleXTask(discrete_sequence(sequence_size), SmoothRuleX, options) }
                    title="Smooth Rule X"
                />
            </div>
            <Controls slow_down speed_up multiplier show_time />
        </Page>
    )
}