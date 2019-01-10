import { addDecorator, configure } from '@storybook/react';
import { withOptions } from '@storybook/addon-options';
import centered from '@storybook/addon-centered';

import * as blocks from "@wordpress/blocks";
import * as element from "@wordpress/element";
import * as data from '@wordpress/data';
import * as editor from "@wordpress/editor";
import * as components from "@wordpress/components";
import * as i18n from "@wordpress/i18n";
import { registerCoreBlocks } from '@wordpress/block-library';

// Config styles
import "./style.css";


// Setup.
window.wp = window.wp || {};
wp.element = element;
wp.blocks = blocks;
wp.data = data;
wp.editor = editor;
wp.components = components;
wp.i18n = i18n;

//
registerCoreBlocks();

addDecorator( centered );
addDecorator(
    withOptions(
        {
          /**
           * name to display in the top left corner
           * @type {String}
           */
          name: 'Gutenberg Blocks',
          /**
           * show addon panel as a vertical panel on the right
           * @type {Boolean}
           */
          addonPanelInRight: true,
        }
    )
)


function loadStories() {
  require('../stories/index.js' );
}

configure(loadStories, module);
