export const getRandomNumber = (min, max) => {
    if (min >= max) {
        return 'Wrong range'
    } else {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }
}
