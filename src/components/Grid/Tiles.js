import React from 'react';

const Tiles = ({ tiles }) => {
  let tileComponents = tiles.map((tile, idx) => {
    return (
      <div key={`tile-${idx}`} className="tile">
        <h2>{tile.text}</h2>
      </div>
    )
  });
  return (
    <div className='tiles'>
      {tileComponents}
    </div>
  );
}

export default Tiles;