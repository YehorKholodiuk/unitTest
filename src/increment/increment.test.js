import {increment} from "./increment";

describe('increment', () => {

    test( 'return two when value = 1', () => {
            expect(increment(1)).toBe(2)
        })
})
