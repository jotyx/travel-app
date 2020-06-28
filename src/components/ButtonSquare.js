import React from "react";
import PropTypes from "prop-types";

import style from "./ButtonSquare.module.scss";
import {Icon} from "./Icon";

export const ButtonSquare = ({onClick, icon, color}) => (
    <div onClick={onClick} className={style.root} style={color && {background: color}}>
        <Icon name={icon} size={16} />
    </div>
);

ButtonSquare.propTypes = {
    onClick: PropTypes.func,
    icon: PropTypes.elementType.isRequired,
    color: PropTypes.string,
};

ButtonSquare.defaultProps = {
    color: "#F1F1F2",
};
