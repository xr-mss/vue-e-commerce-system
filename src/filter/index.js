function priceFormat(price) {
  if (isNaN(price)) {
    return null;
  }
  let f = parseFloat(price);
  f = Math.round(f * 100) / 100;
  let s = f.toString();
  let rs = s.indexOf(".");
  if (rs < 0) {
    rs = s.length;
    s += ".";
  }
  while (s.length < rs + 3) {
    s += "0";
  }
  return s;
}
export default {
  priceFormat,
};
