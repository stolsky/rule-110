import type { JSX } from "solid-js/jsx-runtime"

import Header from "./header"
import Content from "./content"
import Footer from "./footer"

import "./panel.css"

export default (props: {
    title: string,
    width: number,
    height: number,
    children: JSX.Element
}) => {
    return (
        <div class="Panel">
            <Header title={props.title} />
            <Content width={props.width} height={props.height}>
                { props?.children }
            </Content>
            <Footer />
        </div>
    )
}