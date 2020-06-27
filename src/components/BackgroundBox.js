import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

import style from "./BackgroundBox.module.scss";

export const BackgroundBox = ({children, color, flex, fullHeight}) => (
    <div
        className={classnames(
            {
                [style.flex]: flex,
                [style.fullHeight]: fullHeight,
            },
        )}
        style={{backgroundColor: color}}
    >
        {children}
    </div>
);

BackgroundBox.propTypes = {
    children: PropTypes.node.isRequired,
    color: PropTypes.string.isRequired,
    flex: PropTypes.bool,
    fullHeight: PropTypes.bool,
};

BackgroundBox.defaultProps = {
    flex: false,
    fullHeight: false,
};
