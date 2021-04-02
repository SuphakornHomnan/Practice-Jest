import fetch from "node-fetch";
export const fetchData =async callback => {
  try {
    await fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then(() => callback('peanut butter'))
  } catch (error) {
    throw error;
  }
};

export const fetchDataWithnotCallback = async () => {
  try {
    await fetch("https://jsonplaceholder.typicode.com/posts/1")
    return 'peanut butter'
  } catch (error) {
    throw error
  }
}
