interface Array<T> {
  myForEach<U>(callback: (item: T, index: number, array: T[]) => U): void;
}

Array.prototype.myForEach = function (callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i], i, this);
  }
};

const anyArr = ["typescript", "den", "moscow", "javascript"];

const myForeachFunc = anyArr.myForEach((item, index) => {
  console.log(index);
  console.log(item.toUpperCase());
});
