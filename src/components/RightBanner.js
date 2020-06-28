import React from "react";
import PropTypes from "prop-types";

import style from "./RightBanner.module.scss";

export const RightBanner = ({children}) => (
    <div className={style.root}>
        {children}
    </div>
);

RightBanner.propTypes = {
    children: PropTypes.node.isRequired,
};
