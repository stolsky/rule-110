export default (props: {
    title: string
}) => {
    
    return (
        <div class="Header">
            <p>{props.title}</p>
        </div>
    )
}