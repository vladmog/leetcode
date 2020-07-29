var generateMatrix = function(n) {
    // generate n x n matrix
    let matrix = Array(n)
    for (let i = 0; i < n; i++){
      matrix[i] = Array(n)
    }

    // generate xIndices to determine U/D destinations during travel
    let xInds = {}
    let evenIncrementX = 1;
    let oddIncrementX = 1;

    for (let i = 0; i <= (n-2); i++){
      if (!(i%2)){
        xInds[`${i}`] = n-evenIncrementX
        evenIncrementX ++
      } else {
        xInds[`${i}`] = oddIncrementX
        oddIncrementX ++
      }
    }
    // generate yIndices to determine L/R destinations during travel
    let yInds = {}
    let evenIncrementY = 1;
    let oddIncrementY = 0;

    for (let i = 0; i <= (n-1); i++){
      if (!(i%2)){
        yInds[`${i}`] = n-evenIncrementY
        evenIncrementY ++
      } else {
        yInds[`${i}`] = oddIncrementY
        oddIncrementY ++
      }
    }


    // Plot numbers
    let direction = "right"
    let currX = 0;
    let currY = 0;
    let xBoundaryGoal = 0;
    let yBoundaryGoal = 0;
    
    // Change currX, currY, and direction to next position
    const move = () => {
      switch(direction) {
        case "right":
          if (currY + 1 === yInds[yBoundaryGoal]){
            currY ++
            direction = "down"
            delete yInds[yBoundaryGoal]
            yBoundaryGoal ++
          } else {
            currY ++
          }
          break
        case "down":
          if (currX + 1 === xInds[xBoundaryGoal]){
            currX ++
            direction = "left"
            delete xInds[xBoundaryGoal]
            xBoundaryGoal ++
          } else {
            currX ++
          }
          break
        case "left":
          if (currY - 1 === yInds[yBoundaryGoal]){
            currY --
            direction = "up"
            delete yInds[yBoundaryGoal]
            yBoundaryGoal ++
          } else {
            currY --
          }
          break
        case "up":
          if (currX - 1 === xInds[xBoundaryGoal]){
            currX --
            direction = "right"
            delete xInds[xBoundaryGoal]
            xBoundaryGoal ++
          } else {
            currX --
          }
          break
      }
    }

    for (let i = 1; i <= n*n; i++){
      matrix[currX][currY] = i;
      move()
    }


    return matrix
};