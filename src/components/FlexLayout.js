import React from "react";
import PropTypes from "prop-types";

import style from "./FlexLayout.module.scss";

export const FlexLayout = ({children, justifyContent, flexDirection}) => (
    <div className={style.root} style={{justifyContent: justifyContent, flexDirection: flexDirection}}>
        {children}
    </div>
);

FlexLayout.propTypes = {
    children: PropTypes.node.isRequired,
    justifyContent: PropTypes.string,
    flexDirection: PropTypes.string,
};
