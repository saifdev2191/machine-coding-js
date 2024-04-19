const fetchData = async () => {
  try {
      // https://jsonplaceholder.typicode.com/photos?_limit=8
    const respro = await fetch("https://jsonplaceholder.typicode.com/photos?_limit=100");
    const data = await respro.json();
    return data;
  } catch (e) {
    return [];
  }
};

export { fetchData };
