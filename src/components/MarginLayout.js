import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

import style from "./MarginLayout.module.scss";

export const MarginLayout = ({children, size}) => (
    <div className={classnames(style[size])}>
        {children}
    </div>
);

MarginLayout.SIZES = Object.freeze({
    TINY: "tiny",
    SMALL: "small",
    MEDIUM: "medium",
    LARGE: "large",
});

MarginLayout.propTypes = {
    children: PropTypes.node.isRequired,
    size: PropTypes.oneOf(Object.values(MarginLayout.SIZES)),
};

MarginLayout.defaultProps = {
    size: MarginLayout.SIZES.SMALL,
};
