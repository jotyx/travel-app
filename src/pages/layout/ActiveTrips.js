import React from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {MarginLayout, RightBanner, Text, VerticalSpace, TripRecordBox} from "components";

import {getActiveTrips, getPlannedTrips} from "../../state/selectors";

export const ActiveTrips = ({activeTrips, plannedTrips}) => (
    <RightBanner>
        <MarginLayout size={MarginLayout.SIZES.MEDIUM}>
            <VerticalSpace size={VerticalSpace.SIZES.SIZE_40}/>
            <Text value="Trips" fontSize={Text.SIZE.SIZE_24} paragraphs color="#FFFFFF"/>
            <VerticalSpace/>
            <Text value="Current Trip" fontSize={Text.SIZE.SIZE_13} secondaryColor/>
            <VerticalSpace/>
            {activeTrips.map((trip) => (
                <div key={trip.id}>
                    <TripRecordBox value={trip} type="active" />
                    <VerticalSpace/>
                </div>
            ))}
            <VerticalSpace/>
            <Text value="Planned Trips" fontSize={Text.SIZE.SIZE_13} secondaryColor/>
            <VerticalSpace/>
            {plannedTrips.map((trip) => (
                <div key={trip.id}>
                    <TripRecordBox value={trip} type="planned" />
                    <VerticalSpace/>
                </div>
            ))}
        </MarginLayout>
    </RightBanner>
);

ActiveTrips.propTypes = {
    activeTrips: PropTypes.array.isRequired,
    plannedTrips: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
    activeTrips: getActiveTrips(state),
    plannedTrips: getPlannedTrips(state),
});

export default connect(mapStateToProps)(ActiveTrips);
