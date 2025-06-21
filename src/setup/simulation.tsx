import { Controls, Overlay, Page, Panel, Visualization } from "simulation-construction-kit"

import RuleXTask from "../simulation/task_rule_x"
import SmoothRuleXTask from "../simulation/task_smooth_rule_x"
import {
    generate_random_continuous_sequence as continuous_sequence,
    generate_random_discrete_sequence as discrete_sequence
} from "../simulation/sequences"
import { Rule30, Rule90, Rule110, SmoothRuleX } from "../simulation/rules"

import "./simulation.css"


export default () => {

    // TODO move all to configuration page

    const sequence_size = 300

    const sequence_right1 = new Array(sequence_size).fill(0)
    sequence_right1[sequence_size - 1] = 1

    const sequence_mid1 = new Array(sequence_size).fill(0)
    sequence_mid1[sequence_size / 2] = 1

    const sequence_left1 = new Array(sequence_size).fill(0)
    sequence_left1[0] = 1

    const options = {
        iterations: 250,
        cell_size: 1
    }

    const canvas_width = sequence_size * options.cell_size
    const canvas_height = options.iterations * options.cell_size

    // TODO control number, size, layout, etc. of canvases on configuration page

    // TODO how i have access to the start configuration (sequence, etc.)

    // TODO setup SmoothRule -> different inner & outer radius, discrete functions
    // TODO screenshot Visualization -> Header

    // Rule30, Rule90, Rule110
    return (
        <Page>
            <div class="Grid">
                <Visualization
                    width={canvas_width} height={canvas_height}
                    task={ new RuleXTask(sequence_left1, Rule30, options) }
                    title="Rule 30 - left"
                />
                <Visualization
                    width={canvas_width} height={canvas_height}
                    task={ new RuleXTask(sequence_mid1, Rule30, options) }
                    title="Rule 30 - middle"
                />
                <Visualization
                    width={canvas_width} height={canvas_height}
                    task={ new RuleXTask(sequence_right1, Rule30, options) }
                    title="Rule 30 - right"
                />
                <Visualization
                    width={canvas_width} height={canvas_height}
                    task={ new RuleXTask(discrete_sequence(sequence_size), Rule30, options) }
                    title="Rule 30 - random"
                />
                <Visualization
                    width={canvas_width} height={canvas_height}
                    task={ new RuleXTask(sequence_left1, Rule90, options) }
                    title="Rule 90 - left"
                />
                <Visualization
                    width={canvas_width} height={canvas_height}
                    task={ new RuleXTask(sequence_mid1, Rule90, options) }
                    title="Rule 90 - middle"
                />
                <Visualization
                    width={canvas_width} height={canvas_height}
                    task={ new RuleXTask(sequence_right1, Rule90, options) }
                    title="Rule 90 - right"
                />
                <Visualization
                    width={canvas_width} height={canvas_height}
                    task={ new RuleXTask(discrete_sequence(sequence_size), Rule90, options) }
                    title="Rule 90 - random"
                />
                <Visualization
                    width={canvas_width} height={canvas_height}
                    task={ new RuleXTask(sequence_left1, Rule110, options) }
                    title="Rule 110 - left"
                />
                <Visualization
                    width={canvas_width} height={canvas_height}
                    task={ new RuleXTask(sequence_mid1, Rule110, options) }
                    title="Rule 110 - middle"
                />
                <Visualization
                    width={canvas_width} height={canvas_height}
                    task={ new RuleXTask(sequence_right1, Rule110, options) }
                    title="Rule 110 - right"
                />
                <Visualization
                    width={canvas_width} height={canvas_height}
                    task={ new RuleXTask(discrete_sequence(sequence_size), Rule110, options) }
                    title="Rule 110 - random"
                />
                <Visualization
                    width={canvas_width} height={canvas_height}
                    task={ new SmoothRuleXTask(sequence_left1, SmoothRuleX, options) }
                    title="Smooth Rule X - left"
                />
                <Visualization
                    width={canvas_width} height={canvas_height}
                    task={ new SmoothRuleXTask(sequence_mid1, SmoothRuleX, options) }
                    title="Smooth Rule X - middle"
                />
                <Visualization
                    width={canvas_width} height={canvas_height}
                    task={ new SmoothRuleXTask(sequence_right1, SmoothRuleX, options) }
                    title="Smooth Rule X - right"
                />
                <Visualization
                    width={canvas_width} height={canvas_height}
                    task={ new SmoothRuleXTask(discrete_sequence(sequence_size), SmoothRuleX, options) }
                    title="Smooth Rule X - random"
                />
            </div>
            <Controls slow_down speed_up multiplier show_time />
        </Page>
    )
}