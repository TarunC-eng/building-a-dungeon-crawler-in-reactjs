import React from 'react'
import { connect } from 'react-redux'

function mapDispatchToProps(dispatch) {
  return {
    move: (direction) => {
      dispatch({ type: 'MOVE_PLAYER', payload: direction })
    }
  }
}

function mapStateToProps(state) {
  return {
    ...state.player
  }
}

function Player(props) {
  return (
    <div
      style={{
        position: 'relative',
        top: props.position[1],
        left: props.position[0],
        backgroundColor: 'white',
        width: '10px',
        height: '10px',
      }}
    >&nbsp;</div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Player)