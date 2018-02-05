import React from 'react'
import { connect } from 'react-redux'
import FightModal from './fight'

import './styles.css'

function handleKeyDown(e) {
  e.preventDefault()
  switch(e.keyCode) {
    case 40:
      console.log('down')
      return
    case 37:
      console.log('left')
      return
    case 39:
      console.log('right')
      return
    case 38:
      console.log('up')
      return
    default:
      console.log(e.keyCode)
      return
  }
}

function setupKeyCapture(props) {
  window.addEventListener('keydown', (e) => {
    if(props.visible) handleKeyDown(e)
  })
}

function renderModal(props) {
  switch(props.type) {
    case 'FIGHT':
      return <FightModal />
  }
}

function Modal(props) {
  setupKeyCapture(props)
  return (
    <div
      style={{ display: props.visible ? 'block' : 'none' }}
      className='modal'
    >
      <h1>{props.type}!</h1>
      <div>{renderModal(props)}</div>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    ...state.modal
  }
}

function mapDispatchToProps(dispatch) {
  return {
    openModal: (type) => {
      dispatch({type: 'OPEN_MODAL'})
    },
    closeModal: () => {
      dispatch({type: 'CLOSE_MODAL'})
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal)