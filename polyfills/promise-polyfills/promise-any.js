const promiseAny = arr => {
    if(!arr.length) return Promise.reject(new AggregateError([]))
    let rejectedPromises = 0;
    let errorArr = []
    return new Promise((resolve, reject) => {
        arr.forEach((el,i) => {
            Promise.resolve(el).then(res => {
                resolve(res)
            })
            .catch(err => {
                rejectedPromises++;
                errorArr[i] = err 
                if(resolvedPromises === arr.length){
                    reject(new AggregateError(errorArr))
                }
            })
        })
    })
}