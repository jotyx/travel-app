import React from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";

import {
    MainLayout,
    FlexLayout,
} from "components";

import {Menu, ActiveTrips} from "./layout";
import {Home} from "./home";
import {Favourites} from "./favourites";
import {getActivePage} from "../state/selectors";

const IndexPage = ({activePage}) => (
    <FlexLayout>
        <Menu />
        <MainLayout>
            {activePage === "home" && <Home />}
            {activePage === "favourites" && <Favourites />}
        </MainLayout>
        <ActiveTrips />
    </FlexLayout>
);

IndexPage.propTypes = {
    activePage: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
    activePage: getActivePage(state),
});


export default connect(mapStateToProps)(IndexPage);
