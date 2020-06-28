import React from "react";
import PropTypes from "prop-types";

import style from "./TripRecordBox.module.scss";
import {Icon} from "./Icon";
import {Text} from "./Text";
import {MarginLayout} from "./MarginLayout";
import {VerticalSpace} from "./VerticalSpace";

export const TripRecordBox = ({value, type}) => (
    <>
        {value &&
            <div className={style.root}>
                <VerticalSpace/>
                <MarginLayout>
                    <div className={style.header}>
                        <Text value={value.countryLabel} bold/>
                        <Icon name={"flag-" + value.country} size={20}/>
                    </div>
                    <VerticalSpace/>
                    <Text value="Address" secondaryColor fontSize={Text.SIZE.SIZE_13} paragraphs />
                    <Text value={value.location} fontSize={Text.SIZE.SIZE_14}/>

                    <VerticalSpace/>
                    <Text value="Date" secondaryColor fontSize={Text.SIZE.SIZE_13} paragraphs />
                    <Text value={value.date} fontSize={Text.SIZE.SIZE_14}/>

                    <VerticalSpace/>
                    <Text value="Details" secondaryColor fontSize={Text.SIZE.SIZE_13} paragraphs />
                    <Text value={value.detail} fontSize={Text.SIZE.SIZE_14}/>

                    <VerticalSpace size={VerticalSpace.SIZES.SIZE_10}/>
                    <div className={style.button}>
                        <div className={style.buttonInnerWrapper}>
                            <Text value="View Details" secondaryColor fontSize={Text.SIZE.SIZE_13} />
                            {type === "active" ?
                                <Icon name="next" size={16} /> :
                                <Icon name="drafts" size={16} />
                            }
                        </div>
                    </div>
                </MarginLayout>
            </div>
        }
    </>
);

TripRecordBox.propTypes = {
    value: PropTypes.object.isRequired,
    type: PropTypes.string.isRequired,
};
