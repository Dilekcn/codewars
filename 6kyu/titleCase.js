
function titleCase(title, minorWords = '') {
    const minorArray = minorWords.toLowerCase().split(' ')
    const result = title
      .split(' ')
      .map((word, i) => {
        if (i === 0) return capitalizeMinor(word)
  
        return minorArray.includes(word.toLowerCase())
          ? word.toLowerCase()
          : capitalizeMinor(word)
      })
      .join(' ')
  
    return result
  }
  
  const capitalizeMinor = word =>
    `${word.slice(0, 1).toUpperCase()}${word.slice(1).toLowerCase()}`
  
  

console.log(titleCase('a clash of KINGS', 'a an the of'), 'A Clash of Kings')