function duplicateCount(text) {
    const arr = text.toLowerCase().split('')
    let result = []
    for (let i = 0; i < arr.length; i++) {
      if (arr.slice(i + 1).includes(arr[i])) {
        result.push(arr[i])
      }
    }
    return Array.from(new Set(result)).length
  }

  console.log(duplicateCount(""), 0);
  console.log(duplicateCount("abcde"), 0);
