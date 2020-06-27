import React from "react";
import PropTypes from "prop-types";
import {Button as BootstrapButton} from 'react-bootstrap';

import style from "./Button.module.scss";

export const Button = ({name, onClick, disabled, type}) => (
    <BootstrapButton
        onClick={onClick}
        variant={type}
        disabled={disabled}
    >
        {name}
    </BootstrapButton>
);

Button.propTypes = {
    name: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    disabled: PropTypes.bool,
    type: PropTypes.string,
};

Button.defaultProps = {
    disabled: false,
    /** bootstrap variant */
    type: "primary",
};
