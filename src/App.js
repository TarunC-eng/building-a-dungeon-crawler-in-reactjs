import React from 'react'
import handleMovement from './features/movement'
import Modal from './features/modal'
import Player from './features/player'

import { MAP_HEIGHT, MAP_WIDTH } from './config/constants'

import './app.css'

function App() {
  return (
    <div
      className="map"
      style={{
        height: MAP_HEIGHT,
        width: MAP_WIDTH,
      }}
    >
      <Modal />
      <Player />
    </div>
  )
}


export default handleMovement(App)