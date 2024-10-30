#!/usr/bin/env node

// done -- fibonacci normal
const fibsIt = (n, arr = [0]) => {
  for (let i = 0; i < n; i++) {
    arr.push(arr.length > 2 ? arr[i] + arr[i - 1] : i);
  }
  return arr;
};

// done -- fibonacci recursive
const fibs = (a, arr = [0, 1]) => {
  if (a <= 2) return arr;

  const num = arr[arr.length - 1] + arr[arr.length - 2];
  arr.push(num);

  return fibs(a - 1, arr);
};

// wtf was that.. (mergeSort)
const merge = (a, newArr = []) => {
  while (a[0].length && a[1].length)
    newArr.push(a[0][0] <= a[1][0] ? a[0].shift() : a[1].shift());
  return newArr.concat(...a);
};

const mergeSort = (arr) => {
  if (arr.length < 2) return arr;
  let array = [
    mergeSort(arr.slice(0, arr.length / 2)),
    mergeSort(arr.slice(Math.ceil(arr.length / 2))),
  ];

  return merge(array);
};

const arrOne = [3, 2, 1, 13, 8, 5, 0, 1];
const arrTwo = [105, 79, 100, 110];

console.log(mergeSort(arrOne));
