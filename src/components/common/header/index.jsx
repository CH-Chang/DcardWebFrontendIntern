import React from "react"

import { HeaderWrapper, LogoLink, LogoBox, Logo } from "./style";

const Index = (props) => {
    return (
        <HeaderWrapper>
            <LogoBox>
                <LogoLink>
                    <Logo src="https://www.dcard.tw/_next/static/media/logo-2ef7b50901acaa284f36a0484329ec05.svg"/>
                </LogoLink>
            </LogoBox>
            
        </HeaderWrapper>
    )
}

export default Index;