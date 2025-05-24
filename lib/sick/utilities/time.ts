const formatTime = (msec: number) => {

    const seconds = msec / 100
    const secondsString = (seconds % 60).toFixed(0).padStart(2, "0")
    const minutesString = ((seconds / 60) % 60).toFixed(0).padStart(2, "0")
    const hoursString = (seconds / 3600).toFixed().padStart(2, "0")

    return `${hoursString}:${minutesString}:${secondsString}`
}


export {
    formatTime
}