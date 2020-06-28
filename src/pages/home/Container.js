import React from "react";

import {
    MarginLayout,
    VerticalSpace,
    Text,
    Seo,
    HorizontalLine,
} from "components";

import {
    NewTrip,
    Trips,
} from "./components";

const Container = () => (
    <>
        <Seo title="Home" />
        <MarginLayout size={MarginLayout.SIZES.MEDIUM}>
            <VerticalSpace size={VerticalSpace.SIZES.SIZE_40} />
            <Text value="Home" fontSize={Text.SIZE.SIZE_24} paragraphs color="#FFFFFF" />

            <VerticalSpace />
            <HorizontalLine />
            <VerticalSpace size={VerticalSpace.SIZES.SIZE_40} />

            <NewTrip />
            <VerticalSpace size={VerticalSpace.SIZES.SIZE_40} />
            <Trips />
        </MarginLayout>
    </>
);

export default Container;
