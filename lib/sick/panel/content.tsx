import type { JSX } from "solid-js/jsx-runtime"

export default (props: {
    width: number,
    height: number,
    children: JSX.Element
}) => {
    return (
        <div class="Content" style={{ width: `${props.width}px`, height: `${props.height}px` }}>
            { props.children }
        </div>
    )
}