import styled from "styled-components";

import { Form as antdForm, Button as antdButton, Select as antdSelect} from "antd";

export const FilterBox = styled.div`
    display: flex;
    flex-direction: column;
`

export const FilterTitleBox = styled.div`
    display: inline-block;
`

export const FilterTitle = styled.h3`
    font-family: "Noto Sans TC";
    font-size: 1.8vmin;
    font-weight: 500;
    color: #232323;
`

export const FilterFormBox = styled.div`
    margin-top: 2vmin;
`

export const FilterForm = styled(antdForm)``

export const FilterFormCityItem = styled(antdForm.Item)`
    width: 100%;

    font-family: "Noto Sans TC";
    font-size: 1.5vmin;

    margin-bottom: 1.5vmin;
`

export const FilterFormCity = styled(antdSelect)`
    font-family: "Noto Sans TC";
    font-size: 1.5vmin;
`

export const FilterFormCityOption = styled(antdSelect.Option)`
    font-family: "Noto Sans TC";
    font-size: 1.5vmin;
`

export const FilterFormSubmitItem = styled(antdForm.Item)`
    width: 100%;
`

export const FilterFormSubmit = styled(antdButton)`
    width: 100%;

    font-family: "Noto Sans TC";
    font-size: 1.5vmin;
    color: #ffffff;

    background-color: #006aa6;

    border-radius: 50px;
    
`