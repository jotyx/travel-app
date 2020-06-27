export const getAppState = (state) => state.appState;

export const getIsDarkMode = (state) => getAppState(state).get("isDarkMode");
