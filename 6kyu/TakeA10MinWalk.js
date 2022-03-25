function isValidWalk(walk) {
    const north = walk.filter(direction => direction === 'n').length
    const south = walk.filter(direction => direction === 's').length
    const west = walk.filter(direction => direction === 'w').length
    const east = walk.filter(direction => direction === 'e').length
    return walk.length === 10 && north === south && west === east
  }


  console.log(isValidWalk(['n','s','n','s','n','s','n','s','n','s']), 'should return true')
  console.log(!isValidWalk(['w','e','w','e','w','e','w','e','w','e','w','e']), 'should return false');