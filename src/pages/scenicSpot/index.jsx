import React from "react";

import { Component, Fragment } from "react";

import { connect } from "react-redux";

import Header from "../../components/common/header";
import Container from "../../components/common/container";
import Filter from "../../components/scenicSpot/filter";
import List from "../../components/scenicSpot/list";

import { Content, Side, LeftSide, RightSide } from "./style";

import { actionCreators as scenicSpotActionCreators } from "../../stores/scenicSpot/index";

class Index extends Component{
    constructor(props){
        super(props);

        this.listenScrollChange = this.listenScrollChange.bind(this);
        this.listenAddressChange = this.listenAddressChange.bind(this);
        this.unListenScrollChange = this.unListenScrollChange.bind(this);
        this.handleScrollChange = this.handleScrollChange.bind(this);
        this.getScenicSpot = this.getScenicSpot.bind(this);
    }

    render(){
        return (
            <Fragment>
                <Header />
                <Content>
                    <Container>
                        <Side gutter={24}>
                            <LeftSide span={6}>
                                <Filter/>
                            </LeftSide>
                            <RightSide span={18}>
                                <List />
                            </RightSide>
                        </Side>
                    </Container>
                </Content>
            </Fragment>
        )
    }

    componentDidMount(){
        this.fetchAPI();
        this.listenScrollChange()
    }

    componentDidUpdate(prevProps){
        this.listenAddressChange(prevProps);
    }

    componentWillUnmount(){
        this.unListenScrollChange();
    }

    // 監聽網址參數變化
    listenAddressChange(prevProps){
        if(this.props.match.params.city !== prevProps.match.params.city){
            this.getScenicSpot(true);
        }
    }

    // 監聽捲動狀態
    listenScrollChange(){
        window.addEventListener("scroll", this.handleScrollChange);
    }

    // 取消監聽狀態
    unListenScrollChange(){
        window.removeEventListener("scroll", this.handleScrollChange);
    }

    handleScrollChange(){
        let scrollTop = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
        let scrollHeight = (document.documentElement && document.documentElement.scrollHeight) || document.body.scrollHeight;
        let clientHeight = document.documentElement.clientHeight || window.innerHeight;

        if(Math.ceil(scrollTop+clientHeight) >= scrollHeight){
            this.getScenicSpot(false);
        }
    }

    // API呼叫
    fetchAPI(){
        // 呼叫景點API
        this.getScenicSpot(true);
        // 呼叫其他API ...
    }

    // 景點API
    getScenicSpot(reSkip){
        // 取得redux操作function
        const { getScenicSpot } = this.props;

        const skip = reSkip ? 0 : this.props.currentSkip;

        // 取得city
        const city = this.props.match.params.city;

        // 請求
        if(skip!==-1) getScenicSpot(skip, city);
        

    }
}

const mapStateToProps = (state) => {
    return {
        currentSkip: state.getIn(["scenicSpot", "currentSkip"]),
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getScenicSpot(skip, city){
            dispatch(scenicSpotActionCreators.getScenicSpot(skip, city));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Index);