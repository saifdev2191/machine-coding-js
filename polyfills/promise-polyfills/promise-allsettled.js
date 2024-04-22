// @params (Promise[])
// @return (Promise)

function mySettledPromise(proArr) {
  if (!iterable.length) return Promise.resolve([]);
  let resolvedValue = [];
  let promiseToResolve = iterable.length;
  return new Promise((resolve, reject) => {
    iterable.forEach(async (pro, i) => {
      try {
        // No need to wrap the the pro in promise as await by default return the promise
        // const proMod = await Promise.resolve(pro)
        const res = await pro;
        resolvedValue[i] = {
          value: res,
          status: "fulfilled",
        };
      } catch (err) {
        resolvedValue[i] = {
          reason: err,
          status: "rejected",
        };
      } finally {
        promiseToResolve--;
        if (promiseToResolve === 0) {
          resolve(resolvedValue);
        }
      }
    });
  });
}
