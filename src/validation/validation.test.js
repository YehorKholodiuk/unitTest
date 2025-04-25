import {validation} from "./validation";

describe('Validation', () => {
        test('return True when value 0', () => {
                expect(validation(0)).toBe(true)
            }
        )
        test('return False when value 101', () => {
                expect(validation(101)).toBe(false)
            }
        )

    test('return True when value 50', () => {
            expect(validation(50)).toBe(true)
        }
    )
    test('return False when value 150', () => {
            expect(validation(150)).toBe(false)
        }
    )

    }
)
