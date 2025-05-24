import type { ITask } from "../task/interfaces"

import Panel from "../panel/panel"
import Canvas from "./canvas"


export default (props: {
    title?: string,
    width?: number,
    height?: number,
    task: ITask
}) => {
    return (
        <Panel title={props?.title || ""} width={props?.width || 800} height={props?.height || 600}>
            <Canvas task={props.task} width={props?.width || 800} height={props?.height || 600} />
        </Panel>
    )
}