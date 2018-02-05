import React from 'react'
import { connect } from 'react-redux'
import handleMovement from './features/movement'
import Player from './features/player'
import Map from './features/map'
import Modal from './features/modal'
import map from './maps/1'

import { MAP_HEIGHT, MAP_WIDTH } from './config/constants'

import './app.css'

function mapStateToProps(state) {
  return {
    map: state.map
  }
}

function mapDispatchToProps(dispatch) {
  return {
    persistMapData: (data) => {
      dispatch({type: "ADD_DATA", payload: data})
    }
  }
}

class App extends React.Component {
  componentDidMount() {
    this.props.persistMapData(map)
  }

  render() {
    return (
      <div
        className="map"
        style={{
          height: MAP_HEIGHT,
          width: MAP_WIDTH,
        }}
      >
        <Map {...this.props.map} />
        <Player />
        <Modal />
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(handleMovement(App))
