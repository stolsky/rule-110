type WorkerMessageInnerKernel = {
    sequence: number[]
    center: number
    radius: number
}

type WorkerMessageOuterKernel = {
    sequence: number[]
    center: number
    inner_radius: number
    outer_radius: number
}

export type {
    WorkerMessageInnerKernel,
    WorkerMessageOuterKernel
}

