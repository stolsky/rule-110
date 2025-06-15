import { random, setup_prng, xmur3, xoshiro128ss } from "pseudo-random-number-generators-ts"


const hash = xmur3("Rule110")
setup_prng(xoshiro128ss(hash(), hash(), hash(), hash()))

const generate_random_discrete_sequence = (size: number) => {
    const sequence: number[] = [];
    for (let i = 0; i < size; i = i + 1) {
        sequence.push(random() >= 0.5 ? 1 : 0)
    }
    return sequence
}

const generate_random_continuous_sequence = (size: number) => {
    const sequence: number[] = [];
    for (let i = 0; i < size; i = i + 1) {
        sequence.push(random())
    }
    return sequence
}

export {
    generate_random_continuous_sequence,
    generate_random_discrete_sequence
}