'use strict';

'use strict'
const directions = ["north", "east", "south", "west"]

function Robot() {
  // implement your solution here!
  this.bearing
  this.coordinates
}

Robot.prototype.orient = function(currentDirection) {
  this.bearing = currentDirection
  if (directions.includes(this.bearing)) {
    return this.bearing
  } else{
    throw new Error("Invalid Robot Bearing")
  }
}

Robot.prototype.turnRight = function() {
  switch (this.bearing) {
    case "north":
      this.bearing = "east"
      break;
    case "east":
      this.bearing = "south"
      break
    case "south":
      this.bearing = "west"
      break
    case "west":
      this.bearing = "north"
      break
  }
}


Robot.prototype.turnLeft = function() {
  switch (this.bearing) {
    case "north":
      this.bearing = "west"
      break
    case "west":
      this.bearing = "south"
      break
    case "south":
      this.bearing = "east"
      break
    case "east":
      this.bearing = "north"
      break
  }
}


Robot.prototype.at = function(x, y) {
  this.coordinates = [x, y]
  return this.coordinates
}

Robot.prototype.advance = function() {
  switch (this.bearing) {
    case "north":
      this.at(this.coordinates[0], this.coordinates[1]+1)
      break;
    case "south":
      this.at(this.coordinates[0], this.coordinates[1]-1)
      break;
    case "east":
      this.at(this.coordinates[0]+1, this.coordinates[1])
      break;
    case "west":
      this.at(this.coordinates[0]-1, this.coordinates[1])
    default:
    console.log('this did not work');
  }
}


Robot.prototype.instructions = function(instructionsString) {
  var instructionsSplitArray = instructionsString.split("")
  var instructionsCommandsArray = []

  for (var i = 0; i < instructionsSplitArray.length; i++) {
    switch (instructionsSplitArray[i]) {
      case "R":
        instructionsCommandsArray.push("turnRight")
        break;
      case "L":
        instructionsCommandsArray.push("turnLeft")
        break
      case "A":
        instructionsCommandsArray.push("advance")
        break
        default:
          console.log('sup fam');
    }
  }
  return instructionsCommandsArray
}


Robot.prototype.place = function(placingObject){
  this.at(placingObject.x, placingObject.y)
  this.orient(placingObject.direction)
}

Robot.prototype.evaluate = function(instructionsString){
  var instructionsSplitArray = instructionsString.split("")

  for (var i = 0; i < instructionsSplitArray.length; i++) {
    switch (instructionsSplitArray[i]) {
      case "R":
        this.turnRight()
        break;
      case "L":
        this.turnLeft()
        break
      case "A":
        this.advance()
        break
        default:
          console.log('sup fam');
    }
  }
}
