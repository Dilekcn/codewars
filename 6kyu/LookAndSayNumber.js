function lookAndSay(data, len) {
  if (typeof data !== "string") {
    return [];
  }

  const newArr = [];
  while (len > 0) {
    let seq = "";
    let count = 1;
    for (let i = 0; i < data.length; i++) {
      if (data[i] !== data[i + 1]) {
        seq += `${count}${data[i]}`;

        if (count > 1) {
          count = 1;
        }
      } else if (data[i] === data[i + 1]) {
        count++;
      }
    }
    data = seq;
    newArr.push(seq);
    len--;
  }
  return newArr;
}

// function lookAndSay(data, len) {
//   let arr = [];
//   for (let i = 0; i < len + 1; i++) {
//     arr.push(data);
//     data = data.replace(/(.)\1*/g, (x) => x.length + x[0]);
//   }
//   return arr.slice(1);
// }

console.log(lookAndSay("1", 5));
