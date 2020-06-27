/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

import "./src/styles/global.scss";

// Connect redux
export {default as wrapRootElement} from './src/state/ReduxWrapper';
