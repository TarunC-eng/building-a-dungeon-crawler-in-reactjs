import React from 'react'

import './styles.css'

function getTileDisplay(type) {
  switch(type) {
    case 8:
      return 'tree'
    case 9:
      return 'rock'
    default:
      return 'path'
  }
}

function Map(props) {
  return (
    <div style={{
      position: 'absolute'
    }}>
      {
        props.tiles.map((row, y) =>
          <div key={y} className='row'>
            { row.map((tile, x) =>
                <div
                  key={x}
                  className={`tile ${getTileDisplay(tile)}`}
                />) }
          </div>
        )
      }
    </div>
  )
}

export default Map