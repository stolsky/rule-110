import type { JSX } from "solid-js/jsx-runtime"


export default (props: { children: JSX.Element }) => {
    return (
        <div class="Page">
            { props?.children }
        </div>
    )
}