
class CombinationProcessor {

    combination(n: number, r: number) {
        if (n === r) {
            return 1
        } else {
            r = (r < n - r) ? n - r : r
            return this.range(r + 1, n) / this.range(1, n - r)
        }
    }


    range(a: number, b: number) {
        let prd = a
        let i = a
        while (i++ < b) {
            prd *= i
        }
        return prd
    }

}

export default new CombinationProcessor()
