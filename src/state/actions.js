export const DELETE_TRIP = 'DELETE_TRIP';
export const ADD_TO_FAVOURITES = 'ADD_TO_FAVOURITES';
export const REMOVE_FROM_FAVOURITES = 'REMOVE_FROM_FAVOURITES';
export const SET_ACTIVE_PAGE = 'SET_ACTIVE_PAGE';

export const deleteTripById = (id) => ({
    type: DELETE_TRIP,
    payload: id,
});

export const addToFavourites = (id) => ({
    type: ADD_TO_FAVOURITES,
    payload: id,
});

export const removeFromFavourites = (id) => ({
    type: REMOVE_FROM_FAVOURITES,
    payload: id,
});

export const setActivePage = (pageId) => ({
    type: SET_ACTIVE_PAGE,
    payload: pageId,
});
