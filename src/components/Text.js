import React, {Fragment} from "react";
import PropTypes from "prop-types";
import ReactMarkdown from "react-markdown";
import classnames from "classnames";

import style from "./Text.module.scss";

export const Text = ({value, fontSize, bold, textAlign, paragraphs, secondaryColor}) => (
    <ReactMarkdown
        className={
            classnames(
                [style[fontSize]],
                {
                    [style.bold]: bold,
                    [style.textAlignRight]: textAlign === Text.TextAlignEnum.RIGHT,
                    [style.textAlignCenter]: textAlign === Text.TextAlignEnum.CENTER,
                    [style.grayColor]: secondaryColor,
                },
            )
        }
        source={value}
        renderers={{
            root: paragraphs || textAlign ? "div" : "span",
            paragraph: paragraphs ? "p" : Fragment,
        }}
    />
);

Text.SIZE = Object.freeze({
    SIZE_13: "fontSize13",
    SIZE_14: "fontSize14",
    SIZE_16: "fontSize16",
    SIZE_18: "fontSize18",
    SIZE_20: "fontSize20",
    SIZE_24: "fontSize24",
    SIZE_28: "fontSize28",
    SIZE_36: "fontSize36",
});

Text.TextAlignEnum = Object.freeze({
    CENTER: "center",
    RIGHT: "right",
});

Text.propTypes = {
    value: PropTypes.string.isRequired,
    fontSize: PropTypes.oneOf(Object.values(Text.SIZE)),
    bold: PropTypes.bool,
    textAlign: PropTypes.oneOf(Object.values(Text.TextAlignEnum)),
    paragraphs: PropTypes.bool,
    secondaryColor: PropTypes.bool,
};

Text.defaultProps = {
    fontSize: Text.SIZE.SIZE_16,
    bold: false,
    textAlign: undefined,
    paragraphs: false,
};
