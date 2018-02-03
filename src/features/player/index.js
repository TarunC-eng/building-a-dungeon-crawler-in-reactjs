import React from 'react'
import { connect } from 'react-redux'

import './styles.css'

function mapDispatchToProps(dispatch) {
  return {
    move: (direction) => {
      dispatch({ type: 'MOVE_PLAYER', payload: direction })
    }
  }
}

function mapStateToProps(state) {
  return {
    position: state.player.position
  }
}

function Player(props) {
  return (
    <div
      className='player'
      style={{
        top: props.position[1],
        left: props.position[0],
      }}
    />
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Player)