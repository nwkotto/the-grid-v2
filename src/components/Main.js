import React from 'react';

import Header from './Header';
import Tiles from './Grid/Tiles';
import AddTile from './Grid/AddTile';

export const Grid = () => {
    let tiles = [
        {
            text: 'Hello'
        },
        {
            text: 'Friendo'
        }
    ]
    return (
        <div className='grid'>
            <Tiles tiles={tiles} />
            <AddTile />
        </div>
    );
}

const Main = () => (
    <div className='the-grid'>
        <Header title={'nwkotto'} />
        <Grid />
    </div>
)

export default Main;