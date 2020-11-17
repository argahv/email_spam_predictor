export const flatten = (obj, prefix, current) => {
  prefix = prefix || [];
  current = current || {};

  // Remember null is also an object!
  if (typeof obj === "object" && obj !== null) {
    Object.keys(obj).forEach(key => {
      flatten(obj[key], prefix.concat(key), current);
    });
  } else {
    const [first, ...rest] = prefix;
    const strGrp =
      rest.reduce((acc, curr) => {
        return `${acc}[${curr}]`;
      }, "") || "";
    current[`${first}${strGrp}`] = obj;
  }

  return current;
};
