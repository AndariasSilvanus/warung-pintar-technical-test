export const getUrlValue = (url) => {
  const urlArr = url.split("/");
  return urlArr.length > 2 ? urlArr[urlArr.length - 2] : "";
};
