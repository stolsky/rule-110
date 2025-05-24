import Page from "../../lib/sick/page/page"
import Visualization from "../../lib/sick/visualization/visualization"
import Controls from "../../lib/sick/controls/controls"

import RuleX from "../simulation/scene"
import { generate_random_sequence as random_sequence } from "../simulation/rules"

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

    return (
        <Page>
            <div class="Grid">
                <Visualization
                    width={canvas_width} height={canvas_height}
                    task={ new RuleX(sequence, undefined, options) }
                />
                <Visualization
                    width={canvas_width} height={canvas_height}
                    task={ new RuleX(random_sequence(sequence_size), undefined, options) }
                />
                <Visualization
                    width={canvas_width} height={canvas_height}
                    task={ new RuleX(random_sequence(sequence_size), undefined, options) }
                />
                <Visualization
                    width={canvas_width} height={canvas_height}
                    task={ new RuleX(random_sequence(sequence_size), undefined, options) }
                />
            </div>
            <Controls useSlowDown useSpeedUp useMultiplier useShowTime />
        </Page>
    )
}