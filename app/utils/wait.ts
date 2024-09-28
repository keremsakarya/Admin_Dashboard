export const wait = async (ms: number = 2000) =>
    new Promise((resolve) => setTimeout(resolve, ms))