import React from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";

import {BackgroundBox, ButtonWithIcon, LeftBanner, MarginLayout, MenuItem, VerticalSpace} from "components";

import {setActivePage} from "../../state/actions";
import {getActivePage} from "../../state/selectors";

const Menu = ({setActivePage, activePage}) => (
    <LeftBanner>
        <BackgroundBox fullHeight flex>
            <MarginLayout size={MarginLayout.SIZES.MEDIUM}>
                <VerticalSpace size={VerticalSpace.SIZES.SIZE_40}/>
                <ButtonWithIcon label="New Trip" onClick={null} icon="plus-sign" />

                <VerticalSpace size={VerticalSpace.SIZES.SIZE_20}/>
                <MenuItem
                    label="Home"
                    icon="home"
                    active={activePage === "home"}
                    onClick={() => setActivePage("home")}
                />
                <MenuItem
                    label="Favourites"
                    icon="star"
                    active={activePage === "favourites"}
                    onClick={() => setActivePage("favourites")}
                />
                <MenuItem label="Planned" icon="scheduled" />
                <MenuItem label="Drafts" icon="drafts" />
                <MenuItem label="History" icon="history" />
            </MarginLayout>
        </BackgroundBox>
    </LeftBanner>
);

Menu.propTypes = {
    setActivePage: PropTypes.func.isRequired,
    activePage: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
    activePage: getActivePage(state),
});

const mapDispatchToProps = (dispatch) => ({
    setActivePage: (pageId) => dispatch(setActivePage(pageId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
