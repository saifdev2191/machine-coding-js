let prevController = null;
let currentController = null;

export const suggestions = async (str) => {
  let res = [];
  const url = "https://dummyjson.com/products?limit=100";
  currentController = new AbortController();
  if (prevController) {
    console.log("Aborted")
    prevController.abort();
  }
  try {
    const resPro = await fetch(url, { signal: currentController.signal });
    res = await resPro.json();
    prevController = currentController;
    return res.products;
  } catch (e) {
    return res;
  }
};

export const debounced = (fn, wait = 300) => {
  let timer;
  return function (...args) {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, wait);
  };
};
