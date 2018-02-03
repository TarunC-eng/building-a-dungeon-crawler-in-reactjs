import store from '../../config/store'
import { PLAYER_SIZE, MAP_HEIGHT, MAP_WIDTH } from '../../config/constants'

function respectBoundaries(oldPos, newPos) {
  return newPos[0] >= 0 &&
         newPos[0] <= MAP_WIDTH - PLAYER_SIZE &&
         newPos[1] >= 0 &&
         newPos[1] <= MAP_HEIGHT - PLAYER_SIZE
           ? newPos
           : oldPos
}

function getNewPosition(oldPos, direction) {
  switch(direction) {
    case 'left':
      return respectBoundaries(
        oldPos,
        [ oldPos[0]-PLAYER_SIZE, oldPos[1] ]
      )
    
    case 'right':
      return respectBoundaries(
        oldPos,
        [ oldPos[0]+PLAYER_SIZE, oldPos[1] ]
      )
     
    case 'up':
      return respectBoundaries(
        oldPos,
        [ oldPos[0], oldPos[1]-PLAYER_SIZE ]
      )
       
    case 'down':
      return respectBoundaries(
        oldPos,
        [ oldPos[0], oldPos[1]+PLAYER_SIZE ]
      )

    default:
      return  [ oldPos[0], oldPos[1] ]
  }
}

function handleDirectionMove(e, direction) {
  const state = store.getState('player')
  store.dispatch({
    type: "MOVE_PLAYER",
    payload: getNewPosition(state.player.position, direction)
  })
  e.preventDefault()
}

function handleKeyDown(e) {
  switch(e.keyCode) {
    case 40:
      handleDirectionMove(e, 'down')
      return
    case 37:
      handleDirectionMove(e, 'left')
      return
    case 39:
      handleDirectionMove(e, 'right')
      return
    case 38:
      handleDirectionMove(e, 'up')
      return
    default:
      console.log(e.keyCode)
  }
}

export default function handleMovement(wrappedComponent) {
  window.addEventListener('keydown', (e) => {
    handleKeyDown(e, wrappedComponent)
  })
  
  return wrappedComponent
}
