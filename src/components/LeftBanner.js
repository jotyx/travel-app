import React from "react";
import PropTypes from "prop-types";

import style from "./LeftBanner.module.scss";

export const LeftBanner = ({children}) => (
    <div className={style.root}>
        {children}
    </div>
);

LeftBanner.propTypes = {
    children: PropTypes.node.isRequired,
};
