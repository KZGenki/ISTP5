import{
atan2, chain, derivative, e, evaluate, log, pi, pow, round, sqrt
} from 'mathjs'

let a = atan2(1,1) * log(10,e)
let b = derivative('0.5*x^2+0.5','x')
let c = evaluate('20 + 5 ^ 9 + pi')

console.log(`izraz a: ${a},izraz b: ${b},izraz c: ${c}`)