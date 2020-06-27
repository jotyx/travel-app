import React from "react";
import PropTypes from "prop-types";

import style from "./MainLayout.module.scss";

export const MainLayout = ({children}) => (
    <div className={style.root}>
        {children}
    </div>
);

MainLayout.propTypes = {
    children: PropTypes.node.isRequired,
};
