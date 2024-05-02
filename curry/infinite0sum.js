// add(1,2..n)(5,6…n)…(n)()

const add = (...a) => {
    return (...b) => {
        // base case
        if(b.length === 0){
            return a.reduce((acc, curr) => acc + curr)
        }
        return add(...a, ...b)
    }
}

console.log(add(1)(2)(3)(4,5)())
