import { registerBlockType } from '@wordpress/blocks';

/**
 * Add any custom categories as needed.
 */
export const categories = [ { slug: 'tenup', title: 'Ten Up' } ];

export function createCustomBlocks() {

	registerBlockType( 'tenup/test', {
		title   : 'Custom Block 2',
		category: 'tenup',
		icon    : 'controls-forward',
		edit    : () => <div>EDIT</div>,
		save    : () => <div>Save</div>,
	} );
	
}