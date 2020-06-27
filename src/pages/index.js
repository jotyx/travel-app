import React from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";

import {
    MainLayout,
    MarginLayout,
    VerticalSpace,
    BackgroundBox,
    Text,
    Seo,
    Button,
    Link,
} from "components";

import {toggleDarkMode} from "../state/actions";
import {getIsDarkMode} from "../state/selectors";

const IndexPage = ({isDarkMode, toggleMode}) => (
    <MainLayout>
        <Seo title="Home" />
        <BackgroundBox color={isDarkMode ? "#242424" : "#ebebeb"} fullHeight>
            <MarginLayout size={MarginLayout.SIZES.MEDIUM}>
                <VerticalSpace />
                <Text value="content" bold fontSize={Text.SIZE.SIZE_36} paragraphs color="#FFFFFF" />
                <VerticalSpace />
                <Button name="Change dark mode" onClick={toggleMode} type="secondary" />
                <VerticalSpace />
                <Link to="/secondPage/" name="Go to second page" />
            </MarginLayout>
        </BackgroundBox>
    </MainLayout>
);

IndexPage.propTypes = {
    isDarkMode: PropTypes.bool.isRequired,
    toggleMode: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
    isDarkMode: getIsDarkMode(state),
});

const mapDispatchToProps = (dispatch) => ({
    toggleMode: () => dispatch(toggleDarkMode()),
});

export default connect(mapStateToProps, mapDispatchToProps)(IndexPage);
