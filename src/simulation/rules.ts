
const Rule110 = (L: number, C: number, R: number) => (C + R + C*R + L*C*R) % 2

const generate_random_sequence = (size: number) => {
    const sequence: number[] = [];
    for (let i = 0; i < size; i = i + 1) {
        // TODO use PRNG from SiCK
      sequence.push(Math.random() >= 0.5 ? 1 : 0);
    }
    return sequence
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
//         [0, 1, 0],
//         [0, 0, 1],
//         [0, 0, 0]
//     ]
// }

export {
    Rule110,
    generate_random_sequence
}