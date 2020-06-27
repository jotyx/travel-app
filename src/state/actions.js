export const TOGGLE_DARK_MODE = 'TOGGLE_DARK_MODE';

export const toggleDarkMode = (isDarkMode) => ({
    type: TOGGLE_DARK_MODE,
    payload: isDarkMode,
});
