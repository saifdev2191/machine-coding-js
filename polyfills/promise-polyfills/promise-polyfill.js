// function exec(resolve, reject){
//  // mimic async scenario
//  setTimeout(() => {
//     resolve("saif")
//  },1000)
// }

// function thenFn(res){
//     console.log("res", res)
// }

// function catchFn(err){
//     console.log(err)
// }

// // initiating a promise
// const pro = new Promise(exec)

// // consume a promise
// pro.then(thenFn)
// .catch(catchFn)

function MyPromise(exec) {
  // exec fn accept 2 arguments, resolve and reject that are in turn fn themselves

  let resolvedFn;
  let rejectedFn;
  let isSync = false;

  // resolve fn will be triggered after some time when async operation is completed with the resolved value
  function resolve(resolvedArg) {
    if (typeof resolvedFn === "function") {
      isSync = false;
      resolvedFn(resolvedArg);
    } else {
      isSync = true;
      resolvedFn = resolvedArg;
    }
  }

  function reject(rejectedArg) {
    if (typeof rejectedFn === "function") {
      isSync = false;
      rejectedFn(rejectedArg);
    } else {
      isSync = true;
      rejectedFn = rejectedArg;
    }
  }

  // then and catch are the methods defined on the contructor. These methods in turn take an argument which is a fn and that
  // fn accepts a resolved or rejected value
  // These are invoked immedialtely after the promise has been settled.
  this.then = function (thenFn) {
    if (isSync) {
      thenFn(resolvedFn);
    } else {
      resolvedFn = thenFn;
    }
    // returning this so that then is chainable
    return this;
  };

  this.catch = function (catchFn) {
    if (isSync) {
      catchFn(rejectedFn);
    } else {
      rejectedFn = catchFn;
    }
    // returning this so that then is chainable
    return this;
  };

  exec(resolve, reject);
}
MyPromise.resolve = function (arg) {
  return new MyPromise((resolve, reject) => {
    resolve(arg);
  });
};
MyPromise.reject = function (arg) {
  return new MyPromise((resolve, reject) => {
    reject(arg);
  });
};

///// *******************************************//////

const myPro = new MyPromise((resolve, reject) => {
  // setTimeout(() => {
  //     resolve("saif")
  // }, 1000)
  reject("saif");
});

myPro
  .then((res) => {
    console.log("res", res);
  })
  .catch((err) => console.log("err", err));

const myPro1 = new MyPromise((resolve, reject) => {
  setTimeout(() => {
    resolve("sara");
  }, 1000);
});

myPro1
  .then((res) => {
    console.log("res", res);
  })
  .catch((err) => console.log("err", err));

const myProm2 = MyPromise.resolve("amal");
myProm2.then((res) => {
  console.log("res", res);
});

// Case1: If promise take some time to resolve
// in case of async operation, exec fn will be invoked immediately but response will come after some time. Within this time this.then
// inside constructor fn is executed and resolvedFn will take a value of the provided thenFn. This means that resolvedFn is a function now.
// Now after 1 sec, resolve will be executed and we will get the response

// Point to note here is that in case of async operation, resolvedFn will be a function.
// Series of events: exec will be invoked and since it is async , it will be pushed to a cb queue. Meanwhile this.then method will take
// thenFn as an argument and copy this fn to a resolvedFn. So resolvedFn is a fn now from undefined
// When async operatuin is completed exec will be moved to call stack and executed. Inside this fn resolvedFn will be executed with the
// resolved value

// Case2: Promise resolves instantaneously
// if promise resolves intantaneously, then inside resolve fn resolvedFn will be undefined and won't be a fn, so our logic will break.
// To overcome this we will create one more variable called is isSync to handle the logic
// Series of events: exec will be invoked and since it is sync fn resolve will be called. Since  resolvedFn is not a fn (it is undefined)
// so else blcok will be executed and resolvedFn will get a value (not a fn) resolvedArg.
// After that this.then fn is executed. Since isSync is true we will trigger the thenFn with the resolvedFn.
