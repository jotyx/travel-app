import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

import style from "./TripRecord.module.scss";
import {Icon} from "./Icon";
import {MarginLayout} from "./MarginLayout";
import {Text} from "./Text";
import {ButtonSquare} from "./ButtonSquare";
import {deleteTripById, addToFavourites, removeFromFavourites} from "../state/actions";

const TripRecord = ({value, type, deleteTrip, addToFavourites, removeFromFavourites}) => (
    <>
        {value && <div className={style.root}>
            <div className={style.mainWrapper}>
                <div className={style.innerWrapper}>
                    <Icon name={"flag-" + value.country} size={48}/>
                    <MarginLayout>
                        <Text value={value.countryLabel} bold/>
                        {value.date && <Text value={"&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;" + value.date} secondaryColor fontSize={Text.SIZE.SIZE_14}/>}
                        <Text value={value.location} paragraphs secondaryColor fontSize={Text.SIZE.SIZE_14}/>
                    </MarginLayout>
                </div>

                <div className={style.buttonsWrapper}>
                    {type === "draft" &&
                    <>
                        <div className={style.buttonWrapper}>
                            <ButtonSquare icon="delete" onClick={deleteTrip} color="#FBEBE9"/>
                        </div>
                        <div className={style.buttonWrapper}>
                            <ButtonSquare icon="next" onClick={null}/>
                        </div>
                    </>
                    }
                    {type === "favourite" &&
                    <>
                        <div className={style.buttonWrapper}>
                            <ButtonSquare icon="star-yellow" onClick={removeFromFavourites} color="#FEFBED"/>
                        </div>
                        <div className={style.buttonWrapper}>
                            <ButtonSquare icon="repeat" onClick={null}/>
                        </div>
                    </>
                    }
                    {type === "recent" &&
                    <>
                        <div className={style.buttonWrapper}>
                            <ButtonSquare icon="star" onClick={addToFavourites}/>
                        </div>
                        <div className={style.buttonWrapper}>
                            <ButtonSquare icon="repeat" onClick={null}/>
                        </div>
                        <div className={style.buttonWrapper}>
                            <ButtonSquare icon="next" onClick={null}/>
                        </div>
                    </>
                    }
                </div>
            </div>
        </div>
        }
    </>
);

TripRecord.propTypes = {
    value: PropTypes.object.isRequired,
    type: PropTypes.string.isRequired,
    deleteTrip: PropTypes.func.isRequired,
    addToFavourites: PropTypes.func.isRequired,
    removeFromFavourites: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch, {value}) => ({
    deleteTrip: () => dispatch(deleteTripById(value.id)),
    addToFavourites: () => dispatch(addToFavourites(value.id)),
    removeFromFavourites: () => dispatch(removeFromFavourites(value.id)),
});

export default connect(undefined, mapDispatchToProps)(TripRecord);
