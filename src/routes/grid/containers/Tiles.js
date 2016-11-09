import React from 'react';
import { connect } from 'react-redux';

import Tiles from '../../../components/Grid/Tiles';

const mapStateToProps = (state) => {
	return {
		tiles: state.tiles
	}
}

const TilesContainer = connect(mapStateToProps, null)(Tiles)

export default TilesContainer;