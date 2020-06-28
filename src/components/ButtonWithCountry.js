import React from "react";
import PropTypes from "prop-types";

import style from "./ButtonWithCountry.module.scss";
import {Icon} from "./Icon";

export const ButtonWithCountry = ({label, onClick, icon}) => (
    <div onClick={onClick} className={style.root}>
        <div className={style.icon}>
            <Icon name={icon} size={16} />
        </div>
        <span className={style.buttonText}>
            {label}
        </span>
    </div>
);

ButtonWithCountry.propTypes = {
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    icon: PropTypes.string.isRequired,
};
