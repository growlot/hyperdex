import React from 'react';
import Svg from 'components/Svg';

const Oval = props => (
	<Svg {...props} width="36" height="36" viewBox="0 0 36 36">
		<circle id="Oval" cx="16" cy="16" r="16" stroke-dasharray="12 8" transform="translate(2 2)" stroke="#262d39" stroke-linecap="round" stroke-miterlimit="10" stroke-width="4" fill="none"/>
	</Svg>
);

export default Oval;
