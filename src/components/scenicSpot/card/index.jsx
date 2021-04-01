import React from "react";

import { CardBox, TitleBox, Title, DescriptionBox, Description } from "./style";

const Index = (props) => {
    const { data } = props;

    return (
        <CardBox>
            <TitleBox>
                <Title>{data.Name}</Title>
            </TitleBox>
            <DescriptionBox>
                <Description>{data.Description ? data.Description : "無說明"}</Description>
            </DescriptionBox>
        </CardBox>
    )
}

export default Index;