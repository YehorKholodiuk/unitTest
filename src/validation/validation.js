export const validation = (value) => {
    if (value < 10 || value > 100)  {
        return false
    }
    return true
}
