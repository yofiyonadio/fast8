
class FibonacciProcessor {

    async fibonacci(n: number) {
        const arrays: any[] = []
        for (let i = 0; i <= n; i++) {
            i > 0 ? i + arrays[arrays.length - 1] <= n ? arrays.push(i + arrays[arrays.length - 1]) : null : arrays.push(i)
        }
        return arrays.join(' ')
    }

}

export default new FibonacciProcessor()
