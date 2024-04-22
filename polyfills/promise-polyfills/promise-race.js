// @param (Promise[])
// @return Promise
const myrace = (arr) => {
  return new Promise(function (resolve, reject) {
    arr.forEach((pro) => {
      Promise.resolve(pro)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => reject(err));
    });
  });
};

const res = myrace([]);
res.then((res) => console.log(res))
.catch((err) => console.log(err));
