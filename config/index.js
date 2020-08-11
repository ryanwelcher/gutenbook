/**
 * 
 */
import { registerTenupBlocks } from '../utils';
import mainHeader from '../test/blocks/main-header'
import panel from '../test/blocks/panel';
//import signUpForm from '../test/blocks/signup-form';


/**
 * Add any custom categories as needed.
 */
export const categories = [ { slug: 'tenup', title: 'Ten Up' } ];

export function createCustomBlocks() {
	registerTenupBlocks( [ mainHeader, panel ] );
}