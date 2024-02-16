function crush(s) {
  let found = false;
  let stack = [];
  let arr = s.split("");
  let temp;
  for (let i = 0; i < arr.length; i++) {
    if (found) i = i - 1;
    if (arr[i] === arr[i + 1] && arr[i + 1] === arr[i + 2]) {
      let pastI = 2;
      found = true;
      pastI++;
      while (arr[i] === arr[pastI]) {
        pastI++;
      }
      stack.push(arr.splice(i, i + pastI));
      temp = arr.join("");
      if (stack.length - 2 >= 0 && arr[i] == stack[stack.length - 2][0]) {
        if (arr[i] === arr[i + 1]) {
          stack[stack.length - 2].push(arr.splice(i, i + 2));
          temp = arr.join("");
        } else {
          stack[stack.length - 2].push(arr.splice(i, i + 1));
          temp = arr.join("");
        }
      }
    }
  }
  if (!found) {
    return s;
  } else {
    return temp;
  }
}
