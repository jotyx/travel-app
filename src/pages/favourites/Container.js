import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

import {
    MarginLayout,
    VerticalSpace,
    Text,
    Seo,
    HorizontalLine,
    TripRecord,
} from "components";

import {getDraftTrips, getFavouriteTrips, getRecentTrips} from "../../state/selectors";

const Container = ({favouriteTrips}) => (
    <>
        <Seo title="Favourites" />
        <MarginLayout size={MarginLayout.SIZES.MEDIUM}>
            <VerticalSpace size={VerticalSpace.SIZES.SIZE_40} />
            <Text value="Favourites" fontSize={Text.SIZE.SIZE_24} paragraphs color="#FFFFFF" />

            <VerticalSpace/>
            <HorizontalLine/>
            <VerticalSpace/>
            {favouriteTrips.map((trip) => (
                <div key={trip.id}>
                    <TripRecord value={trip} type="favourite"/>
                    <VerticalSpace/>
                </div>
            ))}
        </MarginLayout>
    </>
);

Container.propTypes = {
    draftTrips: PropTypes.array.isRequired,
    favouriteTrips: PropTypes.array.isRequired,
    recentTrips: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
    draftTrips: getDraftTrips(state),
    favouriteTrips: getFavouriteTrips(state),
    recentTrips: getRecentTrips(state),
});

export default connect(mapStateToProps)(Container);
