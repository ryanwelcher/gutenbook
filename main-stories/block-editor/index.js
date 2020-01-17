/**
 * Import the customizations needed for the project
 */
import { categories, createCustomBlocks } from '../../config';
import { uniq } from 'lodash';

/**
 * WordPress dependencies
 */
import '@wordpress/editor'; // This shouldn't be necessary

import { useEffect, useState, useRef } from '@wordpress/element';
import {
	BlockEditorKeyboardShortcuts,
	BlockEditorProvider,
	BlockList,
	BlockInspector,
	WritingFlow,
	ObserveTyping,
} from '@wordpress/block-editor';
import {
	Popover,
	SlotFillProvider,
	DropZoneProvider,
} from '@wordpress/components';
import { registerCoreBlocks } from '@wordpress/block-library';
import '@wordpress/format-library';

// New Stuff.
import { getCategories, setCategories } from '@wordpress/blocks';

/**
 * Internal dependencies
 */
import './style.scss';

function App() {
	const [ blocks, updateBlocks ] = useState( [] );

	useEffect( () => {
	
		// Add any custom categories needed.
		const cats = uniq( getCategories().concat( categories ), 'slug' );
		setCategories( cats );

		// Register the custom blocks.
		registerCoreBlocks();

		// Create custom blocks.
		createCustomBlocks();

	}, [] );

	return (
		<div className="playground">
			<SlotFillProvider>
				<DropZoneProvider>
					<BlockEditorProvider
						value={ blocks }
						onInput={ updateBlocks }
						onChange={ updateBlocks }
					>
						<div className="playground__sidebar">
							<BlockInspector />
						</div>
						<div className="editor-styles-wrapper">
							<BlockEditorKeyboardShortcuts />
							<WritingFlow>
								<ObserveTyping>
									<BlockList />
								</ObserveTyping>
							</WritingFlow>
						</div>
						<Popover.Slot />
					</BlockEditorProvider>
				</DropZoneProvider>
			</SlotFillProvider>
		</div>
	);
}

export default {
	title: 'Gutenberg | Block Editor',
};

export const _default = () => {
	return <App />;
};
