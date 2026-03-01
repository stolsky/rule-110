import { Controls, Overlay, Page, Panel, Visualization } from "simulation-construction-kit"

import SmoothRuleXTask from "../simulation/task_smooth_rule_x"
import {
    generate_random_continuous_sequence as continuous_sequence,
    generate_random_discrete_sequence as discrete_sequence
} from "../simulation/sequences"
import { SmoothRuleX } from "../simulation/rules"

import "./simulation.css"


export default () => {

    // TODO move all to configuration page

    const sequence_size = 300
    const iterations = 250
    const cell_size = 1
    const canvas_width = sequence_size * cell_size
    const canvas_height = iterations * cell_size
    const options = { iterations, cell_size }

    discrete_sequence(sequence_size)
    discrete_sequence(sequence_size)
    const randon_sequence1 = discrete_sequence(sequence_size)

    return (
        <Page>
            <div class="Grid">
                <Visualization
                    width={canvas_width} height={canvas_height}
                    task={ new SmoothRuleXTask(randon_sequence1, SmoothRuleX, { ...options, inner_kernel_radius: 1, outer_kernel_radius: 3 }) }
                    title="Random Sequence 1, Kernel 1 / 3"
                />
                <Visualization
                    width={canvas_width} height={canvas_height}
                    task={ new SmoothRuleXTask(randon_sequence1, SmoothRuleX, { ...options, inner_kernel_radius: 1, outer_kernel_radius: 4 }) }
                    title="Random Sequence 1, Kernel 1 / 4 "
                />
                <Visualization
                    width={canvas_width} height={canvas_height}
                    task={ new SmoothRuleXTask(randon_sequence1, SmoothRuleX, { ...options, inner_kernel_radius: 1, outer_kernel_radius: 5 }) }
                    title="Random Sequence 1, Kernel 1 / 5"
                />
                <Visualization
                    width={canvas_width} height={canvas_height}
                    task={ new SmoothRuleXTask(randon_sequence1, SmoothRuleX, { ...options, inner_kernel_radius: 1, outer_kernel_radius: 6 }) }
                    title="Random Sequence 1, Kernel 1 / 6"
                />

                <Visualization
                    width={canvas_width} height={canvas_height}
                    task={ new SmoothRuleXTask(randon_sequence1, SmoothRuleX, { ...options, inner_kernel_radius: 2, outer_kernel_radius: 4 }) }
                    title="Random Sequence 1, Kernel 2 / 4"
                />
                <Visualization
                    width={canvas_width} height={canvas_height}
                    task={ new SmoothRuleXTask(randon_sequence1, SmoothRuleX, { ...options, inner_kernel_radius: 2, outer_kernel_radius: 5 }) }
                    title="Random Sequence 1, Kernel 2 / 5"
                />
                <Visualization
                    width={canvas_width} height={canvas_height}
                    task={ new SmoothRuleXTask(randon_sequence1, SmoothRuleX, { ...options, inner_kernel_radius: 2, outer_kernel_radius: 6 }) }
                    title="Random Sequence 1, Kernel 2 / 6"
                />
                <Visualization
                    width={canvas_width} height={canvas_height}
                    task={ new SmoothRuleXTask(randon_sequence1, SmoothRuleX, { ...options, inner_kernel_radius: 2, outer_kernel_radius: 7 }) }
                    title="Random Sequence 1, Kernel 2 / 7"
                />

                <Visualization
                    width={canvas_width} height={canvas_height}
                    task={ new SmoothRuleXTask(randon_sequence1, SmoothRuleX, { ...options, inner_kernel_radius: 3, outer_kernel_radius: 5 }) }
                    title="Random Sequence 1, Kernel 3 / 5"
                />
                <Visualization
                    width={canvas_width} height={canvas_height}
                    task={ new SmoothRuleXTask(randon_sequence1, SmoothRuleX, { ...options, inner_kernel_radius: 3, outer_kernel_radius: 6 }) }
                    title="Random Sequence 1, Kernel 3 / 6"
                />
                <Visualization
                    width={canvas_width} height={canvas_height}
                    task={ new SmoothRuleXTask(randon_sequence1, SmoothRuleX, { ...options, inner_kernel_radius: 3, outer_kernel_radius: 7 }) }
                    title="Random Sequence 1, Kernel 3 / 7"
                />
                <Visualization
                    width={canvas_width} height={canvas_height}
                    task={ new SmoothRuleXTask(randon_sequence1, SmoothRuleX, { ...options, inner_kernel_radius: 3, outer_kernel_radius: 8 }) }
                    title="Random Sequence 1, Kernel 3 / 8"
                />

                <Visualization
                    width={canvas_width} height={canvas_height}
                    task={ new SmoothRuleXTask(randon_sequence1, SmoothRuleX, { ...options, inner_kernel_radius: 4, outer_kernel_radius: 6 }) }
                    title="Random Sequence 1, Kernel 4 / 6"
                />
                <Visualization
                    width={canvas_width} height={canvas_height}
                    task={ new SmoothRuleXTask(randon_sequence1, SmoothRuleX, { ...options, inner_kernel_radius: 4, outer_kernel_radius: 7 }) }
                    title="Random Sequence 1, Kernel 4 / 7"
                />
                <Visualization
                    width={canvas_width} height={canvas_height}
                    task={ new SmoothRuleXTask(randon_sequence1, SmoothRuleX, { ...options, inner_kernel_radius: 4, outer_kernel_radius: 8 }) }
                    title="Random Sequence 1, Kernel 4 / 8"
                />
                <Visualization
                    width={canvas_width} height={canvas_height}
                    task={ new SmoothRuleXTask(randon_sequence1, SmoothRuleX, { ...options, inner_kernel_radius: 4, outer_kernel_radius: 9 }) }
                    title="Random Sequence 1, Kernel 4 / 9"
                />

            </div>
            <Controls slow_down speed_up multiplier show_time />
        </Page>
    )
}