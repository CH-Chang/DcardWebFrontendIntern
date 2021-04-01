import React from "react"

import { useEffect } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

import { FilterBox, FilterTitleBox, FilterTitle, FilterFormBox, FilterForm, FilterFormCityItem, FilterFormCity, FilterFormCityOption, FilterFormSubmitItem, FilterFormSubmit } from "./style";

const Index = (props) => {

    const { filterFormData } = props;

    const [filterForm] = FilterForm.useForm();

    useEffect(() => {
        syncFormAndAddress(filterForm, props);
    })

    return (
        <FilterBox>
            <FilterTitleBox>
                <FilterTitle>條件篩選</FilterTitle>
            </FilterTitleBox>
            <FilterFormBox>
                <FilterForm onFinish={(result) => {filter(result, props)}} form={filterForm}>
                    <FilterFormCityItem label="城市" name="city" rules={[{required: true, message:"請選擇篩選的城市" }]}>
                        <FilterFormCity placeholder="請選擇城市">
                            {
                                filterFormData.city.map((elem, idx) => {
                                    return <FilterFormCityOption value={elem.value}>{elem.label}</FilterFormCityOption>
                                })
                            }
                        </FilterFormCity>
                    </FilterFormCityItem>
                    <FilterFormSubmitItem>
                        <FilterFormSubmit htmlType="submit">查詢</FilterFormSubmit>
                    </FilterFormSubmitItem>
                </FilterForm>
            </FilterFormBox>
        </FilterBox>
    )
}

const filter = (result, props) => {
    // 判斷city是否為all
    if(result.city === "all"){
        props.history.push("/scenicSpot")
    } else {
        // 傳遞路由
        props.history.push(`/scenicSpot/${result.city}`)
    }
}

const syncFormAndAddress = (filterForm, props) => {
    // 包裝Form物件
    const filterFormValue = {
        city: props.match.params.city ? props.match.params.city : "all",
    }

    // 表單設定
    filterForm.setFieldsValue(filterFormValue);
}

const mapStateToProps = (state) => {
    return {
        filterFormData: state.getIn(['scenicSpot', 'filterFormData']).toJS(),
    }
}

export default withRouter(connect(mapStateToProps, null)(Index));