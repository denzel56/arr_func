interface Array<T> {
  myMap<U>(callback: (item: T, index: number, array: T[]) => U): U[]
}

Array.prototype.myMap = function (callback) {
  const result = []
  
  for(let i = 0; i < this.length; i++) {
    result.push(callback(this[i], i, this))
  }
  
  return result
}

const anyArr = ['123', 'den', 'moscow', 'javascript']


const myMapFunc = anyArr.myMap((item, index) => {
  return item + index
})

console.log(myMapFunc)