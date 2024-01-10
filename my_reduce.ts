interface Array<T> {
  myReducer<U>(
    callback: (value: U, item: T, index: number, array: T[]) => U,
    initialValue?: U
  ): U;
}

Array.prototype.myReducer = function (callback, initialValue) {
  let value = initialValue ? initialValue : this[0];
  const start = initialValue ? 0 : 1;

  for (let i = start; i < this.length; i++) {
    value = callback(value, this[i], i, this);
  }

  return value;
};

const anyArr = [1, 2, 3];

const myReduceFunc: number = anyArr.myReducer((acc, item, index) => {
  console.log(index);
  return (acc = acc + item);
});

console.log(myReduceFunc);
