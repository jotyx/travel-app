import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

import {
    VerticalSpace,
    Text,
    HorizontalLine,
    TripRecord,
} from "components";

import {getDraftTrips, getFavouriteTrips, getRecentTrips} from "../../../state/selectors"

export const Trips = ({draftTrips, favouriteTrips, recentTrips}) => {
    return (
        <>
            <Text value="Drafts" fontSize={Text.SIZE.SIZE_13} secondaryColor/>
            <VerticalSpace/>
            <HorizontalLine/>
            <VerticalSpace/>
            {draftTrips.map((trip) => (
                <div key={trip.id}>
                    <TripRecord value={trip} type="draft"/>
                    <VerticalSpace/>
                </div>
            ))}
            <VerticalSpace size={VerticalSpace.SIZES.SIZE_40}/>


            <Text value="Favourites" fontSize={Text.SIZE.SIZE_13} secondaryColor/>
            <VerticalSpace/>
            <HorizontalLine/>
            <VerticalSpace/>
            {favouriteTrips.map((trip) => (
                <div key={trip.id}>
                    <TripRecord value={trip} type="favourite"/>
                    <VerticalSpace/>
                </div>
            ))}
            <VerticalSpace size={VerticalSpace.SIZES.SIZE_40}/>


            <Text value="Recent" fontSize={Text.SIZE.SIZE_13} secondaryColor/>
            <VerticalSpace/>
            <HorizontalLine/>
            <VerticalSpace/>
            {recentTrips.map((trip) => (
                <div key={trip.id}>
                    <TripRecord value={trip} type="recent"/>
                    <VerticalSpace/>
                </div>
            ))}
        </>
    );
};

Trips.propTypes = {
    draftTrips: PropTypes.array.isRequired,
    favouriteTrips: PropTypes.array.isRequired,
    recentTrips: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
    draftTrips: getDraftTrips(state),
    favouriteTrips: getFavouriteTrips(state),
    recentTrips: getRecentTrips(state),
});

export default connect(mapStateToProps)(Trips);
