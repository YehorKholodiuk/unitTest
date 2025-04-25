import {getRandomNumber} from "./getRandomNumber";

describe(
    'getRandomNumber', () => {

        test (
            'with min = 2 and max = 67 get value from 2 to 67', () => {

                const value = getRandomNumber(2, 67)
                expect(value).toBeGreaterThanOrEqual(2)
                expect(value).toBeLessThanOrEqual(67)
            })

        test (
            'with min = 0 and max = 5 get value not below 0 and greater than 5 ', () => {

                const value = getRandomNumber(0, 5)
                expect(value).not.toBeLessThan(0)
                expect(value).not.toBeGreaterThan(5)
            })


    })
