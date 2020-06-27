import React from "react";
import PropTypes from "prop-types";
import {Link as GatsbyLink} from "gatsby";

import style from "./Link.module.scss";

export const Link = ({name, to, local}) => (
    <>
        {local ? (
            <div>
                <GatsbyLink
                    to={to}
                    className={style.link}
                    activeClassName={style.activeLink}
                >
                    {name}
                </GatsbyLink>
            </div>
        ) : (
            <div>
                <a href={to} className={style.link}>{name}</a>
            </div>
        )}
    </>
);

Link.propTypes = {
    name: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
    local: PropTypes.bool,
};

Link.defaultProps = {
    local: true,
};
