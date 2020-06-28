import {Map, Set} from "immutable";

import {
    DELETE_TRIP,
    ADD_TO_FAVOURITES,
    REMOVE_FROM_FAVOURITES,
    SET_ACTIVE_PAGE,
} from "./actions";

export const appState = (state = initialAppState, {type, payload}) => {
    switch (type) {
        case DELETE_TRIP:
            return state.set("draftTrips", state.get("draftTrips").delete(payload));
        case ADD_TO_FAVOURITES:
            return state.merge({
                "favouriteTrips": state.get("favouriteTrips").add(payload),
                "recentTrips": state.get("recentTrips").delete(payload),
            });
        case REMOVE_FROM_FAVOURITES:
            return state.merge({
                "favouriteTrips": state.get("favouriteTrips").delete(payload),
                "recentTrips": state.get("recentTrips").add(payload),
            });
        case SET_ACTIVE_PAGE:
            return state.set("activePage", payload);
        default:
            return state;
    }
};

const initialAppState = Map({
    activePage: "home",
    trips: [
        {
            id: 1234,
            countryLabel: "Germany",
            country: "germany",
            date: "Dec 17 - Dec 23",
            location: "165, L547, 37586, Dassel, Northeim, Niedersachsen",
        },
        {
            id: 379,
            countryLabel: "Czech Republic",
            country: "czechia",
            location: "107, Na Ležánkách, 530 03, Pardubice, Pardubický kraj",
        },
        {
            id: 345,
            countryLabel: "Portugal",
            country: "portugal",
            date: "Sep 21 - Sep 24",
            location: "Unnamed Road, 5000, Vila Real",
        },
        {
            id: 348,
            countryLabel: "France",
            country: "france",
            date: "Jul 14 - Sep 20",
            location: "110, Rue aux Moines, 70120, Lavigney, Haute-Saône, Bourgogne-Franche",
        },
        {
            id: 410,
            countryLabel: "Austria",
            country: "austria",
            date: "Jul 14 - Sep 20, 2019",
            location: "22, Wöllach, 9562, Wöllach, Feldkirchen, Kärnten",
            detail: "Passport required",
        },
        {
            id: 415,
            countryLabel: "United Kingdom",
            country: "uk",
            date: "Jul 14 - Sep 20, 2019",
            location: "58 The Avenue SOUTH EAST LONDON SE31 3QI",
            detail: "Passport required",
        },
    ],
    draftTrips: Set([1234]),
    favouriteTrips: Set([379]),
    recentTrips: Set([345, 348]),
    activeTrips: Set([410]),
    plannedTrips: Set([415]),
});
