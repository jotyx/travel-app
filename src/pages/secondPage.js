import React from "react";

import {MainLayout, Seo, Link, Text, VerticalSpace} from "components";

const SecondPage = () => (
    <MainLayout>
        <Seo title="Page two" />
        <Text value="Hi from the second page 2" fontSize={Text.SIZE.SIZE_36} paragraphs />
        <Text value="Welcome to page 2" fontSize={Text.SIZE.SIZE_20} paragraphs />
        <VerticalSpace />
        <Link to="/" name="Go back to the homepage" />
    </MainLayout>
);

export default SecondPage;
