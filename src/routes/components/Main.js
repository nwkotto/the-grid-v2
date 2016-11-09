import React from 'react';

import Header from '../../components/Header';

const Main = ({ children }) => (
  <div className='the-grid'>
    <Header title={'nwkotto'} />
    <div className='grid-content'>
      {children}
    </div>
  </div>
)

export default Main;