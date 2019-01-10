import React from 'react';
import { createBlock, serialize } from '@wordpress/blocks';
import { BlockEdit } from '@wordpress/editor';
import { RawHTML } from '@wordpress/element';
import { noop } from 'lodash';

class Wrapper extends React.Component {

    render() {
		const block = createBlock( this.props.block );
		const attributes = block.attributes || {};

		if ( this.props.edit ) {
			return <BlockEdit
				{ ...this.props }
				isSelected={true}
				clientId={block.clientId}
				name={block.name}
				attributes={attributes}
			/>
		} else {
			return <RawHTML>{ serialize( block ) }</RawHTML>;
		}
	}
}

export default Wrapper;
