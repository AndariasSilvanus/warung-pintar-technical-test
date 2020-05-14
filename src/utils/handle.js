export const handle = (promise) => {
  return promise
    .then((res) => [res, undefined])
    .catch((err) => Promise.resolve([undefined, err]));
};
