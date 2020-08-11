/* global _ */
import { registerBlockType } from '@wordpress/blocks';
import { createHooks } from  '@wordpress/hooks';

const hooks = createHooks();
/**
 * Determines if _ is lodash or not
 */
export const isLodash = () => {
	let isLodash = false;

	// If _ is defined and the function _.forEach exists then we know underscore OR lodash are in place
	if ( 'undefined' != typeof( _ ) && 'function' == typeof( _.forEach ) ) {

		// A small sample of some of the functions that exist in lodash but not underscore
		const funcs = [ 'get', 'set', 'at', 'cloneDeep' ];

		// Simplest if assume exists to start
		isLodash  = true;

		funcs.forEach( function ( func ) {
			// If just one of the functions do not exist, then not lodash
			isLodash = ( 'function' != typeof( _[ func ] ) ) ? false : isLodash;
		} );
	}

	if ( isLodash ) {
		// We know that lodash is loaded in the _ variable
		return true;
	} else {
		// We know that lodash is NOT loaded
		return false;
	}
};

/**
 * 
 * @param {*} block 
 */
const registerBlock = ( block ) => {

	if ( ! block ) {
		return;
	}

	const { name, settings } = block;
	registerBlockType( name, settings );
}

/**
 * Register each block
 * 
 * @param {array} blocks 
 */
export const registerTenupBlocks = ( blocks ) => {

	if ( ! blocks || ! Array.isArray( blocks ) ) {
		console.error( `registerTenupBlocks expects an array. ${typeof blocks} was passed.`)
		return;
	}

	/**
	 * Apply a filter to the blocks being registered.
	 */
	const filteredBlocks = hooks.applyFilters( 'tenup_register_blocks', blocks );
	// Fire a waring if a block was removed, this may cause content to be affected.
	if ( blocks.length > filteredBlocks.length ) {
		console.warn( 'Blocks were removed from registration, this may adversly affect content.' )
	}
	filteredBlocks.forEach( registerBlock );
}

// hooks.addFilter( 'tenup_register_blocks', 'myApp', ( blocks ) => {
// 	return blocks.filter( ( { name } ) => {
// 		return 'tenup/panel' !== name;
// 	});
// } );


