enum Direction {
  LEFT = 100,
  RIGHT,
  TOP,
  BOTTOM
}

function turnDirection(direction: Direction) {
  console.log(direction)
  switch (direction) {
    case Direction.TOP:
      console.log('TOP')
      break;
    case Direction.RIGHT:
        console.log('RIGHT')
        break;
    case Direction.BOTTOM:
      console.log('BOTTOM')
      break;
    case Direction.LEFT:
        console.log('LEFT')
        break;
    default:
      const foo: never = direction
      break;
  }
}

turnDirection(Direction.BOTTOM)
turnDirection(Direction.LEFT)
turnDirection(Direction.TOP)
turnDirection(Direction.RIGHT)
