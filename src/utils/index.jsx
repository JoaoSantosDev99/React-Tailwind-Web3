/**  Displays the first and last 4 characters of a given address */
export const shortAdd = (address) => {
  return address.slice(0, 4) + "..." + address.slice(-4);
};

/**  Displays the first and last 10 characters of a given address */
export const longAdd = (address) => {
  return address.slice(0, 10) + "..." + address.slice(-10);
};
