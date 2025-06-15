const Rule110 = (L: number, C: number, R: number) => (C + R + C*R + L*C*R) % 2

const calculate_kernel = (k: number[]) => {
    const MAX = k.length
    let sum = 0
    for (let i = 0; i < k.length; i = i + 1) {
        sum = sum + k[i]
    }
    return sum / MAX
}
/**
 * 
 * @param ki Inner Kernel
 * @param ko Outer Kernel
 */
const SmoothRuleX = (ki: number[], ko: number[]) => {

    if (ki.length == 0 || ko.length == 0) {
        return 0
    }

    const ui = calculate_kernel(ki)
    const uo = calculate_kernel(ko)

    console.log(uo)

    if (ui > 0.6 && uo > 0.15 && uo < 0.6) {
        return 1
    }
    if (ui < 0.3 && uo > 0.25 && uo < 0.7) {
        return 1
    }
    return 0
}

// const generate_rule = (id: number) => {
//     if (id < 0 || id > 255) {
//         return []
//     }
//     const binary = [...id.toString(2).padStart(8, "0")].map((letter) => parseInt(letter))
//     const pattern = [
//         [1, 1, 1],
//         [1, 1, 0],
//         [1, 0, 1],
//         [1, 0, 0],
//         [0, 1, 1],
//         [0, 1, 0],const
//         [0, 0, 1],
//         [0, 0, 0]
//     ]
// }

export {
    Rule110,
    SmoothRuleX
}