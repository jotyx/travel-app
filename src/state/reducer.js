import {Map} from "immutable";

import {TOGGLE_DARK_MODE} from "./actions";

export const appState = (state = initialAppState, {type, payload}) => {
    switch (type) {
        case TOGGLE_DARK_MODE:
            return state.set("isDarkMode", !state.get("isDarkMode"));
        default:
            return state;
    }
};

const initialAppState = Map({
    isDarkMode: false,
});
