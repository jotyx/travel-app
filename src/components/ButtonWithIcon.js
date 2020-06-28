import React from "react";
import PropTypes from "prop-types";

import style from "./ButtonWithIcon.module.scss";
import {Icon} from "./Icon";

export const ButtonWithIcon = ({label, onClick, icon}) => (
    <div onClick={onClick} className={style.root}>
        <span className={style.buttonText}>
            {label}
        </span>
        <div className={style.icon}>
            <Icon name={icon} size={12} />
        </div>
    </div>
);

ButtonWithIcon.propTypes = {
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    icon: PropTypes.string.isRequired,
};
