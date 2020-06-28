import React, {useState} from "react";
import PropTypes from "prop-types";

import style from "./SearchField.module.scss";
import {Icon} from "./Icon";

export const SearchField = ({placeholder, suggestions}) => {
    const [active, setActive] = useState(false);
    const [value, setValue] = useState("");

    const filteredSuggestions = suggestions.filter((suggestion) => suggestion.text.toLowerCase().includes(value.toLocaleLowerCase()));

    // Dynamically calculated margin for container of suggestions based on number of suggestions
    const dynamicMargin = filteredSuggestions.length === 1 ? 26 + 17 :  27 + filteredSuggestions.length * 17;

    return (
        <>
            <div className={style.root}>
                <input
                    type="text"
                    placeholder={placeholder}
                    onFocus={() => setActive(true)}
                    className={active ? style.activeInput: null}
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />
                <span className={style.icon} onClick={() => {setValue("");setActive(false)}}>
                    {!active ?
                        (<Icon size={16} name="search"/>) :
                        (<Icon size={12} name="cross"/>)
                    }
                </span>
            </div>

            {active &&
                <div className={style.container} style={{marginTop: dynamicMargin + "px"}}>
                    {filteredSuggestions.map((suggestion => (
                        <div className={style.suggestion} onClick={() => {setValue(suggestion.text);setActive(false)}} key={suggestion.value}>
                            <span className={style.suggestionIcon}>
                                <Icon size={16} name={"flag-" + suggestion.value} />
                            </span>
                            <span className={style.suggestionText}>
                                {suggestion.text}
                            </span>
                        </div>
                    )))}
                </div>
            }
        </>
    );
};

SearchField.propTypes = {
    placeholder: PropTypes.string.isRequired,
    suggestions: PropTypes.array.isRequired,
};
