export const FETCH_RESTAURANTS = () => {
  return new Promise(resolve =>
    setTimeout(() => resolve("Data fetched successfully!"), 500)
  );
};
