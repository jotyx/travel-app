import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

import style from "./VerticalSpace.module.scss";

export const VerticalSpace = ({size}) => (
    <div className={classnames(style[size])} />
);

VerticalSpace.SIZES = Object.freeze({
    SIZE_10: "size_10",
    SIZE_20: "size_20",
    SIZE_40: "size_40",
    SIZE_60: "size_60",
});

VerticalSpace.propTypes = {
    size: PropTypes.oneOf(VerticalSpace.SIZES),
};

VerticalSpace.defaultProps = {
    size: VerticalSpace.SIZES.SIZE_20,
};
