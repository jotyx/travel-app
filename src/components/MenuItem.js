import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

import style from "./MenuItem.module.scss";
import {Icon} from "./Icon";

export const MenuItem = ({icon, label, active, onClick}) => (
    <div className={style.root} onClick={onClick}>
        <Icon name={icon} size={16} />
        <span className={classnames(style.buttonText, active && style.active)} >
            {label}
        </span>
    </div>
);

MenuItem.propTypes = {
    icon: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    active: PropTypes.bool,
    onClick: PropTypes.func,
};

MenuItem.defaultProps = {
    active: false,
};
