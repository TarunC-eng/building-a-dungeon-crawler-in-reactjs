import React from 'react'
import { connect } from 'react-redux'
import { MAP_HEIGHT, MAP_WIDTH } from '../../config/constants'

import './styles.css'

function mapStateToProps(state) {
  return {
    ...state.modal
  }
}

function mapDispatchToProps(dispatch) {
  return {
    show: dispatch({ type: 'SHOW_MODAL' }),
    hide: dispatch({ type: 'HIDE_MODAL' }),
  }
}

function Modal(props) {
  return (
    <div
      style={{
        width: MAP_WIDTH,
        height: MAP_HEIGHT,
        display: props.visible ? 'block' : 'none'
      }}
      className='modal'
    >

    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal)