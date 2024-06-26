export const reducer = (state, action) => {
  if (action.type === "ADD") {
    return [...state, action.payload];
  }
  throw new Error(`The action "${action.type}" does not exist.`);
};
