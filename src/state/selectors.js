export const getAppState = (state) => state.appState;

export const getAllTrips = (state) => getAppState(state).get("trips");

export const getDraftTrips = (state) => {
    const allTrips = getAllTrips(state);
    const draftTripsIds = getAppState(state).get("draftTrips");
    return allTrips.filter((trip) => draftTripsIds.includes(trip.id));
};
export const getFavouriteTrips = (state) => {
    const allTrips = getAllTrips(state);
    const favouriteTripsIds = getAppState(state).get("favouriteTrips");
    return allTrips.filter((trip) => favouriteTripsIds.includes(trip.id));
};
export const getRecentTrips = (state) => {
    const allTrips = getAllTrips(state);
    const recentTripsIds = getAppState(state).get("recentTrips");
    return allTrips.filter((trip) => recentTripsIds.includes(trip.id));
};
export const getActiveTrips = (state) => {
    const allTrips = getAllTrips(state);
    const activeTripsIds = getAppState(state).get("activeTrips");
    return allTrips.filter((trip) => activeTripsIds.includes(trip.id));
};
export const getPlannedTrips = (state) => {
    const allTrips = getAllTrips(state);
    const plannedTripsIds = getAppState(state).get("plannedTrips");
    return allTrips.filter((trip) => plannedTripsIds.includes(trip.id));
};

export const getActivePage = (state) => getAppState(state).get("activePage");
