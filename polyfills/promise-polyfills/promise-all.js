// @param (Promises[])
// @return Promise which resolves to array of promise

function myPromiseAll(proArr) {
  if (!proArr.length) return Promise.resolve([]);
  const result = Array(proArr.length);
  let remainingpromiseToResolve = proArr.length;
  return new Promise((resolve, reject) => {
    proArr.forEach((pro, i) => {
      Promise.resolve(pro)
        .then((res) => {
          result[i] = res;
          remainingpromiseToResolve--;
          if (remainingpromiseToResolve === 0) {
            resolve(result);
          }
          
        })
        .catch((err) => reject(err));
    });
  });
}

const p0 = Promise.resolve(2);
const p1 = new Promise((resolve) => {
  setTimeout(() => {
    resolve(3);
  }, 10);
});

const res = myPromiseAll([p0, p1])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => console.log(err));
