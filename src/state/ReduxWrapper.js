import React from 'react';
import {Provider as ReduxProvider} from 'react-redux';
import {compose, createStore as reduxCreateStore} from "redux";
import PropTypes from "prop-types";
import rootReducer from '.';

// Enable DevTools extension support
const windowGlobal = typeof window !== 'undefined' && window;
const devtools = process.env.NODE_ENV === 'development' && windowGlobal.devToolsExtension
    // eslint-disable-next-line no-underscore-dangle
    ? window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f;

const createStore = () => reduxCreateStore(
    rootReducer,
    compose(
        devtools,
    ),
);

const Provider = ({element}) => (
    <ReduxProvider store={createStore()}>{element}</ReduxProvider>
);

Provider.propTypes = {
    element: PropTypes.node.isRequired,
};

export default Provider;
