const add = (a) => {
  return (b) => a + b;
};

console.log(add(2)(3));

const arr3 = (arr) => {
  arr.forEach((element, i) => {
    arr[i] = add(element)(3);
  });
  return arr;
};

arr3([1, 2, 3, 4, 5]); // [4,5,6,7,8]