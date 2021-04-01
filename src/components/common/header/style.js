import styled from "styled-components";

import { Link } from "react-router-dom";

export const HeaderWrapper = styled.header`
    height: 48px;
    width: 100%;
    
    background-color: rgb(0, 106, 166);

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`

export const LogoLink = styled(Link)``

export const LogoBox = styled.div`
    width: 70px;
`

export const Logo = styled.img`
    font-size: 14px;
`