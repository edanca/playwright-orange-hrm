import { selectors } from '@playwright/test';
import { Paths } from './paths.js';

exports.PageBase = class PageBase {
    constructor() {
        this.baseUrl = 'https://opensource-demo.orangehrmlive.com/web/index.php';

        (async () => {
            // Must be a function that evaluates to a selector engine instance.
            const createTagNameEngine = () => ({
            // Returns the first element matching given selector in the root's subtree.
            query(root, selector) {
            return root.querySelector(selector);
            },

            // Returns all elements matching given selector in the root's subtree.
            queryAll(root, selector) {
            return Array.from(root.querySelectorAll(selector));
            }
        });

            // Register the engine. Selectors will be prefixed with "tag=".
            try {
                await selectors.register('tag', createTagNameEngine);
            } catch (error) {
                // Ignore error if the engine is already registered.
                if (!error.message.includes('has been already registered')) {
                    throw error;
                }
            }
        })();
    }   
}