const iterate = (object, callback) => {
  for (const key in object) {
    if (Object.prototype.hasOwnProperty.call(object, key)) {
      const value = object[key];
      callback(key, value, object);
    }
  }
};

const obj = { a: 1, b: 2, c: 3 };
iterate(obj, (key, value, fullObject) => {
  console.log({ key, value });
});